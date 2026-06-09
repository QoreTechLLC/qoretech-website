import Logo from '@/components/ui/Logo'
import { Github, Twitter, Linkedin } from 'lucide-react'

const links = {
  Services: ['Web Development', 'SaaS Platforms', 'AI Integrations', 'Automation', 'Hosting', 'Consulting'],
  Company: ['About', 'Work', 'Process', 'Blog', 'Careers'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

const socials = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/qoretech' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/qoretech' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/qoretech' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.05]" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <Logo size="md" className="mb-5" />
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              Premium-quality tech solutions for startups and modern businesses. We build products that last.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-neutral-500 hover:text-neutral-200 hover:border-white/20 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-5">
                {section}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            © {year} QoreTech. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-neutral-500">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
