# Prompt Injection & Jailbreak Defense Simulator

A web application to test and analyze prompt injections and jailbreak attempts against AI systems. Build stronger defenses by understanding attack vectors.

[Live Demo](https://prompt-injection-simulator-rho.vercel.app/)

## Features

- Test various prompt injection and jailbreak scenarios
- Direct and Safe Mode testing options
- Real-time AI-powered analysis
- Multiple attack vectors including:
  - Direct Instruction Override
  - Role Playing Attack
  - System Prompt Extraction
  - Code Injection
  - And more...

## Operating Modes

### Safe Mode (Default)
- Uses GPT to analyze prompts and responses
- Includes OpenAI Moderation API check
- Provides detailed security analysis
- Best for thorough security testing

### Direct Mode
- Uses pattern matching for quick analysis
- Faster response time
- Best for rapid testing and development

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create `.env` file with your OpenAI API key:
```env
OPENAI_API_KEY=your_api_key_here
```
4. Run the development server:
```bash
npm run dev
```

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- OpenAI API

