"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import GlowOrb from "@/components/ui/GlowOrb";

// ── Types ─────────────────────────────────────────
type FormFields = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

// ── Validation rules ──────────────────────────────
function validate(form: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  return errors;
}

// ── Component ─────────────────────────────────────
export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormFields, boolean>>
  >({});

  // Validate a single field when user leaves it (on blur)
  const handleBlur = (field: keyof FormFields) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  // Update field value and clear its error if it becomes valid
  const handleChange = (field: keyof FormFields, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);

    // Only re-validate live if the field has already been touched
    if (touched[field]) {
      const fieldErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched so errors show everywhere
    setTouched({ name: true, email: true, message: true });

    const fieldErrors = validate(form);
    setErrors(fieldErrors);

    // Stop if there are any errors
    if (Object.keys(fieldErrors).length > 0) return;

    setState("loading");

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setState("success");
  };

  // Builds the className for each input depending on its state
  const inputClass = (field: keyof FormFields) => {
    const hasError = touched[field] && errors[field];
    return [
      "w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-frost-100",
      "placeholder:text-frost-600 outline-none transition-all duration-200",
      hasError
        ? "border-red-500/60 bg-red-500/5 focus:border-red-500"
        : "border-white/[0.07] focus:border-neon-500/35 focus:bg-white/[0.05]",
    ].join(" ");
  };

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
          {/* Left: copy — unchanged */}
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

          {/* Right: form */}
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
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
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
                        placeholder="Jalen Brunson"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        className={inputClass("name")}
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {touched.name && errors.name && (
                        <p
                          id="name-error"
                          className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                        >
                          <span>⚠</span> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
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
                        placeholder="jbrunson@startup.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        className={inputClass("email")}
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {touched.email && errors.email && (
                        <p
                          id="email-error"
                          className="mt-1.5 text-xs text-red-400 flex items-center gap-1"
                        >
                          <span>⚠</span> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-frost-500 mb-2"
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="We're building a SaaS for..."
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      className={`${inputClass("message")} resize-none`}
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                    {/* Character counter + error */}
                    <div className="flex items-center justify-between mt-1.5">
                      {touched.message && errors.message ? (
                        <p
                          id="message-error"
                          className="text-xs text-red-400 flex items-center gap-1"
                        >
                          <span>⚠</span> {errors.message}
                        </p>
                      ) : (
                        <span /> // empty spacer to keep counter right-aligned
                      )}
                      <span
                        className={`text-xs tabular-nums ${form.message.length < 20 ? "text-frost-600" : "text-neon-500"}`}
                      >
                        {form.message.length} / 20 min
                      </span>
                    </div>
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
