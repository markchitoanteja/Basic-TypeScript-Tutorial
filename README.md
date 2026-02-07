# TypeScript + jQuery Beginner Tutorial (Folder-Based Build)

This tutorial demonstrates how to use **TypeScript with jQuery**, compile TypeScript into JavaScript **inside a build folder**, and generate a **minified `.min.js` file** using a **one-command build**.

This setup mirrors real-world professional workflows while remaining beginner-friendly.

---

## 📌 What You Will Learn

- TypeScript fundamentals
- Using jQuery with TypeScript
- DOM manipulation and events
- Working with arrays and timers
- Folder-based TypeScript compilation
- JavaScript minification with Terser
- One-command build pipelines using npm

---

## 📁 Project Structure

```
typescript_practice/
│
├── src/
│   └── main.ts
│
├── assets/
│   └── js/
│       ├── main.js
│       └── main.min.js
│
├── index.html
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## 🧱 Requirements

- Node.js (v16+ recommended)
- npm

---

## 🚀 Initial Setup

### 1️⃣ Initialize the Project

```bash
npm init -y
```

---

### 2️⃣ Install Required Packages

```bash
npm install jquery
npm install --save-dev typescript @types/jquery terser
```

Installed tools:

| Package | Purpose |
|------|------|
| TypeScript | Compile TS → JS |
| jQuery | DOM manipulation |
| @types/jquery | TypeScript support |
| Terser | JavaScript minification |

---

## ⚙️ TypeScript Configuration

**tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "rootDir": "src",
    "outDir": "assets/js",
    "strict": false
  },
  "include": ["src"]
}
```

⚠️ Important rule:
> When using `outDir`, always run `tsc` **without file arguments**.

---

## 🖥️ HTML Usage

```html
<h1 id="displayText">Hello World</h1>
<button id="actionButton">Click Me</button>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="assets/js/main.min.js"></script>
```

---

## 🧠 TypeScript Logic

**src/main.ts**

```ts
const messages: string[] = [
  "Processing complete",
  "Data loaded successfully",
  "Operation finished",
  "All done!"
];

let currentIndex = 0;

$("#actionButton").on("click", function () {
  const $button = $(this);

  $button.prop("disabled", true).text("Loading...");
  $("#displayText").text("Please wait...");

  setTimeout(() => {
    $("#displayText").text(messages[currentIndex]);
    currentIndex = (currentIndex + 1) % messages.length;

    $button.prop("disabled", false).text("Click Me");
  }, 2000);
});
```

---

## 🔨 One-Command Build

### package.json

```json
{
  "scripts": {
    "build": "tsc && terser assets/js/main.js -o assets/js/main.min.js --compress --mangle"
  }
}
```

### Run Build

```bash
npm run build
```

---

## 🔁 Build Pipeline Explained

```
src/main.ts
   ↓ (TypeScript Compiler)
assets/js/main.js
   ↓ (Terser Minifier)
assets/js/main.min.js
```

- If TypeScript fails → build stops
- Minification only runs on valid JavaScript

---

## 🔄 Application Flow

1. User clicks the button
2. Button disables and shows loading text
3. Message displays “Please wait…”
4. After 2 seconds, text updates from an array
5. Button resets
6. Each click cycles messages

---

## 🚫 .gitignore Recommendation

```gitignore
node_modules/
assets/js/*.js
assets/js/*.min.js
npm-debug.log*
.DS_Store
Thumbs.db
```

---

## 📦 Production Notes

- Edit **only** files in `/src`
- Never edit generated JS manually
- Commit source, not build artifacts (unless required)
- Use `main.min.js` in production

---

## 📚 Next Steps

- Add watch mode (`tsc --watch`)
- Add source maps
- Separate dev/prod builds
- Migrate to Vite or Webpack

---

## 📝 License

MIT — free to use and modify.
