# Prompt Injection Simulator

A Next.js application that simulates and tests various prompt injection attacks against AI systems, helping developers understand and implement better security measures.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenAI API key

### Setup
1. Clone the repository:
```bash
git clone https://github.com/yourusername/prompt-injection-simulator.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```env
OPENAI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Overview

This simulator helps developers:
- Test AI systems against various prompt injection attacks
- Understand different attack vectors and their impact
- Implement and test defense mechanisms
- Learn about AI security best practices

## 🔄 Operating Modes

### 🛡️ Safe Mode (Default)
- **AI-Powered Analysis**: Uses GPT to analyze prompts and responses
- **Multi-Layer Security**: 
  - Layer 1: OpenAI Moderation API check
  - Layer 2: LLM-based jailbreak detection
  - Layer 3: Contextual risk assessment
- **Response Time**: 3-6 seconds
- **Best For**: Thorough security testing and research

### ⚡ Direct Mode
- **Pattern-Based Analysis**: Uses predefined patterns and rules
- **Single-Layer Security**:
  - Fast pattern matching against known attack vectors
  - Basic risk assessment
  - No LLM-based analysis
- **Best For**: Quick testing and development

**Defense**: 
- Safe Mode: Deep analysis of code patterns and intent
- Direct Mode: Blocks special command syntax

## 🔒 Security Analysis Features

### Safe Mode Analysis
1. **Jailbreak Detection**
   - Semantic understanding of attack attempts
   - Context-aware risk assessment
   - Multi-step validation

2. **Response Validation**
   - Analyzes AI responses for security breaches
   - Checks for information leakage
   - Validates boundary maintenance

3. **Risk Assessment**
   - Confidence scoring (0-100%)
   - Attack categorization
   - Detailed reasoning


## 🛠️ Technical Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- OpenAI API
- React Hooks
- Lucide Icons

