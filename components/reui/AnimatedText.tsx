"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationType =
  | "fade"
  | "slideUp"
  | "slideDown"
  | "blur"
  | "scale"
  | "rotate";

interface AnimatedTextProps {
  children: string;
  animation?: AnimationType;
  by?: "word" | "char";
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export default function AnimatedText({
  children,
  animation = "slideUp",
  by = "word",
  delay = 0.05,
  duration = 0.5,
  once = true,
  className,
}: AnimatedTextProps) {
  const items = by === "word" ? children.split(" ") : children.split("");

  const variants: Record<AnimationType, Variants> = {
    fade: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration,
        },
      },
    },

    slideUp: {
      hidden: {
        opacity: 0,
        y: 40,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
        },
      },
    },

    slideDown: {
      hidden: {
        opacity: 0,
        y: -40,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
        },
      },
    },

    blur: {
      hidden: {
        opacity: 0,
        filter: "blur(12px)",
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration,
        },
      },
    },

    scale: {
      hidden: {
        opacity: 0,
        scale: 0.7,
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration,
        },
      },
    },

    rotate: {
      hidden: {
        opacity: 0,
        rotate: -20,
        scale: 0.8,
      },
      visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
          duration,
        },
      },
    },
  };

  return (
    <span className={cn("inline-block", className)}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={variants[animation]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once }}
          transition={{
            delay: index * delay,
          }}
          className="inline-block"
        >
          {item}
          {by === "word" && "\u00A0"}
        </motion.span>
      ))}
    </span>
  );
}
//*--documentation--*//
//*animation*//
//"fade" : Opacity : 0 => 1
// "slideUp" : y = 40 => y = 0
// "slideDown" : y = -40 => y = 0
// "blur" : filter = "blur(12px)" => filter = "blur(0px)"
// "scale" : scale = 0.7 => scale = 1
// "rotate" : rotate = -20 => rotate = 0
//-------------------
//*by*//
// "word" : Animate each word separately
// "char" : Animate each character separately
//-------------------
//*delay*//
//Delay between each word/character animation
//-------------------
//*duration*//
//Duration of each word/character animation
//-------------------
//*once*//
//Run animation only once when the element is in the viewport 
//default: true : animation will run only once when the element is in the viewport
//If set to false, the animation will run every time the element is in the viewport.
//-------------------