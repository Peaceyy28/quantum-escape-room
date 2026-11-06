# ⚡ GDG OAU — Quantum Escape Room

An interactive, responsive, narrative-driven web escape-room game built for the **Google Developer Groups (GDG) On Campus OAU Quantum Computing Community**.

---

## 🚀 How to Run Right Now (Zero Installs Needed!)

You don't need to install Node packages or configure build tools to run this tonight.

### Option 1: Instant Local Browser Test
1. Navigate to:
   `C:\Users\OLUWANIFEMI PEACE OJ\.gemini\antigravity\scratch\quantum-escape-room`
2. **Double-click `index.html`** to open it directly in Chrome, Edge, Brave, or any browser.
3. The game will boot up with all animations, synthesized sci-fi sound effects, interactive puzzles, and local session persistence.

### Option 2: Deploy to WhatsApp in 1 Minute (For Tonight's Event)
To give your community members a live link on WhatsApp right now:
1. Go to **[Netlify Drop](https://app.netlify.com/drop)** in your browser.
2. Drag and drop the `quantum-escape-room` folder onto the Netlify page.
3. Within 15 seconds, Netlify gives you a live public HTTPS link (e.g., `https://gdg-oau-quantum.netlify.app`) that all students can open from WhatsApp on their phones!
*(Alternatively, you can push to GitHub and turn on GitHub Pages, or use Vercel).*

---

## 🎮 Game Architecture & Features

1. **Screen A: Landing Page**:
   - GDG OAU Quantum Community branding
   - Real-time quantum particle background (HTML5 Canvas)
   - "No prior quantum computing knowledge required" indicator
   - Incident alert ticker (9:47 PM Q-CORE lockdown)
   - Direct link to the GDG OAU WhatsApp group

2. **Screen B: Clearance & Registration**:
   - Display name (required) & optional callsign/nickname
   - Game rules and hint penalty disclaimer
   - Automatic browser session caching (refreshing the tab never wipes progress)

3. **Screen C: Incident Report Briefing**:
   - Terminal-style classified document presentation
   - Checkpoint preview matrix with locked indicators

4. **The Four Game Checkpoints**:
   - **Stage 1 (Binary Numbers)**: Convert binary `0101` to decimal.
     - *Answer*: `5`
     - Interactive 4-bit register widget
   - **Stage 2 (Quantum Bits - Qubits)**: "A classical computer uses bits. A quantum computer uses ______."
     - *Answer*: `qubits` or `qubit`
     - Interactive Bloch sphere state vector visualization
   - **Stage 3 (Superposition)**: Unscramble `P O S U S E R I P T I O N`.
     - *Answer*: `superposition`
     - Interactive clickable letter tiles to assist mobile typing
   - **Stage 4 (Quantum Entanglement)**: "Two qubits can share a quantum state... What is this phenomenon called?"
     - *Answer*: `entanglement`
     - Interactive synchronized EPR pair animation

5. **Audio Engine (Web Audio API)**:
   - Sci-fi user interface beeps, access-granted fanfares, error shakes, and victory chords synthesized entirely inside the browser.
   - Zero missing audio assets or external MP3 dependencies. Mute/unmute button in the top bar.

6. **Hint System**:
   - Dedicated hint per stage.
   - Configurable penalty (+30s added to completion time).
   - Only charges the player once per stage.

7. **Completion & WhatsApp Share**:
   - Dramatic Q-CORE restoration animation and confetti explosion.
   - Summary of completion time, hints used, penalty, and final score.
   - One-tap **"Share Result on WhatsApp"** button generating a ready-to-send result card:
     ```
     I ESCAPED THE QUANTUM LAB! 🔐

     Player: [Name]
     Completion Time: [MM:SS]
     Final Score: [Score] PTS
     Hints Used: [Count]

     Can you beat my time?

     #GDGOAU #QuantumEscapeRoom
     ```
   - One-tap **"Return to Community WhatsApp"** button.

8. **Leaderboard & Cloud Backend (Supabase Ready)**:
   - Shows top-3 podium (Gold 👑, Silver, Bronze) + full rankings table.
   - Defaults to **Local Session Mode** with a clear status indicator.
   - Fully ready to plug into a free Supabase project for a shared live leaderboard across all student devices.

9. **Organiser Deck (Admin Portal)**:
   - Click the shield icon in the top right.
   - Default passcode: **`gdgoau2026`** (can be changed in the panel).
   - Live puzzle editor: change questions, hints, penalties, or WhatsApp group link without editing code.
   - **Export CSV**: Download all participant results as an Excel/CSV file with one click!

---

## 🗄️ Optional: Connecting Shared Supabase Leaderboard

If you want a single shared leaderboard where all student phones update live:
1. Create a free project at [supabase.com](https://supabase.com).
2. Go to the **SQL Editor** in Supabase and run:
   ```sql
   create table if not exists public.game_sessions (
     id uuid primary key default gen_random_uuid(),
     session_id text unique not null,
     player_name text not null,
     nickname text,
     score integer not null default 0,
     duration_seconds integer not null default 0,
     hints_used integer not null default 0,
     completed_at timestamptz default now()
   );

   alter table public.game_sessions enable row level security;
   create policy "Allow public read of leaderboard" on public.game_sessions for select using (true);
   create policy "Allow session upsert" on public.game_sessions for insert with check (true);
   create policy "Allow session update" on public.game_sessions for update using (true);
   ```
3. Open the game, click the Organiser shield icon, enter `gdgoau2026`, and paste your Supabase URL & Anon Key. That's it!
