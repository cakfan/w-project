import { getMe } from "@/lib/auth/me";
import { BlurFade } from "./ui/blur-fade";
import { SparklesText } from "./ui/sparkle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export default async function SignedUser() {
  const me = await getMe();

  if (!me || me.username !== "wildaanuri") {
    return (
      <Link
        href={"https://www.instagram.com/wildaanuri"}
        target="_blank"
        aria-label="@wildaanuri"
        title="Instagram @wildaanuri"
      >
        <BlurFade delay={0.25} inView>
          <SparklesText text="Hai, Wilda Nur Imamah 👋" />
        </BlurFade>
      </Link>
    );
  }

  if (me.username === "wildaanuri") {
    return (
      <>
        <BlurFade delay={0.25} inView>
          <SparklesText text="Eh, Wilda udah login nih! 😊" />
        </BlurFade>
        <BlurFade delay={0.35} inView>
          <Link
            href={"/chats"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Yuk, ngobrol!
          </Link>
        </BlurFade>
      </>
    );
  }
}
