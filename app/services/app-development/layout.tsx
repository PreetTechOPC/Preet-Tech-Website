import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Mobile App Development Services | iOS & Android | Preet Tech OPC Private Limited",
    description: "Transform your business with cutting-edge mobile apps for iOS and Android. Our high-performance apps ensure seamless user experiences.",
    keywords: ["App Development","iOS Development","Android App Services","Mobile App Agency"],
    alternates: {
        canonical: 'https://preettech.com/services/app-development',
    },
    openGraph: {
        title: "Mobile App Development Services | iOS & Android | Preet Tech OPC Private Limited",
        description: "Transform your business with cutting-edge mobile apps for iOS and Android. Our high-performance apps ensure seamless user experiences.",
        url: 'https://preettech.com/services/app-development',
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
