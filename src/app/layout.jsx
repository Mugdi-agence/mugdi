import { cookies } from "next/headers";
import SmoothScroll from "./smoothScroll";
import LoaderWrapper from "./LoaderWrapper.client";
import { Analytics } from "@vercel/analytics/next";

const SITE_URL = "https://www.mugdi.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Mugdi Agency – Premium Website & Landing Page Creation",
    template: "%s | Mugdi Agency",
  },
  description:
    "Mugdi Agency designs refined, luxurious, and tailor-made websites and landing pages for high-end brands. Premium design, performance, and conversion.",
  keywords: [
    "premium web agency",
    "luxury website creation",
    "high-end landing page",
    "luxury web design",
    "premium website agency",
  ],
  authors: [{ name: "Mugdi Agency" }],
  creator: "Mugdi Agency",
  publisher: "Mugdi Agency",

  // Open Graph (social sharing / premium preview)
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Mugdi Agency",
    title: "Mugdi Agency – Premium Websites & Landing Pages",
    description:
      "Designing refined and luxurious websites and landing pages for demanding brands.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mugdi Agency - Premium web creation studio",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Mugdi Agency – Premium Websites & Landing Pages",
    description:
      "Designing refined and luxurious websites and landing pages for demanding brands.",
    images: ["/og-image.png"],
  },

  // Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/black.png",
    shortcut: "/black.png",
  },

  manifest: "/site.webmanifest",
  
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },

  category: "web design agency",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value ?? "en";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mugdi Agency",
    url: SITE_URL,
    logo: `${SITE_URL}/black.png`,
    description:
      "Premium web agency specializing in the creation of refined, luxurious, and tailor-made websites and landing pages.",
    sameAs: [
      "https://www.youtube.com/@mugdi.agency",
      "https://www.tiktok.com/@mugdi.agency",
    ],
  };

  return (
    <html lang={lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <LoaderWrapper>{children}</LoaderWrapper>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}