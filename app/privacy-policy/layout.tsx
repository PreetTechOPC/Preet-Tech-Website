import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | Preet Tech OPC Private Limited",
    description: "Read the Preet Tech OPC Private Limited Privacy Policy to understand how we collect, use, and protect your data.",
    alternates: {
        canonical: 'https://preettech.com/privacy-policy',
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
