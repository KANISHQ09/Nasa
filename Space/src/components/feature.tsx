import React from 'react';

type ArticleType = 'ARTICLE' | 'BLOG' | 'PRESS RELEASE';

interface NewsItem {
  id: number;
  type: ArticleType;
  readTime: string;
  title: string;
  imageUrl: string;
}

const featuredNewsData: NewsItem[] = [
  {
    id: 1,
    type: 'ARTICLE',
    readTime: '6 MIN READ',
    title: "Discovery Alert: 'Baby' Planet Photographed in a Ring around a Star for the First Time!",
    imageUrl: 'https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/exoplanet-artists-concepts/WISPIT%202%20b%20Wide%20Final.png',
  },
  {
    id: 2,
    type: 'ARTICLE',
    readTime: '4 MIN READ',
    title: 'Astronaut Candidates Get to Work at Johnson Space Center',
    imageUrl: 'https://www.nasa.gov/wp-content/uploads/2025/09/jsc2023e006587.jpg?resize=2000,1600',
  },
  {
    id: 3,
    type: 'BLOG',
    readTime: '3 MIN READ',
    title: 'Crew Works Advanced Science Hardware and Conducts Lab Inspections',
    imageUrl: 'https://images-assets.nasa.gov/image/iss073e0813519/iss073e0813519~large.jpg?w=400&h=267&fit=crop&crop=faces%2Cfocalpoint',
  },
  {
    id: 4,
    type: 'ARTICLE',
    readTime: '4 MIN READ',
    title: 'NASA Signs US-Australia Agreement on Aeronautics, Space Cooperation',
    imageUrl: 'https://www.nasa.gov/wp-content/uploads/2025/09/iac2.jpg?resize=400,267',
  },
];

const smallNewsData: NewsItem[] = [
  {
    id: 5,
    type: 'ARTICLE',
    readTime: '4 MIN READ',
    title: 'NASA’s Webb Telescope Studies Moon-Forming Disk Around Massive Planet',
    imageUrl: 'https://assets.science.nasa.gov/dynamicimage/assets/science/missions/webb/science/2025/09/STScI-01K6196E18EPYF8RDEAQVA01Y3.png',
  },
  {
    id: 6,
    type: 'BLOG',
    readTime: '3 MIN READ',
    title: 'NASA’s SunRISE Set to Launch in 2026',
    imageUrl: 'https://assets.science.nasa.gov/dynamicimage/assets/science/missions/sunrise/sunrise-photo-and-illo.jpg',
  },
  {
    id: 7,
    type: 'BLOG',
    readTime: '2 MIN READ',
    title: 'Hammering Out a Way to Find Shelter on the Moon and Mars',
    imageUrl: 'https://assets.science.nasa.gov/dynamicimage/assets/science/esd/esnt/LavaTubeMapping.jpg',
  },
  {
    id: 8,
    type: 'PRESS RELEASE',
    readTime: '8 MIN READ',
    title: 'NASA-ISRO Satellite Sends First Radar Images of Earth’s Surface',
    imageUrl: 'https://www.nasa.gov/wp-content/uploads/2025/09/nisar-lead-image-sept-25-.jpg?resize=100,100',
  },
];

interface ArticleLabelProps {
  type: ArticleType;
  readTime: string;
  color: 'white' | 'black';
}

const ArticleLabel: React.FC<ArticleLabelProps> = ({ type, readTime, color }) => {
  const textColor = color === 'white' ? 'text-white' : 'text-gray-900';
  const dividerColor = color === 'white' ? 'bg-white' : 'bg-gray-900';

  return (
    <div className={`flex items-center space-x-2 text-xs font-semibold ${textColor}`}>
      <span className="uppercase tracking-widest opacity-80">{type}</span>
      <div className={`h-1 w-1 rounded-full ${dividerColor}`}></div>
      <span className="opacity-80">{readTime}</span>
    </div>
  );
};

interface FeaturedCardProps {
  item: NewsItem;
  size: 'large' | 'quarter';
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ item, size }) => {
  const baseClasses =
    'relative rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-2xl';
  const sizeClasses =
    size === 'large'
      ? 'md:col-span-2 md:row-span-2 h-[400px] sm:h-[500px] lg:h-[600px]'
      : 'md:col-span-1 h-[250px]';
  const titleClasses = size === 'large' ? 'text-4xl leading-snug' : 'text-xl font-bold';

  return (
    <div className={`${baseClasses} ${sizeClasses} group`}>
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover brightness-[.85] transition-transform duration-500 group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
        <div className="absolute top-6 left-6">
          <ArticleLabel type={item.type} readTime={item.readTime} color="white" />
        </div>
        <h2 className={`font-extrabold ${titleClasses} mt-4`}>{item.title}</h2>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
    </div>
  );
};

interface SmallCardProps {
  item: NewsItem;
}

const SmallCard: React.FC<SmallCardProps> = ({ item }) => {
  return (
    <div className="flex items-start space-x-4 cursor-pointer group">
      <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden shadow-md">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col pt-1">
        <div className="flex flex-wrap items-center space-x-1 text-xs font-semibold text-gray-400">
          <span className="uppercase tracking-widest">{item.type}</span>
          <div className="h-1 w-1 rounded-full bg-gray-500"></div>
          <span>{item.readTime}</span>
        </div>
        <p className="mt-1 text-sm sm:text-base font-semibold text-gray-200 group-hover:text-red-400 transition-colors duration-200">
          {item.title}
        </p>
      </div>
    </div>
  );
};

const FeaturedNewsPage: React.FC = () => {
  const [largeCard, topRightCard, bottomRightCard] = featuredNewsData;

  return (
    <div className="font-sans bg-black/40 min-h-screen text-white">
      <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Featured News</h1>
          <div className="flex items-center text-red-500 text-sm font-semibold uppercase tracking-wider">
            Recently Published
            <div className="ml-2 h-2 w-2 rounded-full bg-red-500"></div>
          </div>
        </header>

        {/* Main Featured Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 mb-12">
          <FeaturedCard item={largeCard} size="large" />
          <FeaturedCard item={topRightCard} size="quarter" />
          <FeaturedCard item={bottomRightCard} size="quarter" />
        </section>

        {/* Small Article Row */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-700">
          {smallNewsData.map((item) => (
            <SmallCard key={item.id} item={item} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default FeaturedNewsPage;