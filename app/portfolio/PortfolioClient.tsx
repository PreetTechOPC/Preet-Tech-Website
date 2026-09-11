"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Search, Home, Utensils, ShoppingBag, BarChart3, Plane, Leaf, Code2, PenTool, Stethoscope, Settings } from "lucide-react";
import { PORTFOLIO_DATA, PORTFOLIO_CATEGORIES } from "@/lib/portfolio-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ThreeSphereScene = dynamic(() => import('@/components/ThreeSphere'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-background" />
});

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PORTFOLIO_DATA.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.categories.includes(activeCategory);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Home": return <Home className={className} />;
      case "Utensils": return <Utensils className={className} />;
      case "ShoppingBag": return <ShoppingBag className={className} />;
      case "BarChart3": return <BarChart3 className={className} />;
      case "Plane": return <Plane className={className} />;
      case "Leaf": return <Leaf className={className} />;
      case "PenTool": return <PenTool className={className} />;
      case "Stethoscope": return <Stethoscope className={className} />;
      case "Settings": return <Settings className={className} />;
      default: return <Code2 className={className} />;
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0b101b] font-sans overflow-x-hidden pt-24 md:pt-32">
      <Navbar />
      


      {/* Portfolio Grid Section */}
      <section className="bg-white dark:bg-[#0b101b] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase mb-3 block">OUR PROJECTS</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">Explore More Projects</h2>
              <p className="text-slate-500 dark:text-slate-400 text-base">A collection of digital products we've designed, developed and delivered for amazing clients.</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 border ${
                  activeCategory === category 
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20" 
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredProjects.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="wait">
              {filteredProjects.map((project) => {
                const isExternal = !!project.externalLink;
                const CardWrapper = isExternal ? 'a' : 'div';
                const wrapperProps = isExternal 
                  ? { href: project.externalLink, target: "_blank", rel: "noopener noreferrer" } 
                  : {};

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <CardWrapper 
                      {...wrapperProps}
                      className="bg-white dark:bg-[#0b101b] rounded-2xl p-4 border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer block"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-8 bg-slate-100 dark:bg-slate-900">
                        <Image 
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-grow">
                        <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 flex items-center gap-1.5">
                          {project.title}
                          {isExternal && <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
                        </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed mb-6 flex-grow line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map(tech => (
                          <span key={tech} className="bg-blue-50/50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-blue-800/30 text-[11px] font-medium px-2.5 py-1 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardWrapper>
                  </motion.div>
                );
              })}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No projects found</h3>
              <p className="text-slate-500 text-sm">We couldn't find any projects matching your search criteria.</p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="mt-6 text-blue-600 font-bold text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
