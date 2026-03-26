"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { PROJECT } from "@/lib/project-data";

export function AnimatedCounter({
  value,
  suffix = "",
  className = "",
  duration = 1.5,
}: {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      motionVal.set(value);
    }
  }, [inView, value, motionVal]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest).toLocaleString());
    });
    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  );
}

export function AnimatedCurrency({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 2000, bounce: 0 });
  const [display, setDisplay] = useState(`${PROJECT.quote.currency === "TWD" ? "NT$" : "$"}0`);

  useEffect(() => {
    if (inView) {
      motionVal.set(value);
    }
  }, [inView, value, motionVal]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(
        new Intl.NumberFormat("zh-TW", {
          style: "currency",
          currency: PROJECT.quote.currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(Math.round(latest))
      );
    });
    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
