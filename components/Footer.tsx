
'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Joshua C. Evasco</h3>
            <p className="text-gray-400 mb-4">
              Computer Science Graduate passionate about data analytics and full-stack development.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:evascojcerilo@gmail.com" 
                className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <i className="ri-mail-line text-sm"></i>
              </a>
              <a 
                href="https://github.com/casterr-web3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <i className="ri-github-fill text-sm"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/joshua-evasco-716ba635b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill text-sm"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('skills');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>evascojcerilo@gmail.com</p>
              <p>0939 226 3197</p>
              <p>Cainta, Rizal 1900</p>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
