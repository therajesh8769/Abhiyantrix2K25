import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "What is Abhiyantrix?",
    answer:
      "Abhiyantrix is Kolkata's Largest Space Technology Fest, organized by the Aerospace Engineering Society (AES) of IIEST Shibpur. The 2027 edition marks the 5th year of this flagship technical festival.",
  },
  {
    question: "When and where will Abhiyantrix 2027 take place?",
    answer:
      "The dates and detailed venue for Abhiyantrix 2027 will be announced soon. It will be held at IIEST Shibpur, Howrah, West Bengal. Stay tuned to our social media for updates.",
  },
  {
    question: "How can I register for events?",
    answer:
      "Registration details will be announced once event specifics are finalized. Keep an eye on our website and social media channels for registration links and deadlines.",
  },
  {
    question: "Who can participate in Abhiyantrix?",
    answer:
      "Abhiyantrix is open to students from all colleges and universities across India. Some events may have specific eligibility criteria which will be mentioned in the event details.",
  },
  {
    question: "Will there be workshops?",
    answer:
      "Yes! Abhiyantrix 2027 will feature hands-on workshops related to aerospace and technology. Workshop titles, schedules and registration details will be announced soon.",
  },
  {
    question: "How can I contact the organizers?",
    answer:
      "You can reach us at abhiyantrix.aes.iiest@gmail.com or through our Instagram and Facebook pages. Contact numbers will be shared once available.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.08),transparent_60%)]" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 mb-3">
            FAQ
          </h2>
          <p className="text-gray-400 text-sm tracking-widest uppercase">
            Frequently Asked Questions
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 bg-white/[0.04] backdrop-blur-md border border-blue-500/20 hover:border-blue-400/40 rounded-xl text-left transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-white text-sm md:text-base font-medium">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 py-4 text-gray-400 text-sm leading-relaxed pl-13">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
