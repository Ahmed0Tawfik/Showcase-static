import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-screen-xl">
      <Link href="/" className="flex items-center text-sm mb-6 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Secure Password Manager</h1>
            <p className="text-muted-foreground">Your passwords, secured with one master key</p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="grid grid-cols-2 w-full">
              <Button variant="ghost" className="rounded-none border-b-2 border-primary font-medium">
                Login
              </Button>
              <Link href="/auth/register" className="w-full">
                <Button variant="ghost" className="w-full rounded-none border-b-2 border-muted font-medium">
                  Register
                </Button>
              </Link>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Enter your email and master password to access your vault</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Master Password</Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard" className="w-full">
                <Button className="w-full bg-black hover:bg-gray-800">Login</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-xl font-bold mb-4">Login Flow Explanation</h2>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Login%20User%20Flow-Ou3i87U5zpKtH2NJrOTyzihrfWb8B9.png"
              alt="Login User Flow"
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Process</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>User enters email and master password</li>
                <li>Client validates input format</li>
                <li>Request is sent to backend with credentials</li>
                <li>Backend retrieves user from database</li>
                <li>Master password is verified against stored hash</li>
                <li>Backend derives KEK from master password</li>
                <li>JWT token is generated with encrypted KEK</li>
                <li>Token is stored in local storage</li>
                <li>User is redirected to dashboard</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Security Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Master password is never stored directly</li>
                <li>Password is hashed using bcrypt with salt</li>
                <li>KEK is derived using PBKDF2 with 100,000 iterations</li>
                <li>JWT contains encrypted key for password decryption</li>
                <li>All API requests require valid JWT token</li>
                <li>HTTPS ensures secure transmission of credentials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

