import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Services | Web, App & Software Development | Preet Tech OPC Private Limited",
    description: "Discover Preet Tech OPC Private Limited's high-impact digital services including web development, mobile apps, specialized software, and performance marketing.",
    keywords: ["IT Services","Web Development Services","App Development","Marketing Services"],
    openGraph: {
        title: "Our Services | Web, App & Software Development | Preet Tech OPC Private Limited",
        description: "Discover Preet Tech OPC Private Limited's high-impact digital services including web development, mobile apps, specialized software, and performance marketing.",
        url: 'https://preettech.com/services',
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
