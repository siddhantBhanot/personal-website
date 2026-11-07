import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "siddhant bhanot: backend systems, reactive microservices, and saga architecture",
  description:
    "Backend software development engineer with 4+ years of production experience in high-throughput reactive microservices, SAGA architectures, and fintech platforms processing 96M+ requests/month.",
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
