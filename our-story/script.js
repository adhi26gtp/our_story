/**
 * ==============================================================================
 * OUR STORY — HANDCRAFTED INTERACTIVE LOVE STORY JAVASCRIPT
 * Built with love for Swetha ❤️
 * ==============================================================================
 */

// ==============================================================================
// 1. CONFIGURATION OBJECT (Easily Editable by You!)
// ==============================================================================
const CONFIG = {
  girlfriendName: "Swetha",
  yourName: "YOUR NAME",
  music: "assets/audio/background-music.mp3",
  schoolImage: "assets/images/school-boy-girl.jpg",
  puzzleImage: "assets/images/puzzle-image.jpg",
  finalPhoto: "assets/images/final-photo.jpg",

  // Relationship Milestones / Timeline
  timelineEntries: [
    {
      title: "How We Met",
      date: "School Days",
      desc: "In the warm sunlight of our school corridor, two ordinary students noticed each other."
    },
    {
      title: "First Juice Shop Date",
      date: "First Outing",
      desc: "One spoon, one ice cream, two people. A tiny moment that turned into an unforgettable memory."
    },
    {
      title: "Our First Kiss",
      date: "October 25, 2023",
      desc: "Corridor of computer class. Soft lighting, quiet whispers, and a moment where time stood still."
    },
    {
      title: "Our First Hug",
      date: "November 02, 2023",
      desc: "Backyard of her home. Under the evening stars, holding each other close."
    },
    {
      title: "Official Confession",
      date: "November 14, 2023 • 10:37 PM",
      desc: "Confessed through an Instagram reel. When 'you and I' officially became 'forever'."
    },
    {
      title: "Anniversary & Birthday Celebration",
      date: "November 15",
      desc: "We celebrate on November 15th because it is Swetha's birthday. One special date, two reasons to celebrate!"
    },
    {
      title: "Hackathon & First Bike Ride",
      date: "February 28, 2024",
      desc: "First hackathon day, and also the memorable day she rode the bike for the first time!"
    },
    {
      title: "MGM Theme Park Date",
      date: "Theme Park Adventure",
      desc: "A ₹579 ticket, countless rides, laughter, and pure happiness together."
    },
    {
      title: "Second Anniversary",
      date: "November 15, 2025",
      desc: "Homemade cake, shared food with friends, and celebrating two beautiful years of us."
    }
  ],

  // Memory Matching Game Pairs (4 Pairs / 8 Cards)
  matchingPairs: [
    { id: "night-ride", name: "Night Ride", icon: "🏍️", desc: "Our first night ride after computer coaching class!" },
    { id: "mgm-date", name: "MGM Theme Park", icon: "🎡", desc: "A ₹579 ticket that bought us endless joy and memories." },
    { id: "hackathon", name: "Hackathon Day", icon: "💻", desc: "Feb 28, 2024: Coding & her first bike ride adventure!" },
    { id: "anniversary", name: "Anniversary Cake", icon: "🎂", desc: "Cutting our handmade cake and celebrating two years of love." }
  ],

  // Relationship Quiz Questions
  quizQuestions: [
    {
      question: "Who is more stubborn in our relationship? 🤔",
      options: [
        { text: "Definitely Swetha 😇", feedback: "Haha! She has that cute stubborn pout that always wins! ❤️" },
        { text: "Definitely Me 🙃", feedback: "Okay, guilty! But only because I care so much about you. 😂" },
        { text: "Both of us equally! 💥", feedback: "A match made in stubborn heaven! We balance each other out. ✨" }
      ]
    },
    {
      question: "Who usually starts the silly little arguments? 🥊",
      options: [
        { text: "Swetha (always with a valid reason!)", feedback: "True! And even when she's mad, she's adorable. ❤️" },
        { text: "Me (being totally clueless)", feedback: "Yep... I need to pay more attention and express things better! 🥺" },
        { text: "Hunger monster strikes first! 🍕", feedback: "100% accurate! Food solves 99% of our misunderstandings! 😂" }
      ]
    },
    {
      question: "Who apologizes first when things get quiet? 🕊️",
      options: [
        { text: "Me (I can't stand being away from you)", feedback: "Because losing even a single minute of your smile hurts too much. ❤️" },
        { text: "Swetha (with a soft gentle hug)", feedback: "Her hugs have magical healing powers that melt any fight away. 🤗" },
        { text: "Whoever breaks and sends a funny reel first", feedback: "Reels are our official peace treaties! 📱✨" }
      ]
    },
    {
      question: "Who misses the other person first? 🥺",
      options: [
        { text: "Me by a thousand miles!", feedback: "I miss you every second we're not talking, even when I forget to say it out loud." },
        { text: "Swetha (in quiet secret)", feedback: "Even if she won't always admit it first, I know the love is there! ❤️" },
        { text: "Both of us exactly at 10:37 PM ❤️", feedback: "Our magical time! Forever and always locked in our hearts. 🔐" }
      ]
    }
  ],

  // Handcrafted Apology & Sincere Message
  apologyMessage: `I know saying sorry doesn't automatically fix everything.
I know I could have handled some things differently.
And I'm genuinely sorry for the times I've hurt you or made you feel like you weren't getting enough of me.
I'm not asking you to suddenly stop being angry. I'm not asking you to forget anything.
I just want you to know that I care about you more than I have sometimes been able to express.
And I want to get better at that.
Because you matter to me. More than I have probably managed to put into words.`,

  finalMessage: "Loving you isn't something I ever want to be bad at expressing. You are my home, Swetha."
};

// ==============================================================================
// 2. GLOBAL STATE & WEB AUDIO ENGINE
// ==============================================================================
const STATE = {
  currentChapter: 1,
  highestChapterReached: 1,
  audioPlaying: false,
  audioContext: null,
  isAudioInitialized: false,
  bitesShared: 1,
  jigsawMoves: 0,
  jigsawMatches: 0,
  slidingMoves: 0,
  slidingSolved: false,
  memoryFlips: 0,
  memoryMatchedPairs: 0,
  quizCurrentIndex: 0,
  quizAnswers: []
};

// ==============================================================================
// 3. SOUND SYNTHESIS & AUDIO PLAYER
// ==============================================================================
class RomanticAudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.ctx = new AudioContext();
    }
  }

  playChime(freq = 523.25, type = "sine", duration = 0.6) {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") this.ctx.resume();

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio chime play note failed", e);
    }
  }

  playPopSound() {
    this.playChime(440, "triangle", 0.15);
  }

  playSuccessSound() {
    if (!this.ctx) this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq, "sine", 0.4);
      }, idx * 100);
    });
  }

  // Generative ambient romantic lofi chords if mp3 is missing or blocked
  startAmbientSynthesizer() {
    if (!this.ctx) this.init();
    if (!this.ctx || this.isPlaying) return;
    this.isPlaying = true;

    const chords = [
      [220.00, 261.63, 329.63, 392.00], // Am7
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [130.81, 196.00, 261.63, 329.63], // Cmaj7
      [196.00, 246.94, 293.66, 392.00]  // G
    ];

    let chordIdx = 0;
    const playNextChord = () => {
      if (!this.isPlaying || !this.ctx) return;
      if (this.ctx.state === "suspended") this.ctx.resume();

      const chord = chords[chordIdx % chords.length];
      chordIdx++;

      chord.forEach(freq => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

          gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.025, this.ctx.currentTime + 1.5);
          gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 6.0);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start();
          osc.stop(this.ctx.currentTime + 6.0);
        } catch (e) {}
      });

      this.timer = setTimeout(playNextChord, 4000);
    };

    playNextChord();
  }

  stopAmbientSynthesizer() {
    this.isPlaying = false;
    if (this.timer) clearTimeout(this.timer);
  }
}

const soundEngine = new RomanticAudioSynthesizer();

// ==============================================================================
// 4. MAIN INITIALIZATION (init())
// ==============================================================================
function init() {
  applyConfigToDOM();
  initializeAmbientCanvas();
  initializeMusic();
  initializeNavigation();
  initializeProgress();
  initializeChatScene();
  initializeIceCreamInteraction();
  initializeHugInteraction();
  initializeConfessionAnimation();
  initializeNightRide();
  initializeMGMInteraction();
  initializeHackathonInteraction();
  initializeCakeCelebration();
  initializeJigsawPuzzle();
  initializeSlidingPuzzle();
  initializeMemoryGame();
  initializeQuiz();
  initializeLoveReveal();
  initializeFinalMessage();
  initializeFinalChoice();
  initializeActionButtons();

  // Scroll listener for dynamic progress update
  window.addEventListener("scroll", handleScrollProgress, { passive: true });
}

/**
 * Apply customizable strings from CONFIG into HTML elements
 */
function applyConfigToDOM() {
  document.querySelectorAll(".girlfriend-name-text").forEach(el => {
    el.textContent = CONFIG.girlfriendName;
  });
  document.querySelectorAll(".your-name-text").forEach(el => {
    el.textContent = CONFIG.yourName;
  });

  const letterBody = document.getElementById("apology-letter-body");
  if (letterBody && CONFIG.apologyMessage) {
    const paragraphs = CONFIG.apologyMessage.split("\n\n");
    letterBody.innerHTML = paragraphs.map((p, idx) => {
      if (idx === paragraphs.length - 1) {
        return `<p class="letter-highlight">${escapeHTML(p)}</p>`;
      }
      return `<p>${escapeHTML(p)}</p>`;
    }).join("");
  }
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// ==============================================================================
// 5. AMBIENT PARTICLES CANVAS (Floating Starry Dust & Petals)
// ==============================================================================
function initializeAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(60, Math.floor(width / 20));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.7 + 0.2,
      color: Math.random() > 0.4 ? "rgba(255, 120, 160, " : "rgba(255, 230, 150, "
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y > height) {
        p.y = -10;
        p.x = Math.random() * width;
      }
      if (p.x > width) p.x = 0;
      if (p.x < 0) p.x = width;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${p.opacity})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#ff4d79";
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}

// ==============================================================================
// 6. BACKGROUND MUSIC & SOUND ENGINE (initializeMusic)
// ==============================================================================
function initializeMusic() {
  const bgAudio = document.getElementById("bg-audio");
  const musicToggle = document.getElementById("music-toggle");
  const musicIcon = document.getElementById("music-icon");
  const startMissionBtn = document.getElementById("start-mission-btn");

  if (!musicToggle || !bgAudio) return;

  function togglePlayMusic() {
    soundEngine.init();
    if (STATE.audioPlaying) {
      bgAudio.pause();
      soundEngine.stopAmbientSynthesizer();
      STATE.audioPlaying = false;
      musicToggle.classList.remove("playing");
      if (musicIcon) musicIcon.textContent = "🔇";
      showToast("Music paused");
    } else {
      bgAudio.play().then(() => {
        STATE.audioPlaying = true;
        musicToggle.classList.add("playing");
        if (musicIcon) musicIcon.textContent = "🎵";
        showToast("Playing Our Melody 🎶");
      }).catch(err => {
        // Fallback to synthesized ambient romantic melody if raw audio is blocked/missing
        console.log("Using Web Audio fallback synthesizer", err);
        soundEngine.startAmbientSynthesizer();
        STATE.audioPlaying = true;
        musicToggle.classList.add("playing");
        if (musicIcon) musicIcon.textContent = "🎵";
        showToast("Playing Ambient Romantic Melody 🎶");
      });
    }
  }

  musicToggle.addEventListener("click", () => {
    soundEngine.playPopSound();
    togglePlayMusic();
  });

  if (startMissionBtn) {
    startMissionBtn.addEventListener("click", () => {
      soundEngine.playSuccessSound();
      if (!STATE.audioPlaying) {
        togglePlayMusic();
      }
      showSection(1);
      const ch1 = document.getElementById("chapter-1");
      if (ch1) {
        ch1.scrollIntoView({ behavior: "smooth" });
      }
      showToast("Welcome to Our Story, Swetha ❤️");
    });
  }
}

// ==============================================================================
// 7. CHAPTER NAVIGATION (initializeNavigation)
// ==============================================================================
function initializeNavigation() {
  const navTabs = document.querySelectorAll(".nav-tab");
  navTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const chapterNum = parseInt(tab.dataset.chapter, 10);
      soundEngine.playPopSound();
      showSection(chapterNum);
      const targetCh = document.getElementById(`chapter-${chapterNum}`);
      if (targetCh) {
        targetCh.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Next Chapter Buttons inside cards
  document.querySelectorAll(".next-chapter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = parseInt(btn.dataset.target, 10);
      soundEngine.playSuccessSound();
      showSection(target);
      const targetCh = document.getElementById(`chapter-${target}`);
      if (targetCh) {
        targetCh.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function showSection(chapterNumber) {
  STATE.currentChapter = chapterNumber;
  if (chapterNumber > STATE.highestChapterReached) {
    STATE.highestChapterReached = chapterNumber;
  }

  // Update nav tabs
  document.querySelectorAll(".nav-tab").forEach(tab => {
    const tabCh = parseInt(tab.dataset.chapter, 10);
    tab.classList.toggle("active", tabCh === chapterNumber);
  });

  // Show active chapter view
  document.querySelectorAll(".chapter-view").forEach((view, idx) => {
    const chNum = idx + 1;
    view.classList.toggle("active", chNum === chapterNumber);
  });

  updateProgress();
}

// ==============================================================================
// 8. PROGRESS INDICATOR (initializeProgress, updateProgress)
// ==============================================================================
function initializeProgress() {
  updateProgress();
}

function updateProgress() {
  const progressBar = document.getElementById("story-progress-bar");
  const progressText = document.getElementById("progress-text");

  // Calculate percentage based on current chapter
  // Ch1 -> 25%, Ch2 -> 50%, Ch3 -> 75%, Ch4 -> 100%
  const pct = Math.min(100, Math.round((STATE.currentChapter / 4) * 100));

  if (progressBar) progressBar.style.width = `${pct}%`;
  if (progressText) progressText.textContent = `${pct}%`;
}

function handleScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (docHeight <= 0) return;
  const scrollPct = Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100)));

  const progressBar = document.getElementById("story-progress-bar");
  const progressText = document.getElementById("progress-text");
  if (progressBar) progressBar.style.width = `${scrollPct}%`;
  if (progressText) progressText.textContent = `${scrollPct}%`;
}

// ==============================================================================
// 9. CHAPTER 01: CHAT SIMULATOR (Small Conversations)
// ==============================================================================
function initializeChatScene() {
  const replyBtn = document.getElementById("chat-reply-btn");
  const messagesBox = document.getElementById("chat-messages");
  if (!replyBtn || !messagesBox) return;

  const extraMessages = [
    { sender: "received", text: "Did you get home safely? 🌙", time: "9:45 PM" },
    { sender: "sent", text: "Yes! Just thinking about our conversation today 😊", time: "9:46 PM" },
    { sender: "received", text: "Me too... Can't wait for tomorrow! ❤️", time: "9:47 PM" },
    { sender: "sent", text: "Every day with you is my favourite day. ✨", time: "9:48 PM" }
  ];

  let msgIdx = 0;

  replyBtn.addEventListener("click", () => {
    if (msgIdx >= extraMessages.length) {
      showToast("You've unlocked all the chats! ❤️");
      return;
    }

    soundEngine.playPopSound();
    const m = extraMessages[msgIdx];
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${m.sender} animate-pop`;
    bubble.innerHTML = `<p>${escapeHTML(m.text)}</p><span class="chat-time">${m.time}</span>`;
    messagesBox.appendChild(bubble);
    messagesBox.scrollTop = messagesBox.scrollHeight;
    msgIdx++;

    if (msgIdx >= extraMessages.length) {
      replyBtn.innerHTML = "<span>✨ All messages sent!</span>";
      replyBtn.disabled = true;
    }
  });
}

// ==============================================================================
// 10. CHAPTER 01: ICE CREAM & ONE-SPOON INTERACTION
// ==============================================================================
function initializeIceCreamInteraction() {
  const biteBtn = document.getElementById("take-bite-btn");
  const spoon = document.getElementById("animated-spoon");
  const biteCountEl = document.getElementById("bite-count");

  if (!biteBtn || !spoon) return;

  function takeBite() {
    soundEngine.playPopSound();
    STATE.bitesShared++;
    if (biteCountEl) biteCountEl.textContent = STATE.bitesShared;

    spoon.classList.remove("bite-anim");
    void spoon.offsetWidth; // Trigger reflow
    spoon.classList.add("bite-anim");

    showToast(`Shared another sweet bite together! (${STATE.bitesShared} bites) 🍨`);
  }

  biteBtn.addEventListener("click", takeBite);
  spoon.addEventListener("click", takeBite);
}

// ==============================================================================
// 11. CHAPTER 02: HUG INTERACTION
// ==============================================================================
function initializeHugInteraction() {
  const hugBtn = document.getElementById("hug-btn");
  const hugStage = document.querySelector(".hug-stage");

  if (!hugBtn || !hugStage) return;

  hugBtn.addEventListener("click", () => {
    soundEngine.playSuccessSound();
    hugStage.classList.toggle("hugging");
    const isHugging = hugStage.classList.contains("hugging");
    hugBtn.innerHTML = isHugging ? "<span>🤗 Holding Tight</span>" : "<span>✨ Feel the Warmth</span>";
    showToast(isHugging ? "Two hearts beating together in the quiet night ❤️" : "A memory held close forever.");
  });
}

// ==============================================================================
// 12. CHAPTER 02: CONFESSION ANIMATION
// ==============================================================================
function initializeConfessionAnimation() {
  const confessionUI = document.getElementById("confession-ui");
  if (!confessionUI) return;

  confessionUI.addEventListener("click", () => {
    soundEngine.playSuccessSound();
    showToast("November 14, 2023 • 10:37 PM — Officially Forever ❤️");
  });
}

// ==============================================================================
// 13. CHAPTER 02: NIGHT RIDE ANIMATION
// ==============================================================================
function initializeNightRide() {
  const roadBox = document.getElementById("road-animation-box");
  const revBtn = document.getElementById("rev-engine-btn");

  if (!roadBox) return;

  function boostBike() {
    soundEngine.playChime(320, "sawtooth", 0.4);
    roadBox.classList.add("boosted");
    setTimeout(() => {
      roadBox.classList.remove("boosted");
    }, 1200);
    showToast("Zooming under the midnight streetlights! 🏍️💨");
  }

  roadBox.addEventListener("click", boostBike);
  if (revBtn) revBtn.addEventListener("click", boostBike);
}

// ==============================================================================
// 14. CHAPTER 03: MEMORY INTERACTIONS (MGM, Hackathon, Cake)
// ==============================================================================
function initializeMGMInteraction() {
  const ticket = document.getElementById("mgm-ticket");
  if (!ticket) return;

  ticket.addEventListener("click", () => {
    soundEngine.playSuccessSound();
    showToast("Admit Two: Date with Swetha at MGM Theme Park! 🎡❤️");
  });

  document.querySelectorAll(".tap-memory-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      soundEngine.playPopSound();
      const msg = btn.dataset.msg || "An unforgettable memory!";
      showToast(msg);
    });
  });
}

function initializeHackathonInteraction() {
  const cheerBtn = document.getElementById("cheer-bike-btn");
  const bikeIcon = document.querySelector(".bike-icon");

  if (!cheerBtn) return;

  cheerBtn.addEventListener("click", () => {
    soundEngine.playSuccessSound();
    if (bikeIcon) {
      bikeIcon.style.transform = "translateX(25px) rotate(-10deg) scale(1.2)";
      setTimeout(() => {
        bikeIcon.style.transform = "translateX(0) rotate(0) scale(1)";
      }, 600);
    }
    showToast("Cheering Swetha on her very first bike ride! 🛵🎉");
  });
}

function initializeCakeCelebration() {
  const blowBtn = document.getElementById("blow-candles-btn");
  const cakeIcon = document.getElementById("cake-blow-icon");

  if (!blowBtn || !cakeIcon) return;

  blowBtn.addEventListener("click", () => {
    soundEngine.playSuccessSound();
    cakeIcon.textContent = "✨🍰✨";
    blowBtn.innerHTML = "<span>🎉 Candles Blown! Happy 2nd Anniversary!</span>";
    showToast("Happy Anniversary! Made with love, shared with joy ❤️");
  });
}

// ==============================================================================
// 15. GAME 01: 3x3 JIGSAW PUZZLE (initializeJigsawPuzzle)
// ==============================================================================
function initializeJigsawPuzzle() {
  const board = document.getElementById("jigsaw-board");
  const movesEl = document.getElementById("jigsaw-moves");
  const matchesEl = document.getElementById("jigsaw-matches");
  const shuffleBtn = document.getElementById("jigsaw-shuffle-btn");
  const resetBtn = document.getElementById("jigsaw-reset-btn");
  const winOverlay = document.getElementById("jigsaw-win-overlay");

  if (!board) return;

  // Correct order: 0,1,2, 3,4,5, 6,7,8
  let currentOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let selectedTileIdx = null;

  function renderBoard() {
    board.innerHTML = "";
    let correctCount = 0;

    currentOrder.forEach((pos, currentIdx) => {
      const tile = document.createElement("div");
      tile.className = "jigsaw-tile";
      if (selectedTileIdx === currentIdx) tile.classList.add("selected");

      // Calculate background position
      const row = Math.floor(pos / 3);
      const col = pos % 3;
      // Position percentage: 0%, 50%, 100%
      tile.style.backgroundImage = `url('${CONFIG.puzzleImage}')`;
      tile.style.backgroundPosition = `${col * 50}% ${row * 50}%`;
      tile.dataset.index = currentIdx;

      if (pos === currentIdx) {
        correctCount++;
      }

      tile.addEventListener("click", () => handleTileClick(currentIdx));
      board.appendChild(tile);
    });

    STATE.jigsawMatches = correctCount;
    if (matchesEl) matchesEl.textContent = `${correctCount}/9`;
    if (movesEl) movesEl.textContent = STATE.jigsawMoves;

    if (correctCount === 9 && STATE.jigsawMoves > 0) {
      soundEngine.playSuccessSound();
      if (winOverlay) winOverlay.classList.remove("hidden");
    }
  }

  function handleTileClick(idx) {
    soundEngine.playPopSound();
    if (selectedTileIdx === null) {
      selectedTileIdx = idx;
      renderBoard();
    } else if (selectedTileIdx === idx) {
      selectedTileIdx = null;
      renderBoard();
    } else {
      // Swap tiles
      const temp = currentOrder[selectedTileIdx];
      currentOrder[selectedTileIdx] = currentOrder[idx];
      currentOrder[idx] = temp;
      STATE.jigsawMoves++;
      selectedTileIdx = null;
      renderBoard();
    }
  }

  function shuffle() {
    soundEngine.playPopSound();
    STATE.jigsawMoves = 0;
    selectedTileIdx = null;
    if (winOverlay) winOverlay.classList.add("hidden");

    // Fisher-Yates shuffle
    for (let i = currentOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [currentOrder[i], currentOrder[j]] = [currentOrder[j], currentOrder[i]];
    }
    renderBoard();
    showToast("Jigsaw puzzle shuffled! Tap two tiles to swap.");
  }

  function reset() {
    soundEngine.playPopSound();
    STATE.jigsawMoves = 0;
    selectedTileIdx = null;
    currentOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    if (winOverlay) winOverlay.classList.add("hidden");
    renderBoard();
    showToast("Puzzle reset.");
  }

  if (shuffleBtn) shuffleBtn.addEventListener("click", shuffle);
  if (resetBtn) resetBtn.addEventListener("click", reset);

  // Initial shuffle on load
  shuffle();
}

// ==============================================================================
// 16. GAME 02: 3x3 SLIDING PUZZLE (initializeSlidingPuzzle)
// ==============================================================================
function initializeSlidingPuzzle() {
  const board = document.getElementById("sliding-board");
  const movesEl = document.getElementById("sliding-moves");
  const statusEl = document.getElementById("sliding-status");
  const shuffleBtn = document.getElementById("sliding-shuffle-btn");
  const resetBtn = document.getElementById("sliding-reset-btn");
  const winOverlay = document.getElementById("sliding-win-overlay");

  if (!board) return;

  // 8 tiles (0-7) and 1 empty space (8)
  let tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  function isSolvable(arr) {
    let inversions = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] !== 8 && arr[j] !== 8 && arr[i] > arr[j]) {
          inversions++;
        }
      }
    }
    return inversions % 2 === 0;
  }

  function renderBoard() {
    board.innerHTML = "";
    let isWon = true;

    tiles.forEach((val, idx) => {
      const tile = document.createElement("div");
      tile.className = "sliding-tile";

      if (val === 8) {
        tile.classList.add("empty-tile");
      } else {
        const row = Math.floor(val / 3);
        const col = val % 3;
        tile.style.backgroundImage = `url('${CONFIG.schoolImage}')`;
        tile.style.backgroundPosition = `${col * 50}% ${row * 50}%`;
        tile.dataset.value = val;
      }

      if (val !== idx) isWon = false;

      tile.addEventListener("click", () => handleTileClick(idx));
      board.appendChild(tile);
    });

    if (movesEl) movesEl.textContent = STATE.slidingMoves;

    if (isWon && STATE.slidingMoves > 0) {
      STATE.slidingSolved = true;
      soundEngine.playSuccessSound();
      if (winOverlay) winOverlay.classList.remove("hidden");
    }
  }

  function handleTileClick(clickedIdx) {
    const emptyIdx = tiles.indexOf(8);
    const validMoves = getAdjacentIndices(emptyIdx);

    if (validMoves.includes(clickedIdx)) {
      soundEngine.playPopSound();
      tiles[emptyIdx] = tiles[clickedIdx];
      tiles[clickedIdx] = 8;
      STATE.slidingMoves++;
      renderBoard();
    }
  }

  function getAdjacentIndices(idx) {
    const row = Math.floor(idx / 3);
    const col = idx % 3;
    const adjacent = [];
    if (row > 0) adjacent.push(idx - 3);
    if (row < 2) adjacent.push(idx + 3);
    if (col > 0) adjacent.push(idx - 1);
    if (col < 2) adjacent.push(idx + 1);
    return adjacent;
  }

  function shuffle() {
    soundEngine.playPopSound();
    STATE.slidingMoves = 0;
    STATE.slidingSolved = false;
    if (winOverlay) winOverlay.classList.add("hidden");

    // Perform random valid sliding moves to ensure solvability
    for (let i = 0; i < 60; i++) {
      const emptyIdx = tiles.indexOf(8);
      const valid = getAdjacentIndices(emptyIdx);
      const chosen = valid[Math.floor(Math.random() * valid.length)];
      tiles[emptyIdx] = tiles[chosen];
      tiles[chosen] = 8;
    }
    renderBoard();
    showToast("Sliding puzzle shuffled!");
  }

  function reset() {
    soundEngine.playPopSound();
    STATE.slidingMoves = 0;
    tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    if (winOverlay) winOverlay.classList.add("hidden");
    renderBoard();
    showToast("Sliding puzzle reset.");
  }

  if (shuffleBtn) shuffleBtn.addEventListener("click", shuffle);
  if (resetBtn) resetBtn.addEventListener("click", reset);

  shuffle();
}

// ==============================================================================
// 17. GAME 03: MEMORY MATCHING GAME (initializeMemoryGame)
// ==============================================================================
function initializeMemoryGame() {
  const grid = document.getElementById("memory-grid");
  const flipsEl = document.getElementById("mem-flips");
  const pairsEl = document.getElementById("mem-pairs");
  const restartBtn = document.getElementById("memory-restart-btn");
  const winMsg = document.getElementById("memory-win-msg");

  if (!grid) return;

  let deck = [];
  let flippedCards = [];
  let isLocked = false;

  function buildDeck() {
    // 4 pairs duplicated -> 8 cards
    deck = [];
    CONFIG.matchingPairs.forEach(pair => {
      deck.push({ ...pair, uid: Math.random() });
      deck.push({ ...pair, uid: Math.random() });
    });

    // Shuffle deck
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  function renderGrid() {
    grid.innerHTML = "";
    if (winMsg) winMsg.classList.add("hidden");
    STATE.memoryFlips = 0;
    STATE.memoryMatchedPairs = 0;
    flippedCards = [];
    isLocked = false;

    if (flipsEl) flipsEl.textContent = "0";
    if (pairsEl) pairsEl.textContent = "0/4";

    deck.forEach((cardData, idx) => {
      const card = document.createElement("div");
      card.className = "memory-card-flip";
      card.dataset.index = idx;
      card.dataset.id = cardData.id;

      card.innerHTML = `
        <div class="memory-card-inner">
          <div class="card-front">💖</div>
          <div class="card-back">
            <span class="card-emoji">${cardData.icon}</span>
            <span class="card-label">${escapeHTML(cardData.name)}</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => handleCardFlip(card, cardData));
      grid.appendChild(card);
    });
  }

  function handleCardFlip(cardEl, cardData) {
    if (isLocked || cardEl.classList.contains("flipped") || cardEl.classList.contains("matched")) {
      return;
    }

    soundEngine.playPopSound();
    cardEl.classList.add("flipped");
    flippedCards.push({ el: cardEl, data: cardData });
    STATE.memoryFlips++;
    if (flipsEl) flipsEl.textContent = STATE.memoryFlips;

    if (flippedCards.length === 2) {
      isLocked = true;
      const [card1, card2] = flippedCards;

      if (card1.data.id === card2.data.id) {
        // Matched!
        setTimeout(() => {
          soundEngine.playSuccessSound();
          card1.el.classList.add("matched");
          card2.el.classList.add("matched");
          STATE.memoryMatchedPairs++;
          if (pairsEl) pairsEl.textContent = `${STATE.memoryMatchedPairs}/4`;
          showToast(`Matched: ${card1.data.name}! ${card1.data.desc}`);

          if (STATE.memoryMatchedPairs === 4) {
            if (winMsg) winMsg.classList.remove("hidden");
            showToast("You remembered them all. ❤️");
          }
          flippedCards = [];
          isLocked = false;
        }, 500);
      } else {
        // Not matched -> flip back
        setTimeout(() => {
          card1.el.classList.remove("flipped");
          card2.el.classList.remove("flipped");
          flippedCards = [];
          isLocked = false;
        }, 900);
      }
    }
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      soundEngine.playPopSound();
      buildDeck();
      renderGrid();
      showToast("Memory matching game restarted!");
    });
  }

  buildDeck();
  renderGrid();
}

// ==============================================================================
// 18. GAME 04: RELATIONSHIP QUIZ (initializeQuiz)
// ==============================================================================
function initializeQuiz() {
  const qNumEl = document.getElementById("quiz-q-num");
  const qTextEl = document.getElementById("quiz-question-text");
  const optionsListEl = document.getElementById("quiz-options");
  const feedbackEl = document.getElementById("quiz-feedback");
  const progressBarEl = document.getElementById("quiz-progress-bar");
  const quizCardEl = document.getElementById("quiz-card");
  const quizResultsEl = document.getElementById("quiz-results");
  const retakeBtn = document.getElementById("quiz-retake-btn");

  if (!qTextEl || !optionsListEl) return;

  function renderQuestion(index) {
    const q = CONFIG.quizQuestions[index];
    if (!q) return;

    if (qNumEl) qNumEl.textContent = `Question ${index + 1} of ${CONFIG.quizQuestions.length}`;
    qTextEl.textContent = q.question;
    optionsListEl.innerHTML = "";
    if (feedbackEl) feedbackEl.classList.add("hidden");

    if (progressBarEl) {
      const pct = ((index + 1) / CONFIG.quizQuestions.length) * 100;
      progressBarEl.style.width = `${pct}%`;
    }

    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option-btn";
      btn.textContent = opt.text;
      btn.addEventListener("click", () => handleAnswer(opt));
      optionsListEl.appendChild(btn);
    });
  }

  function handleAnswer(opt) {
    soundEngine.playPopSound();
    if (feedbackEl) {
      feedbackEl.textContent = opt.feedback;
      feedbackEl.classList.remove("hidden");
    }

    // Disable option buttons during feedback
    optionsListEl.querySelectorAll(".quiz-option-btn").forEach(b => (b.disabled = true));

    setTimeout(() => {
      STATE.quizCurrentIndex++;
      if (STATE.quizCurrentIndex < CONFIG.quizQuestions.length) {
        renderQuestion(STATE.quizCurrentIndex);
      } else {
        // Finish Quiz
        soundEngine.playSuccessSound();
        if (quizCardEl) quizCardEl.classList.add("hidden");
        if (quizResultsEl) quizResultsEl.classList.remove("hidden");
      }
    }, 1400);
  }

  function resetQuiz() {
    STATE.quizCurrentIndex = 0;
    if (quizCardEl) quizCardEl.classList.remove("hidden");
    if (quizResultsEl) quizResultsEl.classList.add("hidden");
    renderQuestion(0);
  }

  if (retakeBtn) {
    retakeBtn.addEventListener("click", () => {
      soundEngine.playPopSound();
      resetQuiz();
    });
  }

  renderQuestion(0);
}

// ==============================================================================
// 19. CHAPTER 04: EMOTIONAL REVEAL & FINAL CHOICE
// ==============================================================================
function initializeLoveReveal() {
  const revealBtn = document.getElementById("reveal-love-btn");
  const answerContent = document.getElementById("love-answer-content");

  if (!revealBtn || !answerContent) return;

  revealBtn.addEventListener("click", () => {
    soundEngine.playSuccessSound();
    revealBtn.classList.add("hidden");
    answerContent.classList.remove("hidden");
    showToast("You. Just you, forever and always. ❤️");
  });
}

function initializeFinalMessage() {
  // Timeline helper
}

function initializeFinalChoice() {
  const btnMaybe = document.getElementById("btn-choice-maybe");
  const btnAngry = document.getElementById("btn-choice-angry");
  const respMaybe = document.getElementById("response-maybe");
  const respAngry = document.getElementById("response-angry");
  const buttonsRow = document.getElementById("final-choice-buttons");

  if (!btnMaybe || !btnAngry) return;

  btnMaybe.addEventListener("click", () => {
    soundEngine.playSuccessSound();
    if (buttonsRow) buttonsRow.classList.add("hidden");
    if (respMaybe) respMaybe.classList.remove("hidden");
    if (respAngry) respAngry.classList.add("hidden");
    showToast("Thank you for giving us a chance to talk. ❤️");
  });

  btnAngry.addEventListener("click", () => {
    soundEngine.playChime(392, "sine", 0.5);
    if (buttonsRow) buttonsRow.classList.add("hidden");
    if (respAngry) respAngry.classList.remove("hidden");
    if (respMaybe) respMaybe.classList.add("hidden");
    showToast("Take all the time you need. I'll always be here waiting. 🤍");
  });
}

function initializeActionButtons() {
  const restartBtn = document.getElementById("restart-story-btn");
  const sendHugBtn = document.getElementById("send-hug-btn");

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      soundEngine.playPopSound();
      showSection(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      showToast("Revisiting our journey from the beginning ✨");
    });
  }

  if (sendHugBtn) {
    sendHugBtn.addEventListener("click", () => {
      soundEngine.playSuccessSound();
      showToast("Virtual hug sent directly to Swetha! 🤗💖");
      spawnHeartFountain();
    });
  }
}

/**
 * Romantic Heart Fountain Particle Burst
 */
function spawnHeartFountain() {
  const hearts = ["❤️", "💖", "✨", "💕", "🌸"];
  for (let i = 0; i < 24; i++) {
    const h = document.createElement("div");
    h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    h.style.position = "fixed";
    h.style.left = `${window.innerWidth / 2 + (Math.random() - 0.5) * 200}px`;
    h.style.bottom = "80px";
    h.style.fontSize = `${Math.random() * 1.5 + 1.2}rem`;
    h.style.pointerEvents = "none";
    h.style.zIndex = "3000";
    h.style.transition = "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.4s ease";
    h.style.opacity = "1";
    document.body.appendChild(h);

    requestAnimationFrame(() => {
      const targetY = -(Math.random() * 350 + 200);
      const targetX = (Math.random() - 0.5) * 300;
      h.style.transform = `translate(${targetX}px, ${targetY}px) scale(1.4) rotate(${(Math.random() - 0.5) * 60}deg)`;
      h.style.opacity = "0";
    });

    setTimeout(() => {
      h.remove();
    }, 1500);
  }
}

// ==============================================================================
// 20. TOAST NOTIFICATION UTILITY (showToast)
// ==============================================================================
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// ==============================================================================
// 21. KICK OFF SCRIPT ON DOM LOADED
// ==============================================================================
document.addEventListener("DOMContentLoaded", init);
