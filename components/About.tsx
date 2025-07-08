
'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I am a fresh graduate of Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST) - Manila Campus, 
              where I earned my Computer Science degree with a passion for technology and innovation.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              I have earned two TESDA Certifications in Computer System Servicing NC II and Data Analytics NC III, 
              demonstrating my commitment to continuous learning and professional development.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              With data entry skills of 100+ WPM, I excel at working with data and machine learning models. 
              My interests extend beyond coding to include computer hardware configuration and network setup.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                <p className="text-sm text-gray-600">Computer Science Graduate</p>
                <p className="text-sm text-gray-600">EARIST - Manila Campus</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Certifications</h3>
                <p className="text-sm text-gray-600">Computer System Servicing NC II</p>
                <p className="text-sm text-gray-600">Data Analytics NC III</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <i className="ri-speed-line text-lg text-blue-600"></i>
                </div>
                <span className="text-gray-700">100+ WPM Data Entry</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <i className="ri-database-line text-lg text-green-600"></i>
                </div>
                <span className="text-gray-700">Data Analytics Specialist</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <i className="ri-cpu-line text-lg text-purple-600"></i>
                </div>
                <span className="text-gray-700">Hardware Enthusiast</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <i className="ri-brain-line text-lg text-orange-600"></i>
                </div>
                <span className="text-gray-700">ML Model Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}