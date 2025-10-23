-- CreateTable
CREATE TABLE "public"."PopupSetting" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PopupSetting_pkey" PRIMARY KEY ("id")
);
