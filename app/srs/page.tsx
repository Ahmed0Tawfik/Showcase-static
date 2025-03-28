import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SRSPage() {
  return (
    <div className="container mx-auto py-10 px-4 antialiased">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text gradient-text tracking-tight leading-tight">SupaSafe Requirements Document</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-6">Version 1.2 - March 25, 2025</p>
        <a 
          href="https://8ipmaucinc3dz1l7.public.blob.vercel-storage.com/25-3-2025_SRS_v1.2-pEtvpdBxkR4uDaW53KDJX8UdOSzUEa.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF Version
        </a>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sticky Navigation Sidebar */}
        <div className="md:w-72 flex-shrink-0">
          <div className="sticky top-4 p-6 rounded-lg border border-accent/20 shadow-md bg-card">
            <h3 className="text-xl font-semibold mb-6 text-accent tracking-wide">Navigation</h3>
            <nav className="space-y-1">
              <a href="#introduction" className="group flex items-center py-2 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary transition-colors text-base font-medium tracking-wide">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500 mr-3 text-sm font-semibold group-hover:bg-indigo-500/20 transition-colors">1</span>
                Introduction
              </a>
              
              <a href="#functional-requirements" className="group flex items-center py-2 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary transition-colors text-base font-medium tracking-wide">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-500/10 text-purple-500 mr-3 text-sm font-semibold group-hover:bg-purple-500/20 transition-colors">2</span>
                Functional Requirements
              </a>
              
              <div className="pl-9 space-y-1 mt-1">
                <a href="#user-authentication" className="block py-1.5 px-3 hover:bg-accent/10 text-primary/90 hover:text-primary transition-colors text-sm tracking-wide rounded-md">
                  2.1 User Authentication
                </a>
                <a href="#password-management" className="block py-1.5 px-3 hover:bg-accent/10 text-primary/90 hover:text-primary transition-colors text-sm tracking-wide rounded-md">
                  2.2 Password Management
                </a>
                <a href="#user-interface" className="block py-1.5 px-3 hover:bg-accent/10 text-primary/90 hover:text-primary transition-colors text-sm tracking-wide rounded-md">
                  2.3 User Interface
                </a>
              </div>
              
              <a href="#non-functional-requirements" className="group flex items-center py-2 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary transition-colors text-base font-medium tracking-wide">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-500/10 text-teal-500 mr-3 text-sm font-semibold group-hover:bg-teal-500/20 transition-colors">3</span>
                Non-Functional Requirements
              </a>
              
              <div className="pl-9 space-y-1 mt-1">
                <a href="#security" className="block py-1.5 px-3 hover:bg-accent/10 text-primary/90 hover:text-primary transition-colors text-sm tracking-wide rounded-md">
                  3.1 Security
                </a>
                <a href="#performance" className="block py-1.5 px-3 hover:bg-accent/10 text-primary/90 hover:text-primary transition-colors text-sm tracking-wide rounded-md">
                  3.2 Performance
                </a>
                <a href="#scalability" className="block py-1.5 px-3 hover:bg-accent/10 text-primary/90 hover:text-primary transition-colors text-sm tracking-wide rounded-md">
                  3.3 Scalability
                </a>
                <a href="#usability" className="block py-1.5 px-3 hover:bg-accent/10 text-primary/90 hover:text-primary transition-colors text-sm tracking-wide rounded-md">
                  3.4 Usability
                </a>
                <a href="#reliability" className="block py-1.5 px-3 hover:bg-accent/10 text-primary/90 hover:text-primary transition-colors text-sm tracking-wide rounded-md">
                  3.5 Reliability
                </a>
                <a href="#maintainability" className="block py-1.5 px-3 hover:bg-accent/10 text-primary/90 hover:text-primary transition-colors text-sm tracking-wide rounded-md">
                  3.6 Maintainability
                </a>
                <a href="#constraints" className="block py-1.5 px-3 hover:bg-accent/10 text-primary/90 hover:text-primary transition-colors text-sm tracking-wide rounded-md">
                  3.7 Constraints
                </a>
              </div>

              <a href="#database-requirements" className="group flex items-center py-2 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary transition-colors text-base font-medium tracking-wide">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-500 mr-3 text-sm font-semibold group-hover:bg-blue-500/20 transition-colors">4</span>
                Database Requirements
              </a>

              <div className="pl-9 space-y-1 mt-1">
                <a href="#users-table" className="block py-1.5 px-3 hover:bg-accent/10 text-primary/90 hover:text-primary transition-colors text-sm tracking-wide rounded-md">
                  4.1 Users Table
                </a>
                <a href="#passwords-table" className="block py-1.5 px-3 hover:bg-accent/10 text-primary/90 hover:text-primary transition-colors text-sm tracking-wide rounded-md">
                  4.2 Passwords Table
                </a>
              </div>
              
              <a href="#assumptions" className="group flex items-center py-2 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary transition-colors text-base font-medium tracking-wide">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-amber-500/10 text-amber-500 mr-3 text-sm font-semibold group-hover:bg-amber-500/20 transition-colors">5</span>
                Assumptions
              </a>
              
              <a href="#deliverables" className="group flex items-center py-2 px-3 rounded-md hover:bg-accent/10 text-primary hover:text-primary transition-colors text-base font-medium tracking-wide">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-rose-500/10 text-rose-500 mr-3 text-sm font-semibold group-hover:bg-rose-500/20 transition-colors">6</span>
                Deliverables
              </a>
            </nav>
            
            <div className="mt-8 pt-4 border-t border-border/40">
              <a href="/" className="flex items-center justify-center w-full py-3 px-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md text-center text-base font-medium tracking-wide transition-colors">
                ← Back to Home
              </a>
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
                  The SupaSafe application will be a password manager designed to securely store, retrieve, and manage user passwords for various sites and services. SupaSafe will provide a user-friendly solution for individuals seeking to protect their digital credentials while ensuring ease of access through a streamlined interface. The application will leverage a master password to derive a Key Encryption Key (KEK) and a randomly generated Data Encryption Key (DEK) for robust cryptographic security, ensuring that user data remains protected even in the event of a data breach.
                </p>
                <p className="text-foreground/95">
                  SupaSafe will be built with a modern tech stack to ensure reliability and performance. The frontend will be developed using React.js, providing a responsive and intuitive user interface. The backend will be powered by Node.js with Express, handling secure API interactions and cryptographic operations. Supabase will serve as the database, offering a scalable and managed PostgreSQL solution with built-in security features like HTTPS.
                </p>
                <p className="text-foreground/95">
                  The purpose of this document is to outline the functional and non-functional requirements for SupaSafe, detailing the features, security measures, performance expectations, and constraints that will guide its development. This ensures that the application will meet user needs while adhering to best practices in security and usability.
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
          
          <section id="database-requirements" className="mb-12">
            <Card className="border-blue-500/20 shadow-md overflow-hidden">
              <CardHeader className="bg-blue-500/10 rounded-t-lg py-6">
                <CardTitle className="text-2xl bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text gradient-text tracking-tight leading-snug">4. Database Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 p-6 text-base leading-relaxed tracking-normal">
                <div id="users-table">
                  <h3 className="text-xl font-semibold mb-5 tracking-tight text-foreground/95">4.1 Users Table</h3>
                  <p className="mb-4">The users table in Supabase shall store user authentication and encryption data as follows:</p>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    {`CREATE TABLE Users (
    ID UUID PRIMARY KEY DEFAULT gen_random_uuid(),  -- GUID primary key (FR1)
    Email VARCHAR(255) UNIQUE NOT NULL,
    HashedPass VARCHAR(60) NOT NULL,                -- Bcrypt output for master password hashing (NFR1)
    Salt VARCHAR(24) NOT NULL,                      -- Base64-encoded 16-byte salt for PBKDF2 KEK derivation (NFR2)
    LastUpdate TIMESTAMP DEFAULT NOW(),
    CreationDate TIMESTAMP DEFAULT NOW(),
    EncryptedDEK VARCHAR(44) NOT NULL,              -- Base64-encoded 32-byte encrypted DEK (NFR3)
    DEKIV VARCHAR(24) NOT NULL,                     -- Base64-encoded 16-byte IV for DEK encryption (NFR3)
    KEYCreationDate TIMESTAMP DEFAULT NOW()
);`}
                  </pre>
                </div>

                <div id="passwords-table">
                  <h3 className="text-xl font-semibold mb-5 tracking-tight text-foreground/95">4.2 Passwords Table</h3>
                  <p className="mb-4">The passwords table in Supabase shall store encrypted user passwords as follows:</p>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    {`CREATE TABLE Passwords (
    ID UUID PRIMARY KEY DEFAULT gen_random_uuid(),    -- GUID primary key
    UserID UUID NOT NULL,                             -- Foreign key referencing Users.ID (FR4)
    IV VARCHAR(24) NOT NULL,                          -- Base64-encoded 16-byte IV for AES-256-CBC (NFR3)
    Username VARCHAR(100) NOT NULL,
    EncryptedPass VARCHAR(44) NOT NULL,               -- Base64-encoded 32-byte encrypted password (NFR3)
    SiteName VARCHAR(100) NOT NULL,
    LastUpdate TIMESTAMP DEFAULT NOW(),
    CreationDate TIMESTAMP DEFAULT NOW(),
    WebsiteURL TEXT,
    FOREIGN KEY (UserID) REFERENCES Users(ID),
    CONSTRAINT unique_user_username UNIQUE (UserID, Username)  -- Ensures username is unique per user
);`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section id="assumptions" className="mb-12">
            <Card className="border-amber-500/20 shadow-md overflow-hidden">
              <CardHeader className="bg-amber-500/10 rounded-t-lg py-6">
                <CardTitle className="text-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-transparent bg-clip-text gradient-text tracking-tight leading-snug">5. Assumptions</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-base leading-relaxed tracking-normal">
                <ul className="list-disc pl-7 space-y-2">
                  <li className="text-foreground/95">Users have access to modern web browsers (e.g., Chrome, Firefox).</li>
                  <li className="text-foreground/95">Supabase's free tier (500 MB storage, 2 GB bandwidth/month) will suffice for hosting and storage needs.</li>
                </ul>
              </CardContent>
            </Card>
          </section>
          
          <section id="deliverables" className="mb-12">
            <Card className="border-rose-500/20 shadow-md overflow-hidden">
              <CardHeader className="bg-rose-500/10 rounded-t-lg py-6">
                <CardTitle className="text-2xl bg-gradient-to-r from-rose-400 to-red-500 text-transparent bg-clip-text gradient-text tracking-tight leading-snug">6. Deliverables</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-base leading-relaxed tracking-normal">
                <ul className="list-disc pl-7 space-y-2">
                  <li className="text-foreground/95">Fully functional SupaSafe application deployed to Vercel/Heroku with Supabase integration.</li>
                  <li className="text-foreground/95">Source code hosted on GitHub with a README for setup instructions, including Supabase configuration.</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
} 