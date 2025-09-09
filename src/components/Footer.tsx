import { Facebook, Linkedin, Youtube, Phone, Mail } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <footer>
      {/* Newsletter Section  */}
      <section className="py-16 bg-gray-400 sm:py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-10 px-6 sm:px-8 lg:px-24 mx-auto max-w-[90rem]">
          {/* Left side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="mb-4 text-3xl text-white uppercase sm:text-4xl lg:text-5xl font-dmserif">
              NEWSLETTER
            </h2>
            <p className="text-sm text-white sm:text-base">
              Stay updated with the latest news, articles, and resources, sent
              to your inbox weekly.
            </p>
          </div>

          {/* Right side */}
          {/* <form className="flex flex-col flex-1 w-full max-w-md gap-4">
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
          </form> */}

          <NewsletterForm />
        </div>
      </section>

      {/* Social & Info Section */}
      <section className="pt-12 sm:pt-16 bg-slate-100">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-10 px-6 sm:px-8 lg:px-24">
          {/* Left side */}
          <div className="flex-1 text-left md:text-left">
            <h2 className="text-2xl font-light leading-tight uppercase sm:text-3xl lg:text-3xl font-dmserif text-stone-600">
              Trusted Sourcing Partner
            </h2>
            <p className="max-w-lg mt-4 text-sm sm:text-base text-stone-700">
              We connect you with reliable, low-cost suppliers. Our solutions
              optimize your supply chain and create real value for your
              business.
            </p>
            <div className="flex flex-col gap-2 mt-6 text-sm sm:text-base text-stone-700">
              <div className="flex items-center justify-start gap-2 md:justify-start">
                <Phone className="w-5 h-5 text-stone-600" />
                <span>+880 1678 705061</span>
              </div>
              <div className="flex items-center justify-start gap-2 md:justify-start">
                <Mail className="w-5 h-5 text-stone-600" />
                <span>mizan@icepeakbd.com</span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4 mt-6 md:justify-start">
              <Facebook className="w-6 h-6 text-stone-600 hover:text-stone-800" />
              <Linkedin className="w-6 h-6 text-stone-600 hover:text-stone-800" />
              <Youtube className="w-6 h-6 text-stone-600 hover:text-stone-800" />
            </div>
          </div>

          {/* Right side */}
          <div className="grid flex-1 grid-cols-2 gap-6 text-left md:grid-cols-3 md:text-left">
            {/* Column 1: Company */}
            <div className="flex flex-col gap-2">
              <h3 className="font-serif uppercase text-stone-800">Company</h3>
              <a href="/" className="text-stone-600 hover:text-stone-800">
                Home
              </a>
              <a href="/#about" className="text-stone-600 hover:text-stone-800">
                About
              </a>

              <a
                href="/#management"
                className="text-stone-600 hover:text-stone-800"
              >
                Management
              </a>

              <a
                href="/#clients"
                className="text-stone-600 hover:text-stone-800"
              >
                Our Clients
              </a>

              <a
                href="/#contact"
                className="text-stone-600 hover:text-stone-800"
              >
                Contact
              </a>
              {/* <a href="#" className="text-stone-600 hover:text-stone-800">
                Showroom
              </a> */}
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-2">
              <h3 className="font-serif uppercase text-stone-800">
                Quick Links
              </h3>
              <a
                href="/service"
                className="text-stone-600 hover:text-stone-800"
              >
                Services
              </a>
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Ethics
              </a>

              <a href="/blogs" className="text-stone-600 hover:text-stone-800">
                Blogs
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
            <div className="flex flex-col gap-2">
              <h3 className="font-serif uppercase text-stone-800">Legal</h3>
              <a
                href="/privacy"
                className="text-stone-600 hover:text-stone-800"
              >
                Privacy Policy
              </a>
              <a
                href="/service"
                className="text-stone-600 hover:text-stone-800"
              >
                Terms Of Service
              </a>
              {/* 
              <a href="#" className="text-stone-600 hover:text-stone-800">
                Email
              </a> */}
              {/* <a href="#" className="text-stone-600 hover:text-stone-800">
                Usage
              </a> */}
              {/* <a href="#" className="text-stone-600 hover:text-stone-800">
                LinkedIn Policies
              </a> */}
              {/* <a href="#" className="text-stone-600 hover:text-stone-800">
                Copyright
              </a> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-center gap-3 pt-6 pb-6 mt-12 text-center border-t border-stone-200">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Icepeak Design Limited. All rights
            reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
