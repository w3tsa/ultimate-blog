"use server";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { db } from "@/db";

const FormSchema = z.object({
  id: z.number(),
  email: z.string().min(1, { message: "Email is required" }),
  isSubscribed: z.boolean(),
});

const CreateSubscriber = FormSchema.omit({ id: true, isSubscribed: true });

export type State = {
  errors?: {
    email?: string[];
  };
  message?: string | null;
};

export async function createSubscriber(prevState: State, formData: FormData) {
  const validatedField = CreateSubscriber.safeParse({
    email: formData.get("email"),
  });

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: "Email is Required.",
    };
  }

  const { email } = validatedField.data;
  try {
    await db.subscribers.create({
      data: {
        email: email,
      },
    });

    revalidatePath("/");
    return { message: "Thank you for Subscribing!" };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return {
          message: "Email already Exist in the DB",
        };
      }
    }
    return { message: "Database Error: Failed to Create Subscriber." };
  }
}
