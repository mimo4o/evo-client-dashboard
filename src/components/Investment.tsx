"use client";

import { motion } from "framer-motion";
import { PROJECT } from "@/lib/project-data";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { TiltCard } from "./TiltCard";
import { AnimatedCurrency } from "./AnimatedCounter";

function formatCurrency(amount: number) {
  const formatted = new Intl.NumberFormat("zh-TW", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  const prefix = PROJECT.quote.currency === "TWD" ? "NT$" : "USD$";
  return `${prefix}${formatted}`;
}

export function Investment() {
  const q = PROJECT.quote;

  return (
    <section id="investment" className="relative py-32 px-6">
      <div className="luxury-divider max-w-6xl mx-auto mb-32" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="05" label="投資方案" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.05] mb-8 font-serif">
            投資方案
          </h2>
          <p className="text-[16px] text-text-secondary leading-[1.8] mb-20 max-w-2xl tracking-[-0.01em]">
            透明定價，依里程碑分階段付款。
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Line items */}
          <ScrollReveal delay={0.1} variant="slideRight" className="lg:col-span-3">
            <TiltCard className="group">
              <div className="card frame bg-bg-card rounded-2xl overflow-hidden hover:bg-bg-card-hover transition-all duration-500">
                <div className="px-10 py-6 border-b border-border">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-text-muted uppercase">
                    費用明細
                  </span>
                </div>

                <StaggerContainer className="divide-y divide-border" staggerDelay={0.06}>
                  {q.lineItems.map((item, i) => (
                    <StaggerItem key={i}>
                      <div className="px-10 py-6 flex items-center justify-between gap-6 hover:bg-bg-elevated/30 transition-colors">
                        <div className="flex-1 min-w-0">
                          <div className="text-[15px] font-medium text-text-primary mb-1 tracking-[-0.01em]">
                            {item.name}
                          </div>
                          <div className="text-[12px] text-text-muted truncate">
                            {item.description}
                          </div>
                        </div>
                        <div className="text-[15px] font-mono text-text-primary flex-shrink-0 tabular-nums tracking-[-0.02em]">
                          {formatCurrency(item.price)}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="border-t border-border bg-bg-elevated/30">
                  <div className="px-10 py-4 flex items-center justify-between">
                    <span className="text-[13px] text-text-muted">小計</span>
                    <span className="text-[14px] font-mono text-text-secondary tabular-nums">{formatCurrency(q.subtotal)}</span>
                  </div>
                  {q.discount && (
                    <div className="px-10 py-4 flex items-center justify-between border-t border-border">
                      <span className="text-[13px] text-success">{q.discount.label} ({q.discount.percentage}%)</span>
                      <span className="text-[14px] font-mono text-success tabular-nums">-{formatCurrency(q.discount.amount)}</span>
                    </div>
                  )}
                  <div className="px-10 py-6 flex items-center justify-between border-t border-border">
                    <span className="text-[18px] font-semibold text-text-primary tracking-[-0.01em]">總計</span>
                    <span className="text-[28px] font-bold font-mono text-accent tabular-nums tracking-[-0.03em]">
                      <AnimatedCurrency value={q.total} />
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Payment schedule */}
          <ScrollReveal delay={0.25} variant="slideLeft" className="lg:col-span-2">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 h-full flex flex-col hover:bg-bg-card-hover transition-all duration-500">
                <span className="text-[10px] font-mono tracking-[0.2em] text-text-muted uppercase mb-10">
                  付款方式
                </span>

                <div className="space-y-8 flex-1">
                  {q.paymentSchedule.map((payment, i) => (
                    <div key={i} className="relative">
                      {i < q.paymentSchedule.length - 1 && (
                        <div className="absolute left-[15px] top-12 w-px h-[calc(100%+20px)] bg-border" />
                      )}
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center z-10 bg-bg-card">
                          <span className="text-[10px] font-mono text-accent">{i + 1}</span>
                        </div>
                        <div className="flex-1 pt-0.5">
                          <div className="flex items-baseline justify-between mb-1">
                            <h4 className="text-[14px] font-medium text-text-primary tracking-[-0.01em]">{payment.milestone}</h4>
                          </div>
                          <div className="flex items-baseline justify-between">
                            <span className="text-[12px] text-text-muted">{payment.due}</span>
                            <span className="text-[14px] font-mono text-text-primary tabular-nums">{formatCurrency(payment.amount)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <motion.a
                    href={q.paymentLink}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full text-center bg-accent text-bg font-semibold text-[14px] py-4 rounded-xl tracking-[-0.01em]"
                  >
                    {PROJECT.cta.buttonText} {formatCurrency(q.paymentSchedule[0].amount)}
                  </motion.a>
                  <p className="text-[10px] text-text-muted/40 text-center mt-4 font-mono tracking-[0.1em]">
                    安全付款
                  </p>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
