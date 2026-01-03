// Stats.js
import { Users, Store, Star, MessageCircle, Trophy, Heart, Book } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, label: "Customer Focus", value: "100%", color: "text-cyan-400" },
  { icon: Store, label: "Retail Mindset", value: "Proven", color: "text-purple-400" },
  { icon: Star, label: "Service Quality", value: "Top Tier", color: "text-pink-400" },
  { icon: MessageCircle, label: "Communication Skills", value: "Excellent", color: "text-yellow-300" },
  { icon: Trophy, label: "Sales Achievements", value: "€1M+", color: "text-green-400" },
  { icon: Heart, label: "Client Satisfaction", value: "5/5", color: "text-red-400" },
  { icon: Book, label: "Training & Mentoring", value: "Experienced", color: "text-indigo-400" },
];

export default function Stats() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 -mt-24 z-20">
      
      {/* Floating Background Blobs */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-24 -right-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {stats.map(({ icon: Icon, label, value, color }, i) => (
          <motion.div
            key={label}
            className="relative bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 text-center shadow-lg overflow-hidden hover:scale-105 hover:rotate-1 transition-transform"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.8, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.07, rotate: 1 }}
          >
            {/* Mini floating blobs inside card */}
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-cyan-400/30 rounded-full blur-2xl animate-blob"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-400/30 rounded-full blur-2xl animate-blob animation-delay-1500"></div>

            {/* Gradient Icon */}
            <Icon className={`mx-auto mb-4 w-16 h-16 stroke-[3px] ${color} drop-shadow-lg animate-pulse`} />

            {/* Animated Value */}
            <motion.h3
              className="text-3xl md:text-4xl font-extrabold text-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.3, type: "spring", stiffness: 120 }}
            >
              {value}
            </motion.h3>

            <p className="text-gray-300 mt-2 text-lg">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
