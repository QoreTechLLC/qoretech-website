"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import GlowOrb from "@/components/ui/GlowOrb";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setState("success");
  };

  const inputClass =
    "w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-frost-100 placeholder:text-frost-600 focus:outline-none focus:border-neon-500/35 focus:bg-white/[0.05] transition-all duration-200";

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <GlowOrb
        color="neon"
        size="xl"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-neon-500/55 mb-6">
              Let&apos;s build together
            </p>
            <h2
              id="cta-heading"
              className="text-4xl md:text-5xl font-semibold tracking-tight text-frost-50 leading-tight mb-6"
            >
              Your next product starts
              <br />
              <span className="text-gradient-neon">with a conversation.</span>
            </h2>
            <p className="text-base text-frost-500 leading-relaxed mb-10 max-w-md">
              Tell us what you&apos;re building. We&apos;ll respond within 24
              hours with a clear plan, honest timeline, and a no-surprise quote.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "admin@qoretech.dev" },
                {
                  icon: MessageSquare,
                  text: "Response within 24 hours, guaranteed",
                },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-sm text-frost-500"
                >
                  <div className="p-2 rounded-lg bg-neon-500/8">
                    <Icon className="w-4 h-4 text-neon-500" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="glass rounded-3xl border border-neon-500/[0.08] p-8">
              {state === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-neon-500/12 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-neon-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-frost-50">
                    Message received!
                  </h3>
                  <p className="text-sm text-frost-500 max-w-xs">
                    We&apos;ll review your project and get back to you within 24
                    hours. Check your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-frost-500 mb-2"
                      >
                        Your name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Alex Johnson"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-frost-500 mb-2"
                      >
                        Work email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="alex@startup.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="msg"
                      className="block text-xs font-medium text-frost-500 mb-2"
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="msg"
                      required
                      rows={5}
                      placeholder="We're building a SaaS for..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={state === "loading"}
                    className="w-full group"
                  >
                    Send message
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                  <p className="text-center text-xs text-frost-700">
                    No spam. No pressure. Just a real conversation.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
