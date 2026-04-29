import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Start Your Business IT Roadmap | Preet Tech OPC Private Limited",
    description: "Launch your startup with the right technology stack. We help build your MVP and provide complete IT infrastructure.",
    keywords: ["Startup IT Services","MVP Development","Business Tech Roadmap","Launch Strategy"],
    alternates: {
        canonical: 'https://preettech.com/services/start-your-business',
    },
    openGraph: {
        title: "Start Your Business IT Roadmap | Preet Tech OPC Private Limited",
        description: "Launch your startup with the right technology stack. We help build your MVP and provide complete IT infrastructure.",
        url: 'https://preettech.com/services/start-your-business',
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
