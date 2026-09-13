# Terminal & Linux Commands — Lecture Notes

---

## Key Concepts

### Terminal
A **terminal** is an input and output environment where you interact with your computer via text.

### Command Line
Any interface that accepts **textual commands** to operate the system (generally window-centric).

### Shell
A **running program** inside the terminal that interprets and executes your commands.

---

## Directory Symbols

| Symbol | Meaning |
|--------|---------|
| `/`    | Root directory |
| `~`    | Home directory |

---

## Navigation Commands

### `pwd` — Print Working Directory
Shows the current working directory you are in.
```bash
pwd
```

### `cd` — Change Directory
Used to navigate into or out of directories.

```bash
cd ~                          # Go to home directory
cd Desktop/Delta              # Relative path
cd /Users/ShradhaKhapra/Desktop  # Absolute path
cd javascript                 # Enter a directory
cd JAVASCRIPT/wheatherApp     # Enter multiple directories at once
cd ..                         # Go back one level
cd ../..                      # Go back two levels
```

> **Relative path** — path relative to your current location.  
> **Absolute path** — full path starting from the root `/`.

---

## Listing & Viewing

### `ls` — List Files / Directories
```bash
ls (Gitbash)
dir (Powershell)
```

### `man` — Manual / Help
View the manual for any command.
```bash
man ls
man mkdir
```

---

## Creating Files & Directories

### `touch` — Create a File
- If the file **does not exist** → creates it.
- If the file **already exists** → updates its timestamp.

```bash
New-Item index.html
New-Item style.css
New-Item script.js
New-Item abc.txt
```

> **Platform Note:**
> | Platform   | Command      |
> |------------|--------------|
> | Git Bash   | `touch`      |
> | PowerShell | `New-Item`   |

### `mkdir` — Make Directory (Folder)
```bash
mkdir my-folder
```

---

## Removing Files & Directories

> ⚠️ **Warning:** Files deleted from the terminal **cannot be restored**. Be careful!

| Command   | Description                   |
|-----------|-------------------------------|
| `rm`      | Remove a file                 |
| `rmdir`   | Remove an **empty** folder    |

```bash
rm file.txt
rmdir empty-folder
```

---

## Flags

**Flags** are characters passed with commands to **modify their behaviour**.

---

## Miscellaneous Commands

| Command         | Description                    |
|-----------------|-------------------------------|
| `git --version` | Check installed Git version   |
| `clear`         | Clear the terminal screen     |

---

## Keyboard Shortcuts

| Key        | Action                        |
|------------|-------------------------------|
| `↑` (Up)   | Show previous command         |
| `↓` (Down) | Show next command             |

---

> 📌 **Note:** Terminal commands are **case-sensitive**. Always double-check before running destructive commands like `rm -rf`.