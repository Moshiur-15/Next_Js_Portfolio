"use client";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

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

  const [visible, setVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="flex justify-center flex-wrap text-white cursor-pointer"
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
