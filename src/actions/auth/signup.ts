"use server";

import { db } from "@/db";
import { user } from "@/db/schema";
import { signUp } from "@/lib/auth/client";
import { eq } from "drizzle-orm";

export async function registerUser(name: string) {
  const wilda = {
    email: "wildanur58@gmail.com",
    name: "Wilda Nur Imamah",
    password: "mantapkuy",
    username: "wildaanuri",
  };

  const cakfan = {
    email: "withcakfan@gmail.com",
    name: "Taufan Fatahillah",
    password: "mantapkuy",
    username: "withcakfan",
  };

  const dataUser = name === "wilda" ? wilda : cakfan;

  const { data } = await signUp.email(dataUser);

  if (data?.session) {
    await db
      .update(user)
      .set({ gender: "male" })
      .where(eq(user.id, data.session.userId));
  }

  console.log("data:", data);
}
