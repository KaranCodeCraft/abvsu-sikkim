'use server'

import { requireLogin } from "@/lib/middleware/auth"
import { prisma } from "@/lib/middleware/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function getEnquiries() {
  await requireLogin()
  return await prisma.enquiry.findMany({
    orderBy: { createdAt: "desc" }
  })
}

export async function updateEnquiryStatus(id, status) {
  await requireLogin()

  const UpdateEnquiryStatusSchema = z.object({
    id: z
      .union([z.string(), z.number()])
      .transform(val =>
        typeof val === "string" ? parseInt(val, 10) : val
      )
      .refine(val => !isNaN(val), { message: "Invalid ID" }),

    status: z.enum(["WON", "PENDING", "LOST"])
  })

  const parsed = UpdateEnquiryStatusSchema.safeParse({ id, status })

  if (!parsed.success) {
    console.error(parsed.error.flatten())
    throw new Error("Invalid input")
  }

  const { id: numericId, status: validStatus } = parsed.data

  await prisma.enquiry.update({
    where: { id: numericId },
    data: { status: validStatus }
  })

  revalidatePath('/dashboard')
}
