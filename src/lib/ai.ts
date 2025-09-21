import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function generateEmailSummaryAndTag(emailBody: string, subject: string) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    
    const prompt = `
Analyze this email and provide:
1. A 2-3 line summary
2. A classification tag (Urgent, Informative, or Spam)

Email Subject: ${subject}
Email Body: ${emailBody}

Respond in JSON format:
{
  "summary": "your summary here",
  "tag": "Urgent|Informative|Spam"
}
`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    
    // Extract JSON from markdown code blocks
    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) || text.match(/```\s*([\s\S]*?)\s*```/) || [null, text]
    const jsonText = jsonMatch[1] || text
    
    const parsed = JSON.parse(jsonText.trim())
    return {
      summary: parsed.summary || 'Unable to generate summary',
      tag: parsed.tag || 'Informative'
    }
  } catch (error) {
    console.error('AI processing error:', error)
    return {
      summary: 'Unable to generate summary',
      tag: 'Informative'
    }
  }
}