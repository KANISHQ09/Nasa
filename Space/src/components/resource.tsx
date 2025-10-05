import React, { useState, useEffect } from 'react';
import { Rocket, Database, Image, Globe, Calendar, ExternalLink, Satellite, Star } from 'lucide-react';
import { Navigation } from '../components/Navbar'; // Import your custom nav

const resources = [
  {
    title: "NASA Open Data Portal",
    description: "Explore NASA's datasets on space missions, research, and more.",
    link: "https://data.nasa.gov/",
    icon: Database,
  },
  {
    title: "ESA Space Resources",
    description: "European Space Agency resources and research archives.",
    link: "https://www.esa.int/",
    icon: Globe,
  },
  {
    title: "Space Biology Archives",
    description: "Discover research data about biological experiments in space.",
    link: "https://genelab.nasa.gov/",
    icon: Rocket,
  },
  {
    title: "NASA Image Library",
    description: "Access high-quality images and videos of space missions.",
    link: "https://images.nasa.gov/",
    icon: Image,
  },
  {
    title: "Hubble Space Telescope",
    description: "Browse stunning images and data from the Hubble Space Telescope.",
    link: "https://hubblesite.org/",
    icon: Star,
  },
  {
    title: "ISS Research Data",
    description: "Access research conducted aboard the International Space Station.",
    link: "https://www.nasa.gov/mission_pages/station/research/",
    icon: Satellite,
  },
];

interface APODData {
  title: string;
  explanation: string;
  url: string;
  date: string;
  media_type: string;
  hdurl?: string;
}

interface NASAImage {
  title: string;
  description: string;
  date_created: string;
  nasa_id: string;
  media_type: string;
  preview?: string;
}

function App() {
  const [apod, setApod] = useState<APODData | null>(null);
  const [nasaImages, setNasaImages] = useState<NASAImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNASAData = async () => {
      try {
        const apodResponse = await fetch(
          'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
        );
        const apodData = await apodResponse.json();
        setApod(apodData);

        const imagesResponse = await fetch(
          'https://images-api.nasa.gov/search?q=galaxy&media_type=image'
        );
        const imagesData = await imagesResponse.json();
        const items = imagesData.collection.items.slice(0, 6).map((item: any) => ({
          title: item.data[0].title,
          description: item.data[0].description,
          date_created: item.data[0].date_created,
          nasa_id: item.data[0].nasa_id,
          media_type: item.data[0].media_type,
          preview: item.links?.[0]?.href,
        }));
        setNasaImages(items);
      } catch (error) {
        console.error('Error fetching NASA data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNASAData();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="relative z-10">
        {/* CUSTOM NAVIGATION */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navigation />
        </div>

        <main className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                Space Resources
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore the universe through curated databases and archives
              </p>
            </div>

            {!loading && apod && (
              <div className="mb-16 animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  NASA Astronomy Picture of the Day
                </h2>
                <div className="relative bg-gradient-to-br from-blue-950/40 to-black/40 border border-blue-400/20 rounded-2xl overflow-hidden backdrop-blur-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-96 lg:h-auto">
                      {apod.media_type === 'image' ? (
                        <img
                          src={apod.url}
                          alt={apod.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <iframe
                          src={apod.url}
                          className="w-full h-full"
                          frameBorder="0"
                          allowFullScreen
                        />
                      )}
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-blue-400 mb-4">
                        <Calendar className="w-5 h-5" />
                        <span className="text-sm">{apod.date}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{apod.title}</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {apod.explanation}
                      </p>
                      {apod.hdurl && (
                        <a
                          href={apod.hdurl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                        >
                          <span>View HD Image</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* NASA Image Gallery */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                NASA Image Gallery
              </h2>
              {loading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-400 border-t-transparent"></div>
                  <p className="text-gray-400 mt-4">Loading NASA data...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nasaImages.map((image, index) => (
                    <div
                      key={image.nasa_id}
                      className="group relative bg-gradient-to-br from-blue-950/40 to-black/40 border border-blue-400/20 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02] animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {image.preview && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={image.preview}
                            alt={image.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      )}

                      <div className="relative p-6">
                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
                          {image.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                          {image.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-blue-400">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(image.date_created).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Space Resource Libraries */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Space Resource Libraries
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-blue-950/40 to-black/40 border border-blue-400/20 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02] animate-slide-up"
                      style={{ animationDelay: `${(index + 6) * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                      <div className="relative">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                          <Icon className="w-7 h-7 text-blue-400" />
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                          {resource.title}
                        </h2>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                          {resource.description}
                        </p>

                        <a
                          href={resource.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group/link"
                        >
                          <span>Explore</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>

        <footer className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-md py-8">
          <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm">
            <p>Explore the cosmos • Discover the infinite</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
