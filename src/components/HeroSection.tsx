import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-bg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SignedUser from "./SignedUser";

export default function HeroSection() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-5">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <BlurFade delay={0.25} inView>
        <Link
          href={"https://www.instagram.com/wildaanuri"}
          target="_blank"
          aria-label="@wildaanuri"
          title="Instagram @wildaanuri"
        >
          <Image
            src="/potrait.jpg"
            alt=""
            className="rounded-full transition-all animate-in hover:scale-110"
            width={200}
            height={200}
          />
        </Link>
      </BlurFade>

      <SignedUser />
    </section>
  );
}
