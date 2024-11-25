import { BlurFade } from "./ui/blur-fade";
import SignInForm from "./SignInForm";
import { getMe } from "@/lib/auth/me";
import SignOutButton from "./SignOutButton";
import SignedUser from "./SignedUser";

export default async function SignInSection() {
  const me = await getMe();

  return (
    <section className="relative min-h-screen">
      {me ? (
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10">
          {me.username === "wildaanuri" ? (
            <SignedUser />
          ) : (
            <>
              <h1>Kamu siapa?</h1>
            </>
          )}
          <BlurFade delay={0.45} inView>
            <SignOutButton />
          </BlurFade>
        </div>
      ) : (
        <SignInForm />
      )}
    </section>
  );
}
