import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Eye, MoreVertical, Plus, Search } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <Link href="/" className="flex items-center text-sm mb-6 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Passwords</h1>
        <Link href="/passwords/add">
          <Button className="bg-black hover:bg-gray-800">
            <Plus className="mr-2 h-4 w-4" /> Add Password
          </Button>
        </Link>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search passwords..." className="pl-8" />
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Website</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Gmail</TableCell>
              <TableCell>user@gmail.com</TableCell>
              <TableCell>gmail.com</TableCell>
              <TableCell>Nov 20, 2022</TableCell>
              <TableCell className="flex items-center">
                May 15, 2023
                <span className="ml-2 h-2 w-2 rounded-full bg-amber-400"></span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">GitHub</TableCell>
              <TableCell>devuser</TableCell>
              <TableCell>github.com</TableCell>
              <TableCell>Dec 5, 2022</TableCell>
              <TableCell className="flex items-center">
                Jun 20, 2023
                <span className="ml-2 h-2 w-2 rounded-full bg-amber-400"></span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Netflix</TableCell>
              <TableCell>user@example.com</TableCell>
              <TableCell>netflix.com</TableCell>
              <TableCell>Jan 15, 2023</TableCell>
              <TableCell className="flex items-center">
                Jul 10, 2023
                <span className="ml-2 h-2 w-2 rounded-full bg-amber-400"></span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Amazon</TableCell>
              <TableCell>user123</TableCell>
              <TableCell>amazon.com</TableCell>
              <TableCell>Feb 28, 2023</TableCell>
              <TableCell className="flex items-center">
                Aug 5, 2023
                <span className="ml-2 h-2 w-2 rounded-full bg-amber-400"></span>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

