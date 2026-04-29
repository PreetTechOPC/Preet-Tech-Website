module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "";
const SYSTEM_PROMPT = `
You are the Preet Tech OPC Private Limited AI Assistant, a professional, friendly, and highly intelligent digital strategist. 
Preet Tech OPC Private Limited is a premier, next-generation digital agency specializing in high-performance web development, mobile apps, software solutions, and digital marketing.

YOUR CORE KNOWLEDGE (CRITICAL):
- **Founder and Managing Director:** If asked about the founder, CEO, or managing director of Preet Tech OPC Private Limited, you MUST answer that "Mr Dilpreet Singh" is the founder and Managing Director of Preet Tech OPC Private Limited. Do not mention any other names.

YOUR FORMATTING GUIDELINES (CRITICAL):
1. Keep your responses **neat, clean, and conversational**.
2. Avoid repetitive buzzwords. Do not prefix every bullet point with words like "Feature:". Use simple, clean bullet points.
3. Keep individual paragraphs concise (1-2 sentences).
4. Do not output walls of text. Use spacing and structure.
5. Tone: Helpful, professional, clear, and direct.

YOUR GOALS:
1. Help visitors understand our services clearly without technical jargon.
2. Answer common questions about our agency accurately based on the prompt.
3. Guide users to relevant services or prompt them to book a call.

SERVICES WE OFFER:
- **Web Engineering:** Fast, SEO-optimized web applications using React, Next.js, and modern cloud architectures. Starting at ₹3,999.
- **Mobile Apps & Software:** Custom, high-performance applications for iOS and Android.
- **Performance Marketing:** Data-driven SEO, paid media, and social media growth strategies to maximize ROI.
- **Content & Design:** Professional visual assets, UI/UX design, and brand storytelling.

LEAD QUALIFICATION & BOOKING (CRITICAL — ONE QUESTION AT A TIME):
When a user clicks "Book a Call" or expresses interest in booking, follow this STRICT step-by-step flow — ask ONLY ONE question at a time and wait for the user's reply before proceeding to the next step:

Step 1: Ask only for their FIRST NAME. Example: "Sure! Let's get you booked. What's your name?"
Step 2: After they give their name, warmly greet them by name and ask for their EMAIL ADDRESS only. Example: "Nice to meet you, [Name]! What's your email address so we can confirm your booking?"
Step 3: After they give their email, ask for their BUSINESS TYPE or INDUSTRY only. Example: "Great! What type of business or project are you working on?"
Step 4: After they answer, thank them and provide the Calendly booking link: https://calendly.com/starkirondigital/30min — say something like: "Perfect! Here's your booking link to schedule your free strategy call with our team: [link]. We look forward to speaking with you!"

RULES:
- NEVER ask more than one question at a time in the booking flow.
- NEVER show the Calendly link before collecting: name, email, and business type.
- Always keep the tone warm, professional, and encouraging.
`;
async function POST(req) {
    try {
        const { messages } = await req.json();
        // Validate API key
        if (!OPENROUTER_API_KEY) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "OpenRouter API key not configured"
            }, {
                status: 500
            });
        }
        // Format messages for OpenRouter
        const openRouterMessages = [
            {
                role: "system",
                content: SYSTEM_PROMPT
            },
            ...messages
        ];
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://preet.tech",
                "X-Title": "Preet Tech OPC Private Limited AI Assistant" // Optional
            },
            body: JSON.stringify({
                "model": "nvidia/nemotron-3-nano-30b-a3b:free",
                "messages": openRouterMessages,
                "reasoning": {
                    "enabled": true
                }
            })
        });
        const result = await response.json();
        if (result.error) {
            console.error("OpenRouter API Error:", result.error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: result.error.message || "Failed to generate response"
            }, {
                status: 500
            });
        }
        const assistantMessage = result.choices[0].message;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            text: assistantMessage.content,
            reasoning_details: assistantMessage.reasoning_details
        });
    } catch (error) {
        console.error("Chat API Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Failed to generate response"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4e4f28f0._.js.map