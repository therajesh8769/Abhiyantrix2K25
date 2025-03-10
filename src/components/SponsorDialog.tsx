
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Rocket, Star, X, Zap } from 'lucide-react';

interface SponsorDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="text-center space-y-6 mb-8"
  >
    <h2 className="text-3xl font-bold text-blue-400">
      {title}
    </h2>
    {children}
  </motion.section>
);

const SponsorPlanet = ({ name, amount, icon, color, orbit, duration }: {
  name: string;
  amount: string;
  icon: React.ReactNode;
  color: string;
  orbit: number;
  duration: number;
}) => (
  <motion.div
    className="absolute"
    animate={{
      rotate: 360
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "linear"
    }}
    style={{
      width: orbit * 2,
      height: orbit * 2,
      left: '50%',
      top: '50%',
      marginLeft: -orbit,
      marginTop: -orbit,
    }}
  >
    <motion.div
      className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 ${color} rounded-full flex flex-col items-center justify-center text-white text-xs font-bold p-2 cursor-pointer shadow-lg`}
      whileHover={{ scale: 1.2 }}
    >
      {icon}
      <span className="mt-1">{name}</span>
      <span>{amount}</span>
    </motion.div>
  </motion.div>
);

export function SponsorDialog({ isOpen, onClose }: SponsorDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div className="fixed inset-0">
            <div className="absolute  inset-0 " />
          </div>

          {/* Dialog Content */}
          <div className="fixed inset-0 overflow-y-auto top-20 bottom-20 ">
            <div className="flex min-h-full items-center justify-center p-4  ">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl rounded-lg bg-gray-900 shadow-2xl"
              >
                {/* Close Button */}
                <div className="absolute right-4 top-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <span className="sr-only">Close</span>
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6   bg-opacity-70 bg-gradient-to-b from-black  via-blue-900/20 to-black text-white  border border-gray-700 rounded-2xl">
                  <h3 className=" font-orbitron text-4xl font-bold text-blue-400 text-center mb-8">
                    Sponsor ABHIYANTRIX
                  </h3>

                  <Section title="About ABHIYANTRIX">
                    <p className="text-base text-gray-300 leading-relaxed">
                      ABHIYANTRIX is an annual technical event by the Society of AES at IIEST,
                      Shibpur, aimed at bridging industry and students. This cosmic gathering of minds brings together
                      experts from diverse sectors, offering students a journey through the galaxy of practical knowledge
                      and real-world engineering applications.
                    </p>
                  </Section>

                  <Section title="About Our College">
                    <div className="relative rounded-2xl p-6 opacity-90 border border-gray-700">
                      <h3 className="text-xl font-orbitron font-bold mb-4 text-blue-400">
                        IIEST Shibpur: A Cosmic Hub of Innovation
                      </h3>
                      <p className="text-gray-300 mb-4 ">
                        IIEST Shibpur, formerly known as BESU, is a premier institute that has been at the forefront of
                        technological education and research for over 160 years. Like a bright star in the educational
                        cosmos, it continues to guide and nurture the brightest minds in engineering and science.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-blue-900 bg-opacity-50 p-3 rounded-lg">
                          <Sparkles className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                          <p className="font-bold text-sm text-gray-200">160+ Years of Excellence</p>
                        </div>
                        <div className="bg-purple-900 bg-opacity-50 p-3 rounded-lg">
                          <Rocket className="w-6 h-6 mx-auto mb-2 text-red-400" />
                          <p className="font-bold text-sm text-gray-200">Cutting-edge Research</p>
                        </div>
                      </div>
                    </div>
                  </Section>

                  <Section title="Sponsor Categories">
                    <p className="text-base text-center text-gray-300 mb-6">
                      Embark on a sponsorship journey across the ABHIYANTRIX galaxy. Choose your cosmic role and leave your mark on this stellar event!
                    </p>
                    <div className="relative h-[300px]">
                      {/* Orbital Rings */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full max-w-xs aspect-square">
                          <div className="absolute inset-0 rounded-full border border-pink-700" />
                          <div className="absolute inset-[20px] rounded-full border border-green-700" />
                          <div className="absolute inset-[40px] rounded-full border border-yellow-700" />
                        </div>
                      </div>


                      {/* Center Star */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Star className="w-8 h-8 text-yellow-200" />
                      </div>

                      {/* Orbiting Planets */}
                      <SponsorPlanet
                        name="Title Sponsor"
                        amount="175K"
                        icon={<Star className="w-8 h-8 " />}
                        color="bg-purple-800"
                        orbit={160}
                        duration={20}
                      />
                      <SponsorPlanet
                        name="Event"
                        amount="150K"
                        icon={<Zap className="w-8 h-8" />}
                        color="bg-blue-500"
                        orbit={120}
                        duration={15}
                      />
                      <SponsorPlanet
                        name="Co-Sponsor"
                        amount="125K"
                        icon={<Rocket className="w-8 h-8" />}
                        color="bg-green-500"
                        orbit={80}
                        duration={10}
                      />
                    </div>
                  </Section>
                </div>

                {/* Footer */}
                <div className="bg-black px-6 py-4 flex items-center justify-between rounded-b-lg">
  {/* Contact Information */}
  <div className="text-gray-300 text-sm space-y-1">
    <p>
      <p><span className='text-blue-400'>contact:</span></p>
      <span className="font-medium">Sahil Nikam:</span> +91 7498605149
    </p>
    <p>
      <span className="font-medium">Rohan Das:</span> +91 6290759839
    </p>
  </div>

  {/* Close Button */}
  <button
    type="button"
    onClick={onClose}
    className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md
               hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
               transition-colors duration-200 shadow-md"
  >
    Close
  </button>
</div>

              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}