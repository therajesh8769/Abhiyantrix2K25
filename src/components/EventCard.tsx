import type React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy, ExternalLink, ChevronRight } from "lucide-react";

interface Event {
    id: string;
    icon: React.ReactNode;
    title: string;
    tagline: string;
    date: string;
    time: string;
    venue: string;
    prize: string;
    image: string;
    description: string;
    registrationLink: string;
}

interface EventCardProps {
    event: Event;
    index: number;
    onViewDetails: () => void;
}

// Derive a category from the event icon/title for the badge
function getCategory(title: string): string {
    const lower = title.toLowerCase();
    if (lower.includes("cad") || lower.includes("robo") || lower.includes("line") || lower.includes("flying")) return "Engineering";
    if (lower.includes("code") || lower.includes("bug") || lower.includes("tech")) return "Coding";
    if (lower.includes("quiz") || lower.includes("odyssey")) return "Quiz";
    if (lower.includes("debate") || lower.includes("talk")) return "Speaking";
    if (lower.includes("meme")) return "Fun";
    return "Event";
}

export const EventCard: React.FC<EventCardProps> = ({ event, index, onViewDetails }) => {
    const category = getCategory(event.title);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ scale: 1.02 }}
            className="group relative flex flex-col sm:flex-row gap-0 overflow-hidden rounded-2xl
                 bg-white/[0.04] backdrop-blur-md
                 border border-blue-500/20 hover:border-blue-400/60
                 shadow-lg hover:shadow-blue-500/20 hover:shadow-2xl
                 transition-all duration-300 cursor-pointer"
        >
            {/* Neon glow border effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 30px rgba(59,130,246,0.08), 0 0 40px rgba(59,130,246,0.06)" }} />

            {/* LEFT: Image + Badge */}
            <div className="relative w-full sm:w-48 md:w-56 h-52 sm:h-auto flex-shrink-0 overflow-hidden bg-black/40">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

                {/* Icon circle */}
                <div className="absolute top-3 left-3 p-2.5 bg-blue-500/20 backdrop-blur-md rounded-xl border border-blue-400/30 text-blue-400">
                    {event.icon}
                </div>

                {/* Category badge */}
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-[11px] font-bold uppercase tracking-widest text-white">
                    {category}
                </div>
            </div>

            {/* RIGHT: Content */}
            <div className="flex-1 p-5 md:p-6 flex flex-col justify-between min-w-0">
                {/* Top section */}
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-orbitron tracking-wide mb-1 truncate">
                        {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm italic mb-4 line-clamp-1">
                        {event.tagline}
                    </p>

                    {/* Info row */}
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-300 mb-4">
                        <span className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-blue-400" />
                            {event.date.split(",")[0]}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-blue-400" />
                            {event.venue}
                        </span>
                    </div>

                    {/* Prize - animated gradient */}
                    <div className="flex items-center gap-2 mb-4">
                        <Trophy size={16} className="text-yellow-400 flex-shrink-0" />
                        <span className="text-sm font-bold bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
                            {event.prize}
                        </span>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-3 mt-auto pt-2">
                    <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-semibold rounded-lg transition-all shadow-md shadow-blue-500/20 hover:shadow-blue-500/40"
                    >
                        <ExternalLink size={14} />
                        Register
                    </a>
                    <button
                        onClick={(e) => { e.stopPropagation(); onViewDetails(); }}
                        className="inline-flex items-center gap-1 px-4 py-2 text-sm text-blue-400 hover:text-white border border-blue-500/30 hover:border-blue-400/60 rounded-lg transition-all hover:bg-white/5"
                    >
                        View Details
                        <ChevronRight size={14} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};
