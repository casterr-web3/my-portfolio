
'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind, 
              want to discuss potential roles, or just want to connect, I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
                  <i className="ri-mail-line text-lg text-blue-600"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a 
                    href="mailto:evascojcerilo@gmail.com" 
                    className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    evascojcerilo@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-lg mr-4">
                  <i className="ri-phone-line text-lg text-green-600"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Mobile</p>
                  <a 
                    href="tel:09392263197" 
                    className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
                  >
                    0939 226 3197
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-lg mr-4">
                  <i className="ri-map-pin-line text-lg text-purple-600"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">Cainta, Rizal 1900</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Areas of Interest</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Data Analytics</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Full-Stack Development</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">System Administration</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">Maximum 500 characters</p>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}