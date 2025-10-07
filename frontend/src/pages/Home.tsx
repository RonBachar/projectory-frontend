import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-4xl font-bold text-foreground">
            Projectory
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Manage your projects and clients in one place.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full" size="lg">
            Go to Dashboard
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" size="lg" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button variant="outline" className="flex-1" size="lg" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
