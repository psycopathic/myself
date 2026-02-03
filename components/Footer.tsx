const SOCIAL_LINKS = [
  { name: 'GitHub', url: '#' },
  { name: 'LinkedIn', url: '#' },
  { name: 'Twitter', url: '#' },
  { name: 'Email', url: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 mb-4">
              Harsh
            </h3>
            <p className="text-gray-400">Full Stack Developer passionate about creating beautiful web experiences.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 border border-slate-700 hover:border-cyan-400/50 transition-all duration-200"
                  title={link.name}
                >
                  {link.name.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Harsh. All rights reserved. Built with <span className="text-cyan-400">Next.js</span> & <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
