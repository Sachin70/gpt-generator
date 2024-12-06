export const fetchGPTContent = async (prompt: string): Promise<string> => {
  if (!prompt.trim()) return "";

  const API_URL = "https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B";
  const HF_API_TOKEN = "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";

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HF_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: prompt,
      parameters: {
        max_length: 100,
        temperature: 0.7,
      },
    }),
  });

  const data = await response.json();
  // GPT-2 model returns an array of objects with 'generated_text'
  return data?.[0]?.generated_text?.trim() || "";
};
