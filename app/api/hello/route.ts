import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ 
      message: "Hello from LearnPilot backend!",
      status: "Database connected successfully!"
    });
  } catch (error) {
    return NextResponse.json({ 
      error: "Failed to connect to database",
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
} 