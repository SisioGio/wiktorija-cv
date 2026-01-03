import { motion } from "framer-motion";
import {
  Headphones,
  Star,
  Users,
  Users2,
  ClipboardCheck,
  Eye,
} from "lucide-react";

const skills = [
  { icon: Headphones, label: "Communication", color: "text-cyan-400" },
  { icon: Star, label: "Sales Quality", color: "text-pink-400" },
  { icon: Users, label: "People Skills", color: "text-yellow-300" },
  { icon: Users2, label: "Team Player", color: "text-purple-400" },
  { icon: ClipboardCheck, label: "Trainer", color: "text-green-400" },
  { icon: Eye, label: "Visual Merchandising", color: "text-indigo-400" },
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
        Core Strengths
      </h2>

      {/* Floating background blobs */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-24 -right-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map(({ icon: Icon, label, color }, i) => (
          <motion.div
            key={label}
            className="relative bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 text-center shadow-lg overflow-hidden hover:scale-105 hover:rotate-1 transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            whileHover={{ scale: 1.07, rotate: 1 }}
          >
            {/* Mini floating blobs */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-400/30 rounded-full blur-2xl animate-blob"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-pink-400/30 rounded-full blur-2xl animate-blob animation-delay-1500"></div>

            {/* Icon */}
            <Icon
              className={`mx-auto mb-4 w-16 h-16 stroke-[3px] drop-shadow-lg ${color} group-hover:scale-110 transition-transform`}
            />

            <p className="font-semibold text-white">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
