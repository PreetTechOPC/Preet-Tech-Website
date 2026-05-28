import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Custom Software Development Services | Preet Tech OPC Private Limited",
    description: "Industrial-grade custom software built to handle your unique operational challenges with secure, scalable cloud architecture.",
    keywords: ["Custom Software Development","SaaS Development","Cloud Architecture","Enterprise Apps"],
    openGraph: {
        title: "Custom Software Development Services | Preet Tech OPC Private Limited",
        description: "Industrial-grade custom software built to handle your unique operational challenges with secure, scalable cloud architecture.",
        url: 'https://preettech.com/services/software-development',
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
