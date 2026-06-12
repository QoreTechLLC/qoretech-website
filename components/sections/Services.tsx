"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Layers, Brain, Server, Zap, Lightbulb } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowOrb from "@/components/ui/GlowOrb";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Pixel-perfect, performant websites and web apps built with Next.js, React, and modern tooling. From marketing sites to complex SPAs.",
    tags: ["Next.js", "React", "TypeScript"],
    accent: "neon",
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    description:
      "End-to-end SaaS product development — auth, billing, dashboards, APIs, and everything in between. Launch in weeks, not months.",
    tags: ["Stripe", "Auth", "Postgres"],
    accent: "frost",
  },
  {
    icon: Brain,
    title: "AI Integrations",
    description:
      "Embed intelligence into your product. LLMs, RAG pipelines, embeddings, and custom AI workflows with production-grade reliability.",
    tags: ["OpenAI", "Langchain", "Vectors"],
    accent: "neon",
  },
  {
    icon: Server,
    title: "Hosting & Deployment",
    description:
      "Zero-downtime deployments, CDN config, CI/CD pipelines, and infrastructure that scales automatically with your traffic.",
    tags: ["Vercel", "Docker", "AWS"],
    accent: "frost",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description:
      "Eliminate repetitive work with intelligent automation. Custom workflows, API connectors, and internal tools that save hours weekly.",
    tags: ["n8n", "Zapier", "Custom APIs"],
    accent: "neon",
  },
  {
    icon: Lightbulb,
    title: "Startup Consulting",
    description:
      "Technical co-founder energy without the equity. Architecture reviews, MVP scoping, and hands-on guidance for early-stage teams.",
    tags: ["Strategy", "MVP", "Architecture"],
    accent: "frost",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <GlowOrb
        color="neon"
        size="lg"
        className="-top-20 left-1/2 -translate-x-1/2 opacity-[0.06]"
      />
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            eyebrow="What we build"
            title={
              <>
                Everything your business
                <br />
                <span className="text-gradient">needs to build and scale.</span>
              </>
            }
            description="From initial concept to scaled infrastructure — we handle the full technical stack so you can focus on growth."
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isNeon = s.accent === "neon";
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              >
                <div className="group relative glass rounded-2xl p-6 border border-white/[0.05] hover:border-neon-500/20 transition-all duration-300 hover:shadow-card-hover h-full flex flex-col">
                  {/* top shimmer line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
                  <div
                    className={`inline-flex p-2.5 rounded-xl mb-5 w-fit ${isNeon ? "bg-neon-500/10 text-neon-500" : "bg-frost-100/8 text-frost-200"}`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-semibold text-frost-100 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-frost-500 leading-relaxed flex-1">
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] px-2 py-1 rounded-md font-medium ${isNeon ? "bg-neon-500/8 text-neon-500/70" : "bg-frost-100/6 text-frost-400/70"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
