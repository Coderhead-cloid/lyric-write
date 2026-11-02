// Lyric Generation Engine for Songs & Rap
export interface LyricGenerationInput {
  type: 'rap' | 'song';
  theme: 'soft' | 'hard' | 'melodic' | 'dark' | 'hype' | 'chill' | 'romantic' | 'nostalgic';
  keywords: string;
  artistStyle?: string;
  tempo?: number;
  keySignature?: string;
  geminiApiKey?: string;
}

export interface LyricSection {
  title: string;
  type: 'intro' | 'verse' | 'pre-chorus' | 'chorus' | 'hook' | 'flow-switch' | 'beat-drop' | 'bridge' | 'outro';
  lines: string[];
  annotations?: string[];
  chords?: string;
  deliveryTip?: string;
  bpmCue?: string;
}

export interface GeneratedComposition {
  title: string;
  genre: string;
  theme: string;
  suggestedBpm: number;
  keySignature: string;
  beatPresetId: string;
  flowAdvice: string[];
  quotables: string[];
  rhymeHighlightColor: string;
  sections: LyricSection[];
  rawText: string;
}

// Procedural high-caliber lyrical database & rhyme matrix
const RAP_DICTIONARY = {
  hard: {
    verbs: ['crush', 'shatter', 'dominate', 'ignite', 'conquer', 'overdrive', 'outrun', 'dismantle'],
    metaphors: [
      'titanium spine in a city made of glass',
      'turning pure pressure into diamonds that last',
      'moving like lightning through a thunderous cloud',
      'silencing the critics when the whispers get loud',
      'heavyweight champion standing flat in the ring',
      'stepped through the furnace now the gold starts to sing'
    ],
    switches: [
      '[FLOW SWITCH: 16th-Note Double-Time Triplet Cadence]',
      '[FLOW SWITCH: Staccato Machine-Gun Punchline Pocket]',
      '[FLOW SWITCH: Half-Time Heavyweight Drag Flow]'
    ],
    drops: [
      '[BEAT DROP: Sub-bass 808 explodes, sirens filter in, kick hammers the four]',
      '[BEAT DROP: Drums cut out for one bar — then total 808 destruction]'
    ],
    adlibs: ['(Yeah!)', '(Watch out!)', '(Bow!)', '(Uh-huh!)', '(Straight facts!)', '(Lock in!)']
  },
  melodic: {
    verbs: ['glide', 'drift', 'soar', 'resonate', 'echo', 'breathe', 'glow', 'ascend'],
    metaphors: [
      'autotune tears falling softly in the rain',
      'convertible cruising painting colors over pain',
      'late night frequency dialed into the stars',
      'trapped in my head while escaping through the bars',
      'harmonizing memories that echo through the floor',
      'leaving old baggage right outside the studio door'
    ],
    switches: [
      '[FLOW SWITCH: Melodic Sing-Rap Glide / Auto-Tune Vibrato]',
      '[FLOW SWITCH: Syncopated Bouncy Wave Flow]'
    ],
    drops: [
      '[BEAT DROP: Lush synth pads wash over sliding 808 glides and crisp hi-hat rolls]',
      '[BEAT DROP: Reverb snare slap with deep low-end pulse]'
    ],
    adlibs: ['(Ooh-yeah)', '(Float on)', '(Can you hear it?)', '(All night)', '(Mmm-yeah)']
  },
  soft: {
    verbs: ['whisper', 'unfold', 'linger', 'heal', 'reflect', 'soften', 'cherish', 'illuminate'],
    metaphors: [
      'coffee vapor rising while the city stays asleep',
      'promises we whispered that were ours alone to keep',
      'polaroid snapshots of a summer slipping by',
      'finding warm solace underneath a stormy sky',
      'quiet confessions sketched in graphite on the page',
      'stepping down gently from a spotlight-heavy stage'
    ],
    switches: [
      '[FLOW SWITCH: Intimate Spoken-Word Cadence with Acoustic Guitar Pocket]',
      '[FLOW SWITCH: Gentle Swing Triplet Groove]'
    ],
    drops: [
      '[BEAT DROP: Gentle vinyl crackle lifts into a soft warm Rhodes bass swell]',
      '[BEAT DROP: Finger snap cadence with deep velvet sub-pulse]'
    ],
    adlibs: ['(Listen)', '(Softly)', '(Just us)', '(Breathe)', '(Slow down)']
  }
};

const SONG_STRUCTURES = {
  melodic: {
    chords: {
      verse: 'Dm9 - Bbmaj7 - F - C/E',
      preChorus: 'Gm7 - Am7 - Bbmaj7 - C',
      chorus: 'F - C/E - Dm7 - Bbmaj7 (add9)',
      bridge: 'Bbmaj7 - Am7 - Gm7 - Csus4 - C'
    },
    vocalCues: [
      '(Warm chest voice, smooth sustain)',
      '(Rising crescendo, emotional urgency)',
      '(Full open belt, soaring lead melody with octave doubles)',
      '(Airy falsetto, vulnerable vibrato)'
    ]
  },
  hard: {
    chords: {
      verse: 'Em - C - G - D (Power Chords)',
      preChorus: 'Am - Bm - C - D5',
      chorus: 'Em - G - D - A5',
      bridge: 'Cmaj7 - D - Em - F#dim'
    },
    vocalCues: [
      '(Gritty chest projection, biting diction)',
      '(Driving tension, raspy edge on vowels)',
      '(Explosive rock/pop belt, soaring high notes)',
      '(Stripped acoustic guitar, raw vocal rasp)'
    ]
  },
  soft: {
    chords: {
      verse: 'Cmaj7 - Am9 - Fmaj7 - Gsus4',
      preChorus: 'Dm7 - Em7 - Fmaj7 - G',
      chorus: 'C - G/B - Am7 - Fadd9',
      bridge: 'Fmaj7 - Em7 - Dm7 - Gsus4 - G'
    },
    vocalCues: [
      '(Intimate whisper tone, close-mic warmth)',
      '(Gentle harmonic lift, soft dynamics)',
      '(Pure bell-like melody, layered lush 3rd harmonies)',
      '(Delicate breathy falsetto decaying into reverb)'
    ]
  }
};

export function composeOfflineLyrics(input: LyricGenerationInput): GeneratedComposition {
  const isRap = input.type === 'rap';
  const theme = input.theme;
  const kwList = input.keywords
    ? input.keywords.split(/[,;\n]+/).map(k => k.trim()).filter(Boolean)
    : ['rhythm', 'destiny', 'late nights', 'elevate'];

  const primaryKw = kwList[0] || 'the journey';
  const secondaryKw = kwList[1] || 'the skyline';
  const tertiaryKw = kwList[2] || 'relentless grind';
  const extraKw = kwList.slice(3).join(', ') || 'truth and vision';

  if (isRap) {
    // Generate Rap with bars, quotables, flow switches, beat drops, and ad-libs
    const dict = RAP_DICTIONARY[theme === 'hard' ? 'hard' : theme === 'soft' ? 'soft' : 'melodic'];
    const bpm = theme === 'hard' ? 140 : theme === 'soft' ? 84 : 128;
    const key = theme === 'hard' ? 'C Minor' : theme === 'soft' ? 'F# Minor' : 'A Minor';
    const beatPresetId = theme === 'hard' ? 'trap-808' : theme === 'soft' ? 'lofi-chill' : 'melodic-drill';

    const quotable1 = `I put ${primaryKw} on the map, now watch the axis shift ${dict.adlibs[0]}`;
    const quotable2 = `They talked about ${secondaryKw}, but never paid the price to live it!`;
    const quotable3 = `Turning ${tertiaryKw} into fuel, watch the spark illuminate the block!`;

    const sections: LyricSection[] = [
      {
        title: 'INTRO',
        type: 'intro',
        bpmCue: `${bpm} BPM - Dark Filtered Sample Fading In`,
        deliveryTip: 'Low baritone whisper, breathing close into condenser mic',
        lines: [
          `Yeah... turn the headphones up, let the 808 breathe... ${dict.adlibs[4]}`,
          `They thought ${primaryKw} was a fairy tale until we stepped out the shadows.`,
          `Three, two, one — hit the throttle.`
        ]
      },
      {
        title: 'VERSE 1 [SETUP & BARS]',
        type: 'verse',
        bpmCue: `${bpm} BPM - Steady Kick & Crisp Rimshot`,
        deliveryTip: 'Punched consonants, strictly on the 16th-note grid',
        annotations: ['Intricate multi-syllable rhyme scheme (AABB / internal)'],
        lines: [
          `Midnight creeping through the blinds, silhouette against the glass,`,
          `Calculated every step, built a lane designed to last ${dict.adlibs[0]}`,
          `Talking 'bout that ${primaryKw}, kept the vision razor sharp,`,
          `While they steady chasing trends, we were engineering art.`,
          `See the neon on the pavement reflecting where we stood,`,
          `Turned a corner of the city into our own neighborhood ${dict.adlibs[1]}`,
          `Now they notice how we move, how the rhythm starts to lock,`,
          `${quotable3}`
        ]
      },
      {
        title: 'FLOW SWITCH 1 [TRIPLET ACCELERATION]',
        type: 'flow-switch',
        bpmCue: `${bpm} BPM - Rapid Hi-Hat 32nd Roll Escalation`,
        deliveryTip: 'Shift cadence: rapid 3-syllable triplet groupings without taking breath',
        annotations: ['Cadence Switch: Triplet Flow burst', 'Quotable Bar Alert!'],
        lines: [
          `[FLOW SWITCH: 16th-Note Triplet Pocket]`,
          `Step in the booth and I lock in the frequency,`,
          `Nobody gave us a blueprint or decency,`,
          `Stacking ${secondaryKw} like a currency,`,
          `Handling business with absolute urgency! ${dict.adlibs[2]}`,
          `Look at the scoreboard, that's history made,`,
          `Stepped through the fire with no shade displayed!`
        ]
      },
      {
        title: 'HOOK / CHORUS [ANTHEM]',
        type: 'hook',
        bpmCue: `${bpm} BPM - Full Instrumentation & Layered Vocals`,
        deliveryTip: 'High energy, chanted hook with crowd ad-lib layers',
        lines: [
          `We run it up from the ground to the ceiling! (Hey!)`,
          `${primaryKw} alive and you're feeling the healing! (Whoa!)`,
          `Never back down when the pressure starts building,`,
          `Stacking our legacy, bricks for the building! ${dict.adlibs[3]}`,
          `Say it loud, let the speakers crack the wall,`,
          `Stand tall through it all, we will never take the fall!`
        ]
      },
      {
        title: 'BEAT DROP [HEAVY HITTER]',
        type: 'beat-drop',
        bpmCue: `${bpm} BPM - Bass Drop`,
        deliveryTip: '1-Bar absolute silence before dropping deepest 808 glide',
        lines: [
          `[BEAT DROP - 808 SLIDES & OPEN HI-HATS BLASTING]`,
          `Hold up—let it DROP! 💥 (BOW!)`,
          `[Bass hits 35Hz chest punch] ${dict.adlibs[0]}`
        ]
      },
      {
        title: 'VERSE 2 [METAPHOR ESCALATION & PUNCHLINES]',
        type: 'verse',
        bpmCue: `${bpm} BPM - Driving Snare & Rolling Percussion`,
        deliveryTip: 'Aggressive swagger, emphasizing end-rhymes and pauses',
        annotations: ['Heavy Quotables & Pop Culture Metaphors'],
        lines: [
          `Back in the lab with the alchemy, boiling the beat till it crystallize,`,
          `Look at the hunger that's mirrored inside of these fearless eyes.`,
          `${quotable1}`,
          `Every obstacle they planted turned into a golden gift ${dict.adlibs[1]}`,
          `Speaking in code with the masters, translating the pulse of the wire,`,
          `${tertiaryKw} in my veins, walking barefoot right over the fire.`,
          `${quotable2}`,
          `No rewind, no pause, write the legacy in permanent ink! ${dict.adlibs[5]}`
        ]
      },
      {
        title: 'OUTRO [FADE & RESIDUAL 808]',
        type: 'outro',
        bpmCue: 'Lowpass Filter Sweep Down',
        deliveryTip: 'Spoken cool-down over atmospheric chords',
        lines: [
          `Yeah... nothing left to prove when the bars speak for themselves.`,
          `${extraKw}... always locked in.`,
          `Fade the master... we out. 🎤`
        ]
      }
    ];

    const rawText = sections.map(s => `[${s.title}]\n${s.lines.join('\n')}`).join('\n\n');

    return {
      title: `${primaryKw.toUpperCase()} (THE ANTHEM)`,
      genre: 'Rap / Hip-Hop',
      theme: input.theme,
      suggestedBpm: bpm,
      keySignature: key,
      beatPresetId,
      flowAdvice: [
        'Accentuate the second and fourth beat of every bar for maximum snap.',
        'On the FLOW SWITCH section, compress your vocal syllables into 3-note triplet clusters.',
        'Let the 1-bar pause right before the BEAT DROP build unbearable tension.',
        'Use the ad-libs to fill gaps and reinforce your punchline rhymes.'
      ],
      quotables: [quotable1, quotable2, quotable3],
      rhymeHighlightColor: '#c084fc',
      sections,
      rawText
    };
  } else {
    // Generate Professional Song (Pop / Ballad / R&B / Indie)
    const struct = SONG_STRUCTURES[theme === 'hard' ? 'hard' : theme === 'soft' ? 'soft' : 'melodic'];
    const bpm = theme === 'hard' ? 124 : theme === 'soft' ? 76 : 102;
    const key = theme === 'hard' ? 'E Minor' : theme === 'soft' ? 'C Major' : 'D Major';
    const beatPresetId = theme === 'hard' ? 'pop-anthem' : theme === 'soft' ? 'ballad-acoustic' : 'melodic-pop';

    const quotable1 = `Even in the quietest dark, your melody is what remains.`;
    const quotable2 = `We wrote our story in the sky where gravity could never reach.`;

    const sections: LyricSection[] = [
      {
        title: 'INTRO',
        type: 'intro',
        chords: struct.chords.verse,
        bpmCue: `${bpm} BPM - Acoustic Keys / Warm Synth Pad`,
        deliveryTip: struct.vocalCues[0],
        lines: [
          `(Gentle piano intro with ambient strings)`,
          `Mm-mm-mm...`,
          `Where the quiet lights begin to glow...`
        ]
      },
      {
        title: 'VERSE 1',
        type: 'verse',
        chords: struct.chords.verse,
        bpmCue: `${bpm} BPM - Subtle Kick and Finger Snaps`,
        deliveryTip: struct.vocalCues[0],
        lines: [
          `Raindrops tracing patterns on the cold windowpane,`,
          `Finding pieces of our story washed away in the rain.`,
          `You held on to ${primaryKw} like a promise in the dust,`,
          `Learning what it takes to love, learning who we can trust.`,
          `The clock keeps ticking down the empty hall,`,
          `While shadows dance across the bedroom wall.`
        ]
      },
      {
        title: 'PRE-CHORUS',
        type: 'pre-chorus',
        chords: struct.chords.preChorus,
        bpmCue: 'Rising Snare Swell & Bass Movement',
        deliveryTip: struct.vocalCues[1],
        lines: [
          `Can you feel the pulse begin to rise?`,
          `Reflected in the center of your eyes.`,
          `All the words we never had the nerve to say,`,
          `Are finally breaking open, clearing out the grey!`
        ]
      },
      {
        title: 'CHORUS [THE HOOK]',
        type: 'chorus',
        chords: struct.chords.chorus,
        bpmCue: `${bpm} BPM - Full Band / Drums / Soaring Guitars & Pads`,
        deliveryTip: struct.vocalCues[2],
        lines: [
          `So we rise like a beacon shining into the night! (Shining bright!)`,
          `Holding ${secondaryKw} high in the morning light!`,
          `${quotable2}`,
          `Every scar becomes a spark that we were born to teach!`,
          `Yeah, we're unbreakable, higher than the highest sea,`,
          `This is who we were always meant to be!`
        ]
      },
      {
        title: 'VERSE 2',
        type: 'verse',
        chords: struct.chords.verse,
        bpmCue: `${bpm} BPM - Driving Bassline Groove`,
        deliveryTip: 'Intimate storytelling tone with subtle vocal fry',
        lines: [
          `Walking through the echoes of the boulevard we knew,`,
          `Every streetlight painted in an unfamiliar hue.`,
          `Held your hand through ${tertiaryKw}, never let it slide,`,
          `Found a sanctuary in the storm we had inside.`,
          `Now we don't look back at what we left behind,`,
          `There's a clearer horizon opening in our mind.`
        ]
      },
      {
        title: 'PRE-CHORUS',
        type: 'pre-chorus',
        chords: struct.chords.preChorus,
        bpmCue: 'Intense drum build-up',
        deliveryTip: struct.vocalCues[1],
        lines: [
          `Can you hear the music taking flight?`,
          `Guiding every wanderer through the night!`,
          `All the dreams we planted underneath the snow,`,
          `Are bursting through the surface, ready to let go!`
        ]
      },
      {
        title: 'CHORUS',
        type: 'chorus',
        chords: struct.chords.chorus,
        bpmCue: 'Full dynamic peak',
        deliveryTip: struct.vocalCues[2],
        lines: [
          `So we rise like a beacon shining into the night!`,
          `Holding ${secondaryKw} high in the morning light!`,
          `${quotable2}`,
          `Every scar becomes a spark that we were born to teach!`,
          `Yeah, we're unbreakable, higher than the highest sea,`,
          `This is who we were always meant to be!`
        ]
      },
      {
        title: 'BRIDGE [CLIMAX & MODULATION]',
        type: 'bridge',
        chords: struct.chords.bridge,
        bpmCue: 'Key lift / Half-time drum crash',
        deliveryTip: struct.vocalCues[3],
        lines: [
          `[MODULATION TO CLIMAX]`,
          `${quotable1}`,
          `Through the thunder, through the pouring rains,`,
          `We found our voice... (Full vocal belt)`,
          `WE FOUND OUR SONG!`
        ]
      },
      {
        title: 'OUTRO',
        type: 'outro',
        chords: struct.chords.verse,
        bpmCue: 'Decrescendo to single acoustic piano note',
        deliveryTip: 'Gentle falsetto whisper lingering with reverb',
        lines: [
          `We were always meant to be...`,
          `Always meant to be...`,
          `(${primaryKw}... in the quiet light)`,
          `Fade out on sustained root chord. 🎶`
        ]
      }
    ];

    const rawText = sections.map(s => `[${s.title}] (${s.chords || 'Chords'})\n${s.lines.join('\n')}`).join('\n\n');

    return {
      title: `${primaryKw.toUpperCase()} (ECHOES OF TOMORROW)`,
      genre: 'Professional Song / Pop Anthem',
      theme: input.theme,
      suggestedBpm: bpm,
      keySignature: key,
      beatPresetId,
      flowAdvice: [
        'Keep the Verse conversational and intimate (sing close to the microphone).',
        'Open up your chest resonance into the Pre-Chorus to lead naturally into the hook.',
        'On the Chorus, layer high third harmonies on the repeat lines.',
        'Use the Bridge key modulation for maximum emotional payoff.'
      ],
      quotables: [quotable1, quotable2],
      rhymeHighlightColor: '#38bdf8',
      sections,
      rawText
    };
  }
}

// Support for Gemini 2.5 / Flash AI API if user provides an API key
export async function composeWithGeminiAI(input: LyricGenerationInput): Promise<GeneratedComposition> {
  if (!input.geminiApiKey) {
    return composeOfflineLyrics(input);
  }

  const prompt = `You are a legendary Grammy-award winning songwriter and master hip-hop lyricist/ghostwriter.
Create a complete, masterclass ${input.type === 'rap' ? 'RAP' : 'PROFESSIONAL SONG'} based on these requirements:
- Type: ${input.type.toUpperCase()}
- Theme/Vibe: ${input.theme} (e.g., soft, hard, melodic, etc.)
- Keywords/Topic/Imagery: "${input.keywords}"
- Artist Style: ${input.artistStyle || 'Modern Chart-Topping Visionary'}

${input.type === 'rap' ? `
SPECIFIC RAP REQUIREMENTS:
1. Fill it with elite quotables, multi-syllabic rhymes, internal rhymes, and double entendres.
2. Include at least one dramatic FLOW SWITCH with cadence annotations (e.g., [FLOW SWITCH: 16th-Note Triplet Pocket] or [STACCATO MACHINE GUN CADENCE]).
3. Include at least one epic BEAT DROP indicator (e.g., [BEAT DROP: Sub 808 explodes, hi-hat frenzy]).
4. Add authentic ad-libs in parentheses (e.g. (Yeah!), (Bow!), (Straight facts!)).
5. Structure: INTRO, VERSE 1, FLOW SWITCH, HOOK/CHORUS, BEAT DROP, VERSE 2, BRIDGE, OUTRO.
` : `
SPECIFIC SONG REQUIREMENTS:
1. Write a radio-ready, deeply emotional and memorable commercial song.
2. Structure: INTRO, VERSE 1, PRE-CHORUS, CHORUS (THE HOOK), VERSE 2, PRE-CHORUS, CHORUS, BRIDGE (EMOTIONAL CLIMAX), FINAL CHORUS, OUTRO.
3. Include musical chord progression suggestions for each section (e.g. Am - F - C - G) and vocal delivery instructions (e.g. (Chest Voice), (Falsetto), (Harmonies in 3rds)).
`}

Return strictly a valid JSON object matching this TypeScript structure:
{
  "title": "Song or Track Title",
  "genre": "Genre description",
  "theme": "${input.theme}",
  "suggestedBpm": number,
  "keySignature": "Key like C Minor or F# Major",
  "flowAdvice": ["Advice 1", "Advice 2", "Advice 3"],
  "quotables": ["Quote 1", "Quote 2", "Quote 3"],
  "sections": [
    {
      "title": "SECTION TITLE (e.g. VERSE 1)",
      "type": "intro|verse|pre-chorus|chorus|hook|flow-switch|beat-drop|bridge|outro",
      "chords": "Chord progression if song or beat vibe",
      "bpmCue": "BPM cue",
      "deliveryTip": "Vocal tip",
      "lines": ["Line 1", "Line 2", "..."]
    }
  ]
}
Do NOT include markdown backticks around JSON. Return pure JSON only.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${input.geminiApiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.8
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error('Empty response from Gemini');

    const parsed = JSON.parse(text);
    const beatPresetId = input.type === 'rap' 
      ? (input.theme === 'hard' ? 'trap-808' : input.theme === 'soft' ? 'lofi-chill' : 'melodic-drill')
      : (input.theme === 'hard' ? 'pop-anthem' : input.theme === 'soft' ? 'ballad-acoustic' : 'melodic-pop');

    const sections: LyricSection[] = parsed.sections || [];
    const rawText = sections.map((s: LyricSection) => `[${s.title}]\n${(s.lines || []).join('\n')}`).join('\n\n');

    return {
      title: parsed.title || 'Untitled Masterpiece',
      genre: parsed.genre || (input.type === 'rap' ? 'Rap / Hip-Hop' : 'Pop / Ballad'),
      theme: input.theme,
      suggestedBpm: parsed.suggestedBpm || (input.type === 'rap' ? 140 : 100),
      keySignature: parsed.keySignature || 'C Minor',
      beatPresetId,
      flowAdvice: parsed.flowAdvice || ['Keep your breath controlled', 'Focus on syllable timing'],
      quotables: parsed.quotables || [],
      rhymeHighlightColor: input.type === 'rap' ? '#c084fc' : '#38bdf8',
      sections,
      rawText
    };
  } catch (err) {
    console.warn('Fallback to procedural engine due to:', err);
    return composeOfflineLyrics(input);
  }
}

