
import { User, MapPin, Calendar, ShoppingBag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function ConsumerProfile() {
  // Mock consumer data
  const consumer = {
    name: "Jane Smith",
    location: "Portland, OR",
    joinDate: "April 2023",
    profileImage: "",
    recentPurchases: [
      { id: "1", name: "Organic Tomatoes", date: "2023-04-15", quantity: 2, price: 5.98 },
      { id: "2", name: "Fresh Apples", date: "2023-04-10", quantity: 5, price: 7.45 },
      { id: "3", name: "Bell Peppers", date: "2023-04-05", quantity: 3, price: 3.75 },
    ],
    preferences: ["Organic", "Local", "Seasonal"],
    savedFarmers: ["Green Acres Farm", "Valley Fresh Produce", "Sunshine Organics"],
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-custom-green mb-8">My Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-center">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={consumer.profileImage} />
                  <AvatarFallback className="bg-custom-green text-white text-xl">
                    {consumer.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <h2 className="text-2xl font-bold mb-1">{consumer.name}</h2>
              <div className="flex items-center justify-center text-gray-500 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{consumer.location}</span>
              </div>
              <div className="flex items-center justify-center text-gray-500 mb-6">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Member since {consumer.joinDate}</span>
              </div>
              <Button className="w-full bg-custom-green hover:bg-custom-green/90">
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Your shopping preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {consumer.preferences.map((pref) => (
                  <span
                    key={pref}
                    className="bg-custom-yellow text-custom-green px-3 py-1 rounded-full text-sm"
                  >
                    {pref}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Saved Farmers</CardTitle>
              <CardDescription>Farmers you follow</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {consumer.savedFarmers.map((farmer) => (
                  <li key={farmer} className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-custom-green" />
                    <span>{farmer}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Purchases</CardTitle>
              <CardDescription>Your shopping history</CardDescription>
            </CardHeader>
            <CardContent>
              {consumer.recentPurchases.length === 0 ? (
                <p className="text-center text-gray-500 py-4">
                  No purchase history yet.
                </p>
              ) : (
                <div className="space-y-4">
                  {consumer.recentPurchases.map((purchase) => (
                    <div
                      key={purchase.id}
                      className="flex items-center justify-between border-b pb-4"
                    >
                      <div className="flex items-center">
                        <ShoppingBag className="h-10 w-10 text-custom-green mr-4" />
                        <div>
                          <h4 className="font-medium">{purchase.name}</h4>
                          <p className="text-sm text-gray-500">
                            {new Date(purchase.date).toLocaleDateString()} · Qty: {purchase.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${purchase.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Marketplace Suggestions</CardTitle>
              <CardDescription>Based on your preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="h-32 bg-gray-100 rounded-md mb-3"></div>
                  <h4 className="font-medium">Seasonal Fruit Bundle</h4>
                  <p className="text-sm text-gray-500">From Valley Fresh Produce</p>
                  <p className="font-semibold mt-2">$12.99</p>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="h-32 bg-gray-100 rounded-md mb-3"></div>
                  <h4 className="font-medium">Organic Vegetable Mix</h4>
                  <p className="text-sm text-gray-500">From Green Acres Farm</p>
                  <p className="font-semibold mt-2">$15.49</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" className="w-full mt-4">
                  Browse More Products
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
