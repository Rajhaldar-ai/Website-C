import React, { useEffect, useRef, useState } from 'react';
import { TRUST_STATS } from '../data/siteData';

export const TrustStats: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 800;
            const start = performance.now();
            const step = (now: number) => {
              const elapsed = now - start;
              const t = Math.min(1, elapsed / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setProgress(eased);
              if (t < 1) {
                requestAnimationFrame(step);
              }
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      aria-label="Verified Practice Statistics"
      className="bg-[#12161B] border-b border-white/10 py-16 md:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {TRUST_STATS.map((stat) => {
            const currentVal = stat.isMillion
              ? (stat.numericValue * progress).toFixed(2)
              : Math.round(stat.numericValue * progress).toString();

            return (
              <div
                key={stat.id}
                className="p-6 sm:p-8 bg-[#0B0D10] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="font-display font-mono-tabular text-5xl sm:text-6xl font-extrabold text-[#F8F9FA] tracking-tight">
                    {currentVal}
                    <span className="text-[#C8F542]">{stat.suffix}</span>
                  </div>
                  <div className="font-display text-sm sm:text-base font-bold text-[#F8F9FA] mt-4">
                    {stat.label}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#A8B0BC] mt-3 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
