import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Advanced Website Solutions | High-Performance Web Development",
    description: "Build robust, scalable, and ultra-fast advanced websites designed to convert visitors and scale your digital presence.",
    keywords: ["Advanced Web Development","High-Performance Websites","Scalable Web Architecture"],
    openGraph: {
        title: "Advanced Website Solutions | High-Performance Web Development",
        description: "Build robust, scalable, and ultra-fast advanced websites designed to convert visitors and scale your digital presence.",
        url: 'https://preettech.com/services/advance-website',
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
