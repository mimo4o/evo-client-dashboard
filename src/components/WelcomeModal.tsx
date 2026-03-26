"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("evo-welcome-seen")) return;
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    localStorage.setItem("evo-welcome-seen", "1");
    setOpen(false);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
          onClick={dismiss}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl overflow-hidden">
              {/* Logo area */}
              <div className="flex items-center justify-center py-12 border-b border-[#111]">
                <img
                  src="/evo-logo.png"
                  alt="Evo+"
                  className="h-24 w-auto drop-shadow-[0_0_24px_rgba(255,255,255,0.15)]"
                />
              </div>

              {/* Content */}
              <div className="px-8 pt-8 pb-6">
                <p className="text-[10px] font-mono tracking-[0.3em] text-[#555] uppercase mb-4">
                  Powered by Evo+
                </p>

                <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[#e8e8e8] leading-[1.3] mb-4">
                  180 天內獲得 20 位高單價客戶
                </h2>

                <p className="text-[14px] text-[#888] leading-[1.7] mb-3">
                  專為線上教練、行銷顧問與高單價服務賣家打造的獲客引擎。
                </p>

                <p className="text-[14px] text-[#666] leading-[1.7] mb-8">
                  不是再教你新工具，而是把價值加入你現有的產品，讓收入實現可預測性。
                </p>

                {/* Services */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { label: "定位重塑", desc: "吸引高價客戶" },
                    { label: "名單引流", desc: "高轉化內容" },
                    { label: "預約成交", desc: "高價銷售系統" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="text-center py-4 px-2 border border-[#1a1a1a] rounded-lg"
                    >
                      <div className="text-[13px] font-semibold text-[#e8e8e8] mb-1">
                        {item.label}
                      </div>
                      <div className="text-[10px] text-[#555] font-mono tracking-[0.05em]">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://www.skool.com/123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3.5 bg-[#7f161f] text-white text-[12px] font-semibold tracking-[0.1em] uppercase rounded-lg hover:bg-[#9a1b26] transition-colors duration-300"
                >
                  了解更多
                </a>

                <button
                  onClick={dismiss}
                  className="block w-full text-center py-3 mt-3 text-[12px] text-[#444] hover:text-[#888] font-mono tracking-[0.05em] transition-colors duration-300"
                >
                  Skip
                </button>
              </div>

              {/* Bottom bar */}
              <div className="px-8 py-4 border-t border-[#111] flex items-center justify-center">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#333] uppercase">
                  Evolution Acquisition
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
