"use client";

import { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";

export default function Paragraph({ text }: { text: string }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);

  return (
    <motion.p
      ref={element}
      className="scroll-reveal max-w-full break-words p-24 text-4xl font-medium leading-relaxed"
      style={{ opacity: scrollYProgress }}
    >
      <span>{text}</span>
    </motion.p>
  );
}
