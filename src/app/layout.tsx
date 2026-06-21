import type { Metadata, Viewport } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gulshan Kumar | AI/ML Engineer & Developer Portfolio",
  description: "Explore the futuristic portfolio of Gulshan Kumar, an AI/ML developer specializing in deep learning, neural models, and high-performance system design.",
  keywords: [
    "Gulshan Kumar",
    "Portfolio",
    "AI Engineer",
    "ML Engineer",
    "VeriLex AI",
    "NHIDE 2026",
    "GDGC AI/ML",
    "Software Engineer",
    "Next.js Developer",
    "React Three Fiber"
  ],
  authors: [{ name: "Gulshan Kumar" }],
  openGraph: {
    title: "Gulshan Kumar | AI/ML Engineer Portfolio",
    description: "Futuristic portfolio of Gulshan Kumar showcasing state-of-the-art AI/ML and software engineering projects.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulshan Kumar | AI/ML Engineer Portfolio",
    description: "Futuristic portfolio of Gulshan Kumar showcasing state-of-the-art AI/ML and software engineering projects.",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gulshan Kumar",
    url: "https://gulshankumar.dev",
    jobTitle: "AI/ML Engineer & Software Developer",
    description:
      "AI/ML developer specializing in deep learning, neural models, and high-performance system design.",
    sameAs: [
      "https://github.com/gulshankumar",
      "https://linkedin.com/in/gulshankumar",
    ],
    knowsAbout: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Next.js",
      "Python",
      "PyTorch",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased text-foreground bg-background`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
