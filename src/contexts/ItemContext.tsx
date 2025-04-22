
import React, { createContext, useContext, useState } from "react";

export interface Item {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ItemContextType {
  items: Item[];
  addItem: (item: Omit<Item, "id">) => void;
  deleteItem: (id: string) => void;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export function ItemProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([
    {
      id: "1",
      name: "Organic Tomatoes",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=500&auto=format&fit=crop"
    },
    {
      id: "2",
      name: "Fresh Apples",
      price: 1.49,
      image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500&auto=format&fit=crop"
    }
  ]);

  const addItem = (newItem: Omit<Item, "id">) => {
    const item = {
      ...newItem,
      id: Date.now().toString(),
    };
    setItems((prev) => [...prev, item]);
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ItemContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </ItemContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error("useItems must be used within an ItemProvider");
  }
  return context;
}
