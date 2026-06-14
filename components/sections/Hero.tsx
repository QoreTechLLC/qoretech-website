"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Shield, Layers } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GlowOrb from "@/components/ui/GlowOrb";
import P5Background from "@/components/ui/P5background";

const floatingCards = [
  {
    icon: <Zap className="w-4 h-4 text-neon-500" />,
    label: "Deploy complete",
    sublabel: "Production · 1.2s",
    dotClass: "bg-neon-500",
  },
  {
    icon: <Shield className="w-4 h-4 text-frost-200" />,
    label: "AI Integration",
    sublabel: "OpenAI · Active",
    dotClass: "bg-frost-300",
  },
  {
    icon: <Layers className="w-4 h-4 text-neon-400" />,
    label: "Infra scaled",
    sublabel: "99.99% uptime",
    dotClass: "bg-neon-400",
  },
];

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-24 grid-bg"
      aria-label="Hero"
    >
      {/* p5 canvas — sits behind everything */}
      <P5Background />
      {/* Glow orbs */}
      <GlowOrb
        color="neon"
        size="xl"
        className="-top-40 -left-40 opacity-[0.08]"
      />
      <GlowOrb
        color="neon"
        size="lg"
        className="top-1/3 -right-32 opacity-[0.06]"
      />
      <GlowOrb
        color="frost"
        size="md"
        className="bottom-20 left-1/3 opacity-[0.05]"
      />
      {/* Vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-navy-950/90 pointer-events-none"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="neon" className="mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-500 animate-pulse" />
            We build the technology behind modern businesses
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="space-y-2 mb-8"
        >
          <motion.h1
            variants={stagger.item}
            className="text-[clamp(2.6rem,6vw,5rem)] font-semibold tracking-tight leading-[1.04] text-frost-100"
          >
            Scalable technology
          </motion.h1>
          <motion.h1
            variants={stagger.item}
            className="text-[clamp(2.6rem,6vw,5rem)] font-semibold tracking-tight leading-[1.04] text-gradient"
          >
            for modern businesses.
          </motion.h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-xl text-lg md:text-xl text-frost-400 leading-relaxed mb-12"
        >
          We build world-class web apps, SaaS platforms, and AI-powered systems
          — faster and more affordably than you'd expect.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <Button
            variant="primary"
            size="lg"
            className="group"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start a project
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
          {/* <Button
            variant="secondary"
            size="lg"
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View our work
          </Button> */}
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="relative w-full max-w-4xl"
        >
          <div className="relative glass rounded-3xl border border-neon-500/[0.09] p-1 shadow-[0_32px_96px_rgba(0,0,0,0.7),0_0_0_1px_rgba(0,217,126,0.05)]">
            {/* Toolbar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-neon-500/[0.07]">
              <div className="flex gap-1.5">
                {["bg-navy-700", "bg-navy-700", "bg-navy-700"].map((c, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full ${c}`} />
                ))}
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-white/5 border border-white/[0.07] text-[10px] text-frost-500 font-mono">
                  app.qoretech.dev — dashboard
                </div>
              </div>
              {/* Live indicator */}
              <div className="flex items-center gap-1.5 text-[10px] text-neon-500/70">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-500 animate-pulse" />
                LIVE
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "Uptime", value: "99.99%", color: "text-neon-500" },
                  {
                    label: "Deployments",
                    value: "347",
                    color: "text-frost-100",
                  },
                  {
                    label: "AI Requests",
                    value: "1.2M",
                    color: "text-neon-400",
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="glass rounded-xl p-4 text-center border border-neon-500/[0.06]"
                  >
                    <p className={`text-xl font-semibold ${s.color}`}>
                      {s.value}
                    </p>
                    <p className="text-[10px] text-frost-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="glass rounded-xl p-4 border border-neon-500/[0.06]">
                <div className="flex justify-between items-end h-20 gap-1.5">
                  {[45, 62, 38, 80, 55, 90, 72, 58, 88, 65, 78, 95].map(
                    (h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{
                          duration: 0.6,
                          delay: 1 + i * 0.05,
                          ease: "easeOut",
                        }}
                        className="flex-1 rounded-sm"
                        style={{
                          background:
                            i === 11
                              ? "linear-gradient(to top, #00D97E, #4DFFA8)"
                              : "rgba(0,217,126,0.2)",
                        }}
                      />
                    ),
                  )}
                </div>
                <p className="text-[10px] text-frost-600 mt-3">
                  Request volume — last 12 months
                </p>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.3 + i * 0.15 }}
              className={`absolute glass rounded-xl border border-neon-500/[0.10] px-3 py-2.5 flex items-center gap-2.5 shadow-card ${i === 1 ? "animate-float-slow" : "animate-float"}`}
              style={{
                top: i === 0 ? "12%" : i === 1 ? "50%" : "75%",
                right: i % 2 === 0 ? "-5%" : undefined,
                left: i % 2 !== 0 ? "-5%" : undefined,
              }}
            >
              <div className="p-1.5 rounded-lg bg-white/5">{card.icon}</div>
              <div>
                <p className="text-xs font-medium text-frost-100 leading-none">
                  {card.label}
                </p>
                <p className="text-[10px] mt-0.5 text-neon-500">
                  {card.sublabel}
                </p>
              </div>
              <div
                className={`w-1.5 h-1.5 rounded-full ml-1 ${card.dotClass} animate-pulse`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-neon-500/[0.08] w-full"
        >
          {[
            { value: "5+", label: "Projects delivered" },
            { value: "100%", label: "Client satisfaction" },
            // { value: "< 4wk", label: "Avg. launch time" },
            { value: "24/7", label: "Monitoring & support" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-semibold text-neon-500">{s.value}</p>
              <p className="text-sm text-frost-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
