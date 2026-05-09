import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Social Media Handling & Management | Preet Tech OPC Private Limited",
    description: "Command complete social dominance with our high-impact social media management geared towards brand growth and engagement.",
    keywords: ["Social Media Management","Brand Growth","Digital Presence","Social Media IT Company"],
    alternates: {
        canonical: 'https://preettech.com/services/social-media-handling',
    },
    openGraph: {
        title: "Social Media Handling & Management | Preet Tech OPC Private Limited",
        description: "Command complete social dominance with our high-impact social media management geared towards brand growth and engagement.",
        url: 'https://preettech.com/services/social-media-handling',
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
