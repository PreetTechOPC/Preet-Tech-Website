import React, { memo } from 'react';
import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Chen",
    initials: "SC",
    role: "CTO",
    company: "Nebula Enterprise",
    text: "Preet Tech OPC Private Limited is one of the few partners who actually delivers on the promise of high-performance engineering. Their strategic approach to our legacy migration was flawless.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Thorne",
    initials: "MT",
    role: "Head of Growth",
    company: "Solaris Tech",
    text: "The measurable ROI increase we saw after implementing Preet Tech OPC Private Limited's performance engine was unprecedented. A truly professional team with deep technical expertise.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rossi",
    initials: "ER",
    role: "Managing Director",
    company: "Zenith Global",
    text: "Beyond just coding, they understand business objectives. Our global infrastructure is now more secure and scalable than ever before. Simply outstanding work.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    initials: "DK",
    role: "VP of Product",
    company: "Vortex Systems",
    text: "Their ability to translate complex requirements into intuitive user experiences is unmatched. The new platform has transformed our customer engagement metrics.",
    rating: 5,
  }
];

// Duplicate once for seamless loop — 8 cards total
const SCROLL_REVIEWS = [...REVIEWS, ...REVIEWS];

const ReviewCard = memo(({ review }: { review: typeof REVIEWS[0] }) => (
  <div className="w-[400px] flex-shrink-0 relative group">
    <div className="relative h-full bg-white dark:bg-[#0b0f1a] border border-slate-200 dark:border-white/5 p-8 rounded-[2rem] transition-transform duration-300 group-hover:-translate-y-1 shadow-lg dark:shadow-none">
      <Quote className="w-10 h-10 text-brand-medium/20 absolute top-6 right-6" />

      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        ))}
      </div>

      <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-7 font-medium italic">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 mt-auto">
        {/* Avatar — pure CSS, no img tag needed since all images are null */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #3994fa, #004aad)' }}
        >
          {review.initials}
        </div>
        <div>
          <h4 className="text-foreground font-bold text-sm">{review.name}</h4>
          <p className="text-[10px] text-brand-medium font-mono uppercase tracking-wider">
            {review.role}, {review.company}
          </p>
        </div>
      </div>
    </div>
  </div>
));

ReviewCard.displayName = 'ReviewCard';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative bg-background overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-deep/10 via-background to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-8">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-mono text-slate-600 dark:text-slate-300 tracking-wider">TRUSTED BY INDUSTRY LEADERS</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-6">
          Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan">Voices.</span>
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative w-full pb-20">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        {/* Single CSS-animated row — no JS, no React re-renders */}
        <div
          className="flex gap-8 animate-marquee-reverse hover:[animation-play-state:paused]"
          style={{ width: 'max-content', willChange: 'transform' }}
        >
          {SCROLL_REVIEWS.map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
