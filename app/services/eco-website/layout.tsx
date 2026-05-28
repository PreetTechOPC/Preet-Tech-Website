import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Eco-Friendly Website Development | Sustainable IT | Preet Tech OPC Private Limited",
    description: "Launch highly optimized, sustainable eco-friendly websites that consume less energy while delivering blazing-fast performance.",
    keywords: ["Eco-Friendly Websites","Sustainable Web Development","Green Hosting Solutions"],
    openGraph: {
        title: "Eco-Friendly Website Development | Sustainable IT | Preet Tech OPC Private Limited",
        description: "Launch highly optimized, sustainable eco-friendly websites that consume less energy while delivering blazing-fast performance.",
        url: 'https://preettech.com/services/eco-website',
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
