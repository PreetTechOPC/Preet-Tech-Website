import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Onboarding & Mentorship Systems | Preet Tech OPC Private Limited Solutions",
    description: "Implement structural training and onboarding portals for seamless team expansion and mentorship.",
    keywords: ["Onboarding Systems","Mentorship Platforms","Corporate Training Tech"],
    openGraph: {
        title: "Onboarding & Mentorship Systems | Preet Tech OPC Private Limited Solutions",
        description: "Implement structural training and onboarding portals for seamless team expansion and mentorship.",
        url: 'https://preettech.com/services/onboarding-mentores',
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
