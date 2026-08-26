import { Metadata } from 'next';
import DashboardClient from './DashboardClient';

export const metadata: Metadata = {
    title: 'Developer SEO Dashboard | Preet Tech',
    description: 'Internal developer SEO dashboard for monitoring health scores, CWV, and metadata across Preet Tech domains.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function SeoDashboardPage() {
    return <DashboardClient />;
}
