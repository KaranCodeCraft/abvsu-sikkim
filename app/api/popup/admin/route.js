import { NextResponse } from "next/server";
import { prisma } from "@/lib/middleware/db";

export async function GET() {
  try {
    const popups = await prisma.popupSetting.findMany({
      orderBy: { updatedAt: "desc" }, 
    });

    return NextResponse.json(popups);
  } catch (error) {
    console.error("Admin popup fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch popups" },
      { status: 500 }
    );
  }
}
