import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Preet Tech OPC Private Limited | Get in Touch for IT Solutions",
    description: "Connect with Preet Tech OPC Private Limited to discuss your next big project. Book a free strategy call with our digital transformation experts today.",
    keywords: [
        "Contact Preet Tech OPC Private Limited",
        "IT Solutions Contact",
        "Digital IT Company Contact",
        "Strategy Call",
        "hire IT company India",
        "contact web development company",
        "book free strategy call",
        "IT company Haldwani contact"
    ],
    openGraph: {
        title: "Contact Preet Tech OPC Private Limited | Get in Touch for IT Solutions",
        description: "Connect with Preet Tech OPC Private Limited to discuss your next big project. Book a free strategy call with our digital transformation experts today.",
        url: 'https://www.preettech.com/contact',
        siteName: 'Preet Tech OPC Private Limited',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Contact Preet Tech OPC Private Limited',
            },
        ],
    },
    alternates: {
        canonical: '/contact',
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
