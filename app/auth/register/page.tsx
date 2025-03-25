import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

export default function RegisterPage() {
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
              <Link href="/auth/login" className="w-full">
                <Button variant="ghost" className="w-full rounded-none border-b-2 border-muted font-medium">
                  Login
                </Button>
              </Link>
              <Button variant="ghost" className="rounded-none border-b-2 border-primary font-medium">
                Register
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>Create a master password to secure all your passwords</CardDescription>
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
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Master Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/auth/login" className="w-full">
                <Button className="w-full bg-black hover:bg-gray-800">Create account</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-xl font-bold mb-4">Registration Flow Explanation</h2>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Register%20User%20Flow-2RcKtBu2AnAssUVPKKtxLdLw6rKv9F.png"
              alt="Register User Flow"
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Process</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>User enters email and creates master password</li>
                <li>Client validates input format and password strength</li>
                <li>Request is sent to backend with credentials</li>
                <li>Master password is hashed using bcrypt with salt</li>
                <li>Random Data Encryption Key (DEK) is generated</li>
                <li>Key Encryption Key (KEK) is derived from master password</li>
                <li>DEK is encrypted with KEK</li>
                <li>User account is created in database</li>
                <li>User is redirected to login page</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Security Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Master password is hashed with bcrypt (work factor 12+)</li>
                <li>Random salt is generated for each user</li>
                <li>32-byte random DEK is generated using secure RNG</li>
                <li>KEK is derived using PBKDF2 with 100,000 iterations</li>
                <li>DEK is encrypted with AES-256-CBC</li>
                <li>Only encrypted data is stored in database</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

