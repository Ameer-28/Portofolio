import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profileData } from "@/data/profile";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ameer.dev";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profileData.fullName} — ${profileData.primaryRole}`,
    template: `%s | ${profileData.fullName}`,
  },
  description: `Portfolio & technical proof of ${profileData.fullName} (${profileData.displayName}) — Backend Developer specializing in NestJS, TypeScript, Prisma ORM, and PostgreSQL. ${profileData.currentStatus}. Open for Internship.`,
  keywords: [
    "Backend Developer",
    "NestJS",
    "TypeScript",
    "Prisma ORM",
    "PostgreSQL",
    "REST API",
    "Software Engineering",
    "SMK Telkom Malang",
    "Open for Internship",
    "ameer.dev",
    "Muhammad Amin Murtadho",
  ],
  authors: [{ name: profileData.fullName, url: siteUrl }],
  creator: profileData.fullName,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title: `${profileData.fullName} — ${profileData.primaryRole}`,
    description: `Backend Developer specializing in NestJS, TypeScript, Prisma ORM, and PostgreSQL. ${profileData.currentStatus}. Open for Internship.`,
    siteName: profileData.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.fullName} — ${profileData.primaryRole}`,
    description: `Backend Developer specializing in NestJS, TypeScript, Prisma ORM, and PostgreSQL. ${profileData.currentStatus}. Open for Internship.`,
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profileData.fullName,
        alternateName: profileData.displayName,
        url: siteUrl,
        jobTitle: profileData.primaryRole,
        description: profileData.tagline,
        affiliation: {
          "@type": "EducationalOrganization",
          name: profileData.institution,
        },
        sameAs: [
          profileData.social.github,
          profileData.social.linkedin,
          profileData.social.instagram,
        ].filter(Boolean),
        knowsAbout: [
          "NestJS",
          "TypeScript",
          "Prisma ORM",
          "PostgreSQL",
          "Node.js",
          "REST API",
          "Next.js",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${profileData.brandName} — ${profileData.fullName} Portfolio`,
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`dark ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground font-sans flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <SkipToContent />
          <Navbar />
          <main id="main-content" className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
