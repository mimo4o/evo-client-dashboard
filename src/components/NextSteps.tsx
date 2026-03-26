"use client";

import { motion } from "framer-motion";
import { PROJECT } from "@/lib/project-data";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { TiltCard } from "./TiltCard";

export function NextSteps() {
  const steps = PROJECT.nextSteps;

  return (
    <section id="next-steps" className="relative py-32 px-6">
      <div className="luxury-divider max-w-6xl mx-auto mb-32" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="06" label="下一步" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-16 font-serif">
            {PROJECT.cta.headline}
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-12 gap-4" staggerDelay={0.1}>
          {/* Step 1 - wide */}
          <StaggerItem className="md:col-span-7" variant="slideRight">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-7 hover:bg-bg-card-hover transition-all duration-500 h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-105 transition-all duration-500">
                    <span className="text-lg font-mono text-accent group-hover:text-bg transition-colors duration-500 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-text-primary mb-2">{steps[0].title}</h3>
                    <p className="text-[14px] text-text-muted leading-relaxed">{steps[0].description}</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>

          {/* Step 2 - narrow */}
          <StaggerItem className="md:col-span-5" variant="slideLeft">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-6 hover:bg-bg-card-hover transition-all duration-500 h-full flex flex-col justify-center">
                <span className="text-[11px] font-mono text-accent/60 mb-3">Step 2</span>
                <h3 className="text-[15px] font-semibold text-text-primary mb-1">{steps[1].title}</h3>
                <p className="text-[13px] text-text-muted leading-relaxed">{steps[1].description}</p>
              </div>
            </TiltCard>
          </StaggerItem>

          {/* Step 3 - narrow */}
          <StaggerItem className="md:col-span-4" variant="scaleIn">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-6 hover:bg-bg-card-hover transition-all duration-500 h-full flex flex-col justify-center">
                <span className="text-[11px] font-mono text-accent/60 mb-3">Step 3</span>
                <h3 className="text-[15px] font-semibold text-text-primary mb-1">{steps[2].title}</h3>
                <p className="text-[13px] text-text-muted leading-relaxed">{steps[2].description}</p>
              </div>
            </TiltCard>
          </StaggerItem>

          {/* Step 4 - wide accent */}
          <StaggerItem className="md:col-span-8" variant="scaleIn">
            <TiltCard className="group h-full">
              <div className="bg-accent/[0.06] border border-accent/10 rounded-2xl p-7 hover:bg-accent/[0.1] hover:border-accent/20 transition-all duration-500 h-full flex items-center gap-6">
                <div className="text-[48px] font-bold text-accent/20 leading-none group-hover:text-accent/40 transition-colors">04</div>
                <div>
                  <h3 className="text-[17px] font-semibold text-text-primary mb-1">{steps[3].title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed">{steps[3].description}</p>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>

          {/* Step 5 - full width */}
          <StaggerItem className="md:col-span-12" variant="scaleIn">
            <TiltCard className="group">
              <div className="card frame bg-bg-card rounded-2xl p-7 hover:bg-bg-card-hover transition-all duration-500 flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-105 transition-all duration-500">
                  <span className="text-lg font-mono text-accent group-hover:text-bg transition-colors duration-500 font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold text-text-primary mb-1">{steps[4].title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed">{steps[4].description}</p>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>

        {/* Contact CTA */}
        <ScrollReveal delay={0.3} variant="scaleIn" className="mt-16">
          <TiltCard className="group max-w-xl mx-auto">
            <div className="card frame bg-bg-card rounded-2xl p-8 text-center hover:bg-bg-card-hover transition-all duration-500">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {PROJECT.cta.body}
              </h3>
              <p className="text-[14px] text-text-muted mb-6">
                有任何問題，隨時聯繫我們。
              </p>
              <motion.a
                href={`mailto:${PROJECT.studio.email}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block bg-bg-elevated border border-border text-text-primary font-medium text-[14px] px-8 py-3 rounded-xl hover:border-accent/30 transition-colors"
              >
                立即聯繫
              </motion.a>
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
