"use client";

import React from "react";
import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("../components/ChatWidget"), {
    ssr: false,
});

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <ChatWidget />
        </>
    );
}
