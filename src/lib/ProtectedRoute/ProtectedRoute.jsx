// components/ProtectedRoute.js
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebase/config";  // Ensure you import your Firebase auth setup

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return isAuthenticated ? children : null;  
};

export default ProtectedRoute;
