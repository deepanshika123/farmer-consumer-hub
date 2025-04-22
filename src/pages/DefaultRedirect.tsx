
import { Navigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";

export default function DefaultRedirect() {
  const { userType } = useUser();
  return (
    <Navigate 
      to={userType === "farmer" ? "/dashboard/profile" : "/dashboard/consumer-profile"} 
      replace
    />
  );
}
