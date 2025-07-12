import { useParams, Link } from 'react-router-dom';
import { MapPin, Check, X, Star, Calendar, Users, MessageCircle, Phone, Clock, Car } from 'lucide-react';

const PackageDetailPage = () => {
  const { id } = useParams();
  const whatsappNumber = "919159661123";

  const handleWhatsAppClick = (locationName: string) => {
    const message = `Hi! I'm interested in visiting ${locationName} as part of your Ooty tour package. Can you provide more details?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Enhanced package data with additional days and detailed content
  const packageData = {
    'ooty-package': {
      name: "Ooty Package",
      image: "/assets/images/ooty-package.jpg",
      description: "Experience the Queen of Hill Stations with its pristine beauty, lush gardens, and serene lakes.",
      additionalDays: "Can be extended to 4-7 days with custom itinerary",
      rating: 4.8,
      totalReviews: 245,
      locations: [
        { 
          name: "Ooty", 
          image: "/assets/images/ooty-package.jpg",
          itinerary: ["Doddabetta", "Tea Factory","chocolate Factory", "Botanical Garden", "Wax museum", "Rose Garden","Ooty Lake","Thread Garden","Local Shopping"]
        },
        { 
          name: "Coonoor", 
          image: "/assets/images/package-conoor.jpg",
          itinerary: ["Sim's Park", "Tea Garden", "Lam's Rock", "Toy train ride", "Dolphin's Nose", "Hidden Valley exploration","Valley view","MRC(Outer view)","MRC Golf Club(Outer view)","Sleeping lady view Point","Catherine Falls(Outer view)","MRC Museum"]
        },
        { 
          name: "Pykara", 
          image: "/assets/images/pykara.jpg",
          itinerary: ["Golf course view", "Pine forest", "kamarajar dam", "Tree Park", "Pykara Water falls and boating","Wenlock downs Shooting Point(9th mile)"]
        },
        { 
          name: "Mudumalai", 
          image: "/assets/images/3.jpg",
          itinerary: ["Wildlife safari", "Elephant camp visit", "Nature walks", "Bird watching", "Theppakadu Elephant Camp", "Jungle trekking"]
        },
        { 
          name: "Avalanche", 
          image: "/assets/images/4.jpg",
          itinerary: ["Avalanche Jungle safari","Eco Forest","Emerald Dam(Outer view)","Tribal Museum","Karnataka Horticulture Garden"]
        },
        { 
          name: "Kodanad", 
          image: "/assets/images/5.jpg",
          itinerary: ["Tea Park","Nehru Park","Pandian Park","Tribal Temple(Outer view)","Kodanad(View point)"]
        }
      ]
    },
    'other-packages': {
      name: "Other Packages",
      image: "/assets/images/7.jpg",
      description: "Discover amazing destinations across South India starting from Ooty.",
      note: "All trips start from Ooty. Beginning location cannot be customized.",
      additionalDays: "Flexible 2-10 day packages available based on destinations",
      rating: 4.6,
      totalReviews: 189,
      locations: [
        { 
          name: "Kodaikanal", 
          image: "/assets/images/f.jpeg",
          itinerary: ["Kodaikanal Lake", "Pillar Rocks", "Guna Caves (Devil’s Kitchen)", "Pine Forest", "Dolphin’s Nose", "Upper Lake View"]
        },
        { 
          name: "Kochi", 
          image: "/assets/images/8.jpg",
          itinerary: ["Chinese Fishing Nets", "Fort Kochi walk", "Spice market tour", "Backwater cruise", "Mattancherry Palace", "Marine Drive"]
        },
        { 
          name: "Munnar", 
          image: "/assets/images/9.jpeg",
          itinerary: ["Tea plantation visit", "Eravikulam National Park", "Top Station viewpoint", "Mattupetty Dam", "Echo Point", "Anamudi Peak"]
        },
        { 
          name: "Coorg", 
          image: "/assets/images/10.jpg",
          itinerary: ["Coffee plantation tour", "Abbey Falls", "Raja's Seat", "Dubare Elephant Camp", "Talacauvery", "Brahmagiri Hills"]
        },
        { 
          name: "Mysore", 
          image: "/assets/images/11.jpg",
          itinerary: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens", "Local market visit", "St. Philomena's Church", "Karanji Lake"]
        },
        { 
          name: "Bangalore", 
          image: "/assets/images/12.jpg",
          itinerary: ["Lalbagh Gardens", "Bangalore Palace", "Commercial Street shopping", "Ulsoor Lake", "Cubbon Park", "Vidhana Soudha"]
        },
        { 
          name: "Wayanad", 
          image: "/assets/images/13.jpg",
          itinerary: ["Edakkal Caves", "Banasura Sagar Dam", "Chembra Peak trek", "Spice plantation visit", "Soochipara Falls", "Pookode Lake"]
        }
      ]
    }
  };

  const currentPackage = packageData[id as keyof typeof packageData];
  
  if (!currentPackage) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Package not found</h1>
          <Link to="/packages" className="text-green-600 hover:text-green-700">
            Return to packages
          </Link>
        </div>
      </div>
    );
  }

  const inclusions = [
    "Accommodation as per itinerary",
    "Daily breakfast",
    "All sightseeing as mentioned",
    "Transportation in AC vehicle",
    "Professional guide services",
    "All entry fees included",
    "Pick up and drop from nearest station",
    "All applicable taxes"
  ];

  const exclusions = [
    "Lunch and dinner (unless specified)",
    "Personal expenses and shopping",
    "Travel insurance",
    "Camera fees at monuments",
    "Tips and gratuities",
    "Extra activities not in itinerary",
    "Emergency expenses"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Enhanced Hero Section with Nature Theme */}
      <section className="relative h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${currentPackage.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-800/50 to-black/60"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-16 w-4 h-4 bg-green-300/40 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-24 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-24 left-1/3 w-2 h-2 bg-green-400/50 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center mb-8 opacity-90">
              <Link to="/packages" className="text-white/80 hover:text-white transition-colors text-sm bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                ← Back to Packages
              </Link>
            </div>
            
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-xl leading-tight bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                {currentPackage.name}
              </h1>
              
              <p className="text-xl text-white/95 mb-8 max-w-3xl leading-relaxed">
                {currentPackage.description}
              </p>
              
              {/* Enhanced Stats Row */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-2" />
                  <span className="font-bold text-lg mr-1">{currentPackage.rating}</span>
                  <span className="text-white/80">({currentPackage.totalReviews})</span>
                </div>
                <div className="flex items-center bg-green-600/80 backdrop-blur-sm rounded-full px-6 py-3">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="font-medium">Group Friendly</span>
                </div>
                <div className="flex items-center bg-blue-600/80 backdrop-blur-sm rounded-full px-6 py-3">
                  <Car className="h-5 w-5 mr-2" />
                  <span className="font-medium">Transport Included</span>
                </div>
              </div>
              
              {/* Flexible Duration */}
              <div className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-6 w-6 mr-3 text-blue-200" />
                  <h3 className="font-bold text-xl">Flexible Duration</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">{currentPackage.additionalDays}</p>
              </div>
              
              {'note' in currentPackage && currentPackage.note && (
                <div className="mt-6 p-4 bg-amber-600/80 backdrop-blur-sm rounded-xl border border-amber-400/30">
                  <p className="text-amber-100 font-medium flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {currentPackage.note}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Enhanced Location Cards */}
          <div className="lg:col-span-2">
            <section className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mb-6 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Amazing Destinations</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {currentPackage.locations.map((location, index) => (
                  <div key={index} className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="md:flex">
                      {/* Image Section */}
                      <div className="md:w-2/5 relative overflow-hidden">
                        <div 
                          className="h-64 md:h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                          style={{ backgroundImage: `url(${location.image})` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-black/20 group-hover:from-green-800/60 transition-all duration-500"></div>
                          <div className="absolute bottom-4 left-4">
                            <h3 className="text-2xl font-bold text-white drop-shadow-lg">{location.name}</h3>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="md:w-3/5 p-8">
                        <div className="flex justify-between items-start mb-6">
                          <h4 className="font-bold text-xl text-gray-800 dark:text-gray-200 flex items-center">
                            <Star className="h-5 w-5 text-yellow-500 mr-2" />
                            Key Attractions
                          </h4>
                          <button
                            onClick={() => handleWhatsAppClick(location.name)}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl"
                          >
                            <MessageCircle className="h-4 w-4" />
                            Ask Details
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {location.itinerary.map((item, idx) => (
                            <div key={idx} className="flex items-center text-gray-700 dark:text-gray-300 group/item hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0 group-hover/item:bg-green-400 transition-colors duration-200"></div>
                              <span className="text-sm font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Quick Contact */}
                        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Need more information about {location.name}?</p>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleWhatsAppClick(location.name)}
                              className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center gap-1 hover:bg-green-50 dark:hover:bg-green-900/20 px-2 py-1 rounded transition-all duration-200"
                            >
                              <MessageCircle className="h-3 w-3" />
                              WhatsApp
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-6 text-center shadow-xl mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ready to Book?</h3>
              <p className="mb-6 text-green-100 text-sm">Get instant quotes and customize your perfect trip</p>
              <button
                onClick={() => handleWhatsAppClick(currentPackage.name)}
                className="w-full bg-white text-green-600 font-bold py-3 px-6 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </button>
            </div>

            {/* Package Highlights */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg mb-6 border border-green-200 dark:border-gray-600">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Package Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Star className="h-5 w-5 mr-3 text-yellow-500" />
                  <span className="text-sm">Highly Rated Experience</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Users className="h-5 w-5 mr-3 text-blue-500" />
                  <span className="text-sm">Expert Local Guides</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Calendar className="h-5 w-5 mr-3 text-green-500" />
                  <span className="text-sm">Flexible Scheduling</span>
                </div>
              </div>
            </div>

            {/* Inclusions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-600" />
                What's Included
              </h3>
              <ul className="space-y-3">
                {inclusions.map((inclusion, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <Check className="h-4 w-4 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{inclusion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <X className="h-5 w-5 mr-2 text-red-600" />
                Not Included
              </h3>
              <ul className="space-y-3">
                {exclusions.map((exclusion, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <X className="h-4 w-4 mr-3 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{exclusion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;
