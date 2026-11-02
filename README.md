# 🎙️ VerseForge Studio - Astro.js Micro Tool

**AI Song & Rap Lyric Composer with Integrated Web Audio Beat Engine & WAV Exporter**

An Astro.js micro tool designed for songwriters, rappers, ghostwriters, and music producers. Compose radio-ready songs or hard rap packed with bars, quotables, cadence flow switches, and 808 beat drops, while synthesizing and playing background beats directly in your browser.

---

## ⚡ Features

### 1. 🎤 Dual Composition Architecture (Song vs. Rap)
- **Rap Specialist Mode**:
  - Automatically structures tracks with **Intro**, **Verse 1**, **Flow Switches (Triplet / Staccato Cadences)**, **Anthemic Hooks**, **808 Beat Drops**, **Verse 2**, **Bridge**, and **Outro**.
  - Packed with multi-syllable rhyme schemes, punchlines, quotables, and authentic ad-libs `(Yeah!)`, `(Bow!)`.
- **Professional Song Mode**:
  - Radio-ready pop / R&B / ballad / rock structure: **Intro**, **Verse 1**, **Pre-Chorus**, **Chorus (The Hook)**, **Verse 2**, **Bridge (Emotional Climax & Modulation)**, and **Outro**.
  - Includes **Chord Progressions** (e.g., `Dm9 - Bbmaj7 - F - C/E`) and **Vocal Delivery Directives** `(Chest voice, falsetto, soaring belt, harmonies in 3rds)`.

### 2. 🎛️ Moods & Themes
- 🔥 **Hard**: High-energy, aggressive 808s, driving rock drums, punchlines.
- 🌊 **Melodic**: Floating sing-rap, atmospheric wave pads, syncopated bounce.
- ☕ **Soft**: Intimate acoustic keys, lo-fi vinyl crackle, gentle chords, vulnerable delivery.
- 🌑 **Dark**: Minor scales, tense hi-hat rolls, cinematic drill slides.

### 3. 🎧 Built-In Web Audio Beat Station
- **Real Synthesis**: Powered 100% by browser Web Audio API — zero external mp3 streaming needed.
- **Synthesizer Elements**:
  - Sliding 808 sub-bass with pitch envelopes & warm saturation.
  - Punchy transient kicks & crisp claps / snares.
  - Metallic hi-hats with rapid 32nd-note triplet rolls.
  - Polyphonic chord progressions (Rhodes, synth saws, triangle pads).
- **Stems Control**: Mute/unmute individual stems on the fly (`Drums`, `808 Bass`, `Melody / Chords`).
- **Interactive Sequencer**: 16-step LED indicators blinking in real-time sync with playback.
- **Spectrum Visualizer**: Real-time canvas frequency analyzer.
- **BPM & Tap Tempo**: Fine-tune tempo from 60 to 180 BPM or tap along to calculate.

### 4. 💾 DAW & Studio Integration
- **Download Beat (.WAV)**: Export an uncompressed, studio-grade 44.1kHz stereo WAV loop of your synthesized beat with a single click. Ready to drop into FL Studio, Ableton Live, Logic Pro, Pro Tools, or CapCut.
- **Microphone Vocal Booth**: Click *Record Over Beat* to capture live scratch vocal takes with your microphone. Play back your take or download the audio file.
- **Flow Prompter (Teleprompter)**: Auto-scrolls through lines and bars in sync with beat intervals to practice your delivery and cadence.
- **Export Lyrics**: Copy with one click or export as `.txt`.

### 5. 🤖 Dual Generation Engine
- **Instant Offline Engine**: 100% offline procedural composer working instantly with zero API keys or setup.
- **Optional Gemini AI Supercharge**: Toggle the drawer to paste an optional Google Gemini API key (`gemini-2.5-flash`) for infinite cloud LLM generations.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for Production
```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack
- **Framework**: [Astro 5](https://astro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Audio Synthesis**: Native Web Audio API (`AudioContext`, `OfflineAudioContext`, `AnalyserNode`)
- **Vocal Booth**: `MediaStreamRecording` API (`MediaRecorder`)
- **Fonts**: Plus Jakarta Sans & JetBrains Mono via Google Fonts

