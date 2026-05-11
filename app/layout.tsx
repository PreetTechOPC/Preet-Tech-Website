import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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
        default: "Preet Tech | Best IT Company in Haldwani",
        template: "%s | Preet Tech OPC Private Limited - Digital Transformation IT Company",
    },
    description: "Preet Tech OPC Private Limited is a top Next Gen IT Company offering custom software development, AI-driven marketing, web and app development, and enterprise IT solutions.",
    keywords: [
        "Preet Tech", "IT Company in Haldwani", "Website Development Company", "Web Development Services",
        "Software Development Company", "Digital Marketing IT Company", "Social Media Marketing", "SEO Services",
        "Google Ads Services", "Website Designing Company", "IT Solutions Provider", "Best IT Company in Haldwani",
        "App Development Company", "Online Marketing IT Company", "Branding IT Company", "Next Gen IT Company",
        "Top Digital Marketing & IT Company", "custom software development", "AI-driven marketing",
        "SEO optimization services", "web and app development company", "enterprise IT solutions",
        "generative AI integration", "digital transformation services", "e-commerce development",
        "performance marketing IT Company", "cloud migration services", "B2B IT Company",
        "scalable tech solutions", "brand identity design"
    ],
    openGraph: {
        title: "Preet Tech OPC Private Limited | Next Gen IT Company & IT Solutions",
        description: "Transform your business with Preet Tech OPC Private Limited, a leading IT Company and IT partner. We specialize in custom software development, digital marketing, and AI integration to accelerate your growth.",
        url: baseUrl,
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Preet Tech OPC Private Limited | Next Gen IT Company & IT Solutions",
        description: "Transform your business with Preet Tech OPC Private Limited, a leading IT Company and IT partner specializing in custom software and AI-driven marketing.",
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
                {/* Google tag (gtag.js) */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-91BHT2LYNW"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', 'G-91BHT2LYNW');
                    `}
                </Script>

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
