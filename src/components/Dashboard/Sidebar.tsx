
import { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  Menu, 
  User, 
  CloudSun, 
  ChartBar, 
  X, 
  ShoppingBag,
  Plus,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active: boolean;
  onClick: () => void;
}

const SidebarItem = ({ icon, label, to, active, onClick }: SidebarItemProps) => (
  <Link 
    to={to} 
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
      active 
        ? "bg-custom-yellow text-custom-green font-medium" 
        : "hover:bg-white/10"
    )}
    onClick={onClick}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </Link>
);

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { userType, setUserType } = useUser();
  const navigate = useNavigate();

  // Use pathname and search to determine active path, so Add New Item in sidebar also works
  const activePath = location.pathname + location.search;

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleItemClick = (path: string) => {
    navigate(path);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('userType');
    setUserType(null);
    navigate("/");
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden bg-custom-green text-white hover:bg-custom-green/90"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-custom-green text-white transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "md:translate-x-0"
      )}>
        <div className="flex flex-col h-full">
          {/* Close button (mobile only) */}
          <div className="md:hidden p-4 flex justify-end">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleSidebar}
              className="text-white hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Header */}
          <div className="p-6 pb-2">
            <h2 className="text-2xl font-bold">
              {userType === "farmer" ? "Farmer" : "Consumer"} Dashboard
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-3 py-4 overflow-y-auto">
            {userType === "farmer" ? (
              <nav className="space-y-1">
                <SidebarItem 
                  icon={<User className="h-5 w-5" />} 
                  label="My Profile" 
                  to="/dashboard/profile"
                  active={activePath.startsWith("/dashboard/profile") && !activePath.includes("addItem=1")}
                  onClick={() => handleItemClick("/dashboard/profile")}
                />
                <SidebarItem
                  icon={<Plus className="h-5 w-5" />}
                  label="Add New Item"
                  to="/dashboard/profile?addItem=1"
                  active={activePath === "/dashboard/profile?addItem=1"}
                  onClick={() => handleItemClick("/dashboard/profile?addItem=1")}
                />
                <SidebarItem 
                  icon={<CloudSun className="h-5 w-5" />} 
                  label="Weather Analysis" 
                  to="/dashboard/weather" 
                  active={activePath.startsWith("/dashboard/weather")}
                  onClick={() => handleItemClick("/dashboard/weather")}
                />
                <SidebarItem 
                  icon={<ChartBar className="h-5 w-5" />} 
                  label="Market Price Analysis" 
                  to="/dashboard/market" 
                  active={activePath.startsWith("/dashboard/market")}
                  onClick={() => handleItemClick("/dashboard/market")}
                />
              </nav>
            ) : (
              <nav className="space-y-1">
                <SidebarItem 
                  icon={<User className="h-5 w-5" />} 
                  label="My Profile" 
                  to="/dashboard/consumer-profile" 
                  active={activePath.startsWith('/dashboard/consumer-profile')}
                  onClick={() => handleItemClick('/dashboard/consumer-profile')}
                />
                <SidebarItem 
                  icon={<ShoppingBag className="h-5 w-5" />} 
                  label="Marketplace" 
                  to="/dashboard/marketplace" 
                  active={activePath.startsWith('/dashboard/marketplace')}
                  onClick={() => handleItemClick('/dashboard/marketplace')}
                />
              </nav>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <Button 
              variant="outline" 
              className="w-full bg-transparent border-white text-white hover:bg-white hover:text-custom-green"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Log out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
