"use client";

import { useRef } from "react";
import { useScroll, motion, MotionValue, useTransform } from "framer-motion";

function Word({
  children,
  range,
  progress,
}: {
  children: React.ReactNode;
  range: number[];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-3 leading-relaxed">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

export default function Paragraph({ text }: { text: string }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={element}
      className="flex max-w-full flex-wrap text-4xl font-bold leading-4"
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={index} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
