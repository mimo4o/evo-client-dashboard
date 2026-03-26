"use client";

import { PROJECT } from "@/lib/project-data";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { TiltCard } from "./TiltCard";

export function Scope() {
  return (
    <section id="scope" className="relative py-32 px-6">
      <div className="luxury-divider max-w-6xl mx-auto mb-32" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="04" label="服務範圍" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.05] mb-8 font-serif">
            服務範圍
          </h2>
          <p className="text-[16px] text-text-secondary leading-[1.8] mb-20 max-w-2xl tracking-[-0.01em]">
            明確的邊界，確保在項目範圍內為你創造最大價值。
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.1} variant="slideRight">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 h-full hover:bg-bg-card-hover transition-all duration-500">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <h3 className="text-[16px] font-semibold tracking-[-0.01em]">包含項目</h3>
                </div>

                <StaggerContainer className="space-y-5" staggerDelay={0.04}>
                  {PROJECT.scope.included.map((item, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-4">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-1 opacity-40">
                          <path d="M2.5 7L5.5 10L11.5 4" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[14px] text-text-secondary leading-[1.6]">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal delay={0.25} variant="slideLeft">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 h-full hover:bg-bg-card-hover transition-all duration-500">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-2 h-2 rounded-full bg-text-muted/30" />
                  <h3 className="text-[16px] font-semibold text-text-muted tracking-[-0.01em]">不包含項目</h3>
                </div>

                <StaggerContainer className="space-y-5" staggerDelay={0.04}>
                  {PROJECT.scope.excluded.map((item, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-4">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-1 opacity-20">
                          <path d="M3.5 3.5L10.5 10.5M3.5 10.5L10.5 3.5" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span className="text-[14px] text-text-muted leading-[1.6]">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <p className="text-[12px] text-text-muted/40 mt-10 leading-[1.6]">
                  額外服務可另行報價。
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
