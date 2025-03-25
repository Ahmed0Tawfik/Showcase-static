import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SRSPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text">SupaSafe Requirements Document</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Version 1.0 - March 24, 2025</p>
      </header>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sticky Navigation Sidebar */}
        <div className="md:w-64 flex-shrink-0">
          <div className="sticky top-4 p-4 rounded-lg border border-accent/20 shadow-md bg-card">
            <h3 className="text-lg font-semibold mb-3 text-accent">Navigation</h3>
            <nav className="space-y-1">
              <a href="#introduction" className="block py-1.5 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-sm">1. Introduction</a>
              <div className="pl-2">
                <a href="#functional-requirements" className="block py-1.5 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-sm">2. Functional Requirements</a>
                <div className="pl-3 border-l border-muted space-y-1 ml-3 mt-1">
                  <a href="#user-authentication" className="block py-1 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs">2.1 User Authentication</a>
                  <a href="#password-management" className="block py-1 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs">2.2 Password Management</a>
                  <a href="#user-interface" className="block py-1 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs">2.3 User Interface</a>
                </div>
              </div>
              <div className="pl-2">
                <a href="#non-functional-requirements" className="block py-1.5 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-sm">3. Non-Functional Requirements</a>
                <div className="pl-3 border-l border-muted space-y-1 ml-3 mt-1">
                  <a href="#security" className="block py-1 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs">3.1 Security</a>
                  <a href="#performance" className="block py-1 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs">3.2 Performance</a>
                  <a href="#scalability" className="block py-1 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs">3.3 Scalability</a>
                  <a href="#usability" className="block py-1 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs">3.4 Usability</a>
                  <a href="#reliability" className="block py-1 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs">3.5 Reliability</a>
                  <a href="#maintainability" className="block py-1 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs">3.6 Maintainability</a>
                  <a href="#constraints" className="block py-1 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs">3.7 Constraints</a>
                </div>
              </div>
              <a href="#assumptions" className="block py-1.5 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-sm">4. Assumptions</a>
              <a href="#deliverables" className="block py-1.5 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-sm">5. Deliverables</a>
            </nav>
            <div className="mt-6">
              <a href="/" className="block w-full py-2 px-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md text-center text-sm transition-colors">Back to Home</a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <section id="introduction" className="mb-10">
            <Card className="border-indigo-500/20 shadow-md">
              <CardHeader className="bg-indigo-500/10 rounded-t-lg">
                <CardTitle className="text-2xl bg-gradient-to-r from-indigo-400 to-blue-500 text-transparent bg-clip-text">1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The <strong>SupaSafe</strong> application will be a <strong>password manager</strong> designed to <strong>securely store, retrieve, and manage user passwords</strong> for various sites and services. It aims to be <strong>user-friendly</strong> while ensuring strong cryptographic security through <strong>master password-based encryption</strong>.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The <strong>frontend</strong> will be developed using <strong>React.js</strong>.</li>
                  <li>The <strong>backend</strong> will use <strong>Node.js + Express</strong> for API handling and cryptographic operations.</li>
                  <li><strong>Supabase</strong> will serve as the <strong>managed PostgreSQL database</strong> with built-in security features.</li>
                </ul>
                <p>
                  The document outlines the <strong>functional and non-functional requirements</strong>, ensuring a <strong>secure and efficient</strong> user experience.
                </p>
              </CardContent>
            </Card>
          </section>
          
          <section id="functional-requirements" className="mb-10">
            <Card className="border-purple-500/20 shadow-md">
              <CardHeader className="bg-purple-500/10 rounded-t-lg">
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">2. Functional Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div id="user-authentication">
                  <h3 className="text-xl font-semibold mb-4">2.1 User Authentication</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium">FR1: Signup</h4>
                      <ul className="list-disc pl-6">
                        <li>Users can create an account with an <strong>email and master password</strong>.</li>
                        <li>The <strong>master password</strong> will be <strong>hashed using bcrypt</strong> and stored securely.</li>
                        <li>A <strong>random Data Encryption Key (DEK)</strong> will be generated and <strong>encrypted with a Key Encryption Key (KEK)</strong>.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium">FR2: Login</h4>
                      <ul className="list-disc pl-6">
                        <li>Users log in with <strong>email and master password</strong>.</li>
                        <li>The <strong>backend verifies</strong> the password and derives the <strong>KEK</strong> for decryption.</li>
                        <li>A <strong>JWT token</strong> is issued to the frontend.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium">FR3: Logout</h4>
                      <ul className="list-disc pl-6">
                        <li>Logging out <strong>removes the JWT</strong>, making stored passwords <strong>inaccessible</strong>.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div id="password-management">
                  <h3 className="text-xl font-semibold mb-4">2.2 Password Management</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium">FR4: Add Password</h4>
                      <ul className="list-disc pl-6">
                        <li>Users can store a <strong>password</strong> with an associated <strong>site name</strong>.</li>
                        <li>The backend <strong>encrypts passwords</strong> using AES-256 with a DEK.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium">FR5: Retrieve Passwords</h4>
                      <ul className="list-disc pl-6">
                        <li>Users can <strong>view all saved passwords</strong>.</li>
                        <li>The backend <strong>decrypts</strong> them using the stored <strong>DEK</strong>.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium">FR6: Change Master Password</h4>
                      <ul className="list-disc pl-6">
                        <li>Users can <strong>change</strong> their master password.</li>
                        <li>The system <strong>re-encrypts</strong> the DEK with the new password-derived KEK.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div id="user-interface">
                  <h3 className="text-xl font-semibold mb-4">2.3 User Interface</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium">FR7: Signup Page</h4>
                      <ul className="list-disc pl-6">
                        <li>A form for <strong>creating an account</strong>.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium">FR8: Login Page</h4>
                      <ul className="list-disc pl-6">
                        <li>A form for <strong>logging in</strong>.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium">FR9: Password Management Interface</h4>
                      <ul className="list-disc pl-6">
                        <li>A form to <strong>input and display passwords</strong>.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium">FR10: Change Password Page</h4>
                      <ul className="list-disc pl-6">
                        <li>A form for <strong>changing the master password</strong>.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section id="non-functional-requirements" className="mb-10">
            <Card className="border-teal-500/20 shadow-md">
              <CardHeader className="bg-teal-500/10 rounded-t-lg">
                <CardTitle className="text-2xl bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text">3. Non-Functional Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div id="security">
                  <h3 className="text-xl font-semibold mb-4">3.1 Security</h3>
                  <ul className="list-disc pl-6">
                    <li><strong>bcrypt</strong> will hash passwords with a <strong>work factor of 12</strong>.</li>
                    <li><strong>PBKDF2</strong> will derive KEK with <strong>100,000 iterations</strong>.</li>
                    <li><strong>AES-256-CBC</strong> will encrypt passwords.</li>
                    <li><strong>HTTPS</strong> will be used for <strong>secure communication</strong>.</li>
                    <li>If users <strong>forget their master password, recovery is impossible</strong>.</li>
                  </ul>
                </div>
                
                <div id="performance">
                  <h3 className="text-xl font-semibold mb-4">3.2 Performance</h3>
                  <ul className="list-disc pl-6">
                    <li>API responses will complete <strong>within 2 seconds</strong>.</li>
                    <li>Key derivation should not exceed <strong>500ms</strong>.</li>
                    <li>AES encryption/decryption should take <strong>&lt;100ms</strong> per operation.</li>
                  </ul>
                </div>
                
                <div id="scalability">
                  <h3 className="text-xl font-semibold mb-4">3.3 Scalability</h3>
                  <ul className="list-disc pl-6">
                    <li><strong>100 concurrent users</strong> supported.</li>
                    <li>Up to <strong>100 passwords per user</strong> without performance issues.</li>
                  </ul>
                </div>
                
                <div id="usability">
                  <h3 className="text-xl font-semibold mb-4">3.4 Usability</h3>
                  <ul className="list-disc pl-6">
                    <li><strong>3-click rule</strong> for common actions.</li>
                    <li>Clear <strong>success/error messages</strong>.</li>
                  </ul>
                </div>
                
                <div id="reliability">
                  <h3 className="text-xl font-semibold mb-4">3.5 Reliability</h3>
                  <ul className="list-disc pl-6">
                    <li><strong>95% uptime</strong> expected.</li>
                    <li>No encryption/decryption errors affecting stored data.</li>
                  </ul>
                </div>
                
                <div id="maintainability">
                  <h3 className="text-xl font-semibold mb-4">3.6 Maintainability</h3>
                  <ul className="list-disc pl-6">
                    <li><strong>Well-documented</strong> code and <strong>modular</strong> structure.</li>
                  </ul>
                </div>
                
                <div id="constraints">
                  <h3 className="text-xl font-semibold mb-4">3.7 Constraints</h3>
                  <ul className="list-disc pl-6">
                    <li>Tech stack: <strong>React.js, Node.js, Supabase</strong>.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section id="assumptions" className="mb-10">
            <Card className="border-amber-500/20 shadow-md">
              <CardHeader className="bg-amber-500/10 rounded-t-lg">
                <CardTitle className="text-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text">4. Assumptions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6">
                  <li>Users have <strong>modern web browsers</strong>.</li>
                  <li><strong>Supabase's free tier</strong> will be sufficient.</li>
                </ul>
              </CardContent>
            </Card>
          </section>
          
          <section id="deliverables" className="mb-10">
            <Card className="border-rose-500/20 shadow-md">
              <CardHeader className="bg-rose-500/10 rounded-t-lg">
                <CardTitle className="text-2xl bg-gradient-to-r from-rose-400 to-red-500 text-transparent bg-clip-text">5. Deliverables</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6">
                  <li>Fully functional <strong>SupaSafe application</strong> deployed to <strong>Vercel/Heroku</strong>.</li>
                  <li>Source code on <strong>GitHub</strong> with setup instructions.</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
} 