<<<<<<< HEAD
README.md content:
# 🎮 MarshmallowGrid 🍡🪵🔥🤍

My custom wordle-inspired word-guessing grid game built with **vanilla HTML/CSS/JS**, perfect for surprising someone special! Customize the secret word and win message, then deploy in seconds to share a sweet, interactive puzzle.

---

## 🍡🪵🔥🤍 Live Demo

**Local**:
```bash
live-server index.html
or
python3 -m http.server 8000
# visit http://localhost:8000/index.html
Online (example):
https://fancy-alpaca-12345.netlify.app
✨ Features
💜 Purple & blue feedback
📱 Responsive grid & keyboard
🔒 Custom secret word (MOCHA)
💌 Custom win message
⚡ Zero-dependency
📁 File Structure
MarshmallowGrid/
├── index.html
├── style.css
├── script.js
└── README.md
⚙️ Install & Run
Open this folder in VS Code
Serve the files:
Live Server → “Go Live”
Python → python3 -m http.server 8000
Play at http://localhost:8000/index.html
🌐 Deploy
GitHub Pages:
Push to GitHub (branch = main, folder = root)
Visit https://Aidin12.github.io/marshmallow-grid/
📜 License
MIT © CookieMarshmallow akak Aidin12
🍡🪵🔥🤍🍡🪵🔥🤍🍡🪵🔥🤍🍡🪵🔥🤍
=======
# 🎮 MarshmallowGrid 🍡🪵🔥🤍

A soft-girl, pastel-themed word-guessing grid game built with **vanilla HTML/CSS/JS**, perfect for surprising someone special! Customize the secret word and win message, then deploy in seconds to share a sweet, interactive puzzle.

---

## 🚀 Live Demo

* **Local**

  ```bash
  # From project root:
  live-server index.html
  ```

  or

  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000/index.html
  ```

* **Online**: Deployed via Netlify Drop (example):
  [https://fancy-alpaca-12345.netlify.app](https://fancy-alpaca-12345.netlify.app)

---

## ✨ Features

* 💜 Purple & blue feedback instead of Wordle’s green/yellow
* 📱 Responsive grid & on-screen keyboard—works on desktop & mobile
* 🔒 Custom secret word (default: `MOCHA`)
* 💌 Custom win message (edit in `script.js`)
* ⚡ Zero-dependency—no build step, no frameworks

---

## 📁 File Structure

```
MarshmallowGrid/
├── index.html    # Markup & links to CSS + JS
├── style.css     # Pastel, responsive grid + keyboard styles
└── script.js     # Game logic, animation, win/lose handlers
```

---

## ⚙️ Installation & Usage

1. **Download** or **clone** this folder.
2. **Open** it in VS Code (or your editor of choice).
3. **Serve** the files:

   * With **Live Server**: click “Go Live” on `index.html`
   * Or via **Python**:

     ```bash
     cd MarshmallowGrid
     python3 -m http.server 8000
     ```
4. **Play** at `http://localhost:8000/index.html` (or your Live Server URL).

---

## 🎨 Customization

* **Secret word**: In `script.js`, edit:

  ```js
  const WORD = "MOCHA";
  ```

  Change to any **5-letter uppercase** string.

* **Win message**: In `script.js` ➔ `gameWon()`:

  ```js
  showMessage("🎉 You won! Meet me at the coffee shop at 6PM ☕💜", "green");
  ```

  Replace text inside `showMessage(...)`.

* **Colors & layout**: Tweak `style.css` variables in the `:root` block or adjust grid/keyboard rules.

---

## 🌐 Deployment

### Netlify Drop (fastest)

1. **Compress** the `MarshmallowGrid/` folder to `MarshmallowGrid.zip`.
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. **Drag & drop** your zip.
4. Share the provided public URL.

### GitHub Pages

1. Push this folder to a GitHub repo.
2. In **Settings** → **Pages**, select branch `main` and root folder `/`.
3. GitHub will publish at `https://<username>.github.io/<repo>/`.

---

## 📜 License

MIT © CookieMarshmallow aka Aidin12

---

> “Guess the word, one fluffy square at a time.” 🟪🟦
>>>>>>> a7210d1c1f6dcc12b6e19c1fff9cfdce6a0e7f28
