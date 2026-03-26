"use client";

export function SectionLabel({ label, number }: { label: string; number: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-[10px] font-mono tracking-[0.3em] text-gold/70 uppercase">
        {number}
      </span>
      <div className="w-8 h-px bg-gradient-to-r from-gold/40 to-transparent" />
      <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase">
        {label}
      </span>
    </div>
  );
}
