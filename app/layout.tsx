import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientNavigation from "../components/ClientNavigation";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Mayowa Adediran - Senior Frontend Engineer | React, TypeScript, Next.js",
    template: "%s | Mayowa Adediran - Frontend Engineer",
  },
  description:
    "Senior Frontend Engineer with 7+ years of experience building scalable web applications at top fintech companies like Kuda Bank and 9japay. Expert in React, TypeScript, Next.js, and GraphQL. Available for frontend engineering roles and consulting.",
  keywords: [
    "Frontend Engineer",
    "Senior Frontend Developer",
    "React Developer",
    "TypeScript Expert",
    "Next.js Developer",
    "GraphQL Developer",
    "JavaScript Engineer",
    "Fintech Developer",
    "Lagos Frontend Engineer",
    "Nigeria Frontend Developer",
    "Kuda Bank",
    "9japay",
    "Web Development",
    "UI/UX Engineering",
    "Mayowa Adediran",
  ],
  authors: [{ name: "Mayowa Adediran" }],
  creator: "Mayowa Adediran",
  publisher: "Mayowa Adediran",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mayowaadediran.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mayowa Adediran - Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 7+ years of experience at top fintech companies. Expert in React, TypeScript, Next.js, and GraphQL. Building scalable web applications.",
    url: "https://mayowaadediran.me",
    siteName: "Mayowa Adediran Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mayowa Adediran - Senior Frontend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayowa Adediran - Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 7+ years of experience. Expert in React, TypeScript, Next.js. Available for frontend roles and consulting.",
    creator: "@mayowaadediran",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mayowa Adediran",
  jobTitle: "Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 7+ years of experience building scalable web applications at top fintech companies.",
  url: "https://mayowaadediran.me",
  sameAs: [
    "https://linkedin.com/in/mayowaadediran",
    "https://github.com/mayowaadediran",
    "https://twitter.com/mayowaadediran",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "Nigeria",
  },
  knowsAbout: [
    "Frontend Development",
    "React",
    "TypeScript",
    "Next.js",
    "GraphQL",
    "JavaScript",
    "Web Development",
    "Fintech",
    "User Interface Design",
    "Performance Optimization",
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "9japay Microfinance",
      startDate: "2022-05",
    },
  ],
  alumniOf: [
    {
      "@type": "Organization",
      name: "Kuda Microfinance Bank",
      startDate: "2020-10",
      endDate: "2022-04",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientNavigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
