import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Preet Tech OPC Private Limited Blog | Digital Growth & IT Insights",
    description: "Explore the latest insights on digital growth, artificial intelligence, cloud computing, and software development strategies.",
    keywords: ["Tech Blog","Digital Growth Insights","IT Strategies","Preet Tech OPC Private Limited Insights"],
    openGraph: {
        title: "Preet Tech OPC Private Limited Blog | Digital Growth & IT Insights",
        description: "Explore the latest insights on digital growth, artificial intelligence, cloud computing, and software development strategies.",
        url: 'https://www.preettech.com/blog',
        siteName: 'Preet Tech OPC Private Limited',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Preet Tech Blog — Digital Growth & IT Insights',
            },
        ],
    },
    alternates: {
        canonical: '/blog',
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
