# NPM Commands — Complete Reference

## What is NPM?
**Node Package Manager** — comes installed with Node.js. Used to install, manage, and run packages/dependencies in your project.

---

## Project Setup

```bash
npm init          # Create package.json (asks questions)
npm init -y       # Create package.json with all defaults (faster)
```

---

## Installing Packages

```bash
# Install a package (adds to dependencies)
npm install express
npm i express          # shorthand

# Install multiple packages at once
npm i express mongoose dotenv


# Install globally (available system-wide)
npm i -g nodemon
npm i -g create-react-app

# Install exact version
npm i express@4.18.0

# Install all dependencies from package.json
npm install
npm i
```

---

## Uninstalling Packages

```bash
npm uninstall express
npm un express         # shorthand

# Uninstall global package
npm uninstall -g nodemon
```

---

## Running Scripts

```bash
npm run dev        # Run "dev" script from package.json
npm run build      # Run "build" script
npm run start      # Run "start" script
npm start          # shorthand for start only
npm test           # shorthand for test only
```

Your `package.json` scripts section:
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "vite build"
  }
}
```

---

## Updating Packages

```bash
npm update                  # Update all packages
npm update express          # Update specific package
npm outdated                # See which packages are outdated
```

---

## Viewing Info

```bash
npm list                    # List installed packages

npm show express            # Info about a package
npm show express version    # Just the version
```

---
## Common MERN Stack Installs

```

# Create React App / Vite
npx create-react-app myapp
npm create vite@latest myapp
```

---

## NPX vs NPM

| | `npm` | `npx` |
|---|---|---|
| Purpose | Install & manage packages | Run a package without installing |
| Example | `npm i -g create-react-app` | `npx create-react-app myapp` |
| Installs globally? | ✅ Yes | ❌ No (runs once, discards) |

> **Prefer `npx`** for one-time tools like project scaffolding.

---

## Quick Cheatsheet

```bash
npm init -y                  # Start a project
npm i <package>              # Install dependency
npm i -g <package>           # Install globally
npm uninstall <package>      # Remove package
npm run <script>             # Run a script
npm outdated                 # Check for updates
```