import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-32 relative max-w-4xl mx-auto px-6 text-center">
      {/* Floating blobs */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-24 -right-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-12 shadow-lg"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 hover:text-cyan-400 transition-colors">
          Ready for the next challenge
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Open to customer service & retail leadership opportunities.  
          Fluent in 4 languages and experienced in creating top-tier customer experiences.
        </p>
        <a
          href="mailto:w.z.holowiak@gmail.com"
          className="inline-block px-8 py-4 bg-cyan-400 text-black font-bold rounded-2xl shadow-lg hover:bg-cyan-500 hover:scale-105 transition-transform"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
