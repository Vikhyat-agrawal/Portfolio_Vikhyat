import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vikhyat Agrawal | Full Stack Web Developer & AI Engineer",
  description: "Portfolio of Vikhyat Agrawal - A passionate Full Stack Web Developer and AI Enthusiast specializing in React, Next.js, and Intelligent Systems. Based in Jaipur, India.",
  keywords: [
    "Vikhyat Agrawal",
    "Web Developer Portfolio",
    "Full Stack Developer Jaipur",
    "AI Engineer Portfolio",
    "Next.js Developer",
    "React Specialist",
    "Python Developer",
    "Machine Learning Enthusiast",
    "Creative Web Design"
  ],
  authors: [{ name: "Vikhyat Agrawal" }],
  creator: "Vikhyat Agrawal",
  metadataBase: new URL("https://vikhyat-agrawal.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vikhyat-agrawal.vercel.app",
    title: "Vikhyat Agrawal | Full Stack Web Developer & AI Engineer",
    description: "Explore the work of Vikhyat Agrawal - Building modern web applications and AI-driven solutions.",
    siteName: "Vikhyat Agrawal Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vikhyat Agrawal - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikhyat Agrawal | Full Stack Web Developer & AI Engineer",
    description: "Full Stack Web Developer and AI Enthusiast based in Jaipur, India.",
    images: ["/og-image.jpg"],
    creator: "@vikhyatagrawal",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vikhyat Agrawal",
    "url": "https://vikhyat-agrawal.vercel.app",
    "jobTitle": "Full Stack Web Developer & AI Engineer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://github.com/vikhyatagrawal",
      "https://linkedin.com/in/vikhyatagrawal",
      "https://twitter.com/vikhyatagrawal"
    ],
    "knowsAbout": ["Web Development", "Artificial Intelligence", "React", "Next.js", "Python", "Full Stack Development"]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased text-slate-200 bg-[#0b0f1a]`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Suspense fallback={<div className="min-h-screen bg-[#0b0f1a]"></div>}>
            {children}
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}

