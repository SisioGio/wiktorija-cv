import { motion } from "framer-motion";

const certificates = [
  {
    title: "Store Manager Classes",
    subtitle: "Frontline Leadership · Cursa",
    date: "Completed: 01/02/2026",
    duration: "2h 06m",
    imgSrc: "/imgs/store-manager-certificate.jpeg",
  },
  // Add more certificates here if needed
];

export default function Certificates() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
        Certifications
      </h2>

      {/* Floating background blobs */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-24 -right-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl overflow-hidden shadow-lg"
          >
            {/* Floating accent blobs inside card */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-cyan-400/30 rounded-full blur-2xl animate-blob"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-pink-400/30 rounded-full blur-2xl animate-blob animation-delay-1500"></div>

            {/* Certificate Image */}
            <img
              src={cert.imgSrc}
              alt={cert.title}
              className="w-full h-72 object-cover"
            />

            {/* Certificate Info */}
            <div className="p-6">
              <h3 className="text-2xl font-extrabold text-white mb-1 hover:text-cyan-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-purple-300 font-semibold">{cert.subtitle}</p>
              <p className="mt-4 text-sm text-gray-300">
                {cert.date} · Duration: {cert.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
