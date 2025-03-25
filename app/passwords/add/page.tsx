import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Eye, RefreshCw } from "lucide-react"

export default function AddPasswordPage() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-screen-xl">
      <Link href="/" className="flex items-center text-sm mb-6 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-2">Add New Password</h1>
        <p className="text-muted-foreground mb-6">Store a new password in your encrypted vault</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Add Password</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fill in the details below to securely store a new password
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Created:</span>
                    <span className="text-sm">2025-03-24 (Today)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Last Updated:</span>
                    <span className="text-sm">2025-03-24 (Today)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="e.g., Gmail, Twitter, Bank" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username">Username / Email</Label>
                    <Input id="username" placeholder="username or email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" placeholder="example.com" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <RefreshCw className="h-3.5 w-3.5 mr-1" />
                        Generate
                      </Button>
                    </div>
                    <div className="relative">
                      <Input id="password" type="password" />
                      <Button variant="ghost" size="sm" className="absolute right-0 top-0 h-full">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Password Length: 16</Label>
                      <span className="text-xs text-muted-foreground">8-32 characters</span>
                    </div>
                    <Slider defaultValue={[16]} max={32} min={8} step={1} />
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-black hover:bg-gray-800">Save Password</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Add Password Flow</h2>
            <div className="relative h-[400px] w-full mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Add%20Password%20Flow-dKtmdT0MKHeBnNDFfyOr68e9aeeL53.png"
                alt="Add Password Flow"
                fill
                className="object-contain"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Security Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">When you add a password:</p>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Your input is validated on the client side</li>
                  <li>The request is sent with your JWT token for authentication</li>
                  <li>The backend verifies your token and extracts your encryption key</li>
                  <li>Your password is encrypted with AES-256-CBC using your unique DEK</li>
                  <li>Only the encrypted version of your password is stored in the database</li>
                  <li>The encryption happens on the server, so your password is protected in transit and at rest</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

