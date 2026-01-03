import { motion } from "framer-motion";
import { FaCar, FaCamera, FaSmile } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4  overflow-hidden">
      

      {/* Main text */}
      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold text-white mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Wiktorija Holowiak
      </motion.h1>

      <motion.p 
  className="text-xl md:text-2xl text-gray-200 max-w-xl leading-relaxed"
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  Outgoing & <span className="text-cyan-400 font-semibold">positive</span>,  
  passionate about <span className="text-pink-400 font-semibold">connecting with people</span>.  
  Currently in <span className="text-purple-300 font-semibold">Munich</span> but moving to  
  <span className="text-yellow-300 font-semibold"> Barcelona in February 2026</span>,  
  looking for <span className="text-green-300 font-semibold">dynamic opportunities</span> in  
  <span className="text-cyan-400 font-semibold">customer service</span> and  
  <span className="text-purple-300 font-semibold">store management</span>.
</motion.p>

      <motion.div 
        className="mt-8 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {/* <a href="/WiktorijaCV.pdf" className="px-6 py-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full text-white font-semibold hover:scale-105 transition-transform">Download CV</a>
       */}
     <a
  href="mailto:w.z.holowiak@gmail.com"
  className="
    relative inline-block px-10 py-4 font-bold text-black 
    bg-gradient-to-r from-cyan-400 to-blue-500
    rounded-3xl shadow-2xl overflow-hidden
    transform transition-all duration-300 hover:scale-110 hover:brightness-125
    before:absolute before:inset-0 before:rounded-3xl before:bg-white/20 before:blur-2xl before:opacity-50 before:pointer-events-none
    after:absolute after:top-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-white/50 after:rounded-full after:opacity-0 after:transition-all after:duration-500
    hover:after:w-full hover:after:left-0 hover:after:opacity-100
    animate-bounce-slow
  "
>
  Contact Me
</a>
      
      </motion.div>
    </section>
  );
}
