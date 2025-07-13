"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useRef, useEffect, useState } from "react";

const defaultVariants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1 },
};

export function FlipText({
  children,
  duration = 0.5,
  delayMultiple = 0.08,
  className,
  as: Component = "span",
  variants,
  ...props
}) {
  const MotionComponent = motion.create(Component);
  const characters = React.Children.toArray(children).join("").split("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 }); // 👈 Triggers at 50% visibility
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setVisible(true);
    } else {
      setVisible(false); // Reset if you want re-triggering
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="flex justify-center flex-wrap text-white"
    >
      <AnimatePresence mode="wait">
        {visible &&
          characters.map((char, i) => (
            <MotionComponent
              key={`${char}-${i}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants || defaultVariants}
              transition={{ duration, delay: i * delayMultiple }}
              className={cn("origin-center drop-shadow-sm", className)}
              {...props}
            >
              {char === " " ? "\u00A0" : char}
            </MotionComponent>
          ))}
      </AnimatePresence>
    </div>
  );
}
