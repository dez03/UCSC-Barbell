const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Section */}
          <p className="text-sm text-center md:text-left">
            © 2025 UCSC Barbell. All rights reserved. 💪
          </p>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              Developed by{" "}
              <a
                href="https://github.com/dez03"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition duration-300"
              >
                Aviel Hernandez
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/ucsc_barbell/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition duration-300"
            >
              Instagram
            </a>
            <a
              href="mailto:ucscbarbell@gmail.com"
              className="hover:text-yellow-500 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
