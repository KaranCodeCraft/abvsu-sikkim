-- CreateEnum
CREATE TYPE "EnquiryStatus" AS ENUM ('PENDING', 'WON', 'LOST');

-- AlterTable
ALTER TABLE "enquiry" ADD COLUMN     "status" "EnquiryStatus" NOT NULL DEFAULT 'PENDING';
