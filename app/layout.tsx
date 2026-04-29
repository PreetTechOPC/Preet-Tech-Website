import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout"; // Separate client logic like Lenis
import { ThemeProvider } from "../components/theme-provider";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: '--font-jakarta',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: '--font-outfit',
    display: 'swap',
});

const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: '--font-jetbrains',
    display: 'swap',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://preettech.com';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Preet Tech OPC Private Limited | Next Gen Digital Agency & IT Solutions",
        template: "%s | Preet Tech OPC Private Limited - Digital Transformation Agency",
    },
    description: "Preet Tech OPC Private Limited is a top Next Gen Digital Agency offering custom software development, AI-driven marketing, web and app development, and enterprise IT solutions.",
    keywords: ["Next Gen Digital Agency", "Top Digital Marketing & IT Agency", "custom software development", "AI-driven marketing", "SEO optimization services", "web and app development company", "enterprise IT solutions", "generative AI integration", "digital transformation services", "e-commerce development", "performance marketing agency", "cloud migration services", "B2B digital agency", "scalable tech solutions", "brand identity design"],
    openGraph: {
        title: "Preet Tech OPC Private Limited | Next Gen Digital Agency & IT Solutions",
        description: "Transform your business with Preet Tech OPC Private Limited, a leading digital agency and IT partner. We specialize in custom software development, digital marketing, and AI integration to accelerate your growth.",
        url: baseUrl,
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Preet Tech OPC Private Limited | Next Gen Digital Agency & IT Solutions",
        description: "Transform your business with Preet Tech OPC Private Limited, a leading digital agency and IT partner specializing in custom software and AI-driven marketing.",
        creator: "@preettech",
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
    alternates: {
        canonical: "/",
    },
};

const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`,
            "name": "Preet Tech OPC Private Limited",
            "url": baseUrl,
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/icon.png`
            },
            "sameAs": [
                "https://twitter.com/preettech",
                "https://linkedin.com/company/preettech"
            ]
        },
        {
            "@type": "WebSite",
            "@id": `${baseUrl}/#website`,
            "url": baseUrl,
            "name": "Preet Tech OPC Private Limited",
            "publisher": {
                "@id": `${baseUrl}/#organization`
            },
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${baseUrl}/blog?q={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        }
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${jakarta.variable} ${outfit.variable} ${jetbrains.variable}`} suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
                />
            </head>
            <body className="antialiased font-sans bg-background text-foreground selection:bg-brand-medium/30 transition-colors duration-300" suppressHydrationWarning>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                    <ClientLayout>
                        {children}
                    </ClientLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}
