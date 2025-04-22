
import React, { createContext, useContext, useState, useEffect } from "react";

type UserType = "farmer" | "consumer" | null;

interface UserContextType {
  userType: UserType;
  setUserType: (type: UserType) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  // Get user type from localStorage or default to 'farmer'
  const savedUserType = localStorage.getItem('userType') as UserType;
  const [userType, setUserType] = useState<UserType>(savedUserType || "farmer");
  
  // Save user type to localStorage when it changes
  useEffect(() => {
    if (userType) {
      localStorage.setItem('userType', userType);
    }
  }, [userType]);

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
