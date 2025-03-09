// API route for OpenAI integration
import { NextRequest, NextResponse } from 'next/server';
import { generateCompletion } from '@/utils/openai';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const completion = await generateCompletion(prompt);

    return NextResponse.json({ completion });
  } catch (error) {
    console.error('Error in OpenAI API route:', error);
    return NextResponse.json(
      { error: 'Failed to generate completion' },
      { status: 500 }
    );
  }
}

// GET method for testing if the API is working
export async function GET() {
  return NextResponse.json({
    status: 'OpenAI API route is working',
    message: 'Use POST method with a prompt to generate completions',
  });
} 