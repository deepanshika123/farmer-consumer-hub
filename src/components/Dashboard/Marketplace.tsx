
import { useState } from "react";
import { Search, Filter, ShoppingBag } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

// Mock data for marketplace items
const marketplaceItems = [
  {
    id: "1",
    name: "Organic Tomatoes",
    farmer: "Green Acres Farm",
    price: 2.99,
    unit: "lb",
    image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=500&auto=format&fit=crop",
    organic: true,
    local: true,
    seasonal: true,
  },
  {
    id: "2",
    name: "Fresh Apples",
    farmer: "Valley Fresh Produce",
    price: 1.49,
    unit: "lb",
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500&auto=format&fit=crop",
    organic: false,
    local: true,
    seasonal: true,
  },
  {
    id: "3",
    name: "Bell Peppers",
    farmer: "Sunshine Organics",
    price: 1.25,
    unit: "each",
    image: "https://images.unsplash.com/photo-1563565375121-7d91322f0dd5?w=500&auto=format&fit=crop",
    organic: true,
    local: true,
    seasonal: false,
  },
  {
    id: "4",
    name: "Sweet Corn",
    farmer: "Riverside Farms",
    price: 0.75,
    unit: "each",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500&auto=format&fit=crop",
    organic: false,
    local: true,
    seasonal: true,
  },
  {
    id: "5",
    name: "Organic Lettuce",
    farmer: "Green Acres Farm",
    price: 1.99,
    unit: "head",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500&auto=format&fit=crop",
    organic: true,
    local: true,
    seasonal: true,
  },
  {
    id: "6",
    name: "Fresh Strawberries",
    farmer: "Berry Good Farms",
    price: 3.99,
    unit: "pint",
    image: "https://images.unsplash.com/photo-1543158181-e6f9f6712055?w=500&auto=format&fit=crop",
    organic: true,
    local: false,
    seasonal: true,
  },
];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    organic: false,
    local: false,
    seasonal: false,
  });

  const filteredItems = marketplaceItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilters = (
      (!filters.organic || item.organic) &&
      (!filters.local || item.local) &&
      (!filters.seasonal || item.seasonal)
    );
    
    return matchesSearch && matchesFilters;
  });

  const handleFilterChange = (key: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-custom-green mb-8">Marketplace</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="organic" 
                    checked={filters.organic}
                    onCheckedChange={() => handleFilterChange("organic")}
                  />
                  <Label htmlFor="organic">Organic</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="local" 
                    checked={filters.local}
                    onCheckedChange={() => handleFilterChange("local")}
                  />
                  <Label htmlFor="local">Local</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="seasonal" 
                    checked={filters.seasonal}
                    onCheckedChange={() => handleFilterChange("seasonal")}
                  />
                  <Label htmlFor="seasonal">Seasonal</Label>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Min" type="number" min={0} />
                  <Input placeholder="Max" type="number" min={0} />
                </div>
              </div>

              <Separator />

              <Button className="w-full bg-custom-green hover:bg-custom-green/90">
                Apply Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products or farmers..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No products found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    {item.organic && (
                      <span className="absolute top-2 right-2 bg-custom-green text-white text-xs px-2 py-1 rounded-full">
                        Organic
                      </span>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.farmer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold">${item.price.toFixed(2)} <span className="text-sm font-normal text-muted-foreground">/ {item.unit}</span></p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-custom-green hover:bg-custom-green/90">
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
