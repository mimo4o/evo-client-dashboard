"use client";

import { motion } from "framer-motion";
import { PROJECT } from "@/lib/project-data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 pb-16 pt-32 overflow-hidden grid-texture">
      {/* Background gradient orbs */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-accent/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/[0.015] blur-[120px] pointer-events-none" />

      {/* Corner brackets on the viewport */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-text-muted/20" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-text-muted/20" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-text-muted/20" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-text-muted/20" />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center justify-between mb-20"
        >
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase">
              Final Offer
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-[0.2em] text-text-muted uppercase">
            {PROJECT.studio.role}
          </span>
        </motion.div>

        {/* Main title - MASSIVE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <h1 className="text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.85] tracking-[-0.05em] font-serif">
            <span className="block text-text-primary">{PROJECT.client.name}</span>
            <span className="block">
              <span className="text-text-muted/30 font-light">×</span>
              <span className="gradient-text ml-2">{PROJECT.studio.name}</span>
            </span>
          </h1>
        </motion.div>

        {/* Project name and tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-md">
            <h2 className="text-[20px] text-text-primary font-medium tracking-[-0.01em] mb-3">
              {PROJECT.project.name}
            </h2>
            <p className="text-[14px] text-text-muted leading-[1.7]">
              {PROJECT.project.tagline}
            </p>
          </div>

          {/* Stats row */}
          <div className="flex gap-12">
            {[
              { label: "時長", value: PROJECT.project.duration },
              { label: "開始", value: PROJECT.project.startDate },
              { label: "狀態", value: PROJECT.project.status, accent: true },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[9px] font-mono tracking-[0.25em] text-text-muted uppercase mb-2">
                  {stat.label}
                </div>
                <div className={`text-[14px] font-medium tracking-[-0.01em] ${
                  stat.accent ? "text-warning" : "text-text-primary"
                }`}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-mono tracking-[0.3em] text-text-muted uppercase">
          往下滑
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-5 bg-gradient-to-b from-text-muted/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
