import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms of Service | Preet Tech OPC Private Limited",
    description: "Read the Preet Tech OPC Private Limited Terms of Service outlining the terms and conditions for our digital solutions and services.",
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
