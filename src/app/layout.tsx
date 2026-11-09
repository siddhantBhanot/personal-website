import type { Metadata, Viewport } from "next";
import { Sidebar } from "@/components/Sidebar";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0f1011",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "profile",
    firstName: "Siddhant",
    lastName: "Bhanot",
    username: "siddhantBhanot",
    gender: "male",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: "Siddhant Bhanot Portfolio",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Siddhant Bhanot - Backend Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@siddhantBhanot",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('neuralnets-theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = stored || (prefersDark ? 'dark' : 'dark');
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                  document.documentElement.classList.toggle('light', theme === 'light');
                } catch (e) {}
              })();
            `,
          }}
        />
        <JsonLd />
      </head>
      <body className="nn-page">
        <div className="nn-shell">
          <Sidebar />
          <main className="nn-main">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
