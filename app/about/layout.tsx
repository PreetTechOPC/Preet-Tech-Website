import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Preet Tech | Website & Software Development Company in Haldwani",
    description: "Preet Tech OPC Private Limited is a technology company based in Haldwani, Uttarakhand, founded in 2021. We build websites, mobile apps and custom software for startups and businesses across India and globally.",
    keywords: [
        "About Preet Tech",
        "IT Company Haldwani",
        "Website Development Company Haldwani",
        "Software Development Company Haldwani",
        "Preet Tech OPC Private Limited",
        "Technology Company Uttarakhand",
        "Web Development Agency Haldwani",
        "App Development Company Haldwani",
    ],
    openGraph: {
        title: "About Preet Tech | Website & Software Development Company in Haldwani",
        description: "Preet Tech is a technology company based in Haldwani, Uttarakhand, providing website development, app development, custom software and digital solutions since 2021.",
        url: "https://www.preettech.com/about",
        siteName: "Preet Tech OPC Private Limited",
        type: "website",
        locale: "en_IN",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Preet Tech — Haldwani Technology Company" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Preet Tech | Website & Software Development Company in Haldwani",
        description: "Preet Tech is a technology company based in Haldwani, Uttarakhand providing website development, app development and custom software since 2021.",
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "/about",
    },
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
