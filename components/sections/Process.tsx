"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Palette, Code2, Rocket, LifeBuoy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    duration: "1–3 days",
    description:
      "We start by deeply understanding your business, goals, and constraints. Architecture planning, tech stack selection, and scoping happen here — before a single line of code is written.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    duration: "3–8 days",
    description:
      "High-fidelity UI design, component systems, and interactive prototypes. You see exactly what we're building before development begins — no surprises.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    duration: "2–8 weeks",
    description:
      "Engineering sprints with continuous delivery to a staging environment. Daily updates, clean code, comprehensive testing, and weekly reviews keep you in the loop.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deployment",
    duration: "1–2 days",
    description:
      "Zero-downtime production launch with monitoring, analytics, and performance tuning in place from day one. Your infrastructure is production-ready on arrival.",
  },
  {
    icon: LifeBuoy,
    number: "05",
    title: "Support",
    duration: "Ongoing",
    description:
      "Ongoing maintenance, feature iterations, and proactive monitoring. We stay in your corner as your product grows and evolves.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative py-32 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                A process built for
                <br />
                <span className="text-gradient">speed and clarity.</span>
              </>
            }
            description="Five phases, zero ambiguity. You always know what's happening, what's next, and exactly when you'll launch."
          />
        </motion.div>

        <div className="relative mt-4">
          {/* Vertical spine */}
          <div
            aria-hidden="true"
            className="absolute left-[calc(2rem-1px)] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-500/40 via-neon-500/15 to-transparent"
          />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.15 + i * 0.1 }}
                  className={`relative flex items-start gap-8 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 md:w-[calc(50%-2rem)] ${isEven ? "md:pr-16" : "md:pl-16"} ml-16 md:ml-0`}
                  >
                    <div className="group glass rounded-2xl border border-white/[0.05] hover:border-neon-500/18 p-6 transition-all duration-300 hover:shadow-card-hover">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-neon-500/50">
                          {step.number}
                        </span>
                        <span className="text-xs text-frost-500 bg-white/5 px-2.5 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-frost-100 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-frost-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Node */}
                  <div className="absolute left-[calc(2rem-1.25rem)] md:left-[calc(50%-1.25rem)] flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full glass border border-neon-500/30 flex items-center justify-center shadow-glow-neon-sm">
                      <Icon
                        className="w-4 h-4 text-neon-500"
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
