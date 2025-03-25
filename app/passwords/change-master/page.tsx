import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, Eye, ShieldAlert } from "lucide-react"

export default function ChangeMasterPasswordPage() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-screen-xl">
      <Link href="/" className="flex items-center text-sm mb-6 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-2">Change Master Password</h1>
        <p className="text-muted-foreground mb-6">Update the master password that protects all your passwords</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Change Master Password</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Your master password is used to encrypt all your stored passwords
                </p>
              </CardHeader>
              <CardContent>
                <Alert className="mb-6 bg-amber-50 border-amber-200">
                  <ShieldAlert className="h-4 w-4 text-amber-600" />
                  <AlertTitle className="text-amber-800">Important security information</AlertTitle>
                  <AlertDescription className="text-amber-700">
                    Changing your master password will re-encrypt all your stored passwords. Make sure to remember your
                    new password as it cannot be recovered.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Master Password</Label>
                    <div className="relative">
                      <Input id="currentPassword" type="password" />
                      <Button variant="ghost" size="sm" className="absolute right-0 top-0 h-full">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Master Password</Label>
                    <div className="relative">
                      <Input id="newPassword" type="password" />
                      <Button variant="ghost" size="sm" className="absolute right-0 top-0 h-full">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Master Password</Label>
                    <div className="relative">
                      <Input id="confirmPassword" type="password" />
                      <Button variant="ghost" size="sm" className="absolute right-0 top-0 h-full">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-gray-500 hover:bg-gray-600">Change Master Password</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Change Password Flow</h2>
            <div className="relative h-[400px] w-full mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Change%20Password%20Flow-o5rWnROD6NFbAW8JK1sPR5jvAwSWEA.png"
                alt="Change Password Flow"
                fill
                className="object-contain"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Security Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">When you change your master password:</p>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Your current password is verified against the stored hash</li>
                  <li>The system derives your old KEK to decrypt your DEK</li>
                  <li>A new KEK is derived from your new master password</li>
                  <li>Your DEK is re-encrypted with the new KEK</li>
                  <li>The database is updated with your new password hash and encrypted DEK</li>
                  <li>A new JWT is issued with your new encrypted KEK</li>
                  <li>Your passwords remain secure throughout this process</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

