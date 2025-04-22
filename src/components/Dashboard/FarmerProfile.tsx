
import { useState } from "react";
import { useItems, Item } from "@/contexts/ItemContext";
import { Trash2, Upload, Image } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function FarmerProfile() {
  const { items, addItem, deleteItem } = useItems();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newItem, setNewItem] = useState<{
    name: string;
    price: string;
    image: string;
  }>({
    name: "",
    price: "",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addItem({
      name: newItem.name,
      price: parseFloat(newItem.price),
      image: newItem.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop",
    });
    
    setNewItem({
      name: "",
      price: "",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop",
    });
    
    setIsFormOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-custom-green">My Profile</h1>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button className="bg-custom-green hover:bg-custom-green/90 text-white">
              <Upload className="mr-2 h-4 w-4" />
              Add New Item
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>Upload New Item</DialogTitle>
                <DialogDescription>
                  Fill in the details of your new product for sale.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="item-image">Item Image</Label>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center border border-gray-200">
                      {newItem.image ? (
                        <img
                          src={newItem.image}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : (
                        <Image className="h-8 w-8 text-gray-400" />
                      )}
                    </div>
                    <Input
                      id="item-image"
                      placeholder="Image URL"
                      type="text"
                      value={newItem.image}
                      onChange={(e) =>
                        setNewItem((prev) => ({ ...prev, image: e.target.value }))
                      }
                      className="flex-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="item-name">Item Name</Label>
                  <Input
                    id="item-name"
                    placeholder="e.g., Organic Tomatoes"
                    required
                    value={newItem.name}
                    onChange={(e) =>
                      setNewItem((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="item-price">Item Price</Label>
                  <Input
                    id="item-price"
                    placeholder="e.g., 2.99"
                    type="number"
                    step="0.01"
                    min="0"
                    required
                    value={newItem.price}
                    onChange={(e) =>
                      setNewItem((prev) => ({ ...prev, price: e.target.value }))
                    }
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-custom-green hover:bg-custom-green/90">
                  Submit
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">My Item List</h2>
        
        {items.length === 0 ? (
          <Card className="border-dashed border-2 p-6 text-center">
            <p className="text-gray-500">You haven't added any items yet.</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} onDelete={deleteItem} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ItemCard({ item, onDelete }: { item: Item; onDelete: (id: string) => void }) {
  return (
    <Card>
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>${item.price.toFixed(2)}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          variant="outline"
          size="sm"
          className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
          onClick={() => onDelete(item.id)}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
