import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const languages = [
  { name: "Polish", level: "Native", color: "text-cyan-400" },
  { name: "English", level: "Fluent", color: "text-purple-400" },
  { name: "Ukrainian", level: "Native", color: "text-pink-400" },
  { name: "Russian", level: "Fluent", color: "text-yellow-300" },
];

export default function Languages() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4 text-white">
        <Globe className="text-cyan-400 w-10 h-10 drop-shadow-lg" />
        Languages
      </h2>

      <p className="text-gray-300 mb-8 max-w-3xl text-lg md:text-xl">
        Even without speaking the local language, I excel in customer service, welcoming tourists from all over. 
        Using my 4 languages, I make everyone feel at home. Germany was a great proof: I reached top 3 performance 
        in my store without knowing German.
      </p>

      {/* Floating background blobs */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-24 -right-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {languages.map((lang, i) => (
          <motion.div
            key={lang.name}
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

            {/* Language Name */}
            <p className={`text-2xl font-extrabold mb-2 ${lang.color} drop-shadow-lg`}>
              {lang.name}
            </p>
            <p className="text-gray-300">{lang.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
