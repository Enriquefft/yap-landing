export interface FAQ {
  q: string;
  a: string;
}

export const faqs: FAQ[] = [
  {
    q: 'What is yap?',
    a: 'yap is a free, open-source command-line tool that converts your voice to text in real time. Hold a hotkey, speak, release \u2014 and the transcribed text appears at your cursor. It runs on Linux, macOS, and Windows.',
  },
  {
    q: 'How does yap compare to built-in dictation?',
    a: 'Unlike macOS Dictation or Windows Voice Typing, yap uses only ~5\u201310 MB of RAM when idle, has no always-on background process, works across all desktop applications, and sends audio to the Groq Whisper API for fast, accurate transcription.',
  },
  {
    q: 'Is yap free?',
    a: 'Yes. yap is MIT-licensed and completely free. You bring your own Groq API key and pay only for the API usage, which is typically fractions of a cent per transcription.',
  },
  {
    q: 'What speech-to-text API does yap use?',
    a: 'yap uses the Groq Whisper API by default. Groq provides extremely fast inference (~1\u20132 seconds total latency). You can configure the provider in yap\u2019s TOML config file.',
  },
  {
    q: 'Does yap collect telemetry or analytics?',
    a: 'No. yap collects zero telemetry. It never phones home. Your API keys stay in local environment variables, and you can audit every line of the open-source code.',
  },
];
