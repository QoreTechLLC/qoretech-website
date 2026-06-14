import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qoretech.dev"),
  title: {
    default: "QoreTech — Premium Tech Solutions for Startups",
    template: "%s | QoreTech",
  },
  description:
    "QoreTech builds world-class digital products — web apps, SaaS platforms, AI integrations, and scalable infrastructure — for startups and modern businesses.",
  keywords: [
    "startup tech solutions",
    "web development agency",
    "SaaS development",
    "AI integrations",
    "Next.js development",
    "React development",
    "automation systems",
    "hosting deployment",
    "digital infrastructure",
    "modern web development",
    "startup consulting",
  ],
  authors: [{ name: "QoreTech", url: "https://qoretech.dev" }],
  creator: "QoreTech",
  publisher: "QoreTech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qoretech.dev",
    siteName: "QoreTech",
    title: "QoreTech — Premium Tech Solutions for Startups",
    description:
      "World-class digital products built for founders. Web apps, SaaS, AI, and infrastructure at startup-friendly prices.",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
        alt: "QoreTech — Premium Tech Solutions",
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'QoreTech — Premium Tech Solutions for Startups',
  //   description: 'World-class digital products built for founders.',
  //   creator: '@qoretech',
  //   images: ['/og-image.png'],
  // },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#001134",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-navy-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
