import { NextResponse } from "next/server";
import { prisma } from "@/lib/middleware/db";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET() {
  const now = new Date();

  const popup = await prisma.popupSetting.findFirst({
    where: {
      isActive: true,
      startTime: { lte: now },
      endTime: { gte: now },
    },
    orderBy: {updatedAt: "desc"}
  });
  return NextResponse.json(popup || null);
}

export async function POST(req) {
  const body = await req.json();
  const { imageUrl, imageBase64, isActive, startTime, endTime } = body;

  let finalImageUrl = imageUrl;

  if (imageBase64) {
    const matches = imageBase64.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!matches) throw new Error("Invalid image data");

    const ext = matches[1].split("/")[1];
    const data = matches[2];
    const buffer = Buffer.from(data, "base64");

    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    const filename = `popup_${Date.now()}.${ext}`;
    fs.writeFileSync(path.join(uploadDir, filename), buffer);
    finalImageUrl = `/uploads/${filename}`;
  }

  const start = new Date(startTime);
  const end = new Date(endTime);

  const popup = await prisma.popupSetting.create({
    data: {
      imageUrl: finalImageUrl,
      isActive,
      startTime: start,
      endTime: end,
    },
  });

  return NextResponse.json(popup);
}

export async function PATCH(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { imageUrl, imageBase64, isActive, startTime, endTime } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Popup ID is required" },
        { status: 400 }
      );
    }

    // Find existing popup
    const existingPopup = await prisma.popupSetting.findUnique({
      where: { id: Number(id) },
    });
    if (!existingPopup) {
      return NextResponse.json({ error: "Popup not found" }, { status: 404 });
    }

    let finalImageUrl = imageUrl || existingPopup.imageUrl;

    // Handle new image upload if provided
    if (imageBase64) {
      const matches = imageBase64.match(/^data:(image\/\w+);base64,(.+)$/);
      if (!matches) throw new Error("Invalid image data");

      const ext = matches[1].split("/")[1];
      const data = matches[2];
      const buffer = Buffer.from(data, "base64");

      const uploadDir = path.join(process.cwd(), "public/uploads");
      if (!fs.existsSync(uploadDir))
        fs.mkdirSync(uploadDir, { recursive: true });

      const filename = `popup_${Date.now()}.${ext}`;
      fs.writeFileSync(path.join(uploadDir, filename), buffer);
      finalImageUrl = `/uploads/${filename}`;

      // Optionally delete the old image if it's local
      if (existingPopup.imageUrl?.startsWith("/uploads/")) {
        const oldPath = path.join(
          process.cwd(),
          "public",
          existingPopup.imageUrl
        );
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
    }

    const updatedPopup = await prisma.popupSetting.update({
      where: { id: Number(id) },
      data: {
        imageUrl: finalImageUrl,
        isActive:
          typeof isActive === "boolean" ? isActive : existingPopup.isActive,
        startTime: startTime ? new Date(startTime) : existingPopup.startTime,
        endTime: endTime ? new Date(endTime) : existingPopup.endTime,
      },
    });

    return NextResponse.json(updatedPopup);
  } catch (error) {
    console.error("PATCH error:", error);
    return NextResponse.json(
      { error: "Failed to update popup" },
      { status: 500 }
    );
  }
}