# 💖 Our Story — Handcrafted Interactive Love Story Website

A premium, interactive relationship website handcrafted for **Swetha**, capturing our journey from school days to forever across **Four Emotional Chapters**, interactive mini-games, memories, audio, and a sincere final message.

---

## 🌟 Features Overview

- **Chapter 01: Before We Became Us**
  - Anime-inspired school opening scene
  - Interactive chat simulator
  - First juice shop outing & animated ice cream single-spoon interaction
  - Sincere realization moment
- **Chapter 02: When We Became Us**
  - October 25, 2023 — First kiss in the computer class corridor
  - November 02, 2023 — First hug in her backyard with interactive silhouette warmth
  - November 14, 2023 (10:37 PM) — Instagram reel confession & official anniversary
  - November 15 — Birthday & anniversary celebration
  - Cinematic animated motorcycle night ride
- **Chapter 03: The Memories That Became Ours**
  - MGM Theme Park ₹579 authentic ticket
  - February 28, 2024 — Hackathon day & first bike ride
  - November 15, 2025 — Second anniversary cake cutting
  - **4 Interactive Mini-Games**:
    1. 🧩 3x3 Jigsaw Puzzle with shuffle & tile swapping
    2. 🔢 3x3 Sliding Puzzle with move counter & win detection
    3. 🃏 Memory Matching Card Game (8 cards / 4 pairs)
    4. ❓ Playful Relationship Quiz with personalized feedbacks
- **Chapter 04: Still Us (The Emotional Heart)**
  - Honest reflection on silly fights and prioritizing time
  - Dramatic reveal: *"What do I genuinely love about you? YOU."*
  - *"There's something I've never been very good at: Expressing what I feel"*
  - Handcrafted heartfelt apology and personal letter
  - Final choice: *"Can we talk?"* (`Maybe ❤️` / `Still Angry 😤` with zero pressure)
- **Audio & Sound**:
  - Background music player with sound wave visualizer & mute toggle
  - Built-in Web Audio chime synthesis and ambient chord fallback
- **Design & Performance**:
  - 100% Static (HTML5, CSS3, Vanilla JavaScript ES6+)
  - Mobile-first responsive layout (iPhone, Android, iPad, Laptop, Desktop)
  - Glassmorphism, smooth gradients, and ambient floating starry particles

---

## 📁 File Structure

```text
our-story/
│
├── index.html                  # Main website markup
├── style.css                   # Glassmorphism & romantic dark theme design system
├── script.js                   # Modular JavaScript games, audio, & interactivity
├── README.md                   # Complete customization & deployment guide
│
└── assets/
    ├── images/
    │   ├── school-boy-girl.jpg # School opening visual
    │   ├── photo-01.jpg        # Juice shop & ice cream memory
    │   ├── photo-02.jpg        # Night ride memory
    │   ├── photo-03.jpg        # MGM Theme park memory
    │   ├── photo-04.jpg        # Hackathon & celebration memory
    │   ├── night-ride.jpg      # Cinematic night ride
    │   ├── mgm-date.jpg        # Theme park date
    │   ├── hackathon.jpg       # Hackathon bike ride
    │   ├── first-kiss-memory.jpg # First kiss corridor
    │   ├── first-hug.jpg       # First hug backyard
    │   ├── anniversary-2025.jpg # 2nd anniversary celebration
    │   ├── puzzle-image.jpg    # Jigsaw puzzle artwork
    │   └── final-photo.jpg     # Sunset couple closing photo
    │
    ├── audio/
    │   └── background-music.mp3 # Romantic background music
    │
    └── icons/
        └── favicon.png         # Website favicon
```

---

## ✏️ How to Customize

All major configurations are conveniently located at the very top of [`script.js`](file:///d:/for_me/our-story/script.js).

### 1. Change Names
Open [`script.js`](file:///d:/for_me/our-story/script.js) and look at line 12:
```javascript
const CONFIG = {
  girlfriendName: "Swetha",
  yourName: "YOUR NAME", // Change this to your real name!
  ...
};
```

### 2. Replace Photos with Your Real Pictures
Simply place your real photos in `assets/images/` using the exact same file names:
- `school-boy-girl.jpg`
- `photo-01.jpg` (First outing / juice shop)
- `photo-02.jpg` (Night ride)
- `photo-03.jpg` (MGM theme park)
- `photo-04.jpg` (Hackathon / celebration)
- `first-kiss-memory.jpg`
- `first-hug.jpg`
- `anniversary-2025.jpg`
- `puzzle-image.jpg`
- `final-photo.jpg`

> 💡 **Tip**: JPG or PNG formats work great. Ensure filenames match exactly.

### 3. Replace the Background Music
Copy your favorite song (like a soft acoustic or lofi instrumental) into `assets/audio/` and rename it to `background-music.mp3`.

### 4. Edit the Quiz Questions
In [`script.js`](file:///d:/for_me/our-story/script.js), edit the `quizQuestions` array:
```javascript
quizQuestions: [
  {
    question: "Who is more stubborn in our relationship? 🤔",
    options: [
      { text: "Definitely Swetha 😇", feedback: "Haha! She always wins! ❤️" },
      { text: "Definitely Me 🙃", feedback: "Okay, guilty! 😂" },
      { text: "Both of us equally! 💥", feedback: "We balance each other out. ✨" }
    ]
  },
  ...
]
```

### 5. Edit the Apology & Sincere Message
In [`script.js`](file:///d:/for_me/our-story/script.js), adjust `apologyMessage`:
```javascript
apologyMessage: `Your personalized words here...`
```

---

## 🚀 How to Run Locally

You do not need Node.js, npm, or any build tools!

1. Open the folder `our-story/`.
2. Double-click **`index.html`** in Google Chrome, Microsoft Edge, Safari, or Firefox.
3. Everything works immediately!

---

## 🌐 How to Deploy to GitHub Pages (Free Hosting)

1. Create a new repository on [GitHub](https://github.com) (e.g., `our-story`).
2. Open your terminal in the `our-story/` folder.
3. Run the following Git commands:
```bash
git init
git add .
git commit -m "Handcrafted love story website for Swetha"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/our-story.git
git push -u origin main
```
4. On GitHub:
   - Go to your repository **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** → **Source**, select **Deploy from a branch**.
   - Select Branch: **`main`** / **`/ (root)`**.
   - Click **Save**.
5. Within 1–2 minutes, your website will be live at:
   `https://YOUR_USERNAME.github.io/our-story/`

### Future Updates:
Whenever you update photos or text:
```bash
git add .
git commit -m "Update memories and photos"
git push
```
GitHub Pages will automatically update in seconds!

---

## ❤️ Made with Love

Handcrafted especially for Swetha. May your story continue to grow more beautiful with each passing day. ✨
