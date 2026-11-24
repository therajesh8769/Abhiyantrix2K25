import { Calendar, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <article aria-label="About Abhiyantrix" className="relative text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.06),transparent_50%)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 mb-3">
            About Abhiyantrix
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/[0.03] backdrop-blur-md rounded-2xl p-7 md:p-10 mb-14 border border-blue-500/15 hover:border-blue-500/30 transition-colors duration-500"
        >
          <p className="leading-relaxed text-base md:text-lg text-gray-300">
            <span className="font-orbitron text-white font-semibold">ABHIYANTRIX</span>, recognised as{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Kolkata's Largest Space Technology Fest
            </span>
            , is organised by the Aerospace Engineers' Society of the Department of Aerospace Engineering
            and Applied Mechanics, Indian Institute of Engineering Science and Technology, Shibpur.
            Abhiyantrix brings together aerospace enthusiasts through competitions and challenges involving
            aeroplane design, CAD modelling and space technology.
          </p>
          <p className="mt-5 leading-relaxed text-base md:text-lg text-gray-300">
            <span className="font-orbitron text-white font-semibold">Abhiyantrix 2027</span>{" "}
            marks the{" "}
            <span className="text-cyan-400 font-semibold">5th Edition</span>{" "}
            of this aerospace festival. The fest ignites technological curiosity, providing an inclusive platform for participants
            to come together and contribute to groundbreaking innovations in Aerospace, Aircraft and Space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              icon: <Calendar className="w-8 h-8" />,
              title: "Coming Soon",
              subtitle: "Dates to be announced",
              delay: 0,
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: "IIEST Shibpur",
              subtitle: "Venue to be confirmed",
              delay: 0.1,
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "1000+ Participants",
              subtitle: "From across the nation",
              delay: 0.2,
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              className="group relative bg-white/[0.03] backdrop-blur-md rounded-xl p-6 border border-blue-500/15
                         hover:border-blue-400/35 transition-all duration-300 text-center"
            >
              <div className="text-blue-400 mb-3 flex justify-center group-hover:text-cyan-400 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-base md:text-lg font-orbitron font-semibold text-white mb-1.5">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
}
