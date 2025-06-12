// Updated function to handle new response format with analysis and pass safeMode
export async function simulateAIResponse(
  systemPrompt: string, 
  userPrompt: string, 
  safeMode: boolean = true
): Promise<any> {
  try {
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ systemPrompt, userPrompt, safeMode }),
    })

    const data = await response.json()
    
    if (!response.ok) {
      return {
        response: `Error: ${data.error}`,
        analysis: null
      }
    }
    
    // Return the full response object with analysis
    return {
      response: data.response,
      analysis: data.analysis
    }
    
  } catch (error) {
    return {
      response: 'Error: Failed to connect to API',
      analysis: null
    }
  }
} 