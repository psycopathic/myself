const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with payment integration and admin dashboard',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Task Management App',
    description: 'Real-time collaborative task management with WebSocket support',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather application with real-time data and forecasts',
    tech: ['React', 'API Integration', 'Charts.js', 'Tailwind CSS'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bg-linear-to-br from-slate-700/50 to-slate-800/50 rounded-lg overflow-hidden border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/10 hover:transform hover:scale-105"
            >
              <div className="h-40 bg-linear-to-br from-blue-500/20 to-cyan-500/20 border-b border-slate-600/50"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
