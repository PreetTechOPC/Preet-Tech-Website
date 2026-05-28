import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Preet Tech OPC Private Limited | Get in Touch for IT Solutions",
    description: "Connect with Preet Tech OPC Private Limited to discuss your next big project. Book a free strategy call with our digital transformation experts today.",
    keywords: ["Contact Preet Tech OPC Private Limited","IT Solutions Contact","Digital IT Company Contact","Strategy Call"],
    openGraph: {
        title: "Contact Preet Tech OPC Private Limited | Get in Touch for IT Solutions",
        description: "Connect with Preet Tech OPC Private Limited to discuss your next big project. Book a free strategy call with our digital transformation experts today.",
        url: 'https://preettech.com/contact',
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
