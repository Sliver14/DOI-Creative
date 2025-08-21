import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { QueryClientProvider } from "@/components/providers/query-client-provider"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DOI Creative Studios - Cinematic Storytelling",
  description:
    "Award-winning film production and video editing services that bring your vision to life with cinematic excellence",
  keywords:
    "film production, video editing, commercial production, cinematic storytelling, video services",
  authors: [{ name: "DOI Creative Studios" }],
  icons: {
    icon: [
      { url: "/assets/DOI.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/DOI.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/assets/DOI.png",
    apple: [{ url: "/assets/DOI.png", sizes: "180x180", type: "image/png" }],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/cloudinary-video-player@1.10.4/dist/cld-video-player.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <QueryClientProvider>
          <TooltipProvider>
            <Toaster />
            {children}
          </TooltipProvider>
        </QueryClientProvider>

        {/* Load external script safely */}
        <Script
          src="https://unpkg.com/cloudinary-video-player@1.10.4/dist/cld-video-player.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
