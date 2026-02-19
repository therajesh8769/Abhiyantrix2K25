import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { Icon: Instagram, url: "https://www.instagram.com/aes_iiestshibpur" },
    { Icon: Facebook, url: "https://www.facebook.com/AES.IIESTShibpur" },
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-blue-900/20 to-black text-white py-10 sm:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Main Grid — stacks on mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 mb-8">

          {/* ── Left Column: Logo + About + Secretary ── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/images/abh2.png"
              alt="Abhiyantrix Logo"
              className="h-14 sm:h-16 w-auto mb-3"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-5">
              Join us for the most innovative technical festival that pushes the boundaries of technology and creativity.
            </p>

            {/* Secretary */}
            <div className="mb-4 w-full max-w-sm">
              <h6 className="font-orbitron text-sm text-blue-400 font-semibold mb-1.5">
                Secretary
              </h6>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Navonil Chatterjee: +91 7364897566</span>
              </div>
            </div>

            {/* Assistant Secretary */}
            <div className="w-full max-w-sm">
              <h6 className="font-orbitron text-sm text-blue-400 font-semibold mb-1.5">
                Assistant Secretary
              </h6>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Shlok Vyas: +91 7779017229</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Main Coordinators + Contact ── */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="font-orbitron text-lg sm:text-xl mb-4 text-blue-400 font-semibold tracking-wide">
              Main Coordinators
            </h4>

            <ul className="space-y-3 w-full max-w-sm">
              <li className="flex items-center gap-2 justify-center md:justify-end group hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
                <span className="text-gray-400 text-sm group-hover:text-blue-400">
                  Sandeep Sankuru: +91 9062906676
                </span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-end group hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
                <span className="text-gray-400 text-sm group-hover:text-blue-400">
                  Mehul Mehta: +91 7973924794
                </span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-end group hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
                <span className="text-gray-400 text-sm group-hover:text-blue-400 break-all">
                  abhiyantrix.aes.iiest@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-end group hover:text-blue-400 transition-colors">
                <MapPin className="w-4 h-4 text-blue-400 group-hover:text-blue-300 flex-shrink-0" />
                <span className="text-gray-400 text-sm group-hover:text-blue-400">
                  1st floor, 2nd lobby, Main Building, IIEST Shibpur
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar: Socials + Copyright ── */}
        <div className="pt-6 border-t border-blue-500/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2.5 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors"
                >
                  <Icon className="w-5 h-5 text-blue-400 hover:text-blue-300" />
                </a>
              ))}
            </div>

            {/* Copyright + Maintained by */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
              <p className="text-gray-500 text-xs">
                © All rights reserved by Abhiyantrix 2026
              </p>
              <a
                href="https://www.linkedin.com/in/jit-malakar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 text-xs transition-colors"
              >
                Maintained by Jit Malakar
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}