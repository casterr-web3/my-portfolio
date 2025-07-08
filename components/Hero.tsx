
'use client';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 px-6 min-h-screen flex items-center"
      style={{
        backgroundImage: `url('https://i.imgur.com/3G0IttR.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
            <img 
              src="https://i.imgur.com/hfmabXg.png" 
              alt="Joshua C. Evasco"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <p className="text-sm text-gray-600 mb-2">Computer Science Graduate</p>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Joshua C. Evasco
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Fresh graduate passionate about data analytics, machine learning, and full-stack development. 
          When I'm not coding, I enjoy tinkering with computer hardware and networks.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
