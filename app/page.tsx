import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LockIcon, ShieldIcon, DatabaseIcon } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">SupaSafe Password Manager</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Your passwords, secured with one master key</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="border-purple-500/20 shadow-md">
          <CardHeader className="bg-purple-500/5 rounded-t-lg">
            <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Project Overview</CardTitle>
            <CardDescription>A secure password manager built with React, Node.js, and Supabase</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              SupaSafe is a password manager designed to securely store, retrieve, and manage user passwords for various
              sites and services. It leverages a master password to derive a Key Encryption Key (KEK) and a randomly
              generated Data Encryption Key (DEK) for robust cryptographic security.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Link href="/auth/login">
                <Button variant="outline" className="w-full">
                  View Login Demo
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button variant="outline" className="w-full">
                  View Register Demo
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" className="w-full">
                  View Dashboard
                </Button>
              </Link>
              <Link href="/passwords/add">
                <Button variant="outline" className="w-full">
                  Add Password Demo
                </Button>
              </Link>
            </div>
            <div className="mt-4">
              <Link href="/srs">
                <Button variant="default" className="w-full">
                  View SRS Document
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-500/20 shadow-md">
          <CardHeader className="bg-blue-500/5 rounded-t-lg">
            <CardTitle className="text-2xl bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">System Architecture</CardTitle>
            <CardDescription>Three-tier architecture with secure encryption</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-[300px] w-full mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HighLevel%20System%20OverView-3beCtioJoC3YdjuWBqoy2bMFNEaKwl.png"
                alt="High Level System Overview"
                fill
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="p-2 bg-blue-50 rounded-md">
                <p className="font-medium">Frontend</p>
                <p className="text-muted-foreground">React</p>
              </div>
              <div className="p-2 bg-green-50 rounded-md">
                <p className="font-medium">Backend</p>
                <p className="text-muted-foreground">Node.js + Express</p>
              </div>
              <div className="p-2 bg-amber-50 rounded-md">
                <p className="font-medium">Database</p>
                <p className="text-muted-foreground">PostgreSQL</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">User Flows</h2>
      <Tabs defaultValue="login" className="w-full mb-12">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-4">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
          <TabsTrigger value="logout">Logout</TabsTrigger>
          <TabsTrigger value="add">Add Password</TabsTrigger>
          <TabsTrigger value="update">Update Password</TabsTrigger>
          <TabsTrigger value="retrieve">Retrieve Password</TabsTrigger>
          <TabsTrigger value="delete">Delete Password</TabsTrigger>
          <TabsTrigger value="srs">SRS</TabsTrigger>
        </TabsList>

        <TabsContent value="login" className="border rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4">Login User Flow</h3>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Login%20User%20Flow-Ou3i87U5zpKtH2NJrOTyzihrfWb8B9.png"
              alt="Login User Flow"
              fill
              className="object-contain"
            />
          </div>
        </TabsContent>

        <TabsContent value="register" className="border rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4">Register User Flow</h3>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Register%20User%20Flow-2RcKtBu2AnAssUVPKKtxLdLw6rKv9F.png"
              alt="Register User Flow"
              fill
              className="object-contain"
            />
          </div>
        </TabsContent>

        <TabsContent value="logout" className="border rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4">Logout User Flow</h3>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logout%20User%20Flow-A8dXxVxhr5q7w7EdqETpnHBhyYvZmO.png"
              alt="Logout User Flow"
              fill
              className="object-contain"
            />
          </div>
        </TabsContent>

        <TabsContent value="add" className="border rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4">Add Password Flow</h3>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Add%20Password%20Flow-dKtmdT0MKHeBnNDFfyOr68e9aeeL53.png"
              alt="Add Password Flow"
              fill
              className="object-contain"
            />
          </div>
        </TabsContent>

        <TabsContent value="update" className="border rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4">Update Password Flow</h3>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Update%20Password%20Flow-LUJtitv4N6hBplKkS6YAWOvOeT957M.png"
              alt="Update Password Flow"
              fill
              className="object-contain"
            />
          </div>
        </TabsContent>

        <TabsContent value="retrieve" className="border rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4">Retrieve Password Flow</h3>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Retrieve%20Password%20Flow-7qaNsffRvXos79JqvOPwukfIXiodE1.png"
              alt="Retrieve Password Flow"
              fill
              className="object-contain"
            />
          </div>
        </TabsContent>

        <TabsContent value="delete" className="border rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4">Delete Password Flow</h3>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Delete%20Password%20Flow-9f9ulHKEQus2bdQ3kdvcnX0ILf1ax7.png"
              alt="Delete Password Flow"
              fill
              className="object-contain"
            />
          </div>
        </TabsContent>

        <TabsContent value="srs" className="border rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4">Software Requirements Specification</h3>
          <p className="mb-4">The SRS document outlines the requirements and specifications for the SupaSafe password manager application.</p>
          <Link href="/srs">
            <Button className="w-full">View Full SRS Document</Button>
          </Link>
        </TabsContent>
      </Tabs>

      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">Database Schema</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="border-teal-500/20 shadow-md">
          <CardHeader className="bg-teal-500/5 rounded-t-lg">
            <CardTitle className="bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text">Database Tables</CardTitle>
            <CardDescription>PostgreSQL schema for SupaSafe</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-[300px] w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Database%20Schema-w42MpM1Q1SI1TWpXgI3ppmR3728Hc1.png"
                alt="Database Schema"
                fill
                className="object-contain"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-500/20 shadow-md">
          <CardHeader className="bg-amber-500/5 rounded-t-lg">
            <CardTitle className="bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text">Entity Relationship Diagram</CardTitle>
            <CardDescription>Relationships between entities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-[300px] w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ERD-Rkj3z3kVeMoFL9ocBy8dz20TTERhCH.png"
                alt="Entity Relationship Diagram"
                fill
                className="object-contain"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">Security Architecture</h2>
      <Card className="mb-12 border-blue-500/20 shadow-md">
        <CardHeader className="bg-blue-500/5 rounded-t-lg">
          <CardTitle className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">Request Pipeline</CardTitle>
          <CardDescription>How requests flow through the system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative h-[500px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PipeLine-itcNiwQIGCN6ZbjqUBxSuOKjCxvAj6.png"
              alt="Request Pipeline"
              fill
              className="object-contain"
            />
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">Key Security Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="border-purple-500/20 shadow-md">
          <CardHeader className="pb-2 bg-purple-500/5 rounded-t-lg">
            <div className="flex items-center gap-2 mb-2">
              <ShieldIcon className="h-5 w-5 text-purple-400" />
              <CardTitle className="text-lg bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Password Hashing</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Master password hashed using bcrypt with a work factor of at least 12 to ensure resistance to brute-force
              attacks.
            </p>
          </CardContent>
        </Card>

        <Card className="border-teal-500/20 shadow-md">
          <CardHeader className="pb-2 bg-teal-500/5 rounded-t-lg">
            <div className="flex items-center gap-2 mb-2">
              <LockIcon className="h-5 w-5 text-teal-400" />
              <CardTitle className="text-lg bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text">Key Derivation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              KEK derived from master password using PBKDF2 with 100,000 iterations, a 32-byte output, and SHA-256.
            </p>
          </CardContent>
        </Card>

        <Card className="border-amber-500/20 shadow-md">
          <CardHeader className="pb-2 bg-amber-500/5 rounded-t-lg">
            <div className="flex items-center gap-2 mb-2">
              <DatabaseIcon className="h-5 w-5 text-amber-400" />
              <CardTitle className="text-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text">Encryption</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">AES-256-CBC encryption with unique IVs for both the DEK and stored passwords.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

