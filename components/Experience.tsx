
'use client';

export default function Experience() {
  const experiences = [
    {
      title: "Computer Science Graduate",
      company: "EARIST - Manila Campus",
      period: "Aug 2025",
      type: "Education",
      description: "Completed Bachelor's degree in Computer Science with focus on software development, data structures, and algorithms.",
      icon: "ri-graduation-cap-line"
    },
    {
      title: "Data Analytics NC III",
      company: "TESDA Certification",
      period: "Jun 2025",
      type: "Certification",
      description: "Specialized certification in data analytics, statistical analysis, and business intelligence tools.",
      icon: "ri-bar-chart-line"
    },
    {
      title: "Data Support and Technical Documentation Specialist",
      company: "Wizzards Technology, Inc.",
      period: "Mar 2025 - Jun 2025",
      type: "Internship",
      description: "Queried and indexed SQL Server records daily to ensure data accuracy and consistency. Created data entry guides to standardize Barangay Information System usage. Performed QA tests on system inputs, outputs, and UI for deployment readiness. Reported database issues and insights to support system improvements.",
      icon: "ri-database-2-line"
    },
    {
      title: "AI-driven Question Generation in 6th Grade Elementary Education",
      company: "Thesis Project - EARIST",
      period: "2024 - 2025",
      type: "Research",
      description: "Verified and tagged training data for evaluating NLP-based question generation models. Analyzed model performance using accuracy, precision, recall, and F1-score. Compared ML models (LogReg, Naive Bayes, Random Forest, RNN, BERT) for classifying question difficulty. Authored technical docs and ensured alignment with Bloom's Taxonomy and educational standards.",
      icon: "ri-brain-line"
    },
    {
      title: "Chat Support Associate - Technical Support",
      company: "UX Direct Global Inc.",
      period: "Mar 2023 - May 2024",
      type: "Full-time",
      description: "Troubleshot technical issues related to user accounts, connectivity, and software usage. Utilized CRM tools to log and track customer concerns for effective follow-up. Managed multiple chat interactions while ensuring high response accuracy and efficiency.",
      icon: "ri-customer-service-2-line"
    },
    {
      title: "Cyber Cafe Attendant",
      company: "Nostrax Cyber Cafe - Cainta Branch",
      period: "Jan 2019 – May 2019",
      type: "Full-time",
      description: "Troubleshot system errors and network issues to ensure smooth operation. Assisted customers by providing technical support and addressing concerns. Maintained computer units by performing regular system checks and updates",
      icon: "ri-computer-line"
    },
    {
      title: "Computer System Servicing NC II",
      company: "TESDA Certification",
      period: "2019",
      type: "Certification",
      description: "Technical certification covering computer hardware, software installation, and system maintenance.",
      icon: "ri-computer-line"
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Professional Experience & Education</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg flex-shrink-0">
                  <i className={`${exp.icon} text-xl text-gray-700`}></i>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      exp.type === 'Full-time' ? 'bg-green-100 text-green-700' :
                      exp.type === 'Internship' ? 'bg-blue-100 text-blue-700' :
                      exp.type === 'Research' ? 'bg-purple-100 text-purple-700' :
                      exp.type === 'Education' ? 'bg-orange-100 text-orange-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Focus Areas</h3>
            <p className="text-gray-600 mb-6">
              With hands-on experience in technical support, data analytics, and AI research, I bring a unique blend of 
              customer service excellence and technical expertise to drive meaningful solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">Data Analytics & QA</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">Technical Support</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm">AI & Machine Learning</span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm">Documentation & Testing</span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm">Customer Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
