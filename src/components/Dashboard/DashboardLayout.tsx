
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { UserProvider } from "@/contexts/UserContext";
import { ItemProvider } from "@/contexts/ItemContext";

export default function DashboardLayout() {
  return (
    <UserProvider>
      <ItemProvider>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 md:ml-64 bg-gray-50">
            <Outlet />
          </div>
        </div>
      </ItemProvider>
    </UserProvider>
  );
}
