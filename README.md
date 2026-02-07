# TypeScript + jQuery Beginner Tutorial

A step-by-step beginner tutorial demonstrating how to use **TypeScript with jQuery**, compile it to JavaScript, and produce a **minified `.min.js` file** for production.

---

## 📌 What You Will Learn

- TypeScript basics
- Using jQuery with TypeScript
- DOM manipulation & events
- Arrays and timers
- Compiling TypeScript
- Minifying JavaScript
- Simple build workflow

---

## 📁 Project Structure

```
typescript-jquery-tutorial/
│
├── index.html
├── main.ts
├── main.js
├── main.min.js
├── package.json
├── .gitignore
└── README.md
```

---

## 🧱 Requirements

- Node.js (v16+)
- npm

---

## 🚀 Initial Setup

### 1️⃣ Initialize Project

```bash
npm init -y
```

---

### 2️⃣ Install Required Packages

```bash
npm install jquery
npm install --save-dev typescript @types/jquery terser
```

This installs:
- **TypeScript** – compiler
- **jQuery** – DOM manipulation
- **@types/jquery** – TypeScript support
- **Terser** – JavaScript minifier

---

### 3️⃣ Verify TypeScript

```bash
npx tsc --version
```

---

## 🖥️ HTML (UI)

```html
<h1 id="displayText">Hello World</h1>
<button id="actionButton">Click Me</button>
```

---

## 🧠 TypeScript Logic

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

## 🔨 Build Process

### Compile TypeScript

```bash
npx tsc main.ts
```

---

### Minify Output

```bash
npx terser main.js -o main.min.js --compress --mangle
```

---

### One-Command Build

```json
"scripts": {
  "build": "tsc main.ts && terser main.js -o main.min.js --compress --mangle"
}
```

Run:

```bash
npm run build
```

---

## 🔄 App Flow

1. Click button
2. Button disables
3. Text shows “Please wait…”
4. After 2 seconds, text updates from array
5. Button resets

---

## 📦 Production Notes

- Use `main.min.js` in HTML
- Never commit `node_modules`

---

## 📝 License

MIT
