// Web Audio API Synthesizer & Beat Maker for Songs and Rap
export interface BeatPreset {
  id: string;
  name: string;
  genre: string;
  defaultBpm: number;
  description: string;
  scaleNotes: number[]; // MIDI note numbers for chord roots
  chordProgressions: number[][]; // MIDI chords (frequencies or semitone offsets)
  drumPatterns: {
    kick: number[]; // 16 steps: 1 = hit, 0 = rest, 2 = accent
    snare: number[];
    hihat: number[]; // 1 = closed, 2 = triplet roll, 3 = open
    bass: number[];
  };
}

export const BEAT_PRESETS: Record<string, BeatPreset> = {
  'trap-808': {
    id: 'trap-808',
    name: 'Hard 808 Trap & Drill',
    genre: 'Rap (Hard / Aggressive)',
    defaultBpm: 140,
    description: 'Sliding heavy 808 sub-bass, rattling hi-hat triplet rolls, snappy snare, and dark minor chords.',
    scaleNotes: [48, 44, 41, 43], // C3, G#2, F2, G2
    chordProgressions: [
      [60, 63, 67], // C minor
      [56, 60, 63], // G# major
      [53, 56, 60], // F minor
      [55, 58, 62]  // G minor
    ],
    drumPatterns: {
      kick:  [1, 0, 0, 0,  0, 0, 1, 0,  0, 0, 1, 0,  0, 1, 0, 0],
      snare: [0, 0, 0, 0,  1, 0, 0, 0,  0, 0, 0, 0,  1, 0, 0, 0],
      hihat: [1, 1, 2, 1,  1, 2, 1, 3,  1, 1, 2, 1,  2, 2, 3, 1],
      bass:  [1, 0, 0, 0,  0, 0, 1, 0,  0, 0, 1, 0,  0, 0, 1, 0]
    }
  },
  'melodic-drill': {
    id: 'melodic-drill',
    name: 'Melodic Wave & Drill',
    genre: 'Rap (Melodic / Fast)',
    defaultBpm: 132,
    description: 'Cinematic bells, filtered Rhodes keys, punchy drill bounce, and tuned 808 glide.',
    scaleNotes: [57, 53, 60, 55], // A, F, C, G
    chordProgressions: [
      [57, 60, 64, 67], // Am7
      [53, 57, 60, 64], // Fmaj7
      [60, 64, 67, 71], // Cmaj7
      [55, 59, 62, 65]  // G7
    ],
    drumPatterns: {
      kick:  [1, 0, 0, 0,  0, 0, 0, 1,  0, 0, 1, 0,  0, 1, 0, 0],
      snare: [0, 0, 0, 0,  1, 0, 0, 0,  0, 0, 0, 1,  1, 0, 0, 0],
      hihat: [1, 1, 1, 2,  1, 1, 3, 1,  1, 2, 1, 1,  2, 2, 1, 3],
      bass:  [1, 0, 0, 0,  0, 0, 0, 1,  0, 0, 1, 0,  0, 0, 0, 0]
    }
  },
  'lofi-chill': {
    id: 'lofi-chill',
    name: 'Lo-Fi / Soft Boom Bap',
    genre: 'Rap / Song (Soft / Relaxed)',
    defaultBpm: 84,
    description: 'Dusty vinyl warmth, vintage jazz electric piano, smooth rimshots, and deep mellow kick.',
    scaleNotes: [50, 53, 57, 55], // D, F, A, G
    chordProgressions: [
      [62, 65, 69, 72], // Dm9
      [65, 69, 72, 76], // Fmaj9
      [57, 60, 64, 67], // Am7
      [55, 58, 62, 65]  // Gm7
    ],
    drumPatterns: {
      kick:  [1, 0, 0, 0,  0, 0, 0, 0,  0, 0, 1, 0,  0, 0, 0, 0],
      snare: [0, 0, 0, 0,  1, 0, 0, 0,  0, 0, 0, 0,  1, 0, 0, 1],
      hihat: [1, 0, 1, 0,  1, 0, 1, 3,  1, 0, 1, 0,  1, 0, 1, 0],
      bass:  [1, 0, 0, 0,  0, 0, 0, 0,  0, 0, 1, 0,  0, 0, 0, 0]
    }
  },
  'pop-anthem': {
    id: 'pop-anthem',
    name: 'Hard Pop / Rock Drive',
    genre: 'Song (Hard / Uplifting)',
    defaultBpm: 124,
    description: 'Driving 4-on-the-floor energy, soaring synth arps, electric punch, and anthemic groove.',
    scaleNotes: [40, 48, 43, 45], // E, C, G, A
    chordProgressions: [
      [52, 55, 59], // Em
      [48, 52, 55], // C
      [55, 59, 62], // G
      [45, 48, 52]  // Am
    ],
    drumPatterns: {
      kick:  [1, 0, 0, 0,  1, 0, 0, 0,  1, 0, 0, 0,  1, 0, 0, 0],
      snare: [0, 0, 0, 0,  1, 0, 0, 0,  0, 0, 0, 0,  1, 0, 0, 0],
      hihat: [1, 1, 1, 1,  1, 1, 1, 3,  1, 1, 1, 1,  1, 1, 2, 2],
      bass:  [1, 0, 1, 0,  1, 0, 1, 0,  1, 0, 1, 0,  1, 0, 1, 0]
    }
  },
  'ballad-acoustic': {
    id: 'ballad-acoustic',
    name: 'Acoustic / Soft Soul Ballad',
    genre: 'Song (Soft / Emotional)',
    defaultBpm: 76,
    description: 'Tender grand piano voicings, warm atmospheric pads, heart-thump kick, and finger snaps.',
    scaleNotes: [48, 45, 41, 43], // C, A, F, G
    chordProgressions: [
      [60, 64, 67, 71], // Cmaj7
      [57, 60, 64, 67], // Am7
      [53, 57, 60, 64], // Fmaj7
      [55, 59, 62, 67]  // Gsus4
    ],
    drumPatterns: {
      kick:  [1, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0],
      snare: [0, 0, 0, 0,  1, 0, 0, 0,  0, 0, 0, 0,  1, 0, 0, 0],
      hihat: [1, 0, 1, 0,  1, 0, 1, 0,  1, 0, 1, 0,  1, 0, 1, 3],
      bass:  [1, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0]
    }
  },
  'melodic-pop': {
    id: 'melodic-pop',
    name: 'Melodic Chart Pop',
    genre: 'Song (Melodic / Catchy)',
    defaultBpm: 104,
    description: 'Bouncy syncopated rhythms, bright synth plucks, warm bassline, and catchy pop progression.',
    scaleNotes: [50, 47, 43, 45], // D, B, G, A
    chordProgressions: [
      [62, 66, 69], // D
      [59, 62, 66], // Bm
      [55, 59, 62], // G
      [57, 61, 64]  // A
    ],
    drumPatterns: {
      kick:  [1, 0, 0, 0,  0, 0, 1, 0,  0, 0, 1, 0,  0, 0, 0, 0],
      snare: [0, 0, 0, 0,  1, 0, 0, 0,  0, 0, 0, 0,  1, 0, 0, 0],
      hihat: [1, 1, 1, 1,  1, 1, 1, 3,  1, 1, 1, 1,  1, 1, 1, 1],
      bass:  [1, 0, 0, 1,  0, 0, 1, 0,  0, 1, 0, 0,  1, 0, 0, 0]
    }
  }
};

export class BeatSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentStep: number = 0;
  private timerId: number | null = null;
  private currentPreset: BeatPreset;
  public bpm: number = 130;

  // Stems volume/mute
  public muteDrums: boolean = false;
  public muteBass: boolean = false;
  public muteMelody: boolean = false;
  public masterGainNode: GainNode | null = null;
  public analyserNode: AnalyserNode | null = null;

  // Listeners
  public onStepChange?: (step: number) => void;
  public onStateChange?: (playing: boolean) => void;

  constructor(initialPresetId: string = 'trap-808') {
    this.currentPreset = BEAT_PRESETS[initialPresetId] || BEAT_PRESETS['trap-808'];
    this.bpm = this.currentPreset.defaultBpm;
  }

  public init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();

      this.masterGainNode = this.ctx.createGain();
      this.masterGainNode.gain.setValueAtTime(0.85, this.ctx.currentTime);

      this.analyserNode = this.ctx.createAnalyser();
      this.analyserNode.fftSize = 256;

      this.masterGainNode.connect(this.analyserNode);
      this.analyserNode.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setPreset(presetId: string) {
    if (BEAT_PRESETS[presetId]) {
      this.currentPreset = BEAT_PRESETS[presetId];
      this.bpm = this.currentPreset.defaultBpm;
    }
  }

  public getPreset(): BeatPreset {
    return this.currentPreset;
  }

  public setVolume(val: number) {
    if (this.masterGainNode && this.ctx) {
      this.masterGainNode.gain.setValueAtTime(Math.max(0, Math.min(1, val)), this.ctx.currentTime);
    }
  }

  public play() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.currentStep = 0;

    const intervalMs = (60 / this.bpm / 4) * 1000; // 16th notes
    this.scheduleStep();
    this.timerId = window.setInterval(() => {
      this.scheduleStep();
    }, intervalMs);

    this.onStateChange?.(true);
  }

  public pause() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.isPlaying = false;
    this.onStateChange?.(false);
  }

  public toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private midiToFreq(midi: number): number {
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  private scheduleStep() {
    if (!this.ctx || !this.masterGainNode) return;
    const now = this.ctx.currentTime;
    const step = this.currentStep;
    const p = this.currentPreset;

    // Trigger step callback
    this.onStepChange?.(step);

    // 1. Kick Drum
    if (!this.muteDrums && p.drumPatterns.kick[step] > 0) {
      this.triggerKick(now, p.id === 'trap-808' || p.id === 'melodic-drill');
    }

    // 2. Snare / Clap
    if (!this.muteDrums && p.drumPatterns.snare[step] > 0) {
      this.triggerSnare(now);
    }

    // 3. Hi-Hat
    if (!this.muteDrums && p.drumPatterns.hihat[step] > 0) {
      const type = p.drumPatterns.hihat[step];
      this.triggerHiHat(now, type);
    }

    // 4. Bass / 808
    if (!this.muteBass && p.drumPatterns.bass[step] > 0) {
      const chordIndex = Math.floor(step / 4) % p.chordProgressions.length;
      const rootMidi = p.scaleNotes[chordIndex] || 48;
      this.trigger808(now, rootMidi, p.id === 'trap-808' || p.id === 'melodic-drill');
    }

    // 5. Melodic Chords (Every 4 or 8 steps)
    if (!this.muteMelody && step % 4 === 0) {
      const chordIndex = (step / 4) % p.chordProgressions.length;
      const chord = p.chordProgressions[chordIndex];
      this.triggerChord(now, chord, p.id);
    }

    // Advance step
    this.currentStep = (this.currentStep + 1) % 16;
  }

  private triggerKick(time: number, is808: boolean) {
    if (!this.ctx || !this.masterGainNode) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.masterGainNode);

    const startFreq = is808 ? 160 : 130;
    const endFreq = is808 ? 38 : 45;
    const duration = is808 ? 0.35 : 0.22;

    osc.frequency.setValueAtTime(startFreq, time);
    osc.frequency.exponentialRampToValueAtTime(endFreq, time + 0.08);

    gain.gain.setValueAtTime(1.0, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.start(time);
    osc.stop(time + duration);
  }

  private triggerSnare(time: number) {
    if (!this.ctx || !this.masterGainNode) return;

    // Noise buffer
    const bufferSize = this.ctx.sampleRate * 0.2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1000, time);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.7, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.18);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGainNode);

    // Tonal body
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.frequency.setValueAtTime(220, time);
    osc.frequency.exponentialRampToValueAtTime(80, time + 0.08);

    oscGain.gain.setValueAtTime(0.5, time);
    oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.12);

    osc.connect(oscGain);
    oscGain.connect(this.masterGainNode);

    noise.start(time);
    osc.start(time);
    noise.stop(time + 0.2);
    osc.stop(time + 0.2);
  }

  private triggerHiHat(time: number, hatType: number) {
    if (!this.ctx || !this.masterGainNode) return;

    // Highpass filtered metallic noise
    const bufferSize = this.ctx.sampleRate * 0.08;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(7500, time);

    const gain = this.ctx.createGain();
    const decay = hatType === 3 ? 0.22 : hatType === 2 ? 0.035 : 0.05;
    const volume = hatType === 2 ? 0.35 : 0.45;

    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + decay);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGainNode);

    noise.start(time);
    noise.stop(time + decay);
  }

  private trigger808(time: number, midiNote: number, isGlide: boolean) {
    if (!this.ctx || !this.masterGainNode) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const freq = this.midiToFreq(midiNote - 12); // Deep octave

    osc.frequency.setValueAtTime(freq * 1.5, time);
    osc.frequency.exponentialRampToValueAtTime(freq, time + 0.06);

    // Warm sub distortion simulation via subtle wave shaping
    const duration = isGlide ? 0.45 : 0.3;
    gain.gain.setValueAtTime(0.9, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration);

    osc.connect(gain);
    gain.connect(this.masterGainNode);

    osc.start(time);
    osc.stop(time + duration);
  }

  private triggerChord(time: number, chordMidis: number[], presetId: string) {
    if (!this.ctx || !this.masterGainNode) return;

    const isLofi = presetId === 'lofi-chill' || presetId === 'ballad-acoustic';
    const isSynth = presetId === 'pop-anthem' || presetId === 'melodic-drill';

    chordMidis.forEach(midi => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      const filter = this.ctx!.createBiquadFilter();

      osc.type = isLofi ? 'triangle' : isSynth ? 'sawtooth' : 'sine';
      osc.frequency.setValueAtTime(this.midiToFreq(midi), time);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(isLofi ? 800 : 2400, time);
      filter.frequency.exponentialRampToValueAtTime(isLofi ? 500 : 1200, time + 0.8);

      const chordVol = 0.18 / chordMidis.length;
      gain.gain.setValueAtTime(chordVol, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.75);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGainNode!);

      osc.start(time);
      osc.stop(time + 0.8);
    });
  }

  // EXPORT BEAT AS WAV FILE
  public async exportWavBlob(bars: number = 4): Promise<Blob> {
    const sampleRate = 44100;
    const secondsPerBeat = 60 / this.bpm;
    const totalSeconds = secondsPerBeat * 4 * bars;
    const totalFrames = Math.ceil(totalSeconds * sampleRate);

    const offlineCtx = new OfflineAudioContext(2, totalFrames, sampleRate);
    const p = this.currentPreset;

    const stepSeconds = (60 / this.bpm / 4);
    const totalSteps = 16 * bars;

    for (let step = 0; step < totalSteps; step++) {
      const time = step * stepSeconds;
      const patternStep = step % 16;

      // 1. Kick
      if (p.drumPatterns.kick[patternStep] > 0) {
        const osc = offlineCtx.createOscillator();
        const gain = offlineCtx.createGain();
        osc.connect(gain);
        gain.connect(offlineCtx.destination);
        osc.frequency.setValueAtTime(140, time);
        osc.frequency.exponentialRampToValueAtTime(42, time + 0.08);
        gain.gain.setValueAtTime(0.9, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);
        osc.start(time);
        osc.stop(time + 0.25);
      }

      // 2. Snare
      if (p.drumPatterns.snare[patternStep] > 0) {
        const osc = offlineCtx.createOscillator();
        const gain = offlineCtx.createGain();
        osc.frequency.setValueAtTime(200, time);
        osc.frequency.exponentialRampToValueAtTime(70, time + 0.08);
        gain.gain.setValueAtTime(0.4, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);
        osc.connect(gain);
        gain.connect(offlineCtx.destination);
        osc.start(time);
        osc.stop(time + 0.15);

        // Noise
        const noiseBuffer = offlineCtx.createBuffer(1, Math.floor(sampleRate * 0.15), sampleRate);
        const data = noiseBuffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
        const noise = offlineCtx.createBufferSource();
        noise.buffer = noiseBuffer;
        const filter = offlineCtx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(1200, time);
        const nGain = offlineCtx.createGain();
        nGain.gain.setValueAtTime(0.6, time);
        nGain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
        noise.connect(filter);
        filter.connect(nGain);
        nGain.connect(offlineCtx.destination);
        noise.start(time);
        noise.stop(time + 0.15);
      }

      // 3. Hihat
      if (p.drumPatterns.hihat[patternStep] > 0) {
        const hatType = p.drumPatterns.hihat[patternStep];
        const decay = hatType === 3 ? 0.2 : 0.04;
        const noiseBuffer = offlineCtx.createBuffer(1, Math.floor(sampleRate * decay), sampleRate);
        const data = noiseBuffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
        const noise = offlineCtx.createBufferSource();
        noise.buffer = noiseBuffer;
        const filter = offlineCtx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(8000, time);
        const gain = offlineCtx.createGain();
        gain.gain.setValueAtTime(0.35, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + decay);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(offlineCtx.destination);
        noise.start(time);
        noise.stop(time + decay);
      }

      // 4. Bass
      if (p.drumPatterns.bass[patternStep] > 0) {
        const chordIndex = Math.floor(patternStep / 4) % p.chordProgressions.length;
        const rootMidi = p.scaleNotes[chordIndex] || 48;
        const osc = offlineCtx.createOscillator();
        const gain = offlineCtx.createGain();
        osc.type = 'sine';
        const freq = this.midiToFreq(rootMidi - 12);
        osc.frequency.setValueAtTime(freq * 1.5, time);
        osc.frequency.exponentialRampToValueAtTime(freq, time + 0.06);
        gain.gain.setValueAtTime(0.85, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.35);
        osc.connect(gain);
        gain.connect(offlineCtx.destination);
        osc.start(time);
        osc.stop(time + 0.35);
      }

      // 5. Chords
      if (patternStep % 4 === 0) {
        const chordIndex = (patternStep / 4) % p.chordProgressions.length;
        const chord = p.chordProgressions[chordIndex];
        chord.forEach(midi => {
          const osc = offlineCtx.createOscillator();
          const gain = offlineCtx.createGain();
          const filter = offlineCtx.createBiquadFilter();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(this.midiToFreq(midi), time);
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(1400, time);
          gain.gain.setValueAtTime(0.12 / chord.length, time);
          gain.gain.exponentialRampToValueAtTime(0.001, time + 0.7);
          osc.connect(filter);
          filter.connect(gain);
          gain.connect(offlineCtx.destination);
          osc.start(time);
          osc.stop(time + 0.7);
        });
      }
    }

    const renderedBuffer = await offlineCtx.startRendering();
    return this.bufferToWav(renderedBuffer);
  }

  // Convert AudioBuffer to 16-bit PCM WAV Blob
  private bufferToWav(buffer: AudioBuffer): Blob {
    const numChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const format = 1; // PCM
    const bitDepth = 16;
    const bytesPerSample = bitDepth / 8;
    const blockAlign = numChannels * bytesPerSample;

    const length = buffer.length * blockAlign;
    const arrayBuffer = new ArrayBuffer(44 + length);
    const view = new DataView(arrayBuffer);

    // RIFF chunk descriptor
    this.writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + length, true);
    this.writeString(view, 8, 'WAVE');

    // FMT sub-chunk
    this.writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true); // SubChunk1Size (16 for PCM)
    view.setUint16(20, format, true); // AudioFormat
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * blockAlign, true); // ByteRate
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, bitDepth, true);

    // DATA sub-chunk
    this.writeString(view, 36, 'data');
    view.setUint32(40, length, true);

    // Write interleaved samples
    let offset = 44;
    for (let i = 0; i < buffer.length; i++) {
      for (let channel = 0; channel < numChannels; channel++) {
        let sample = buffer.getChannelData(channel)[i];
        sample = Math.max(-1, Math.min(1, sample)); // clamp
        view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
        offset += 2;
      }
    }

    return new Blob([arrayBuffer], { type: 'audio/wav' });
  }

  private writeString(view: DataView, offset: number, string: string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }
}

