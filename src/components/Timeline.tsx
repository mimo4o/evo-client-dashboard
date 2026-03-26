"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECT } from "@/lib/project-data";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { TiltCard } from "./TiltCard";
import { ParallaxImage } from "./ParallaxImage";

export function Timeline() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="timeline" className="relative py-32 px-6">
      <div className="luxury-divider max-w-6xl mx-auto mb-32" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="02" label="時間線" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
          <ScrollReveal delay={0.1} variant="slideRight" className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.05] mb-8 font-serif">
              項目路線圖
            </h2>
            <p className="text-[16px] text-text-secondary leading-[1.8] mb-8 tracking-[-0.01em]">
              6 個月完整策略，從爆品篩選到正循環建立。
            </p>

            {/* Progress */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-[0.1em] text-text-muted uppercase">進度</span>
                <span className="text-[11px] font-mono text-accent">0%</span>
              </div>
              <div className="h-1 bg-bg-card rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent/30 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] font-mono text-text-muted/50">第 1 週</span>
                <span className="text-[10px] font-mono text-text-muted/50">第 24 週</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-7">
            <ParallaxImage
              src={PROJECT.images.texture}
              alt="品牌建設過程"
              caption="6 個月 / 4 個階段 / 1 個目標"
              className="aspect-[16/10] rounded-2xl"
            />
          </div>
        </div>

        {/* Timeline as interactive cards */}
        <StaggerContainer className="space-y-3" staggerDelay={0.08}>
          {PROJECT.timeline.map((phase, i) => (
            <StaggerItem key={i} variant="scaleIn">
              <TiltCard className="group">
                <div
                  className={`gradient-border rounded-xl overflow-hidden transition-all duration-500 ${
                    expanded === i ? "bg-bg-card" : "bg-bg-card/50 hover:bg-bg-card"
                  }`}
                >
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="w-full text-left p-8 flex items-center gap-5 md:gap-8"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-mono transition-all duration-500 ${
                      expanded === i
                        ? "bg-accent text-bg scale-110"
                        : "bg-accent/10 text-accent group-hover:scale-105"
                    }`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-[15px] font-semibold text-text-primary truncate">
                          {phase.phase}
                        </h3>
                        <span className="hidden md:inline-block text-[10px] font-mono tracking-wider text-text-muted bg-bg-elevated px-2 py-0.5 rounded-full uppercase">
                          {phase.week}
                        </span>
                      </div>
                      <span className="text-[13px] text-text-muted">{phase.date}</span>
                    </div>

                    <motion.div
                      animate={{ rotate: expanded === i ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-bg-elevated flex items-center justify-center text-text-muted text-lg"
                    >
                      +
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 pl-[88px]">
                          <div className="border-t border-border pt-6 grid md:grid-cols-2 gap-x-10 gap-y-4">
                            {phase.tasks.map((task, j) => (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.08, duration: 0.4 }}
                                className="flex items-center gap-3"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                                <span className="text-[14px] text-text-secondary">{task}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
