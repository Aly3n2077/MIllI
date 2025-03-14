import React, { useState, useEffect } from 'react';
import { AlignCenter as Alien, Brain, Shield, Code, ChevronRight, Sparkles, X, Sun, Moon } from 'lucide-react';
import { Auth } from './components/Auth';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const services = [
    {
      icon: <Brain className="w-8 h-8 text-[#00ff00]" />,
      title: "AI Model Design",
      description: "Extraterrestrial intelligence solutions that evolve beyond human limitations",
      details: {
        fullDescription: "Our AI Model Design service leverages cutting-edge machine learning algorithms and neural networks to create sophisticated AI solutions that push the boundaries of what's possible.",
        features: [
          "Custom machine learning algorithms",
          "Natural language processing",
          "Computer vision systems",
          "Predictive analytics",
          "Neural network architecture design"
        ],
        benefits: [
          "Increased operational efficiency",
          "Enhanced decision-making capabilities",
          "Automated process optimization",
          "Scalable AI solutions",
          "Future-proof technology integration"
        ]
      }
    },
    {
      icon: <Code className="w-8 h-8 text-[#00ff00]" />,
      title: "Systems Architecture",
      description: "Infrastructure from the future, built for the present",
      details: {
        fullDescription: "Our Systems Architecture service provides robust, scalable, and future-proof infrastructure solutions designed to handle the most demanding technological challenges.",
        features: [
          "Microservices architecture",
          "Cloud-native solutions",
          "Distributed systems design",
          "High-availability infrastructure",
          "Security-first architecture"
        ],
        benefits: [
          "Improved system reliability",
          "Enhanced scalability",
          "Reduced operational costs",
          "Better resource utilization",
          "Faster time-to-market"
        ]
      }
    },
    {
      icon: <Shield className="w-8 h-8 text-[#00ff00]" />,
      title: "Quantum Security",
      description: "Protection protocols from another dimension",
      details: {
        fullDescription: "Our Quantum Security solutions provide next-generation protection against both classical and quantum threats, ensuring your data remains secure in the post-quantum era.",
        features: [
          "Quantum-resistant encryption",
          "Post-quantum cryptography",
          "Quantum key distribution",
          "Secure quantum communication",
          "Quantum random number generation"
        ],
        benefits: [
          "Future-proof security",
          "Protection against quantum attacks",
          "Enhanced data privacy",
          "Compliance with emerging standards",
          "Advanced threat detection"
        ]
      }
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Update the document class based on dark mode state
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00]/10 to-[#003300]/20 dark:from-[#00ff00]/20 dark:to-[#003300]/30 z-0" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] 
          bg-cover bg-center opacity-10 dark:opacity-20 z-[-1]"
        />
        
        {/* Floating UFOs */}
        <div className="absolute top-20 right-[20%] w-16 h-16 animate-[float_6s_ease-in-out_infinite]">
          <div className="w-full h-full bg-gradient-to-b from-[#00ff00]/30 to-transparent rounded-full"></div>
        </div>
        <div className="absolute top-40 left-[15%] w-12 h-12 animate-[float_8s_ease-in-out_infinite]">
          <div className="w-full h-full bg-gradient-to-b from-[#00ff00]/20 to-transparent rounded-full"></div>
        </div>
        
        <nav className="relative z-10 container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10 bg-black rounded-full flex items-center justify-center">
          <Alien className="w-8 h-8 text-[#00ff00]" />
          <div className="absolute inset-0 border-2 border-[#00ff00] rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold tracking-wider">MIllI</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="hover:text-[#00ff00] transition-colors">Services</a>
              <a href="#vision" className="hover:text-[#00ff00] transition-colors">Vision</a>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-[#00ff00]" />
                ) : (
                  <Moon className="w-5 h-5 text-[#00ff00]" />
                )}
              </button>
              <a href="tel:+263786838849" className="inline-flex items-center space-x-2 bg-[#00ff00] text-black px-4 py-2 rounded-full hover:bg-[#00cc00] transition-colors">
                <span>Call Now</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </nav>

        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center mb-8">
              <div className="relative w-20 h-20 mr-6">
          <div className="absolute inset-0 bg-black rounded-full"></div>
          <Alien className="relative z-10 w-20 h-20 text-[#00ff00]" />
          <div className="absolute inset-0 border-2 border-[#00ff00] rounded-full animate-ping"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00ff00] to-[#00cc00] bg-clip-text text-transparent">
          Straight Outta Area 51
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Advanced AI solutions beyond conventional boundaries.
              Welcome to the next evolution of technology.
            </p>
            <a href="tel:+263786838849" className="group flex items-center space-x-2 bg-[#00ff00] hover:bg-[#00cc00] text-black font-bold px-8 py-3 rounded-full transition-all">
              <span>Call Us Now</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white dark:from-black to-[#e6ffe6]/20 dark:to-[#003300]/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Classified Operations</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-[#e6ffe6] dark:from-black dark:to-[#001a00] p-8 rounded-xl hover:shadow-2xl hover:shadow-[#00ff00]/20 transition-all duration-300 border border-[#00ff00]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                <div className="relative">
                  {service.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  <button
                    onClick={() => setActiveService(index)}
                    className="mt-6 flex items-center text-[#00ff00] group-hover:text-[#00cc00]"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {activeService !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#f0fff0] dark:bg-[#001a00] border border-[#00ff00]/20 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#f0fff0] dark:bg-[#001a00] p-6 border-b border-[#00ff00]/20">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-[#00ff00]">
                  {services[activeService].title}
                </h3>
                <button
                  onClick={() => setActiveService(null)}
                  className="text-gray-400 hover:text-[#00ff00] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-300 mb-8">
                {services[activeService].details.fullDescription}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#00ff00] font-bold mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {services[activeService].details.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <ChevronRight className="w-4 h-4 text-[#00ff00] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-[#00ff00] font-bold mb-4">Benefits</h4>
                  <ul className="space-y-2">
                    {services[activeService].details.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <ChevronRight className="w-4 h-4 text-[#00ff00] mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#00ff00] text-black px-6 py-3 rounded-full hover:bg-[#00cc00] transition-all"
                >
                  Request Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Vision Section */}
      <section id="vision" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6ffe6]/20 dark:from-[#003300]/20 to-white dark:to-black z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Sparkles className="w-12 h-12 text-[#00ff00] mb-6" />
              <h2 className="text-3xl font-bold mb-6">Beyond Human Limits</h2>
              <p className="text-gray-300 mb-6">
                We're not just predicting the future - we're reverse engineering it. Our team of rogue scientists 
                and digital alchemists are breaking the barriers between possible and impossible.
              </p>
              <button 
                className="bg-transparent border-2 border-[#00ff00] text-[#00ff00] px-6 py-2 rounded-full hover:bg-[#00ff00] hover:text-black transition-all"
                onClick={() => setIsModalOpen(true)}
              >
                Join The Revolution - Sign Up for Early Access
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00] to-[#003300] rounded-full animate-pulse opacity-20" />
                <div className="absolute inset-4 bg-gradient-to-r from-[#00ff00] to-[#003300] rounded-full animate-pulse opacity-40" />
                <div className="absolute inset-8 bg-gradient-to-r from-[#00ff00] to-[#003300] rounded-full animate-pulse opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-black dark:text-white text-black p-8 rounded-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Join The Revolution</h2>
              <button 
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-all"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="mb-6">
              <Auth />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white dark:bg-black border-t border-[#00ff00]/20 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="relative w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Alien className="w-6 h-6 text-[#00ff00]" />
                <div className="absolute inset-0 border-2 border-[#00ff00] rounded-full"></div>
              </div>
              <span className="text-lg font-bold">MIllI</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://twitter.com/yourprofile" className="text-gray-400 hover:text-[#00ff00] transition-colors">Twitter</a>
              
              <a href="https://www.linkedin.com/in/millan-ashly-type" className="text-gray-390 hover:text-[#00ff00] transition-colors">LinkedIn</a>
              
              <a href="https://github.com/Aly3n2077" className="text-gray-390 hover:text-[#00ff00] transition-colors">Instagram</a>
              
                <a href="https://www.facebook.com/yourprofile" className="text-gray-390 hover:text-[#00ff00] transition-colors">Facebook</a>
              
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600">
            © 2025 Milli Intelligent Technologies. Revolutionizing reality one byte at a time.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;