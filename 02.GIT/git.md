# Git & GitHub — Lecture Notes

---

## What is Version Control?

**Version Control** is a system that records changes to a file over time so you can recall specific versions later.

- **Git** — Version control software that runs on your **local system**.
- **GitHub** — A **cloud-based** platform for hosting and collaborating on Git repositories.
- Git and GitHub are **different things**.

> Git manages the content of a file at different checkpoints (commits), allowing you to navigate between them.

> ⚠️ Install Git before running any of the commands below.

---

## Core Concepts

| Term       | Meaning                                              |
|------------|------------------------------------------------------|
| `commit`   | Create a checkpoint / snapshot of your code          |
| `push`     | Send code from local system → GitHub                 |
| `pull`     | Fetch code from GitHub → local system                |
| `clone`    | Download an entire GitHub repository to your system  |

---

## L1 — Basic Git Workflow (Local)

### Step 1 — Initialize Git
```bash
git init
```
Starts version control in the current folder.

---

### Step 2 — Create Checkpoints (Commits)

**1st Checkpoint**
```bash
git add .
git commit -m "first commit"
```

**2nd Checkpoint**
```bash
git add .
git commit -m "second commit"
```

**3rd Checkpoint**
```bash
git add .
git commit -m "third commit"
```

> `git add .` — stages all files in the folder for version control.  
> `git commit -m "message"` — creates a checkpoint with a descriptive message.

---

### Navigating Between Checkpoints

```bash
git checkout <commit-id>    # Go to a specific checkpoint
git checkout main           # Return to the latest/original state
```

```bash
clear                       # Clear the terminal screen
```

---

## L2 — Connecting Local Repo to GitHub

### Full Setup Flow

```bash
# 1. Initialize version control
git init

# 2. Stage all files
git add .

# 3. Create first commit (checkpoint)
git commit -m "first commit"

# 4. Rename branch from 'master' to 'main'
git branch -M main

# 5. Link local repo to GitHub repository
git remote add origin https://github.com/your-username/your-repo.git

# 6. Push code to GitHub
git push -u origin main
```

---

## Cloning a Repository

Download a GitHub repository to your local system:

```bash
git clone <github-repository-link>
```

> Use `clone` only for the **first time** you download a repo.  
> After that, use `git pull` to get updates — cloning again can overwrite your local changes.

---

## Collaboration Workflow 

### Collaborator Pushes Code

```bash
git add .
git commit -m "add sub func"
git push
```

Once pushed, the collaborator's code appears on GitHub but **not yet on your local system**.

---

### Pulling Collaborator's Changes to Your System

> ✅ Always **pull before you push** to avoid conflicts.

```bash
git pull
```

---

## Handling Merge Conflicts

If your local code and the remote code have conflicting changes:

```bash
# Step 1 — Set pull strategy
git config pull.rebase false

# Step 2 — Pull the latest code
git pull
```

> Resolve any conflicts using the **Merge Editor in VS Code**.

```bash
# Step 3 — Commit the merge
git commit -m "merge"

# Step 4 — Push resolved code
git push
```

---

## Quick Reference — All Commands

| Command | Description |
|---|---|
| `git init` | Initialize a Git repository |
| `git add .` | Stage all files |
| `git commit -m "msg"` | Create a checkpoint |
| `git branch -M main` | Rename branch to main |
| `git remote add origin <url>` | Link to GitHub repo |
| `git push -u origin main` | Push code to GitHub |
| `git push` | Push subsequent commits |
| `git pull` | Pull latest changes from GitHub |
| `git clone <url>` | Clone a repo for the first time |
| `git checkout <id>` | Go to a specific commit |
| `git checkout main` | Return to the latest state |
| `git config pull.rebase false` | Set merge strategy for pull |

---

> 📌 **Golden Rule:** Always run `git pull` before `git push` when collaborating to keep your local code in sync with the remote repository.

# Git Remote & Origin — Notes

---

## What is `origin`?

**`origin`** is just a **nickname (alias)** for the URL of your remote GitHub repository.

Instead of typing the full URL every time:
```bash
git push https://github.com/ronit-patidar/Demo01.git main
```

You give it a short name **`origin`**, and just type:
```bash
git push origin main
```

> 📌 `origin` is just a convention — it's the default name Git uses for the main remote. You could name it anything like `myrepo` or `github`, but everyone uses `origin` by convention.

---

## Setting Origin

When you run:
```bash
git remote add origin https://github.com/ronit-patidar/Demo01.git
```
You are saying → *"Call this repository URL as `origin`"*

### ⚠️ Important — No Angle Brackets!

| Usage | Example |
|---|---|
| ❌ Wrong | `git remote add origin <https://github.com/ronit-patidar/Demo01.git>` |
| ✅ Correct | `git remote add origin https://github.com/ronit-patidar/Demo01.git` |

> Angle brackets `< >` are used in documentation as placeholders. Always remove them in actual commands.

---

## Profile Link vs Repository Link

| Type | Example | Use? |
|---|---|---|
| ❌ Profile Link | `https://github.com/ronit-patidar` | Don't use |
| ✅ Repository Link | `https://github.com/ronit-patidar/Demo01.git` | Use this |

Always use the **repository link**, not your GitHub profile link.

---

## How to Get Your Repository Link

1. Go to your repository on GitHub
2. Click the green **`<> Code`** button
3. Select **HTTPS**
4. Copy the link shown

```
https://github.com/your-username/your-repo.git
```

---

## Common `git remote` Commands

| Command | Description |
|---|---|
| `git remote add origin <url>` | Link your local repo to GitHub |
| `git remote -v` | Check what origin is currently set to |
| `git remote remove origin` | Remove the existing origin |
| `git remote set-url origin <url>` | Update/change the origin URL |

---

## Error — `remote origin already exists`

This error appears when you try to add an origin that is already set.

**Fix Option 1 — Update the URL directly (recommended)**
```bash
git remote set-url origin https://github.com/ronit-patidar/Demo01.git
```

**Fix Option 2 — Remove and re-add**
```bash
git remote remove origin
git remote add origin https://github.com/ronit-patidar/Demo01.git
```

**Check what is already set**
```bash
git remote -v
```

---

> 📌 **Golden Rule:** Always use the `.git` repository link (not your profile link) when setting origin.