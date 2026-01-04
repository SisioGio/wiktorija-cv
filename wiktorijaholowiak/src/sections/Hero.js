import { motion } from "framer-motion";
import { Sparkles, MapPin, Languages } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          
          {/* TEXT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left order-1"
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
              <span className="text-gray-200 text-3xl md:text-4xl">
                Customer-Centered Retail Professional
              </span>
            </h1>

             {/* PHOTO COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="block lg:hidden  relative  justify-center lg:justify-end order-2 mb-20"
          >
            <div className="absolute w-80 h-80 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-70" />
            <img
              src="OIP.webp"
              alt="Wiktorija Holowiak"
              className="mx-auto relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white/30 shadow-2xl"
            />
          </motion.div>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 mx-auto lg:mx-0">
              Outgoing, positive, and passionate about people.
              I create memorable customer experiences through
              communication, empathy, and energy — even across cultures
              and languages.
            </p>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-gray-300 mb-10">
              <div className="flex items-center gap-2">
                <MapPin className="text-cyan-400" size={18} />
                Munich → Barcelona (2026)
              </div>
              <div className="flex items-center gap-2">
                <Languages className="text-cyan-400" size={18} />
                4 Languages • Tourists Welcome
              </div>
            </div>

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

          {/* PHOTO COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block lg:flex relative flex justify-center lg:justify-end order-2 mb-56"
          >
            <div className="absolute w-80 h-80 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-70" />
            <img
              src="OIP.webp"
              alt="Wiktorija Holowiak"
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white/30 shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
