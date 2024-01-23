// components/AppRouter.js
import { useEffect } from "react";
import { useRouter } from "next/router";

export const AppRouter = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Your custom routing logic here
    const handleRouteChange = (url) => {
      // You can log or perform actions on route change
      console.log("Route is changing to:", url);
    };

    // Subscribe to the router events
    router.events.on("routeChangeStart", handleRouteChange);

    // Clean up the subscription when the component unmounts
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return <>{children}</>;
};
