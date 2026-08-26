import React, { memo } from 'react';
import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "shuchi virmani",
    initials: "SV",
    role: "Client",
    company: "Milestone Learners Academy",
    text: "I have taken a package from Preet Tech Haldwani for poster designing and social media handling. I am really happy. They are very professional and the staff is very nice and cooperative. I recommend others to try their services.",
    rating: 5,
    image: "/images/reviews/shuchi.png",
  },
  {
    id: 2,
    name: "Dr. Harshit Joshi",
    initials: "HJ",
    role: "Local Guide",
    company: "",
    text: "Happy to hear that Preet Tech is bringing one stop Web Designing and Development solutions in Haldwani City and providing top notch services to their clients. My best wishes to team and their constant efforts.",
    rating: 5,
    image: "/images/reviews/harshit.png",
  },
  {
    id: 3,
    name: "Amar Sandhu",
    initials: "AS",
    role: "Client",
    company: "",
    text: "It was great experience.. overall happy with all the services.thank you",
    rating: 5,
    image: "/images/reviews/amar.png",
  },
  {
    id: 4,
    name: "Paras Singh karki",
    initials: "PK",
    role: "Client",
    company: "",
    text: "Best service great experience❤️",
    rating: 5,
    image: "/images/reviews/paras.png",
  },
  {
    id: 5,
    name: "Vijay Bisht VJ",
    initials: "VB",
    role: "Local Guide",
    company: "",
    text: "Best service and good nature 😊 ...",
    rating: 5,
    image: "/images/reviews/vijay.png",
  },
  {
    id: 6,
    name: "Prabjot Kaur",
    initials: "PK",
    role: "Client",
    company: "",
    text: "Best services soacial media marketing nd website",
    rating: 5,
    image: "/images/reviews/prabjot.png",
  },
  {
    id: 7,
    name: "sagar negi",
    initials: "SN",
    role: "Client",
    company: "",
    text: "Awesome service in social media marketing",
    rating: 5,
    image: "/images/reviews/sagar.png",
  },
  {
    id: 8,
    name: "Vaibhav Bhatt",
    initials: "VB",
    role: "Client",
    company: "",
    text: "Best Service...",
    rating: 5,
    image: "/images/reviews/vaibhav.png",
  }
];

const ReviewCard = memo(({ review }: { review: typeof REVIEWS[0] }) => (
  <div className="w-[300px] md:w-[380px] flex-shrink-0 relative group py-4">
    <div className="relative h-full bg-white dark:bg-[#070b14] border border-slate-200 dark:border-white/5 p-6 md:p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:border-brand-medium/30 dark:hover:border-brand-medium/30">
      
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-1">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-brand-medium fill-brand-medium" />
          ))}
        </div>
        <Quote className="w-8 h-8 text-slate-100 dark:text-white/5 group-hover:text-brand-medium/10 transition-colors duration-300" />
      </div>

      <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-medium">
        "{review.text}"
      </p>

      <div className="flex items-center gap-4 mt-auto">
        {review.image ? (
          <img 
            src={review.image} 
            alt={review.name}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-black text-xs md:text-sm flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #3994fa, #004aad)' }}
          >
            {review.initials}
          </div>
        )}
        <div>
          <h3 className="text-foreground font-bold text-sm md:text-base">{review.name}</h3>
          {(review.role || review.company) && (
            <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
              {review.role}{review.role && review.company ? ', ' : ''}{review.company}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
));

ReviewCard.displayName = 'ReviewCard';

const Testimonials: React.FC<{ initialReviews?: any[] }> = ({ initialReviews = [] }) => {
  const hygraphReviews = initialReviews.map((r, i) => ({
    id: r.id || `hygraph-${i}`,
    name: r.authorName,
    initials: r.authorName.substring(0, 2).toUpperCase(),
    role: 'Client',
    company: r.company || '',
    text: r.quote,
    rating: 5,
    image: '',
  }));
  
  const activeReviews = hygraphReviews.length > 0 ? hygraphReviews : REVIEWS;
  
  // Create 4 copies for flawless looping
  const SCROLL_REVIEWS_1 = [...activeReviews, ...activeReviews, ...activeReviews, ...activeReviews];
  const SCROLL_REVIEWS_2 = [...activeReviews].reverse();
  const SCROLL_REVIEWS_2_FULL = [...SCROLL_REVIEWS_2, ...SCROLL_REVIEWS_2, ...SCROLL_REVIEWS_2, ...SCROLL_REVIEWS_2];

  return (
    <section className="py-12 md:py-20 relative bg-slate-50 dark:bg-[#020408] overflow-hidden transition-colors duration-300">
      
      {/* Decorative BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-medium/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-medium/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6 shadow-sm">
          <Star className="w-3.5 h-3.5 text-brand-medium fill-brand-medium" />
          <span className="text-[10px] md:text-xs font-bold text-brand-medium uppercase tracking-[0.2em]">Trusted by Industry Leaders</span>
        </div>
        
        <h2 
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tighter"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan font-semibold">Voices.</span>
        </h2>
        <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium md:text-lg">
          Don't just take our word for it. See what our partners have to say about scaling their businesses with our high-performance solutions.
        </p>
      </div>

      {/* Infinite Carousel Lanes */}
      <div className="relative w-full flex flex-col gap-6 md:gap-8 pb-10">
        {/* Edge fades for seamless in/out */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 dark:from-[#020408] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 dark:from-[#020408] to-transparent z-20 pointer-events-none" />

        {/* Lane 1 (Moving Left) */}
        <div
          className="flex gap-6 md:gap-8 animate-marquee hover:[animation-play-state:paused]"
          style={{ width: 'max-content', willChange: 'transform' }}
        >
          {SCROLL_REVIEWS_1.map((review, i) => (
            <ReviewCard key={`lane1-${review.id}-${i}`} review={review} />
          ))}
        </div>

        {/* Lane 2 (Moving Right) */}
        <div
          className="flex gap-6 md:gap-8 animate-marquee-reverse hover:[animation-play-state:paused] ml-[-200px]"
          style={{ width: 'max-content', willChange: 'transform' }}
        >
          {SCROLL_REVIEWS_2_FULL.map((review, i) => (
            <ReviewCard key={`lane2-${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
