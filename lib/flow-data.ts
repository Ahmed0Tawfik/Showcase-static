// Login Flow
export const loginFlow = {
  steps: [
    { id: "client", type: "client", label: "Client Frontend", x: 50, y: 200, width: 150, height: 80 },
    { id: "validation", type: "middleware", label: "Validation Middleware", x: 250, y: 200, width: 150, height: 80 },
    { id: "backend", type: "server", label: "Backend", x: 450, y: 200, width: 150, height: 80 },
    { id: "database", type: "database", label: "Database", x: 650, y: 200, width: 150, height: 80 },
    {
      id: "backend2",
      type: "server",
      label: "Backend",
      description: "Derive key from master password",
      x: 450,
      y: 320,
      width: 150,
      height: 80,
    },
    { id: "jwt", type: "encryption", label: "Generate JWT", x: 650, y: 320, width: 150, height: 80 },
    { id: "dashboard", type: "client", label: "Dashboard", x: 850, y: 320, width: 150, height: 80 },
  ],
  connections: [
    { from: "client", to: "validation", label: "POST /auth/login" },
    { from: "validation", to: "backend" },
    { from: "backend", to: "database", label: "Retrieve user" },
    { from: "database", to: "backend2" },
    { from: "backend2", to: "jwt" },
    { from: "jwt", to: "dashboard", label: "Store JWT in local storage", type: "success" },
    { from: "validation", to: "client", label: "Validation error", type: "error" },
    { from: "database", to: "client", label: "Invalid credentials", type: "error" },
  ],
}

// Register Flow
export const registerFlow = {
  steps: [
    { id: "client", type: "client", label: "Client Frontend", x: 50, y: 200, width: 150, height: 80 },
    { id: "validation", type: "middleware", label: "Validation Middleware", x: 250, y: 200, width: 150, height: 80 },
    {
      id: "encryption",
      type: "encryption",
      label: "Encryption Module",
      description: "Hash master password",
      x: 450,
      y: 200,
      width: 150,
      height: 80,
    },
    { id: "key", type: "encryption", label: "Generate Random Key", x: 650, y: 200, width: 150, height: 80 },
    {
      id: "database",
      type: "database",
      label: "Database",
      description: "Save created user",
      x: 850,
      y: 200,
      width: 150,
      height: 80,
    },
    { id: "jwt", type: "encryption", label: "Generate JWT", x: 650, y: 320, width: 150, height: 80 },
  ],
  connections: [
    { from: "client", to: "validation", label: "POST /auth/register" },
    { from: "validation", to: "encryption" },
    { from: "encryption", to: "key" },
    { from: "key", to: "database" },
    { from: "key", to: "jwt", label: "Generate Random Data encryption Key (DEK)" },
    { from: "jwt", to: "client", label: "Success Response", type: "success" },
    { from: "validation", to: "client", label: "Validation error", type: "error" },
  ],
}

// Logout Flow
export const logoutFlow = {
  steps: [
    { id: "client", type: "client", label: "Client Frontend", x: 50, y: 200, width: 150, height: 80 },
    {
      id: "jwt",
      type: "middleware",
      label: "Remove JWT",
      description: "From Local storage",
      x: 250,
      y: 200,
      width: 150,
      height: 80,
    },
    { id: "login", type: "client", label: "Login Page", x: 450, y: 200, width: 150, height: 80 },
  ],
  connections: [
    { from: "client", to: "jwt" },
    { from: "jwt", to: "login" },
  ],
}

// Add Password Flow
export const addPasswordFlow = {
  steps: [
    { id: "client", type: "client", label: "Client Frontend", x: 50, y: 200, width: 150, height: 80 },
    { id: "validation", type: "middleware", label: "Validation Middleware", x: 250, y: 200, width: 150, height: 80 },
    { id: "auth", type: "middleware", label: "Auth Middleware", x: 450, y: 200, width: 150, height: 80 },
    { id: "backend", type: "server", label: "Backend", x: 650, y: 200, width: 150, height: 80 },
    { id: "encrypt", type: "encryption", label: "Encrypt Password", x: 850, y: 200, width: 150, height: 80 },
    { id: "database", type: "database", label: "Database", x: 1050, y: 200, width: 150, height: 80 },
  ],
  connections: [
    { from: "client", to: "validation", label: "POST /password/add" },
    { from: "validation", to: "auth" },
    { from: "auth", to: "backend", label: "Verify JWT" },
    { from: "backend", to: "encrypt", label: "Decrypt key from JWT" },
    { from: "encrypt", to: "database", label: "Save encrypted password" },
    { from: "database", to: "client", label: "Return confirmation", type: "success" },
    { from: "validation", to: "client", label: "Validation error", type: "error" },
    { from: "auth", to: "client", label: "Invalid Token", type: "error" },
  ],
}

// Update Password Flow
export const updatePasswordFlow = {
  steps: [
    { id: "client", type: "client", label: "Client Frontend", x: 50, y: 200, width: 150, height: 80 },
    { id: "validation", type: "middleware", label: "Validation Middleware", x: 250, y: 200, width: 150, height: 80 },
    { id: "auth", type: "middleware", label: "Auth Middleware", x: 450, y: 200, width: 150, height: 80 },
    { id: "backend", type: "server", label: "Backend", x: 650, y: 200, width: 150, height: 80 },
    { id: "encrypt", type: "encryption", label: "Encrypt Password", x: 850, y: 200, width: 150, height: 80 },
    { id: "database", type: "database", label: "Database", x: 1050, y: 200, width: 150, height: 80 },
  ],
  connections: [
    { from: "client", to: "validation", label: "POST /password/{id}" },
    { from: "validation", to: "auth" },
    { from: "auth", to: "backend", label: "Verify JWT" },
    { from: "backend", to: "encrypt", label: "Decrypt key from JWT" },
    { from: "encrypt", to: "database", label: "Save new encrypted password" },
    { from: "database", to: "client", label: "Return confirmation", type: "success" },
    { from: "validation", to: "client", label: "Validation error", type: "error" },
    { from: "auth", to: "client", label: "Invalid Token", type: "error" },
  ],
}

// Delete Password Flow
export const deletePasswordFlow = {
  steps: [
    { id: "client", type: "client", label: "Client Frontend", x: 50, y: 200, width: 150, height: 80 },
    { id: "validation", type: "middleware", label: "Validation Middleware", x: 250, y: 200, width: 150, height: 80 },
    { id: "auth", type: "middleware", label: "Auth Middleware", x: 450, y: 200, width: 150, height: 80 },
    { id: "backend", type: "server", label: "Backend", x: 650, y: 200, width: 150, height: 80 },
    { id: "database", type: "database", label: "Database", x: 850, y: 200, width: 150, height: 80 },
  ],
  connections: [
    { from: "client", to: "validation", label: "POST /password/{id}" },
    { from: "validation", to: "auth" },
    { from: "auth", to: "backend", label: "Verify JWT" },
    { from: "backend", to: "database", label: "Deletes password" },
    { from: "database", to: "client", label: "Return confirmation", type: "success" },
    { from: "validation", to: "client", label: "Validation error", type: "error" },
    { from: "auth", to: "client", label: "Invalid Token", type: "error" },
  ],
}

// Retrieve Password Flow
export const retrievePasswordFlow = {
  steps: [
    { id: "client", type: "client", label: "Client Frontend", x: 50, y: 200, width: 150, height: 80 },
    { id: "validation", type: "middleware", label: "Validation Middleware", x: 250, y: 200, width: 150, height: 80 },
    { id: "auth", type: "middleware", label: "Auth Middleware", x: 450, y: 200, width: 150, height: 80 },
    { id: "backend", type: "server", label: "Backend", x: 650, y: 200, width: 150, height: 80 },
    { id: "encrypt", type: "encryption", label: "Encrypt Password", x: 850, y: 200, width: 150, height: 80 },
    { id: "database", type: "database", label: "Database", x: 1050, y: 200, width: 150, height: 80 },
    { id: "decrypt", type: "encryption", label: "Encrypt Password", x: 850, y: 320, width: 150, height: 80 },
  ],
  connections: [
    { from: "client", to: "validation", label: "POST /password/{id}" },
    { from: "validation", to: "auth" },
    { from: "auth", to: "backend", label: "Verify JWT" },
    { from: "backend", to: "encrypt", label: "Decrypt key from JWT" },
    { from: "encrypt", to: "database", label: "Retrieve Encrypted Password" },
    { from: "database", to: "decrypt", label: "Decrypt Password" },
    { from: "decrypt", to: "client", label: "Return Password", type: "success" },
    { from: "validation", to: "client", label: "Validation error", type: "error" },
    { from: "auth", to: "client", label: "Invalid Token", type: "error" },
  ],
}

