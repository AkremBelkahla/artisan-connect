import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <p className="text-7xl font-bold font-display text-primary mb-4">404</p>
        <h1 className="mb-2 text-2xl font-semibold">Page not found</h1>
        <p className="mb-8 text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-cta hover:bg-cta-dark text-cta-foreground transition-colors">
            Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
