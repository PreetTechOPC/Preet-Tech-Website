import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | Ideas to Real Products | Preet Tech",
  description: "Explore some of the digital products we've designed, developed, and delivered for our amazing clients. See our impact across Web Design, Mobile Apps, SaaS, and E-Commerce.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
