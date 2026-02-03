export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          About <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-700/50 rounded-lg p-8 border border-slate-600/50 hover:border-cyan-400/50 transition-colors duration-200">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Who Am I?</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a passionate Full Stack Developer with expertise in building scalable and user-friendly web applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With a strong foundation in MERN stack, I create seamless digital experiences that blend aesthetics with functionality.
            </p>
          </div>
          <div className="bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-8 border border-cyan-400/30">
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
