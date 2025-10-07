import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
          <Button variant="outline" className="w-full" size="lg">
            Log In
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
