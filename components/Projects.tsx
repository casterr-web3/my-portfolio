
'use client';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center mr-4">
              <i className="ri-tools-line text-3xl text-yellow-600"></i>
            </div>
            <h3 className="text-2xl font-semibold text-yellow-800">Work in Progress</h3>
          </div>
          <p className="text-yellow-700 text-lg max-w-3xl mx-auto mb-8">
            I'm currently working on several exciting projects that showcase my skills in data analytics, 
            web development, and machine learning. This section will be updated soon with detailed project descriptions, 
            live demos, and source code links.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://github.com/casterr-web3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-github-fill text-lg"></i>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
