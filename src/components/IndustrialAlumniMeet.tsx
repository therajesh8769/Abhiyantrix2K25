import { Building2, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

export function IndustrialAlumniMeet() {
  const sections = [
    {
      icon: <Building2 className="w-10 h-10 text-blue-400" />,
      title: "Industrial Meet",
      description: "Connect with industry leaders and explore career opportunities in aerospace and technology. Details coming soon.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-cyan-400" />,
      title: "Alumni Meet",
      description: "Reconnect with alumni from the Department of Aerospace Engineering and Applied Mechanics. Details coming soon.",
    },
  ]

  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,100,220,0.08),transparent_60%)]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 mb-3">
            Industrial &amp; Alumni Meet
          </h2>
          <p className="text-gray-400 text-sm tracking-widest uppercase">
            Networking &amp; Opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative bg-white/[0.04] backdrop-blur-md border border-blue-500/20 hover:border-blue-400/40 rounded-2xl p-8 text-center transition-all duration-300 group"
            >
              <div className="flex justify-center mb-5">
                <div className="p-3 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  {section.icon}
                </div>
              </div>
              <h3 className="text-xl font-orbitron text-white mb-3">{section.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{section.description}</p>
              <div className="mt-5">
                <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                  Coming Soon
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
