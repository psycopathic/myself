const SKILLS = [
  { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'] },
  { category: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
  { category: 'Tools', skills: ['Git', 'Docker', 'Vercel', 'VS Code', 'Postman'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          My <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">Skills</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-linear-to-br from-slate-700/50 to-slate-800/50 rounded-lg p-8 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30 hover:bg-blue-500/30 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
