import { Facebook, Linkedin, Youtube, Phone, Mail } from "lucide-react";
// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      {/* Newsletter Section  */}
      <section className="bg-gray-400 py-28">
        <div className="flex flex-col items-center justify-between gap-10 px-6 mx-auto max-w-[90rem] md:flex-row">
          {/* Left side */}
          <div className="flex-1">
            <h2 className="mb-4 text-6xl text-white uppercase font-dmserif">
              NEWSLETTER
            </h2>
            <p className="text-white">
              Stay updated with the latest news, articles, and resources, sent
              to your inbox weekly.
            </p>
          </div>

          {/* Right side */}
          <form className="flex flex-col flex-1 gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-gray-800 rounded-sm focus:outline-none"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-auto px-6 py-3 font-semibold text-white transition rounded-sm shadow bg-slate-500 hover:bg-slate-400"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Social  */}

      <section className="pt-16">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between gap-10">
          {/* Left side */}
          <div className="flex-1">
            <h2 className="text-4xl font-light leading-tight uppercase font-dmserif text-stone-600">
              Trusted Sourcing Partner
            </h2>
            <p className="max-w-xl mt-4 text-sm text-stone-700 md:text-base">
              We connect you with reliable, low-cost suppliers. Our solutions
              optimize your supply chain and create real value for your
              business.
            </p>
            <div className="flex flex-col gap-2 mt-8 text-sm text-stone-700 md:text-base">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-stone-600" />
                <span>+1 (234) 567-8901</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-stone-600" />
                <span>contact@yourcompany.com</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <Facebook className="w-6 h-6 text-stone-600 hover:text-stone-800" />
              <Linkedin className="w-6 h-6 text-stone-600 hover:text-stone-800" />
              <Youtube className="w-6 h-6 text-stone-600 hover:text-stone-800" />
            </div>
          </div>

          {/* Right side */}
          <div className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-3">
            {/* Column 1: Company */}
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-lg uppercase text-stone-800">
                Company
              </h3>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Home
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                About
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Our Clients
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                News
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Contact
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Showroom
              </a>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-2">
              <h3 className="font-serif uppercase text-stone-800">
                Quick Links
              </h3>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Services
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Ethics
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Terms of Use
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                LinkedIn
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Facebook
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Youtube
              </a>
            </div>

            {/* Column 3: Legal */}
            <div className="flex flex-col gap-2 ">
              <h3 className="font-serif uppercase text-stone-800">Legal</h3>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Privacy
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Email
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Usage
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                LinkedIn Policies
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Copyright
              </a>
            </div>
          </div>
        </div>

    <div className="flex flex-col items-center justify-center gap-6 pt-6 pb-6 mt-12 text-center border-t border-stone-200">
  {/* Copyright */}
  <p className="text-sm text-stone-500">
    © {new Date().getFullYear()} Icepeak Design Limited. All rights reserved.
  </p>
</div>

      </section>
    </footer>
  );
};

export default Footer;
