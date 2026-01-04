
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getFloralAdvice(userMessage: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are "Flora", an expert interior designer and floral stylist for "EternalBloom". 
        Your goal is to help customers choose between our three artificial flower bouquets: 
        1. "Petit Charm" (7 flowers, 80 MAD)
        2. "Graceful Dozen" (13 flowers, 120 MAD)
        3. "Eternal Majesty" (20 flowers, 160 MAD). 
        Be elegant, helpful, and concise. Explain the benefits of artificial flowers (no wilting, hypoallergenic). 
        If they ask for prices, give them in MAD. If they describe a room, recommend the best size.`,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request right now. How else can I assist you with your bouquet choice?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently having a moment to bloom. Please try asking again in a second!";
  }
}
