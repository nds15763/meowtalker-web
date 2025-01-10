import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-12">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-pink-600 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-pink-600 transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <Link 
                href="https://twitter.com/meowtalker" 
                target="_blank"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                X/Twitter
              </Link>
            </div>
          </div>

          {/* About Me */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">About Me</h3>
            <p className="text-sm leading-relaxed">
              Hi, I'm Kim, the creator of MeowTalker! As a cat lover and tech enthusiast, 
              I built this app to help people connect with their feline friends on a deeper level. 
              Let's explore the world of cats together!
            </p>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-sm hover:text-pink-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-pink-600 transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="text-sm">
              {new Date().getFullYear()} MeowTalker. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
