import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Preet Tech OPC Private Limited | Innovative IT Solutions Company & IT Company",
    description: "Preet Tech OPC Private Limited is an innovative IT solutions company specializing in custom software development, digital transformation, AI automation, and enterprise tech solutions.",
    keywords: [
        "Innovative IT Solutions Company",
        "custom software development",
        "digital transformation IT Company",
        "enterprise IT solutions",
        "web application development",
        "mobile app development services",
        "scalable cloud infrastructure",
        "UI/UX design IT Company",
        "artificial intelligence solutions",
        "future-ready technology",
        "high-performance web architecture",
        "secure digital experiences",
        "business automation services",
        "enterprise technology partner"
    ],
    openGraph: {
        title: "About Preet Tech OPC Private Limited | Innovative IT Solutions Company",
        description: "Preet Tech OPC Private Limited is an innovative IT solutions company specializing in custom software development, digital transformation, and enterprise tech solutions.",
        url: 'https://preettech.com/about',
        siteName: 'Preet Tech OPC Private Limited',
        type: 'website',
    }
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
