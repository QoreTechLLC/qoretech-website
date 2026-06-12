import Logo from "@/components/ui/Logo";
import { Github, Twitter, Linkedin } from "lucide-react";

const links = {
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "SaaS Platforms", href: "#services" },
    { label: "AI Integrations", href: "#services" },
    { label: "Automation", href: "#services" },
    { label: "Hosting", href: "#services" },
    { label: "Consulting", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Process", href: "#process" },
    { label: "Careers", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socials = [
  // { icon: Twitter, label: "Twitter", href: "https://twitter.com/qoretech" },
  // { icon: Github, label: "GitHub", href: "https://github.com/qoretech" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/qoretech-llc",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t border-neon-500/[0.06]"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Logo size="md" className="mb-5" />
            <p className="text-sm text-frost-600 leading-relaxed max-w-xs">
              Premium-quality tech solutions for startups and modern businesses.
              We build products that last.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-frost-600 hover:text-neon-500 hover:border-neon-500/25 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-[10px] font-semibold tracking-widest uppercase text-frost-600 mb-5">
                {section}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-frost-500 hover:text-frost-100 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-6 border-t border-neon-500/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-frost-700">
            © {year} QoreTech. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-500 animate-pulse" />
            <span className="text-xs text-frost-600">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
