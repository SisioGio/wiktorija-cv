import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
const previousJobs = [
      {
    role: "Sales Associate",
    company: "Luxottica Germany (Ray-Ban), Munich",
    period: "04/2024—Present",
    highlights: [
      "Achieved over €1M in sales within 4 months of store opening",
      "Provided top-tier customer service to a diverse, multilingual clientele",
      "Leveraged fluency in English, Polish, Ukrainian, and Russian to assist tourists",
      "Managed visual merchandising and product displays to drive sales",
      "Built strong customer relationships, ensuring repeat business",
    ],
  },
  
  {
    role: "Office Assistant",
    company: "HYCOM S.A, Warsaw",
    period: "09/2022—12/2023",
    highlights: [
      "Managed administrative tasks: filing, data entry, supplies",
      "Scheduled appointments, meetings, and conferences",
      "Handled incoming inquiries via phone, email, and in-person",
      "Maintained confidentiality of sensitive documents",
      "Proficient in Microsoft Office (Word, Excel, Outlook)",
    ],
  },
  {
    role: "Management Assistant",
    company: "ZAMEK BARCIANY SP.Z.O.O, Warsaw",
    period: "04/2021—07/2022",
    highlights: [
      "Supported executives with calendars, meetings, travel",
      "Conducted customer research and market analysis",
      "Organized sales events and trade shows",
      "Managed CRM software for sales tracking",
      "Responded to client inquiries ensuring satisfaction",
    ],
  },
  {
    role: "Junior Accountant",
    company: "Consulting Marek Pichola",
    period: "11/2020—03/2021",
    highlights: [
      "Managed financial document registration and compliance",
      "Reviewed documents for accuracy",
      "Assisted in budgeting and financial analysis",
      "Maintained organized records for audits",
      "Collaborated with stakeholders for financial reporting",
    ],
  },
];


export default function Experience() {
return (
    <section className="max-w-6xl mx-auto px-6 py-24 relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4 text-white">
        <Briefcase className="text-cyan-400 w-10 h-10 drop-shadow-lg" />
        Previous Roles
      </h2>

      <div className="space-y-8">
        {previousJobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            whileHover={{ scale: 1.03, rotate: 0.5 }}
            className="relative bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 shadow-lg overflow-hidden"
          >
            {/* Floating accent blobs */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-cyan-400/20 rounded-full blur-2xl animate-blob"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl animate-blob animation-delay-1500"></div>

            {/* Role & Company */}
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1 hover:text-cyan-400 transition-colors">
              {job.role}
            </h3>
            <p className="text-purple-300 font-semibold mb-4">{job.company} • {job.period}</p>

            {/* Highlights */}
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {job.highlights.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
