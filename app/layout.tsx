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
        default: "Preet Tech | Next-Gen IT Company & AI Solutions Provider",
        template: "%s | Preet Tech OPC Private Limited - Digital Transformation Experts",
    },
    description: "Preet Tech OPC Private Limited is a leading Next-Gen IT Company specializing in custom software development, AI automation, high-performance marketing, and scalable enterprise solutions. Transform your business with our data-driven digital strategies.",
    keywords: [
        "Preet Tech", "Next-Gen IT Company", "AI Automation Solutions", "Custom Software Development", 
        "Web Development Services", "Digital Marketing Agency", "Performance Marketing", "SEO Optimization",
        "Enterprise IT Solutions", "Scalable SaaS Development", "App Development Company", "IT Consulting",
        "Generative AI Integration", "Business Growth Solutions", "E-commerce Development", "Cloud Migration",
        "B2B IT Services", "Digital Transformation", "IT Company in India", "Global Tech Partner"
    ],
    openGraph: {
        title: "Preet Tech OPC Private Limited | Next-Gen IT & AI Solutions",
        description: "Accelerate your business growth with Preet Tech. We deliver cutting-edge software, AI automation, and performance marketing solutions for global enterprises.",
        siteName: "Preet Tech OPC Private Limited",
        images: [
            {
                url: "/og-image.png", // Ensure this exists
                width: 1200,
                height: 630,
                alt: "Preet Tech Digital Transformation",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Preet Tech | Next-Gen IT & AI Automation",
        description: "Scalable software solutions and AI-driven growth for modern businesses.",
        images: ["/og-image.png"],
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
        languages: {
            'en-US': '/en-US',
        },
    },
    verification: {
        google: "your-google-verification-code", // Placeholder for user
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
                "url": `${baseUrl}/icon.png`,
                "width": 512,
                "height": 512
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer service",
                "areaServed": "Worldwide",
                "availableLanguage": ["en", "hi"]
            },
            "sameAs": [
                "https://twitter.com/preettech",
                "https://linkedin.com/company/preettech",
                "https://facebook.com/preettech",
                "https://instagram.com/preettech"
            ]
        },
        {
            "@type": "WebSite",
            "@id": `${baseUrl}/#website`,
            "url": baseUrl,
            "name": "Preet Tech OPC Private Limited",
            "description": "Next-Gen IT Company & AI Solutions Provider",
            "publisher": {
                "@id": `${baseUrl}/#organization`
            },
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${baseUrl}/blog?q={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@type": "ProfessionalService",
            "@id": `${baseUrl}/#service`,
            "name": "Preet Tech IT Solutions",
            "image": `${baseUrl}/icon.png`,
            "priceRange": "$$",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Haldwani",
                "addressRegion": "Uttarakhand",
                "postalCode": "263139",
                "addressCountry": "IN"
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
