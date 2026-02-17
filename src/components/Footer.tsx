import { useState } from "react"
import { Instagram, Facebook, Mail, MapPin, Phone, Users } from "lucide-react"


export function Footer() {
  

  const socialLinks = [
    { Icon: Instagram, url: "https://www.instagram.com/aes_iiestshibpur" },
   
    { Icon: Facebook, url: "https://www.facebook.com/AES.IIESTShibpur" },
  ];

  return (
    <footer className="bg-gradient-to-b from-black via-blue-900/20 to-black text-white py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Flex Container */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mb-6">
          {/* Logo and About Section */}
          <div className="flex flex-col items-center md:items-start md:w-2/5">
            <img src="/images/abh2.png" alt="https://vzjmqivzndfloheg.public.blob.vercel-storage.com/AbhiyantrixLogo2-pVB6fkjLJsOcp8ybf5ZRbUOVw2VY36.png" className="h-16 w-auto " />
            <p className="text-gray-400 text-sm text-center md:text-left leading-relaxed">
              Join us for the most innovative technical festival that pushes the boundaries of technology and creativity.
            </p>
            <ul className="">
            <h6 className="font-orbitron text-md  text-blue-400 font-semibold ">Secretary</h6>

              <li className="flex items-center space-x-3 justify-center md:justify-end group hover:text-blue-400 transition-colors mb-4">
               


                <p className="text-gray-400 group-hover:text-blue-400">Navonil Chatterjee:+91 7364897566</p>
              </li>
              </ul>
              <ul className="">
              <h6 className="font-orbitron text-md  text-blue-400 font-semibold tracking-wide">Assistant Secretary</h6>
              <li className="flex items-center space-x-3 justify-center md:justify-end group hover:text-blue-400 transition-colors">
                


                <p className="text-gray-400 group-hover:text-blue-400">Shlok Vyas :+91 7779017229</p>
              </li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right md:w-2/5">
            <h4 className="font-orbitron text-xl mb-4 text-blue-400 font-semibold tracking-wide">Main Coordinators</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 justify-center md:justify-end group hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                <span className="text-gray-400 group-hover:text-blue-400">Sandeep Sankuru:+91 9062906676</span>
              </li>
              <li className="flex items-center space-x-3 justify-center md:justify-end group hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                <span className="text-gray-400 group-hover:text-blue-400">Mehul Mehta:+91 7973924794</span>
              </li>
              
              <li>
              <p className="text-gray-400 group-hover:text-blue-400">Email: abhiyantrix.aes.iiest@gmail.com</p>
              </li>
              <li className="flex items-center space-x-3 justify-center md:justify-end group hover:text-blue-400 transition-colors">
                <MapPin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                <span className="text-gray-400 group-hover:text-blue-400">1st floor,2nd lobby,main building,IIEST Shibpur </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links, Teams Button & Copyright */}
        <div className="mt-6 pt-6 border-t border-blue-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition"
                >
                  <Icon className="w-5 h-5 text-blue-400 hover:text-blue-300" />
                </a>
              ))}
            </div>

            

            {/* Copyright */}
            <p className="text-gray-400 text-xs">© All rights reserved by Abhiyantrix 2026</p>
            
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-500/10 text-gray-300 text-xs rounded-full hover:bg-blue-800/20 transition"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://www.linkedin.com/in/jit-malakar/', '_blank', 'noopener,noreferrer');
                
              }}
            >
              Maintained by
            </a>
            
          </div>
        </div>
      </div>

   
    </footer>
  );
}