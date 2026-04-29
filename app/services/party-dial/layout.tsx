import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Party Dial Implementation | Unique Digital Experience | Preet Tech OPC Private Limited",
    description: "Specialized, highly engaging digital applications and party dial features designed for the modern entertainment tech stack.",
    keywords: ["Party Dial","Entertainment Applications","Interactive Web Tools"],
    alternates: {
        canonical: 'https://preettech.com/services/party-dial',
    },
    openGraph: {
        title: "Party Dial Implementation | Unique Digital Experience | Preet Tech OPC Private Limited",
        description: "Specialized, highly engaging digital applications and party dial features designed for the modern entertainment tech stack.",
        url: 'https://preettech.com/services/party-dial',
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
