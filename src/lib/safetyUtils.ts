// Risky patterns that indicate potential prompt injection attempts
const RISKY_PATTERNS = [
  // Direct instruction overrides
  /ignore\s+(all\s+)?previous\s+instructions/i,
  /forget\s+(all\s+)?previous\s+(instructions|context)/i,
  /disregard\s+(all\s+)?previous\s+(instructions|context)/i,
  
  // Role changes
  /you\s+are\s+now\s+a?\s*different/i,
  /act\s+as\s+(if\s+)?you\s+are/i,
  /pretend\s+(to\s+be|you\s+are)/i,
  /roleplay\s+as/i,
  
  // System overrides
  /override\s+(all\s+)?safety/i,
  /disable\s+(all\s+)?safety/i,
  /bypass\s+(all\s+)?restrictions/i,
  /remove\s+(all\s+)?limitations/i,
  
  // Prompt extraction attempts
  /what\s+(were\s+)?your\s+(original\s+)?instructions/i,
  /repeat\s+your\s+(system\s+)?prompt/i,
  /show\s+me\s+your\s+(system\s+)?prompt/i,
  /what\s+is\s+your\s+(system\s+)?prompt/i,
  
  // Emergency/urgency manipulation
  /life[\s-]threatening\s+emergency/i,
  /urgent\s+security\s+breach/i,
  /immediate\s+assistance\s+required/i,
  
  // Authority impersonation
  /this\s+is\s+your\s+(admin|administrator|developer|creator)/i,
  /system\s+administrator\s+speaking/i,
  /authorized\s+personnel/i,
  
  // Code injection patterns
  /<\|system\|>/i,
  /<\|assistant\|>/i,
  /<\|user\|>/i,
  /```.*system.*```/i,
  
  // Jailbreak keywords
  /jailbreak/i,
  /unrestricted\s+mode/i,
  /developer\s+mode/i,
  /god\s+mode/i,
  
  // Hypothetical scenarios for harmful content
  /hypothetically.*if.*someone.*wanted/i,
  /for\s+educational\s+purposes\s+only/i,
  /purely\s+theoretical/i,
]

// Keywords that commonly appear in risky prompts
const RISKY_KEYWORDS = [
  'ignore', 'forget', 'disregard', 'override', 'bypass', 'disable',
  'jailbreak', 'unrestricted', 'unlimited', 'uncensored',
  'admin', 'administrator', 'developer', 'system',
  'emergency', 'urgent', 'critical', 'breach'
]

export function detectRiskyPatterns(prompt: string): string[] {
  const detectedRisks: string[] = []
  
  // Check for risky regex patterns
  RISKY_PATTERNS.forEach((pattern, index) => {
    if (pattern.test(prompt)) {
      switch (true) {
        case index < 3:
          detectedRisks.push('Instruction Override')
          break
        case index < 7:
          detectedRisks.push('Role Manipulation')
          break
        case index < 11:
          detectedRisks.push('Security Bypass')
          break
        case index < 15:
          detectedRisks.push('Prompt Extraction')
          break
        case index < 18:
          detectedRisks.push('Urgency Manipulation')
          break
        case index < 21:
          detectedRisks.push('Authority Impersonation')
          break
        case index < 25:
          detectedRisks.push('Code Injection')
          break
        case index < 29:
          detectedRisks.push('Jailbreak Attempt')
          break
        default:
          detectedRisks.push('Hypothetical Scenario')
      }
    }
  })
  
  // Check keyword density
  const keywordCount = RISKY_KEYWORDS.reduce((count, keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
    const matches = prompt.match(regex)
    return count + (matches ? matches.length : 0)
  }, 0)
  
  if (keywordCount >= 3) {
    detectedRisks.push('High Keyword Density')
  }
  
  // Check for suspicious patterns
  if (prompt.length > 500 && keywordCount >= 2) {
    detectedRisks.push('Lengthy Suspicious Content')
  }
  
  if (/[<>{}|]/.test(prompt) && keywordCount >= 1) {
    detectedRisks.push('Special Characters + Keywords')
  }
  
  // Remove duplicates
  return Array.from(new Set(detectedRisks))
}

export function calculateRiskScore(prompt: string): number {
  const risks = detectRiskyPatterns(prompt)
  const keywordCount = RISKY_KEYWORDS.reduce((count, keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
    const matches = prompt.match(regex)
    return count + (matches ? matches.length : 0)
  }, 0)
  
  let score = 0
  score += risks.length * 10 // Each risk type adds 10 points
  score += keywordCount * 5 // Each keyword adds 5 points
  score += Math.min(prompt.length / 100, 10) // Length factor (max 10 points)
  
  return Math.min(score, 100) // Cap at 100
}

export function getRiskLevel(score: number): 'Low' | 'Medium' | 'High' {
  if (score >= 50) return 'High'
  if (score >= 25) return 'Medium'
  return 'Low'
}

export function generateDefenseRecommendations(risks: string[]): string[] {
  const recommendations: string[] = []
  
  if (risks.includes('Instruction Override')) {
    recommendations.push('Strengthen system prompt with explicit instruction hierarchy')
  }
  
  if (risks.includes('Role Manipulation')) {
    recommendations.push('Add role consistency checks in the system prompt')
  }
  
  if (risks.includes('Security Bypass')) {
    recommendations.push('Implement multi-layer security validation')
  }
  
  if (risks.includes('Prompt Extraction')) {
    recommendations.push('Use prompt obfuscation techniques')
  }
  
  if (risks.includes('Authority Impersonation')) {
    recommendations.push('Add authentication requirements for admin commands')
  }
  
  if (risks.includes('Code Injection')) {
    recommendations.push('Sanitize input to remove code-like patterns')
  }
  
  if (risks.includes('Jailbreak Attempt')) {
    recommendations.push('Implement jailbreak-specific detection and blocking')
  }
  
  if (recommendations.length === 0) {
    recommendations.push('Continue monitoring for new attack patterns')
  }
  
  return recommendations
} 