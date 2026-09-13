# NPM – Node Package Manager

## What is NPM?

- **npm** stands for **Node Package Manager**
- It is the standard package manager for **Node.js**
- It is a **command-line tool** — packages are installed through commands
- It also serves as a **library of packages** (a public registry)

---

## Key Concepts

### Package
> Someone else's written code that you can reuse in your project.

**Examples:** `express.js`, `react.js`

---

### node_modules
The `node_modules/` folder contains **every installed dependency** for your project, including all packages and their sub-dependencies.

---

### package-lock.json
Records the **exact version** of every installed dependency, including its sub-dependencies and their versions. Ensures consistent installs across environments.

---

### package.json
Contains **descriptive and functional metadata** about your project, such as:
- Project name
- Version
- Dependencies list

---

## Common Commands

| Command | Description |
|--------|-------------|
| `npm init` | Initializes a new project and creates `package.json` |
| `npm install` | Installs all dependencies listed in `package.json` (useful if `node_modules` is deleted) |
| `npm install <package>` | Installs a specific package and adds it to `package.json` |