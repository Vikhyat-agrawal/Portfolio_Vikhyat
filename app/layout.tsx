import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Optimize font loading
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap", // Optimize font loading
})

export const metadata: Metadata = {
  title: "Vikhyat Agrawal | Web Developer & AI Enthusiast",
  description: "Portfolio of Vikhyat Agrawal - Web Developer, AI Enthusiast, and Problem Solver based in Jaipur, India",
  keywords: ["web developer", "AI", "portfolio", "Vikhyat Agrawal", "React", "Next.js", "Python"],
  authors: [{ name: "Vikhyat Agrawal" }],
  creator: "Vikhyat Agrawal",
  metadataBase: new URL("https://vikhyat-agrawal.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vikhyat-agrawal.vercel.app",
    title: "Vikhyat Agrawal | Web Developer & AI Enthusiast",
    description: "Portfolio of Vikhyat Agrawal - Web Developer, AI Enthusiast, and Problem Solver",
    siteName: "Vikhyat Agrawal Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vikhyat Agrawal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikhyat Agrawal | Web Developer & AI Enthusiast",
    description: "Portfolio of Vikhyat Agrawal - Web Developer, AI Enthusiast, and Problem Solver",
    images: ["/og-image.jpg"],
    creator: "@vikhyatagrawal",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
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
