export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  categories: string[];
  image: string;
  iconBg: string;
  iconColor: string;
  iconName: string;
  technologies: string[];
  slug: string;
  externalLink?: string;
}

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Real Estate",
  "Salon",
  "School",
  "Websites",
  "Others",
  "Hotel",
  "Dashboard",
  "SAAS",
  "Our Venture"
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "1",
    title: "Angelic Studio",
    description: "Experience luxury beauty, grooming, and wellness at Angelic Beauty & Wellness Studio.",
    categories: ["Salon", "Websites"],
    image: "/images/services/angelic-studio.png",
    iconBg: "bg-amber-100 dark:bg-amber-900/50",
    iconColor: "text-amber-600",
    iconName: "PenTool",
    technologies: ["Web Design", "Booking", "Wellness"],
    slug: "angelic-studio",
    externalLink: "https://www.angelicstudio.in/"
  },
  {
    id: "2",
    title: "INVESTNEST FINTECH",
    description: "Unlock sophisticated investment vehicles including private credit and high-conviction hedge strategies.",
    categories: ["Others", "Websites"],
    image: "/images/services/investnest.png",
    iconBg: "bg-blue-100 dark:bg-blue-900/50",
    iconColor: "text-blue-600",
    iconName: "BarChart3",
    technologies: ["Fintech", "Investment", "UI/UX"],
    slug: "investnest-fintech",
    externalLink: "https://www.investnestfintech.com/"
  },
  {
    id: "3",
    title: "BCWS",
    description: "British Candy World School provides a nurturing environment where students are empowered to discover their potential and achieve academic brilliance.",
    categories: ["School", "Websites"],
    image: "/images/services/bcws.png",
    iconBg: "bg-yellow-100 dark:bg-yellow-900/50",
    iconColor: "text-yellow-600",
    iconName: "BookOpen",
    technologies: ["Education", "Admissions", "Web Design"],
    slug: "bcws",
    externalLink: "https://bcws.mmf.org.in/"
  },
  {
    id: "4",
    title: "AK Real Estate",
    description: "Since 2003 we've helped over 400 Haldwani families move into thoughtfully planned villas and flats.",
    categories: ["Real Estate", "Websites"],
    image: "/images/services/akestate.png",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
    iconColor: "text-emerald-600",
    iconName: "Home",
    technologies: ["Real Estate", "Property", "Design"],
    slug: "ak-estate",
    externalLink: "https://www.akestate.in/"
  },
  {
    id: "5",
    title: "Dbali",
    description: "Sleek and spacious 2 & 3 BHK builder floors located directly on Ramnagar Road.",
    categories: ["Real Estate", "Websites"],
    image: "/images/services/dbali.png",
    iconBg: "bg-orange-100 dark:bg-orange-900/50",
    iconColor: "text-orange-600",
    iconName: "Home",
    technologies: ["Real Estate", "Architecture", "Design"],
    slug: "dbali",
    externalLink: "https://www.dbali.in/"
  },
  {
    id: "6",
    title: "Maa Garjiya Packers And Movers",
    description: "Safe, Reliable & Affordable Packers and Movers in India.",
    categories: ["Others", "Websites"],
    image: "/images/services/maagarjiya.png",
    iconBg: "bg-green-100 dark:bg-green-900/50",
    iconColor: "text-green-600",
    iconName: "Truck",
    technologies: ["Logistics", "Services", "Web Design"],
    slug: "maa-garjiya",
    externalLink: "https://www.maagarjiyapackersandmovers.com/"
  },
  {
    id: "7",
    title: "Handiloomwood",
    description: "Handcrafted marble décor, tableware, furniture, and bespoke stone creations.",
    categories: ["Others", "Websites"],
    image: "/images/services/handiloomwood.png",
    iconBg: "bg-orange-100 dark:bg-orange-900/50",
    iconColor: "text-orange-600",
    iconName: "Home",
    technologies: ["E-Commerce", "Furniture", "Design"],
    slug: "handiloomwood",
    externalLink: "https://handiloomwood.com/"
  },
  {
    id: "8",
    title: "The Private Office Of Sheikh Sultan Bin Nasser Al Humaid Al Nuaimi",
    description: "A private office of distinction, stewarding a diverse portfolio of enterprises and strategic investments.",
    categories: ["Others", "Websites"],
    image: "/images/services/ssprivateoffice.png",
    iconBg: "bg-yellow-100 dark:bg-yellow-900/50",
    iconColor: "text-yellow-600",
    iconName: "Globe",
    technologies: ["Investments", "Enterprise", "Corporate"],
    slug: "ssprivateoffice",
    externalLink: "https://www.ssprivateoffice.com/"
  },
  {
    id: "9",
    title: "Trueline Real Estate",
    description: "Your Dream Home Awaits. The Journey To Modern Sovereign Living Starts Here At Trueline Estates.",
    categories: ["Real Estate", "Websites"],
    image: "/images/services/trueline.png",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/50",
    iconColor: "text-indigo-600",
    iconName: "Home",
    technologies: ["Real Estate", "Property", "Design"],
    slug: "trueline-real-estate",
    externalLink: "https://trueline-real-estate.vercel.app/"
  },
  {
    id: "10",
    title: "Dhami Bhojnalay & Hotel",
    description: "Stay. Dine. Explore Pithoragarh. Warm Himalayan Hospitality in the Heart of Pithoragarh.",
    categories: ["Hotel", "Websites"],
    image: "/images/services/dhamihotel.png",
    iconBg: "bg-teal-100 dark:bg-teal-900/50",
    iconColor: "text-teal-600",
    iconName: "Home",
    technologies: ["Hospitality", "Booking", "Web Design"],
    slug: "dhami-hotel",
    externalLink: "https://www.dhamihotel.in/"
  },
  {
    id: "11",
    title: "Hotel Oak Chhav",
    description: "Where Nature Welcomes You. Stay Amidst the Oaks. Experience Nainital Naturally.",
    categories: ["Hotel", "Websites"],
    image: "/images/services/hoteloakchhav.jpg",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
    iconColor: "text-emerald-600",
    iconName: "Home",
    technologies: ["Hospitality", "Booking", "Web Design"],
    slug: "hotel-oak-chhav",
    externalLink: "https://www.hoteloakchhavnainital.in/"
  },
  {
    id: "12",
    title: "Nest & Hives",
    description: "Stay Where Nature Feels Like Home. Motiapathar, Mukteshwar, Uttarakhand.",
    categories: ["Hotel", "Websites"],
    image: "/images/services/nestandhives.jpg",
    iconBg: "bg-teal-100 dark:bg-teal-900/50",
    iconColor: "text-teal-600",
    iconName: "MapPin",
    technologies: ["Resort", "Nature", "Web Design"],
    slug: "nest-and-hives",
    externalLink: "https://www.nestandhives.com/"
  },
  {
    id: "13",
    title: "Sir Stephen Hawking Public School",
    description: "Empowering Young Minds For A Brighter Tomorrow. Academic excellence and strong moral values.",
    categories: ["School", "Websites"],
    image: "/images/services/stephenhawking.png",
    iconBg: "bg-purple-100 dark:bg-purple-900/50",
    iconColor: "text-purple-600",
    iconName: "BookOpen",
    technologies: ["Education", "Admissions", "Web Design"],
    slug: "stephen-hawking-school",
    externalLink: "https://www.sirstephenhawkingpublicschool.in/"
  },
  {
    id: "14",
    title: "Saroj Sushma Hotel",
    description: "Experience the perfect blend of modern luxury and serene elegance.",
    categories: ["Hotel", "Websites"],
    image: "/images/services/sarojsushma.png",
    iconBg: "bg-sky-100 dark:bg-sky-900/50",
    iconColor: "text-sky-600",
    iconName: "Home",
    technologies: ["Hospitality", "Booking", "Web Design"],
    slug: "saroj-sushma-hotel",
    externalLink: "https://www.sarojsushmahotel.in/"
  },
  {
    id: "15",
    title: "Beersheba Sr Sec School Haldwani",
    description: "Built websites for all 4 Branches of Beersheba (Haldwani, Almora, Ranikhet & Chaukhutia).",
    categories: ["School", "Websites"],
    image: "/images/services/beersheba.png",
    iconBg: "bg-red-100 dark:bg-red-900/50",
    iconColor: "text-red-600",
    iconName: "BookOpen",
    technologies: ["Education", "Multi-branch", "Web Design"],
    slug: "beersheba-school",
    externalLink: "https://www.beershebaschool.in/"
  },
  {
    id: "16",
    title: "Angelic Inventory Dashboard",
    description: "A comprehensive studio inventory management and staff performance tracking dashboard.",
    categories: ["Dashboard", "Others"],
    image: "/images/services/angelicdashboard.png",
    iconBg: "bg-fuchsia-100 dark:bg-fuchsia-900/50",
    iconColor: "text-fuchsia-600",
    iconName: "LayoutDashboard",
    technologies: ["React", "Dashboard", "Management"],
    slug: "angelic-dashboard",
    externalLink: "https://angelic-studio-inventory-management.vercel.app/"
  },
  {
    id: "17",
    title: "Ashok Hotel Nainital",
    description: "Six Decades of Warm Hospitality. Comfortable stays, convenient access and a homely Nainital experience.",
    categories: ["Hotel", "Websites"],
    image: "/images/services/ashokhotel.png",
    iconBg: "bg-orange-100 dark:bg-orange-900/50",
    iconColor: "text-orange-600",
    iconName: "Home",
    technologies: ["Hospitality", "Booking", "Web Design"],
    slug: "ashok-hotel-nainital",
    externalLink: "https://ashok-hotel-website.vercel.app/"
  },
  {
    id: "18",
    title: "Hem Taxi Service",
    description: "Your Trusted Taxi Service for Every Journey. Reliable, Safe, and Comfortable travel.",
    categories: ["Others", "Websites"],
    image: "/images/services/hemtaxi.png",
    iconBg: "bg-amber-100 dark:bg-amber-900/50",
    iconColor: "text-amber-600",
    iconName: "Car",
    technologies: ["Transport", "Booking", "Web Design"],
    slug: "hem-taxi-service",
    externalLink: "https://hem-taxi-service.vercel.app/"
  },
  {
    id: "19",
    title: "PartyDial",
    description: "India's #1 Venue Booking Platform. Find the perfect venue for your event instantly.",
    categories: ["SAAS", "Our Venture"],
    image: "/images/services/partydial.png",
    iconBg: "bg-pink-100 dark:bg-pink-900/50",
    iconColor: "text-pink-600",
    iconName: "PartyPopper",
    technologies: ["SAAS", "Booking", "Platform"],
    slug: "partydial",
    externalLink: "https://www.partydial.com/"
  },
  {
    id: "20",
    title: "Partner PartyDial",
    description: "Scale your venue's party bookings. Transform empty slots into guaranteed revenue.",
    categories: ["SAAS", "Our Venture"],
    image: "/images/services/partnerpartydial.png",
    iconBg: "bg-blue-100 dark:bg-blue-900/50",
    iconColor: "text-blue-600",
    iconName: "Briefcase",
    technologies: ["SAAS", "B2B", "Platform"],
    slug: "partner-partydial",
    externalLink: "https://partner.partydial.com/"
  },
  {
    id: "21",
    title: "PartyDial Admin",
    description: "Intelligence dashboard for venue management, lead distribution, and finance overview.",
    categories: ["SAAS", "Dashboard", "Our Venture"],
    image: "/images/services/partydialadmin.png",
    iconBg: "bg-purple-100 dark:bg-purple-900/50",
    iconColor: "text-purple-600",
    iconName: "LayoutDashboard",
    technologies: ["SAAS", "Dashboard", "Management"],
    slug: "partydial-admin"
  },
  {
    id: "22",
    title: "Onboarding Mentors",
    description: "Land Your Dream Job Faster with AI-Powered Matching. Get hired directly without middlemen.",
    categories: ["SAAS", "Our Venture"],
    image: "/images/services/onboardingmentors.png",
    iconBg: "bg-orange-100 dark:bg-orange-900/50",
    iconColor: "text-orange-600",
    iconName: "Briefcase",
    technologies: ["AI", "Jobs", "Platform"],
    slug: "onboarding-mentors",
    externalLink: "https://www.onboardingmentors.com/"
  },
  {
    id: "23",
    title: "Onboarding Mentors For Recruiter",
    description: "Hire Verified Candidates Faster with AI-Powered Hiring. Find qualified candidates near your location.",
    categories: ["SAAS", "Our Venture"],
    image: "/images/services/onboardingmentorsrecruiter.png",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/50",
    iconColor: "text-indigo-600",
    iconName: "Users",
    technologies: ["AI", "Recruitment", "B2B"],
    slug: "onboarding-mentors-recruiter",
    externalLink: "https://www.onboardingmentors.com/recruiter"
  }
];
