🎮🪵🔥🍡 MarshmellowGrid 🍡🔥🪵
My custom made, Wordle clone built with vanilla HTML/CSS/JS—perfect for surprising someone special! Customize the secret word and win message, then deploy in seconds to share a sweet, interactive puzzle.
🚀 Live Demo
Local:
# From project root:
live-server index.html
or
python3 -m http.server 8000
# then visit http://localhost:8000/index.html
Online:
Deployed via Netlify Drop (example):
https://fancy-alpaca-12345.netlify.app
✨ Features
💜 Purple & Blue feedback instead of Wordle’s green/yellow
📱 Responsive grid & on-screen keyboard—works on desktop & mobile
🔒 Custom secret word (e.g. "GRASS")
💌 Custom win message (e.g. “Meet me at the coffee shop at 6PM ☕”)
⚡ Zero-dependency—no build step, no frameworks
📁 File Structure
SoftGirlWordle/
├── index.html    ← markup & link to CSS + JS  
├── style.css     ← pastel, responsive grid + keyboard styles  
└── script.js     ← game logic, animation, win/lose handlers  
⚙️ Installation & Usage
Clone or download this folder to your machine.
Open the folder in VS Code (or your editor of choice).
Serve the files:
With Live Server: click “Go Live” on index.html
Or via Python:
cd yourfoldername
python3 -m http.server 8000
Play at http://localhost:8000/index.html (or your Live Server URL).
🎨 Customization
Secret word:
In script.js, edit:
const WORD = "MOCHA";  
→ change "MOCHA" to any 5-letter uppercase string.
Win message:
In script.js → gameWon():
showMessage("🎉 You won! Meet me at the coffee shop at 6PM ☕💜", "green");
→ replace text inside showMessage(...).
Colors & layout:
Tweak style.css variables in the :root block or adjust grid/keyboard rules.
🌐 Deployment
Netlify Drop (fastest)
Compress the SoftGirlWordle/ folder to SoftGirlWordle.zip.
Go to https://app.netlify.com/drop
Drag & drop your zip.
Share the provided public URL.
GitHub Pages
Push this folder to a GitHub repo.
In Settings → Pages, select branch main and root folder /.
GitHub will publish at
https://<your-username>.github.io/<repo-name>/.
📜 License
MIT © RoastieMarshmallowCookie aka Aidin12
🎮🪵🔥🍡 MarshmellowGrid 🍡🔥🪵
