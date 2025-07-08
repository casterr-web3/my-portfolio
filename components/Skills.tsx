
'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "ri-code-s-slash-line",
      skills: [
        { name: "HTML5/CSS3", level: 80 },
        { name: "React", level: 70 },
        { name: "Vue.js", level: 50 },
        { name: "TypeScript", level: 50 }
      ]
    },
    {
      title: "Backend",
      icon: "ri-server-line",
      skills: [
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 70 },
        { name: "MongoDB", level: 50 },
        { name: "Node.js", level: 50 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "ri-tools-line",
      skills: [
        { name: "Canva", level: 90 },
        { name: "Figma", level: 85 },
        { name: "PowerBI/Excel", level: 85 },
        { name: "Git/GitHub", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center mr-3">
                  <i className={`${category.icon} text-2xl text-gray-700`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-black h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}