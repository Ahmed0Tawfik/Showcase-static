import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function ArchitecturePage() {
  return (
    <div className="container mx-auto py-10">
      <Link href="/" className="flex items-center text-sm mb-6 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-6">System Architecture</h1>

      <Tabs defaultValue="overview">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="overview">High-Level Overview</TabsTrigger>
          <TabsTrigger value="pipeline">Request Pipeline</TabsTrigger>
          <TabsTrigger value="security">Security Architecture</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HighLevel%20System%20OverView-3beCtioJoC3YdjuWBqoy2bMFNEaKwl.png"
                  alt="High Level System Overview"
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Frontend (React)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>UI Components with Tailwind/Material UI</li>
                <li>Auth Provider for JWT management</li>
                <li>API Service for backend communication</li>
                <li>Local Storage Service for token</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Backend (Node.js)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>API Routes for auth and passwords</li>
                <li>Middlewares for validation and auth</li>
                <li>Services for business logic</li>
                <li>Encryption Module for security</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Database (PostgreSQL)</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Users Table for authentication</li>
                <li>Passwords Table for encrypted data</li>
                <li>Secure database connections</li>
                <li>Optimized queries for performance</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="pipeline">
          <Card>
            <CardContent className="pt-6">
              <div className="aspect-video relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PipeLine-itcNiwQIGCN6ZbjqUBxSuOKjCxvAj6.png"
                  alt="Request Pipeline"
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 space-y-4">
            <h3 className="text-xl font-medium">Request Flow Pipeline</h3>
            <p>The diagram above illustrates how requests flow through the system:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Client Browser sends HTTP request</li>
              <li>HTTP Layer handles TLS, CORS, and basic validation</li>
              <li>Express Application Layer processes middleware and routes</li>
              <li>Business Logic Layer implements core functionality</li>
              <li>Data Access Layer interacts with the database</li>
              <li>Response flows back through the layers to the client</li>
            </ol>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4">Authentication Security</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Password Hashing:</strong> Master passwords are hashed using bcrypt with salt
                  </li>
                  <li>
                    <strong>JWT Authentication:</strong> Stateless authentication with expiring tokens
                  </li>
                  <li>
                    <strong>Key Derivation:</strong> Keys derived from master password using PBKDF2
                  </li>
                  <li>
                    <strong>HTTPS:</strong> All communication encrypted in transit
                  </li>
                  <li>
                    <strong>CSRF Protection:</strong> Tokens prevent cross-site request forgery
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4">Password Encryption</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>AES-256:</strong> Industry standard encryption for passwords
                  </li>
                  <li>
                    <strong>Unique Keys:</strong> Each user has their own encryption key
                  </li>
                  <li>
                    <strong>Key Encryption:</strong> DEK encrypted with KEK for added security
                  </li>
                  <li>
                    <strong>Zero Knowledge:</strong> Server never has access to plaintext passwords
                  </li>
                  <li>
                    <strong>Encrypted Storage:</strong> All sensitive data encrypted at rest
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

