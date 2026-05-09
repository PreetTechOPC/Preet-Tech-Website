"use client";

import React, { useState, useEffect, useMemo, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  ArrowUpDown,
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  ChevronDown,
  MessageCircle,
  ShoppingBag,
  ArrowUpRight,
  Box,
  Sparkles,
  Clock,
  Tag,
  Layers
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// --- Types ---
export interface Tool {
  id: string;
  name: string;
  variant: string;
  duration: string;
  category: string;
  description: string;
  originalPrice: string;
  discountPrice: string;
  discountBadge: string;
  badge: string;
  status: string;
}

// --- Data ---
export const TOOLS: Tool[] = [
  {
    id: "1",
    name: "CodeRabbit",
    variant: "CodeRabbit Pro",
    duration: "1M",
    category: "🔥 New & Premium",
    description: "Get CodeRabbit Pro for 1M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "2",
    name: "CodeRabbit",
    variant: "CodeRabbit Pro",
    duration: "2M",
    category: "🔥 New & Premium",
    description: "Get CodeRabbit Pro for 2M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "3",
    name: "Loom Business + AI",
    variant: "Business + AI",
    duration: "1Y",
    category: "🔥 New & Premium",
    description: "Get Loom Business + AI for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "4",
    name: "Wispr Flow",
    variant: "Wispr Flow Pro",
    duration: "1Y",
    category: "🔥 New & Premium",
    description: "Get Wispr Flow Pro for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "5",
    name: "Willow Voice",
    variant: "Willow Voice Pro",
    duration: "1Y",
    category: "🔥 New & Premium",
    description: "Get Willow Voice Pro for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "6",
    name: "PromptDrive.ai",
    variant: "PromptDrive.ai Teams",
    duration: "1Y",
    category: "🔥 New & Premium",
    description: "Get PromptDrive.ai Teams for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "7",
    name: "PromptDrive.ai Business (50 Seats)",
    variant: "Standard",
    duration: "1Y",
    category: "🔥 New & Premium",
    description: "Get PromptDrive.ai Business (50 Seats) for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "8",
    name: "PostHog",
    variant: "PostHog Scale",
    duration: "1Y",
    category: "🔥 New & Premium",
    description: "Get PostHog Scale for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "9",
    name: "Firecrawl",
    variant: "Firecrawl AI",
    duration: "50K Credits (1Y)",
    category: "🔥 New & Premium",
    description: "Get Firecrawl AI for 50K Credits (1Y). Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "10",
    name: "Vapi",
    variant: "Standard",
    duration: "$200 Credits (12M)",
    category: "🔥 New & Premium",
    description: "Get Vapi for $200 Credits (12M). Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "11",
    name: "Emergent Standard",
    variant: "Standard",
    duration: "1Y",
    category: "🔥 New & Premium",
    description: "Get Emergent Standard for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "12",
    name: "Manus AI Pro (6000 Credits)",
    variant: "Standard",
    duration: "1M",
    category: "🔥 New & Premium",
    description: "Get Manus AI Pro (6000 Credits) for 1M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "13",
    name: "Reforge AI Build",
    variant: "Standard",
    duration: "1M",
    category: "🔥 New & Premium",
    description: "Get Reforge AI Build for 1M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "14",
    name: "Sentry.io",
    variant: "Sentry.io Teams",
    duration: "1Y",
    category: "🔥 New & Premium",
    description: "Get Sentry.io Teams for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "15",
    name: "Sentry.io",
    variant: "Sentry.io Business",
    duration: "1Y",
    category: "🔥 New & Premium",
    description: "Get Sentry.io Business for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Trending",
    status: "Active",
  },
  {
    id: "16",
    name: "Beautiful.ai",
    variant: "Beautiful.ai Pro",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Beautiful.ai Pro for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "17",
    name: "Mobbin",
    variant: "Mobbin Pro",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Mobbin Pro for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "18",
    name: "ChatPRD",
    variant: "ChatPRD Pro",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get ChatPRD Pro for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "19",
    name: "Perplexity",
    variant: "Perplexity Pro",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Perplexity Pro for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "20",
    name: "Raycast",
    variant: "Raycast Pro",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Raycast Pro for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "21",
    name: "Superhuman",
    variant: "Superhuman Starter",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Superhuman Starter for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "22",
    name: "Linear",
    variant: "Linear Business",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Linear Business for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "23",
    name: "Granola",
    variant: "Granola Business",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Granola Business for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "24",
    name: "Magic Patterns Hobby",
    variant: "Standard",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Magic Patterns Hobby for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "25",
    name: "Webflow CMS",
    variant: "Standard",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Webflow CMS for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "26",
    name: "Webflow",
    variant: "Webflow Business",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Webflow Business for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "27",
    name: "Webflow",
    variant: "Webflow Growth",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Webflow Growth for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "28",
    name: "n8n",
    variant: "n8n Starter",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get n8n Starter for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "29",
    name: "Replit",
    variant: "Replit Core",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Replit Core for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "30",
    name: "Lovable Pro (100 Credits / Month)",
    variant: "Standard",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Lovable Pro (100 Credits / Month) for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "31",
    name: "ClickUp",
    variant: "ClickUp Enterprise",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get ClickUp Enterprise for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "32",
    name: "Cal.com",
    variant: "Cal.com Teams",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Cal.com Teams for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "33",
    name: "Cal.com",
    variant: "Cal.com Organization",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Cal.com Organization for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "34",
    name: "GitLab",
    variant: "GitLab Ultimate",
    duration: "12M",
    category: "⭐ Top Selling",
    description: "Get GitLab Ultimate for 12M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "35",
    name: "Postman",
    variant: "Postman Basic",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Postman Basic for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "36",
    name: "Zeplin",
    variant: "Zeplin Advanced",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Zeplin Advanced for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "37",
    name: "Backblaze Cloud",
    variant: "Backblaze Cloud Unlimited",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Backblaze Cloud Unlimited for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "38",
    name: "Bitwarden Premium +",
    variant: "Bitwarden Premium + Family",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Bitwarden Premium + Family for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "39",
    name: "Termly.io",
    variant: "Termly.io Starter",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Termly.io Starter for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "40",
    name: "Termly.io",
    variant: "Termly.io Pro+",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Termly.io Pro+ for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "41",
    name: "Hostinger Cloud",
    variant: "Hostinger Cloud Startup",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Hostinger Cloud Startup for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "42",
    name: "Pica",
    variant: "Pica Starter",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Pica Starter for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "43",
    name: "Framer",
    variant: "Framer Basic",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Framer Basic for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "44",
    name: "Framer",
    variant: "Framer Pro",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Framer Pro for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "45",
    name: "Figma",
    variant: "Figma Professional",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Figma Professional for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "46",
    name: "Intercom",
    variant: "Intercom Advanced",
    duration: "1Y",
    category: "⭐ Top Selling",
    description: "Get Intercom Advanced for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "47",
    name: "Rezi",
    variant: "Rezi AI",
    duration: "Lifetime",
    category: "🎓 Career / Education",
    description: "Get Rezi AI for Lifetime. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "48",
    name: "PNGTree Premium",
    variant: "Standard",
    duration: "Lifetime",
    category: "🎓 Career / Education",
    description: "Get PNGTree Premium for Lifetime. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "49",
    name: "Enginemailer Free Forever (10K / Month)",
    variant: "Standard",
    duration: "Lifetime",
    category: "🎓 Career / Education",
    description: "Get Enginemailer Free Forever (10K / Month) for Lifetime. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "50",
    name: "LinkedIn Career Premium",
    variant: "Standard",
    duration: "3M",
    category: "🎓 Career / Education",
    description: "Get LinkedIn Career Premium for 3M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "51",
    name: "LinkedIn Business Premium",
    variant: "Standard",
    duration: "3M",
    category: "🎓 Career / Education",
    description: "Get LinkedIn Business Premium for 3M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "52",
    name: "Scrimba",
    variant: "Scrimba Pro",
    duration: "1Y",
    category: "🎓 Career / Education",
    description: "Get Scrimba Pro for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "53",
    name: "No Code MBA",
    variant: "No Code MBA Unlimited",
    duration: "1M",
    category: "🎓 Career / Education",
    description: "Get No Code MBA Unlimited for 1M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "54",
    name: "Whizlabs Premium",
    variant: "Standard",
    duration: "1M",
    category: "🎓 Career / Education",
    description: "Get Whizlabs Premium for 1M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "55",
    name: "Whizlabs Premium",
    variant: "Standard",
    duration: "1Y",
    category: "🎓 Career / Education",
    description: "Get Whizlabs Premium for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "56",
    name: "AhaSlides Essentials",
    variant: "Standard",
    duration: "12M",
    category: "🎓 Career / Education",
    description: "Get AhaSlides Essentials for 12M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "57",
    name: "AhaSlides",
    variant: "AhaSlides Pro",
    duration: "12M",
    category: "🎓 Career / Education",
    description: "Get AhaSlides Pro for 12M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "58",
    name: "Kickresume Premium",
    variant: "Standard",
    duration: "1M",
    category: "🎓 Career / Education",
    description: "Get Kickresume Premium for 1M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "59",
    name: "Mangoosh GRE Premium",
    variant: "Standard",
    duration: "1M",
    category: "🎓 Career / Education",
    description: "Get Mangoosh GRE Premium for 1M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "60",
    name: "UFC FightPass",
    variant: "Standard",
    duration: "2M",
    category: "🎓 Career / Education",
    description: "Get UFC FightPass for 2M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "61",
    name: "Gemini AI Pro + 2TB Storage",
    variant: "Standard",
    duration: "18M",
    category: "🎓 Career / Education",
    description: "Get Gemini AI Pro + 2TB Storage for 18M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "62",
    name: "Adobe Creative Cloud",
    variant: "Adobe Creative Cloud Max",
    duration: "1Y",
    category: "🎨 AI & Design Tools",
    description: "Get Adobe Creative Cloud Max for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "63",
    name: "Midjourney",
    variant: "Midjourney Pro",
    duration: "1M",
    category: "🎨 AI & Design Tools",
    description: "Get Midjourney Pro for 1M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "64",
    name: "Canva",
    variant: "Canva Creator",
    duration: "Lifetime",
    category: "🎨 AI & Design Tools",
    description: "Get Canva Creator for Lifetime. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "65",
    name: "HubSpot",
    variant: "HubSpot Growth",
    duration: "1Y",
    category: "📈 Business & Marketing",
    description: "Get HubSpot Growth for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "66",
    name: "Mailchimp Advanced (100K Credits)",
    variant: "Standard",
    duration: "1M",
    category: "📈 Business & Marketing",
    description: "Get Mailchimp Advanced (100K Credits) for 1M. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "67",
    name: "SEMrush Guru Plan",
    variant: "Standard",
    duration: "1Y",
    category: "📈 Business & Marketing",
    description: "Get SEMrush Guru Plan for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "68",
    name: "Google Drive 2TB Storage",
    variant: "Standard",
    duration: "1Y",
    category: "☁️ Cloud & Storage",
    description: "Get Google Drive 2TB Storage for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "69",
    name: "Dropbox Professional 3TB Storage",
    variant: "Standard",
    duration: "1Y",
    category: "☁️ Cloud & Storage",
    description: "Get Dropbox Professional 3TB Storage for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "70",
    name: "iCloud+ 2TB",
    variant: "Standard",
    duration: "1Y",
    category: "☁️ Cloud & Storage",
    description: "Get iCloud+ 2TB for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "71",
    name: "Jira Premium (Per Seat)",
    variant: "Standard",
    duration: "1Y",
    category: "🧩 Dev & Team Tools",
    description: "Get Jira Premium (Per Seat) for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "72",
    name: "GitHub Enterprise (Per Seat)",
    variant: "Standard",
    duration: "1Y",
    category: "🧩 Dev & Team Tools",
    description: "Get GitHub Enterprise (Per Seat) for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "73",
    name: "Slack Enterprise",
    variant: "Slack Enterprise Grid",
    duration: "1Y",
    category: "🧩 Dev & Team Tools",
    description: "Get Slack Enterprise Grid for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "74",
    name: "AutoCAD 2024",
    variant: "AutoCAD 2024 Professional",
    duration: "1Y",
    category: "🛠 3D / CAD Engineering",
    description: "Get AutoCAD 2024 Professional for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "75",
    name: "SolidWorks Premium",
    variant: "Standard",
    duration: "1Y",
    category: "🛠 3D / CAD Engineering",
    description: "Get SolidWorks Premium for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "76",
    name: "SketchUp",
    variant: "SketchUp Pro",
    duration: "1Y",
    category: "🛠 3D / CAD Engineering",
    description: "Get SketchUp Pro for 1Y. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "",
    status: "Active",
  },
  {
    id: "77",
    name: "Windows 10",
    variant: "Windows 10 Pro",
    duration: "Lifetime",
    category: "🔐 Software Keys",
    description: "Get Windows 10 Pro for Lifetime. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Lifetime License",
    status: "Active",
  },
  {
    id: "78",
    name: "Windows 11",
    variant: "Windows 11 Pro",
    duration: "Lifetime",
    category: "🔐 Software Keys",
    description: "Get Windows 11 Pro for Lifetime. Perfect for scaling businesses and professionals.",
    originalPrice: "199",
    discountPrice: "29",
    discountBadge: "85% OFF",
    badge: "Lifetime License",
    status: "Active",
  },
];


export const CATEGORIES = [
  "🔥 New & Premium",
  "⭐ Top Selling",
  "🎓 Career / Education",
  "🎨 AI & Design Tools",
  "📈 Business & Marketing",
  "☁️ Cloud & Storage",
  "🧩 Dev & Team Tools",
  "🛠 3D / CAD Engineering",
  "🔐 Software Keys"
];

const FAQS = [
  {
    q: "How will I receive the tool?",
    a: "Once your payment is confirmed on WhatsApp, we will share the login credentials or access link directly. Most deliveries happen within 10-30 minutes."
  },
  {
    q: "Is this a lifetime deal?",
    a: "Many of our tools offer lifetime access, while others are annual or periodic subscriptions. The duration is clearly mentioned on each product card."
  },
  {
    q: "How fast is delivery?",
    a: "We pride ourselves on instant delivery. Our team is available 24/7 on WhatsApp to ensure you get started immediately after purchase."
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept UPI, Bank Transfer, PayPal, and Crypto. Payment details will be shared on WhatsApp once you select your tool."
  },
  {
    q: "Do you provide support?",
    a: "Yes! We provide direct support for any login issues or setup help. You can message us anytime on WhatsApp for assistance."
  }
];

// --- Memoized Card Component for Performance ---
const ProductCard = memo(({ tool, handleBuy }: { tool: Tool; handleBuy: (t: Tool) => void }) => {
  const is3D = tool.category === "🛠 3D / CAD Engineering";
  const isLifetime = tool.duration.toLowerCase() === 'lifetime';

  return (
    <motion.div
      layout

      
      exit={{ opacity: 0, scale: 0.95 }}
      
      className={`group relative flex flex-col justify-between p-6 rounded-[2rem] border transition-all duration-300 shadow-sm hover:shadow-2xl ${is3D ? "bg-gradient-to-br from-slate-900 via-[#111] to-slate-900 border-slate-700/50 hover:border-brand-medium text-white"
        : "bg-white dark:bg-[#0a0a0a] border-slate-200 dark:border-white/10 hover:border-brand-medium/50"
        }`}
    >
      <div className="space-y-4">
        {/* Header Badges */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            <span className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full ${is3D ? "bg-white/10 text-white" : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"
              }`}>
              {tool.category.split(' ')[0]} {tool.category.substring(tool.category.indexOf(' ') + 1)}
            </span>
            {tool.badge && (
              <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full bg-brand-medium/10 text-brand-medium border border-brand-medium/20 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> {tool.badge}
              </span>
            )}
          </div>
        </div>

        {/* Title & Variant */}
        <div>
          <h3 className={`text-xl md:text-2xl font-black tracking-tight leading-tight mb-2 group-hover:text-brand-medium transition-colors ${is3D ? "text-white" : ""}`}>
            {tool.name}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${is3D ? "bg-white/5 text-slate-300" : "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400"
              }`}>
              <Layers className="w-3.5 h-3.5" /> {tool.variant}
            </span>
            <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${isLifetime
              ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
              : is3D ? "bg-white/5 text-slate-300" : "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400"
              }`}>
              <Clock className="w-3.5 h-3.5" /> {tool.duration}
            </span>
          </div>
          <p className={`text-sm leading-relaxed line-clamp-2 md:line-clamp-3 font-medium ${is3D ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}`}>
            {tool.description}
          </p>
        </div>
      </div>

      {/* Action */}
      <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5">
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              {tool.status}
            </span>
          </div>
        </div>

        {/* Custom WhatsApp Button to match product data */}
        <button
          onClick={() => handleBuy(tool)}
          className="w-full group/btn relative overflow-hidden py-3.5 md:py-4 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-95 text-white shadow-lg shadow-[#3994fa]/20"
        >
          <MessageCircle className="w-4 h-4 transition-transform group-hover/btn:-rotate-12" />
          <span>Buy via WhatsApp</span>
        </button>
      </div>

      {/* Magic Hover Glow */}
      <div className="absolute -inset-px rounded-[2rem] border border-transparent bg-gradient-to-b from-brand-medium/0 to-brand-medium/0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300" />
    </motion.div>
  );
});
ProductCard.displayName = "ProductCard";

export default function ToolsMarketplace() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const whatsappNumber = "919756667397"; // You can change this if needed

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    if (next) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  const handleBuyViaWhatsApp = useCallback((tool: Tool) => {
    const message = `Hi Preet Tech OPC Private Limited, I want to purchase ${tool.name} (${tool.variant}) for ${tool.duration}. Please share payment details.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }, [whatsappNumber]);

  // --- Memoized Filtering Logic ---
  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.variant.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const displayedTools = filteredTools.slice(0, visibleCount);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(12);
  }, [searchTerm, selectedCategory]);

  const loadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <main className="relative z-10 selection:bg-brand-medium/20 overflow-x-clip bg-[#fafafa] text-slate-900 dark:bg-[#050608] dark:text-white transition-colors duration-300 font-sans">
      <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-48 md:pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <motion.div
            
            
            className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-brand-medium/20 blur-[60px] rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center space-y-8 relative">
          <motion.div

            
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-medium/10 border border-brand-medium/20 text-brand-medium dark:text-brand-cyan text-xs font-black uppercase tracking-[0.3em]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Huge Inventory Restock</span>
          </motion.div>

          <div className="space-y-6">
            <h1

              
              
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
            >
              The Ultimate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-brand-medium to-brand-cyan">Tools Marketplace.</span>
            </h1>
            <p

              
              
              className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              Explore hundreds of highly sought-after digital tools, premium memberships, and software keys for startups and professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Category Tabs */}
      <section className="sticky top-20 z-40 px-4 md:px-6 mb-8" id="marketplace-grid">
        <div className="max-w-7xl mx-auto glass-morphism p-3 md:p-4 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-md dark:bg-black/60 bg-white/80 overflow-hidden">

          {/* Search Bar inside sticky header */}
          <div className="relative mb-4 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-medium transition-colors" />
            <input
              type="text"
              placeholder="Search tools, variants, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-medium/20 transition-all font-medium"
            />
          </div>

          {/* Scrollable Category Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${selectedCategory === 'All'
                ? "bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white shadow-lg shadow-[#3994fa]/30"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
                }`}
            >
              🌍 All Tools
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${selectedCategory === cat
                  ? "bg-gradient-to-r from-[#3994fa] to-[#004aad] text-white shadow-lg shadow-[#3994fa]/30"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-8 px-4 md:px-6 min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          {displayedTools.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <AnimatePresence mode="popLayout">
                  {displayedTools.map((tool) => (
                    <ProductCard key={tool.id} tool={tool} handleBuy={handleBuyViaWhatsApp} />
                  ))}
                </AnimatePresence>
              </div>

              {filteredTools.length > visibleCount && (
                <div className="mt-16 text-center">
                  <button
                    onClick={loadMore}
                    className="px-8 py-4 bg-gradient-to-r from-[#3994fa] to-[#004aad] hover:opacity-95 text-white rounded-2xl text-sm font-black uppercase tracking-widest transition-all inline-flex items-center gap-2 shadow-lg shadow-[#3994fa]/20"
                  >
                    Load More Tools <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 space-y-6 bg-slate-100 dark:bg-white/5 rounded-[3rem] border border-dashed border-slate-300 dark:border-white/10">
              <Box className="w-16 h-16 mx-auto text-slate-400 opacity-50" />
              <div className="space-y-2">
                <h3 className="text-2xl font-bold uppercase tracking-tight">No tools found</h3>
                <p className="text-slate-500 font-medium">Try adjusting your filters or search term.</p>
              </div>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="text-brand-medium font-black text-xs uppercase tracking-widest hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-medium font-bold uppercase tracking-[0.3em] text-xs">Customer Knowledge Base</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-slate-900/50 hover:border-brand-medium/30 transition-all">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <span className="font-bold text-lg uppercase tracking-tight group-hover:text-brand-medium transition-colors">{faq.q}</span>
                  <motion.div >
                    <ChevronDown className="w-6 h-6 text-brand-medium" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFAQ === i && (
                    <motion.div
                      
                      
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Floating WhatsApp Button */}
      <Footer />

      <motion.a
        
        
        
        
        href={`https://wa.me/${whatsappNumber}?text=Hi Preet Tech OPC Private Limited, I have a question about the Business Tools Marketplace.`}
        target="_blank"
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center group"
      >
        <div className="absolute -top-12 right-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat with an expert
        </div>
        <MessageCircle className="w-8 h-8" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.a>
    </main>
  );
}
