
import { Link } from 'react-router-dom';
import { Car, Users, MapPin, Clock, CheckCircle, MessageCircle, Shield, Star, Leaf, Trees } from 'lucide-react';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const whatsappNumber = "919159661123";
  const message = "Hi! I want to know more about Ooty tour packages.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const features = [
    {
      icon: <Car className="h-8 w-8 text-green-700 dark:text-green-300" />,
      title: "Pickup Service", 
      description: "We pick you up from anywhere in South India",
      delay: "0s"
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-700 dark:text-amber-300" />,
      title: "Clean & Safe Rides",
      description: "Well-maintained vehicles with experienced drivers",
      delay: "0.1s"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Trusted Guides",
      description: "Local experts who know Ooty inside out",
      delay: "0.2s"
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
      title: "Flexible Plans",
      description: "Customizable itineraries to suit your needs",
      delay: "0.3s"
    }
  ];

  const topPackages = [
    {
      id: 'ooty-package',
      name: "Ooty Hill Station Special",
      image: "/assets/images/17.jpg",
      description: "Explore the Queen of Hill Stations with its gardens and lakes",
      highlights: ["Botanical Gardens", "Ooty Lake", "Doddabetta Peak"]
    },
    {
      id: 'other-packages',
      name: "Other South India Destinations",
      image: "/assets/images/16.jpg",
      description: "Discover amazing destinations across South India",
      highlights: ["Backwater Cruises", "Tea Plantations", "Historic Sites"]
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Contact Us",
      description: "Reach out via WhatsApp or phone to discuss your requirements"
    },
    {
      number: "2", 
      title: "Custom Plan",
      description: "We create a personalized itinerary based on your preferences"
    },
    {
      number: "3",
      title: "Travel & Enjoy",
      description: "We handle everything while you enjoy your Ooty experience"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section with Nature Greenish Image */}
      <section className="relative h-screen bg-gradient-to-br from-green-900/80 via-green-800/60 to-green-700/70 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ 
              backgroundImage: "/assets/images/20.jpg",
              opacity: imageLoaded ? 1 : 0 
            }}
            onLoad={() => setImageLoaded(true)}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-green-800/40 to-black/50"></div>
        </div>
        
        {/* Floating nature elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-3 h-3 bg-green-300/40 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-green-400/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-green-200/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-gentle-fade">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="h-8 w-8 text-green-300 mr-3 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
              Hassle-Free Hill Station Holidays — Handled by Experts
            </h1>
            <Trees className="h-8 w-8 text-green-300 ml-3 animate-pulse" />
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 mb-8 border border-white/20">
            <p className="text-2xl md:text-3xl font-light text-green-100 drop-shadow-md">
              Your Gateway to the Queen of Hill Stations
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-soft-rise" style={{ animationDelay: '0.3s' }}>
            <Link 
              to="/packages"
              className="nature-gradient text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-transparent group"
            >
              <span className="group-hover:animate-pulse">Explore Packages</span>
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="bg-transparent border-2 border-white/80 hover:bg-white hover:text-green-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent backdrop-blur-sm"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Ooty Kevin Tour & Travels?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-light">
              We provide hassle-free travel experiences with personalized service and attention to detail
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 animate-soft-rise"
                style={{ animationDelay: feature.delay }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-800 hover:bg-green-200 dark:hover:bg-green-700 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-light text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-light">
              Simple steps to plan your perfect Ooty getaway
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-5">
                  <div className="green-gradient text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto hover:scale-110 transition-transform duration-300 shadow-md cursor-pointer">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-light text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Tour Packages
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-light">
              Discover our most loved destinations in South India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {topPackages.map((pkg, index) => (
              <div key={pkg.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-200 dark:border-gray-700 group">
                <div className="relative overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" 
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  ></div>
                  <div className="absolute top-3 right-3 bg-green-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-light text-sm">
                    {pkg.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link 
                    to={`/package/${pkg.id}`}
                    className="inline-block green-gradient text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md focus:outline-none focus:ring-4 focus:ring-green-300 w-full text-center text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/packages"
              className="nature-gradient text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
