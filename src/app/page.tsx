// import { registerUser } from "@/actions/auth/signup";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import RoadmapSection from "@/components/RoadmapSection";
import SignInSection from "@/components/SignInSection";

export default async function Home() {
  // await registerUser("wilda");
  return (
    <div className="p-10 md:p-20">
      <HeroSection />
      <div className="h-screen" />
      <IntroSection />
      <div className="h-screen" />
      <RoadmapSection />
      <div className="h-screen" />
      <SignInSection />
    </div>
  );
}
