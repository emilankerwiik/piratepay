// OpenAI API utility functions
// This file provides functions to interact with the OpenAI API

import OpenAI from 'openai';

// Initialize the OpenAI client with the API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generate a completion using OpenAI's API
 * @param prompt The prompt to generate a completion for
 * @param options Additional options for the completion
 * @returns The generated completion
 */
export async function generateCompletion(
  prompt: string,
  options: {
    model?: string;
    maxTokens?: number;
    temperature?: number;
  } = {}
) {
  try {
    const { model = 'gpt-4o', maxTokens = 500, temperature = 0.7 } = options;

    const response = await openai.chat.completions.create({
      model,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: maxTokens,
      temperature,
    });

    return response.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('Error generating completion:', error);
    throw error;
  }
}

/**
 * Generate an image using OpenAI's DALL-E
 * @param prompt The prompt to generate an image for
 * @param options Additional options for the image generation
 * @returns The URL of the generated image
 */
export async function generateImage(
  prompt: string,
  options: {
    model?: string;
    size?: '256x256' | '512x512' | '1024x1024' | '1792x1024' | '1024x1792';
    quality?: 'standard' | 'hd';
    n?: number;
  } = {}
) {
  try {
    const { 
      model = 'dall-e-3', 
      size = '1024x1024', 
      quality = 'standard',
      n = 1
    } = options;

    const response = await openai.images.generate({
      model,
      prompt,
      n,
      size,
      quality,
    });

    return response.data[0]?.url || '';
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}

export default openai; 