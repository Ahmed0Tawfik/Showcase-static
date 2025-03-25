import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"

export default function RequirementsPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <Link href="/" className="flex items-center text-sm mb-6 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-6">SupaSafe Requirements</h1>

      <Tabs defaultValue="functional" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="functional">Functional Requirements</TabsTrigger>
          <TabsTrigger value="non-functional">Non-Functional Requirements</TabsTrigger>
        </TabsList>

        <TabsContent value="functional" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Authentication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">FR1 Signup</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Allow user to create an account with email and master password</li>
                  <li>Hash master password using bcrypt with random salt</li>
                  <li>Generate random DEK and encrypt with KEK derived from master password</li>
                  <li>Redirect to login page on success</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">FR2 Login</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Allow user to log in with email and master password</li>
                  <li>Verify password against stored bcrypt hash</li>
                  <li>Derive KEK from master password, encrypt with server-side secret</li>
                  <li>Embed encrypted KEK in JWT and store in localStorage</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">FR3 Logout</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Allow logged-in user to log out</li>
                  <li>Clear JWT from localStorage</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Password Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">FR4 Add Password</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Allow user to add a password with site name and password</li>
                  <li>Send JWT with request to backend</li>
                  <li>Decrypt KEK from JWT, decrypt DEK, encrypt password with DEK</li>
                  <li>Store encrypted password, IV, and site name in database</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">FR5 Retrieve Passwords</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Allow user to view all saved passwords</li>
                  <li>Send JWT to backend</li>
                  <li>Decrypt KEK from JWT, decrypt DEK, fetch and decrypt passwords</li>
                  <li>Return plaintext site name and password pairs to frontend</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">FR6 Change Master Password</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Allow user to change master password</li>
                  <li>Verify current password against stored hash</li>
                  <li>Derive old KEK, decrypt DEK, derive new KEK</li>
                  <li>Re-encrypt DEK with new KEK, update database, issue new JWT</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="non-functional" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">NFR1 Password Hashing</h3>
                <p className="text-sm">Master password hashed using bcrypt with work factor of at least 12</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">NFR2 Key Derivation</h3>
                <p className="text-sm">KEK derived using PBKDF2 with 100,000 iterations, 32-byte output, SHA-256</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">NFR3 Encryption</h3>
                <p className="text-sm">DEK is 32-byte random key encrypted with KEK using AES-256-CBC with unique IV</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">NFR4 Transport Security</h3>
                <p className="text-sm">All communication uses HTTPS to protect data in transit</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">NFR5 Key Protection</h3>
                <p className="text-sm">KEK encrypted with server-side secret before embedding in JWT</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance & Usability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">NFR7 Response Time</h3>
                <p className="text-sm">API responses complete within 2 seconds under normal load</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">NFR8 Key Derivation Latency</h3>
                <p className="text-sm">KEK derivation via PBKDF2 not to exceed 500ms</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">NFR12 Interface Simplicity</h3>
                <p className="text-sm">UI requires no more than 3 clicks to perform any core action</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">NFR13 Feedback</h3>
                <p className="text-sm">Clear success/error messages for all actions</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

