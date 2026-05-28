import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Partnership Marketing Services | Preet Tech OPC Private Limited",
    description: "Expand your reach with strategic partnership marketing and affiliate ecosystems powered by data-driven platforms.",
    keywords: ["Partnership Marketing","Affiliate Programs","Strategic Marketing Tech"],
    openGraph: {
        title: "Partnership Marketing Services | Preet Tech OPC Private Limited",
        description: "Expand your reach with strategic partnership marketing and affiliate ecosystems powered by data-driven platforms.",
        url: 'https://preettech.com/services/partnership-marketing',
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
