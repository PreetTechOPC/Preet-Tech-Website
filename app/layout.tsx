import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono, Poppins } from "next/font/google";
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

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600"],
    variable: '--font-poppins',
    display: 'swap',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.preettech.com';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Website Development Company in Haldwani | Preet Tech",
        template: "%s | Preet Tech",
    },
    description: "Preet Tech is a technology company based in Haldwani, Uttarakhand providing website development, mobile app development, custom software development and digital solutions for startups and businesses.",
    keywords: [
        "Website Development Company in Haldwani", "App Development Company Haldwani",
        "Software Development Company Haldwani", "IT Company in Haldwani",
        "Custom Website Development Haldwani", "Website Designer Haldwani",
        "Mobile App Development Haldwani", "Custom Software Development Haldwani",
        "Web Development Company Haldwani", "Preet Tech", "Preet Tech OPC Private Limited"
    ],
    openGraph: {
        title: "Website Development Company in Haldwani | Preet Tech",
        description: "Preet Tech is a Haldwani-based technology company providing custom website development, mobile app development, software development and digital solutions for startups and businesses.",
        siteName: "Preet Tech OPC Private Limited",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Preet Tech — Website, App & Software Development Company in Haldwani",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Website Development Company in Haldwani | Preet Tech",
        description: "Preet Tech is a Haldwani-based technology company building websites, mobile apps and custom software for startups and businesses.",
        images: ["/og-image.png"],
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
    // hreflang: Add here when multi-language routes are created (e.g., /hi for Hindi)
    // alternates: { languages: { 'hi': '/hi', 'en-US': '/en-US' } },
    verification: {
        // TODO: Replace with your real code from Google Search Console → Settings → Ownership Verification
        google: "your-google-verification-code",
    },
};

const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`,
            "name": "Preet Tech OPC Private Limited",
            "alternateName": "Preet Tech",
            "url": baseUrl,
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/icon.png`,
                "width": 512,
                "height": 512
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 97566 67397",
                "email": "info@preettech.com",
                "contactType": "customer service",
                "areaServed": ["IN"],
                "availableLanguage": ["en", "hi"]
            },
            "sameAs": [
                "https://www.facebook.com/Preetinfotech/",
                "https://www.instagram.com/preettech/",
                "https://www.linkedin.com/company/preet-tech"
            ]
        },
        {
            "@type": "WebSite",
            "@id": `${baseUrl}/#website`,
            "url": baseUrl,
            "name": "Preet Tech OPC Private Limited",
            "description": "Website, App & Software Development Company in Haldwani, Uttarakhand",
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
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": `${baseUrl}/#localbusiness`,
            "name": "Preet Tech OPC Private Limited",
            "image": `${baseUrl}/icon.png`,
            "telephone": "+91 97566 67397",
            "email": "info@preettech.com",
            "url": baseUrl,
            "priceRange": "₹₹",
            "description": "Preet Tech is a technology company based in Haldwani, Uttarakhand providing website development, mobile app development, custom software development and digital solutions.",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "near Krishna Hospital, Subhash Nagar",
                "addressLocality": "Haldwani",
                "addressRegion": "Uttarakhand",
                "postalCode": "263139",
                "addressCountry": "IN"
            },
            "areaServed": [
                { "@type": "City", "name": "Haldwani" },
                { "@type": "State", "name": "Uttarakhand" },
                { "@type": "Country", "name": "India" }
            ],
            "sameAs": [
                "https://www.facebook.com/Preetinfotech/",
                "https://www.instagram.com/preettech/",
                "https://www.linkedin.com/company/preet-tech"
            ],
            "foundingDate": "2021",
            "parentOrganization": {
                "@id": `${baseUrl}/#organization`
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
        <html lang="en" className={`${jakarta.variable} ${outfit.variable} ${jetbrains.variable} ${poppins.variable}`} suppressHydrationWarning>
            <head>
                {/* Performance: Preconnect to external origins */}
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />
                {/* Mobile: Theme color for browser chrome */}
                <meta name="theme-color" content="#3994fa" />

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
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false}>
                    <ClientLayout>
                        {children}
                    </ClientLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}
