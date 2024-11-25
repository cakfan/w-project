import { getMe } from "@/lib/auth/me";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import Chat from "./components/chat";
import { getUser } from "@/lib/auth/get-user";

export const metadata: Metadata = {
  title: "Chats",
};

export default async function Page() {
  const me = await getMe();

  if (!me || (me.username !== "wildaanuri" && me.username !== "withcakfan")) {
    redirect("/");
  }

  const targetUsername =
    me.username === "wildaanuri" ? "withcakfan" : "wildaanuri";

  const you = await getUser(targetUsername);

  if (!you) return null;

  return <Chat you={you} />;
}
