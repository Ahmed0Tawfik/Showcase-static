import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SRSPage() {
  return (
    <div className="container mx-auto py-10 px-4 antialiased">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text gradient-text tracking-tight leading-tight">SupaSafe Requirements Document</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Version 1.0 - March 24, 2025</p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sticky Navigation Sidebar */}
        <div className="md:w-64 flex-shrink-0">
          <div className="sticky top-4 p-5 rounded-lg border border-accent/20 shadow-md bg-card">
            <h3 className="text-lg font-semibold mb-4 text-accent tracking-wide">Navigation</h3>
            <nav className="space-y-1.5">
              <a href="#introduction" className="block py-2 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-sm font-medium tracking-wide">1. Introduction</a>
              <div className="pl-2">
                <a href="#functional-requirements" className="block py-2 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-sm font-medium tracking-wide">2. Functional Requirements</a>
                <div className="pl-3 border-l border-muted space-y-1.5 ml-3 mt-1.5">
                  <a href="#user-authentication" className="block py-1.5 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs tracking-wide">2.1 User Authentication</a>
                  <a href="#password-management" className="block py-1.5 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs tracking-wide">2.2 Password Management</a>
                  <a href="#user-interface" className="block py-1.5 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs tracking-wide">2.3 User Interface</a>
                </div>
              </div>
              <div className="pl-2">
                <a href="#non-functional-requirements" className="block py-2 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-sm font-medium tracking-wide">3. Non-Functional Requirements</a>
                <div className="pl-3 border-l border-muted space-y-1.5 ml-3 mt-1.5">
                  <a href="#security" className="block py-1.5 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs tracking-wide">3.1 Security</a>
                  <a href="#performance" className="block py-1.5 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs tracking-wide">3.2 Performance</a>
                  <a href="#scalability" className="block py-1.5 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs tracking-wide">3.3 Scalability</a>
                  <a href="#usability" className="block py-1.5 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs tracking-wide">3.4 Usability</a>
                  <a href="#reliability" className="block py-1.5 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs tracking-wide">3.5 Reliability</a>
                  <a href="#maintainability" className="block py-1.5 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs tracking-wide">3.6 Maintainability</a>
                  <a href="#constraints" className="block py-1.5 px-3 hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-xs tracking-wide">3.7 Constraints</a>
                </div>
              </div>
              <a href="#assumptions" className="block py-2 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-sm font-medium tracking-wide">4. Assumptions</a>
              <a href="#deliverables" className="block py-2 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary/80 transition-colors text-sm font-medium tracking-wide">5. Deliverables</a>
            </nav>
            <div className="mt-8">
              <a href="/" className="block w-full py-2.5 px-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md text-center text-sm font-medium tracking-wide transition-colors">Back to Home</a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <section id="introduction" className="mb-12">
            <Card className="border-indigo-500/20 shadow-md overflow-hidden">
              <CardHeader className="bg-indigo-500/10 rounded-t-lg py-6">
                <CardTitle className="text-2xl bg-gradient-to-r from-indigo-400 to-blue-500 text-transparent bg-clip-text gradient-text tracking-tight leading-snug">1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 p-6 text-base leading-relaxed tracking-normal">
                <p className="text-foreground/95">
                  The SupaSafe application will be a password manager designed to securely store, retrieve, and manage user passwords for various sites and services. It aims to be user-friendly while ensuring strong cryptographic security through master password-based encryption.
                </p>
                <ul className="list-disc pl-7 space-y-3">
                  <li className="text-foreground/95">The frontend will be developed using React.js.</li>
                  <li className="text-foreground/95">The backend will use Node.js + Express for API handling and cryptographic operations.</li>
                  <li className="text-foreground/95">Supabase will serve as the managed PostgreSQL database with built-in security features.</li>
                </ul>
                <p className="text-foreground/95">
                  The document outlines the functional and non-functional requirements, ensuring a secure and efficient user experience.
                </p>
              </CardContent>
            </Card>
          </section>
          
          <section id="functional-requirements" className="mb-12">
            <Card className="border-purple-500/20 shadow-md overflow-hidden">
              <CardHeader className="bg-purple-500/10 rounded-t-lg py-6">
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text gradient-text tracking-tight leading-snug">2. Functional Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 p-6 text-base leading-relaxed tracking-normal">
                <div id="user-authentication">
                  <h3 className="text-xl font-semibold mb-5 tracking-tight text-foreground/95">2.1 User Authentication</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-3 tracking-tight text-foreground/95">FR1: Signup</h4>
                      <ul className="list-disc pl-7 space-y-2">
                        <li className="text-foreground/95">Users can create an account with an email and master password.</li>
                        <li className="text-foreground/95">The master password will be hashed using bcrypt and stored securely.</li>
                        <li className="text-foreground/95">A random Data Encryption Key (DEK) will be generated and encrypted with a Key Encryption Key (KEK).</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-3 tracking-tight text-foreground/95">FR2: Login</h4>
                      <ul className="list-disc pl-7 space-y-2">
                        <li className="text-foreground/95">Users log in with email and master password.</li>
                        <li className="text-foreground/95">The backend verifies the password and derives the KEK for decryption.</li>
                        <li className="text-foreground/95">A JWT token is issued to the frontend.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-3 tracking-tight text-foreground/95">FR3: Logout</h4>
                      <ul className="list-disc pl-7 space-y-2">
                        <li className="text-foreground/95">Logging out removes the JWT, making stored passwords inaccessible.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div id="password-management">
                  <h3 className="text-xl font-semibold mb-5 tracking-tight text-foreground/95">2.2 Password Management</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-3 tracking-tight text-foreground/95">FR4: Add Password</h4>
                      <ul className="list-disc pl-7 space-y-2">
                        <li className="text-foreground/95">Users can store a password with an associated site name.</li>
                        <li className="text-foreground/95">The backend encrypts passwords using AES-256 with a DEK.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-3 tracking-tight text-foreground/95">FR5: Retrieve Passwords</h4>
                      <ul className="list-disc pl-7 space-y-2">
                        <li className="text-foreground/95">Users can view all saved passwords.</li>
                        <li className="text-foreground/95">The backend decrypts them using the stored DEK.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-3 tracking-tight text-foreground/95">FR6: Change Master Password</h4>
                      <ul className="list-disc pl-7 space-y-2">
                        <li className="text-foreground/95">Users can change their master password.</li>
                        <li className="text-foreground/95">The system re-encrypts the DEK with the new password-derived KEK.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div id="user-interface">
                  <h3 className="text-xl font-semibold mb-5 tracking-tight text-foreground/95">2.3 User Interface</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-3 tracking-tight text-foreground/95">FR7: Signup Page</h4>
                      <ul className="list-disc pl-7 space-y-2">
                        <li className="text-foreground/95">A form for creating an account.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-3 tracking-tight text-foreground/95">FR8: Login Page</h4>
                      <ul className="list-disc pl-7 space-y-2">
                        <li className="text-foreground/95">A form for logging in.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-3 tracking-tight text-foreground/95">FR9: Password Management Interface</h4>
                      <ul className="list-disc pl-7 space-y-2">
                        <li className="text-foreground/95">A form to input and display passwords.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-3 tracking-tight text-foreground/95">FR10: Change Password Page</h4>
                      <ul className="list-disc pl-7 space-y-2">
                        <li className="text-foreground/95">A form for changing the master password.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section id="non-functional-requirements" className="mb-12">
            <Card className="border-teal-500/20 shadow-md overflow-hidden">
              <CardHeader className="bg-teal-500/10 rounded-t-lg py-6">
                <CardTitle className="text-2xl bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text gradient-text tracking-tight leading-snug">3. Non-Functional Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 p-6 text-base leading-relaxed tracking-normal">
                <div id="security">
                  <h3 className="text-xl font-semibold mb-5 tracking-tight text-foreground/95">3.1 Security</h3>
                  <ul className="list-disc pl-7 space-y-2">
                    <li className="text-foreground/95"><strong>bcrypt</strong> will hash passwords with a work factor of 12.</li>
                    <li className="text-foreground/95"><strong>PBKDF2</strong> will derive KEK with 100,000 iterations.</li>
                    <li className="text-foreground/95"><strong>AES-256-CBC</strong> will encrypt passwords.</li>
                    <li className="text-foreground/95">HTTPS will be used for secure communication.</li>
                    <li className="text-foreground/95">If users forget their master password, recovery is impossible.</li>
                  </ul>
                </div>
                
                <div id="performance">
                  <h3 className="text-xl font-semibold mb-5 tracking-tight text-foreground/95">3.2 Performance</h3>
                  <ul className="list-disc pl-7 space-y-2">
                    <li className="text-foreground/95">API responses will complete within 2 seconds.</li>
                    <li className="text-foreground/95">Key derivation should not exceed 500ms.</li>
                    <li className="text-foreground/95">AES encryption/decryption should take &lt;100ms per operation.</li>
                  </ul>
                </div>
                
                <div id="scalability">
                  <h3 className="text-xl font-semibold mb-5 tracking-tight text-foreground/95">3.3 Scalability</h3>
                  <ul className="list-disc pl-7 space-y-2">
                    <li className="text-foreground/95">100 concurrent users supported.</li>
                    <li className="text-foreground/95">Up to 100 passwords per user without performance issues.</li>
                  </ul>
                </div>
                
                <div id="usability">
                  <h3 className="text-xl font-semibold mb-5 tracking-tight text-foreground/95">3.4 Usability</h3>
                  <ul className="list-disc pl-7 space-y-2">
                    <li className="text-foreground/95">3-click rule for common actions.</li>
                    <li className="text-foreground/95">Clear success/error messages.</li>
                  </ul>
                </div>
                
                <div id="reliability">
                  <h3 className="text-xl font-semibold mb-5 tracking-tight text-foreground/95">3.5 Reliability</h3>
                  <ul className="list-disc pl-7 space-y-2">
                    <li className="text-foreground/95">95% uptime expected.</li>
                    <li className="text-foreground/95">No encryption/decryption errors affecting stored data.</li>
                  </ul>
                </div>
                
                <div id="maintainability">
                  <h3 className="text-xl font-semibold mb-5 tracking-tight text-foreground/95">3.6 Maintainability</h3>
                  <ul className="list-disc pl-7 space-y-2">
                    <li className="text-foreground/95">Well-documented code and modular structure.</li>
                  </ul>
                </div>
                
                <div id="constraints">
                  <h3 className="text-xl font-semibold mb-5 tracking-tight text-foreground/95">3.7 Constraints</h3>
                  <ul className="list-disc pl-7 space-y-2">
                    <li className="text-foreground/95">Tech stack: React.js, Node.js, Supabase.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section id="assumptions" className="mb-12">
            <Card className="border-amber-500/20 shadow-md overflow-hidden">
              <CardHeader className="bg-amber-500/10 rounded-t-lg py-6">
                <CardTitle className="text-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text gradient-text tracking-tight leading-snug">4. Assumptions</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-base leading-relaxed tracking-normal">
                <ul className="list-disc pl-7 space-y-2">
                  <li className="text-foreground/95">Users have modern web browsers.</li>
                  <li className="text-foreground/95">Supabase's free tier will be sufficient.</li>
                </ul>
              </CardContent>
            </Card>
          </section>
          
          <section id="deliverables" className="mb-12">
            <Card className="border-rose-500/20 shadow-md overflow-hidden">
              <CardHeader className="bg-rose-500/10 rounded-t-lg py-6">
                <CardTitle className="text-2xl bg-gradient-to-r from-rose-400 to-red-500 text-transparent bg-clip-text gradient-text tracking-tight leading-snug">5. Deliverables</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-base leading-relaxed tracking-normal">
                <ul className="list-disc pl-7 space-y-2">
                  <li className="text-foreground/95">Fully functional SupaSafe application deployed to Vercel/Heroku.</li>
                  <li className="text-foreground/95">Source code on GitHub with setup instructions.</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
} 