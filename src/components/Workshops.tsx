import { Wrench } from "lucide-react"
import { motion } from "framer-motion"

export function Workshops() {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 mb-3">
            Workshops
          </h2>
          <p className="text-gray-400 text-sm tracking-widest uppercase">
            Hands-on Learning Sessions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/[0.04] backdrop-blur-md border border-blue-500/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-500/10 rounded-full">
              <Wrench className="w-12 h-12 text-blue-400" />
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-orbitron text-white mb-4">Coming Soon</h3>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            Workshop titles, schedules, descriptions and registration details will be
            announced soon. Stay tuned for exciting hands-on sessions in aerospace and technology.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
