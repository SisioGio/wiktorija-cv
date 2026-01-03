import { motion } from "framer-motion";
import { Sparkles, MapPin, Languages } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center md:text-left"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 text-sm text-cyan-300">
            <Sparkles size={16} />
            Customer Experience • Retail • People
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Wiktorija
            </span>
            <br />
            <span className="text-gray-200 text-4xl md:text-5xl">
              Customer-Centered Retail Professional
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-xl mb-8"
          >
            Outgoing, positive, and passionate about people.
            I create memorable customer experiences through
            communication, empathy, and energy — even across cultures
            and languages.
          </motion.p>

          {/* META INFO */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start text-gray-300 mb-10">
            <div className="flex items-center gap-2">
              <MapPin className="text-cyan-400" size={18} />
              Munich → Barcelona (2026)
            </div>
            <div className="flex items-center gap-2">
              <Languages className="text-cyan-400" size={18} />
              4 Languages • Tourists Welcome
            </div>
          </div>

          {/* CTA */}
          <a
            href="mailto:w.z.holowiak@gmail.com"
            className="
              inline-block px-10 py-4 font-bold text-black
              bg-gradient-to-r from-cyan-400 to-blue-500
              rounded-3xl shadow-2xl
              transform transition-all duration-300
              hover:scale-110 hover:brightness-125
              animate-bounce-slow
            "
          >
            Let’s Work Together
          </a>
        </motion.div>

        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-70"></div>

          <img
            src="OIP.webp"
            alt="Wiktorija Holowiak"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/30 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
