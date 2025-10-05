import { useEffect, useState } from 'react';
import { Rocket, Satellite, Database, Activity, TrendingUp, Globe, ChevronRight, Calendar, Users, Target } from 'lucide-react';
import { Navigation } from '../components/Navbar';

interface NASAMission {
    name: string;
    status: string;
    dataCollected: number;
    efficiency: number;
    image: string;
    description: string;
}

interface ChartDataPoint {
    label: string;
    value: number;
}

interface Discovery {
    title: string;
    mission: string;
    date: string;
    image: string;
}

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeMissions, setActiveMissions] = useState<NASAMission[]>([]);
    const [discoveries, setDiscoveries] = useState<Discovery[]>([]);

    useEffect(() => {
        // Simulate loading NASA mission data
        setTimeout(() => {
            setActiveMissions([
                {
                    "name": "Mars Perseverance",
                    "status": "Active",
                    "dataCollected": 2.4,
                    "efficiency": 96,
                    "image": "https://images-assets.nasa.gov/image/PIA04591/PIA04591~orig.jpg",
                    "description": "Searching for signs of ancient life on Mars"
                },
                {
                    "name": "James Webb Space Telescope",
                    "status": "Active",
                    "dataCollected": 4.8,
                    "efficiency": 98,
                    "image": "https://science.nasa.gov/wp-content/uploads/2024/05/jwst_artist_concept_0.png",
                    "description": "Observing the most distant objects in the universe"
                },
                {
                    "name": "ISS Research",
                    "status": "Active",
                    "dataCollected": 3.2,
                    "efficiency": 94,
                    "image": "https://images-assets.nasa.gov/image/iss073e0813519/iss073e0813519~large.jpg?w=1024&h=683&fit=crop&crop=faces%2Cfocalpoint",
                    "description": "Conducting microgravity experiments in low Earth orbit"
                },
                {
                    "name": "Artemis Program",
                    "status": "Planning",
                    "dataCollected": 1.1,
                    "efficiency": 92,
                    "image": "https://www.nasa.gov/wp-content/uploads/2025/09/ksc-20250929-ph-csh01-side-by-side.jpg?resize=1024,910",
                    "description": "Returning humans to the Moon and beyond"
                },
                {
                    "name": "Parker Solar Probe",
                    "status": "Active",
                    "dataCollected": 1.9,
                    "efficiency": 95,
                    "image": "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/5657/Parker_Swingby-1.jpeg?w=1600&h=900&fit=clip&crop=faces%2Cfocalpoint",
                    "description": "Touching the Sun to unlock solar mysteries"
                },
                {
                    "name": "Hubble Space Telescope",
                    "status": "Active",
                    "dataCollected": 5.6,
                    "efficiency": 89,
                    "image": "https://science.nasa.gov/wp-content/uploads/2023/07/hubble-space-telescope-hst-6.jpg?resize=1969,2000",
                    "description": "Capturing stunning images of distant galaxies"
                }
            ]
            );

            setDiscoveries([
                {
                    title: 'Water Ice Discovered in Permanently Shadowed Craters',
                    mission: 'Lunar Reconnaissance Orbiter',
                    date: 'Oct 2024',
                    image: 'https://science.nasa.gov/wp-content/uploads/2017/11/174593main-lro-rendering.jpg'
                },
                {
                    title: 'Ancient River Delta Found on Mars',
                    mission: 'Mars Perseverance',
                    date: 'Sept 2024',
                    image: 'https://images-assets.nasa.gov/image/PIA24543/PIA24543~medium.jpg'
                },
                {
                    title: 'Exoplanet Atmosphere Analysis Reveals Biosignatures',
                    mission: 'James Webb Space Telescope',
                    date: 'Aug 2024',
                    image: 'https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/2023/09/h/holiday16x9.jpg?w=1600&h=900&fit=clip&crop=faces%2Cfocalpoint'
                }
            ]);

            setIsLoaded(true);
        }, 300);
    }, []);

    const quarterlyData: ChartDataPoint[] = [
        { label: 'Q1 2024', value: 15.2 },
        { label: 'Q2 2024', value: 18.7 },
        { label: 'Q3 2024', value: 22.4 },
        { label: 'Q4 2024', value: 26.8 }
    ];

    const missionTypes = [
        { name: 'Deep Space Exploration', count: 12, color: 'from-blue-500 to-cyan-500' },
        { name: 'Earth Observation', count: 18, color: 'from-green-500 to-emerald-500' },
        { name: 'Mars Missions', count: 8, color: 'from-red-500 to-orange-500' },
        { name: 'ISS Operations', count: 9, color: 'from-purple-500 to-pink-500' }
    ];

    const maxCount = Math.max(...missionTypes.map(m => m.count));

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
            <Navigation />
            {/* Animated stars background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: `${Math.random() * 3}px`,
                            height: `${Math.random() * 3}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.7 + 0.3,
                            animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10">
                {/* NASA Hero Section */}
                <div className="relative h-[500px] mb-16 overflow-hidden">
                    <img
                        src="https://explorer1.jpl.nasa.gov/assets/images/galleries/cropped/1972_BlueMarble_115334main_image_feature_329_ys_full.jpg"
                        alt="Earth from Space"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/80 to-slate-950" />
                    <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                                <Rocket className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
                                NASA
                            </h1>
                        </div>
                        <p className="text-2xl md:text-3xl text-white font-semibold mb-4">
                            Mission Analytics Dashboard
                        </p>
                        <p className="text-lg text-blue-200 max-w-2xl">
                            Explore real-time data and insights from our missions across the solar system
                        </p>
                        <div className="mt-8 flex items-center gap-6">
                            <div className="text-center">
                                <p className="text-4xl font-bold text-white">47</p>
                                <p className="text-sm text-blue-300">Active Missions</p>
                            </div>
                            <div className="w-px h-12 bg-blue-500/30" />
                            <div className="text-center">
                                <p className="text-4xl font-bold text-white">6</p>
                                <p className="text-sm text-blue-300">Planets Explored</p>
                            </div>
                            <div className="w-px h-12 bg-blue-500/30" />
                            <div className="text-center">
                                <p className="text-4xl font-bold text-white">83TB</p>
                                <p className="text-sm text-blue-300">Data Collected</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-7xl">

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        {[
                            { icon: Rocket, title: '47 Active Missions', subtitle: 'Operational spacecraft', color: 'blue' },
                            { icon: Database, title: '83.1 TB Data', subtitle: 'Collected in 2024', color: 'purple' },
                            { icon: Activity, title: '94.8% Uptime', subtitle: 'System reliability', color: 'cyan' },
                            { icon: TrendingUp, title: '32% Growth', subtitle: 'YoY data increase', color: 'green' }
                        ].map((metric, index) => (
                            <div
                                key={index}
                                className="bg-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all hover:scale-105 shadow-xl"
                                style={{
                                    opacity: isLoaded ? 1 : 0,
                                    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                                    transition: `all 0.6s ease-out ${index * 0.1}s`
                                }}
                            >
                                <metric.icon className={`w-8 h-8 text-${metric.color}-400 mb-3`} />
                                <h3 className="text-2xl font-bold text-white mb-1">{metric.title}</h3>
                                <p className="text-slate-400 text-sm">{metric.subtitle}</p>
                            </div>
                        ))}
                    </div>

                    {/* Main Charts Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Mission Success Rate - Circular Progress */}
                        <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all shadow-2xl">
                            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
                                <Globe className="w-6 h-6 text-blue-400" />
                                Mission Success Rate
                            </h3>
                            <div className="flex justify-center items-center">
                                <div className="relative">
                                    <svg width="240" height="240" className="transform -rotate-90">
                                        <circle
                                            cx="120"
                                            cy="120"
                                            r="90"
                                            fill="none"
                                            stroke="rgba(59, 130, 246, 0.1)"
                                            strokeWidth="20"
                                        />
                                        <circle
                                            cx="120"
                                            cy="120"
                                            r="90"
                                            fill="none"
                                            stroke="url(#successGradient)"
                                            strokeWidth="20"
                                            strokeDasharray={`${2 * Math.PI * 90}`}
                                            strokeDashoffset={isLoaded ? `${2 * Math.PI * 90 * (1 - 0.948)}` : `${2 * Math.PI * 90}`}
                                            strokeLinecap="round"
                                            style={{
                                                transition: 'stroke-dashoffset 2s ease-out',
                                                filter: 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.8))'
                                            }}
                                        />
                                        <defs>
                                            <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="50%" stopColor="#8b5cf6" />
                                                <stop offset="100%" stopColor="#06b6d4" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-5xl font-bold text-white">94.8%</span>
                                        <span className="text-sm text-blue-300 mt-2">Success Rate</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-green-400">45</p>
                                    <p className="text-sm text-slate-400">Successful</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-red-400">2</p>
                                    <p className="text-sm text-slate-400">Partial Success</p>
                                </div>
                            </div>
                        </div>

                        {/* Quarterly Data Growth - Bar Chart */}
                        <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all shadow-2xl">
                            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
                                <TrendingUp className="w-6 h-6 text-purple-400" />
                                Quarterly Data Collection
                            </h3>
                            <div className="flex items-end justify-around h-64 gap-6 px-4">
                                {quarterlyData.map((item, index) => {
                                    const maxValue = Math.max(...quarterlyData.map(d => d.value));
                                    const heightPercent = (item.value / maxValue) * 100;

                                    return (
                                        <div key={item.label} className="flex flex-col items-center flex-1">
                                            <div className="relative w-full group">
                                                <div
                                                    className="w-full bg-gradient-to-t from-purple-600 via-purple-500 to-blue-400 rounded-t-lg relative overflow-hidden"
                                                    style={{
                                                        height: isLoaded ? `${heightPercent * 2.2}px` : '0px',
                                                        transition: `height 1.2s ease-out ${index * 0.2}s`,
                                                        boxShadow: '0 0 25px rgba(139, 92, 246, 0.6)'
                                                    }}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/30" />
                                                </div>
                                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-3 py-1 rounded text-white text-sm whitespace-nowrap">
                                                    {item.value} TB
                                                </div>
                                            </div>
                                            <span className="text-slate-300 mt-3 text-sm font-medium">{item.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="text-center text-purple-200 mt-6">Total: 83.1 TB collected in 2024</p>
                        </div>
                    </div>

                    {/* Featured Missions with Images */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <Rocket className="w-8 h-8 text-red-500" />
                            Featured Missions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {activeMissions.map((mission, index) => (
                                <div
                                    key={mission.name}
                                    className="bg-slate-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all hover:scale-105 shadow-xl group"
                                    style={{
                                        opacity: isLoaded ? 1 : 0,
                                        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                                        transition: `all 0.8s ease-out ${index * 0.1}s`
                                    }}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={mission.image}
                                            alt={mission.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 right-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${mission.status === 'Active'
                                                ? 'bg-green-500/90 text-white'
                                                : 'bg-yellow-500/90 text-white'
                                                }`}>
                                                {mission.status}
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-xl font-bold text-white mb-2">{mission.name}</h3>
                                        <p className="text-slate-300 text-sm mb-4 line-clamp-2">{mission.description}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Database className="w-4 h-4 text-blue-400" />
                                                <span className="text-slate-400 text-sm">{mission.dataCollected} TB</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Activity className="w-4 h-4 text-green-400" />
                                                <span className="text-green-400 font-bold text-sm">{mission.efficiency}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Discoveries */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <Target className="w-8 h-8 text-yellow-500" />
                            Recent Discoveries
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {discoveries.map((discovery, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-yellow-500/50 transition-all hover:scale-105 shadow-xl group"
                                    style={{
                                        opacity: isLoaded ? 1 : 0,
                                        transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                                        transition: `all 0.8s ease-out ${(index + 6) * 0.1}s`
                                    }}
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={discovery.image}
                                            alt={discovery.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{discovery.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2 text-blue-300">
                                                <Satellite className="w-4 h-4" />
                                                <span>{discovery.mission}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-400">
                                                <Calendar className="w-4 h-4" />
                                                <span>{discovery.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mission Efficiency Comparison */}
                    <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all shadow-2xl mb-12">
                        <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
                            <Activity className="w-6 h-6 text-cyan-400" />
                            Mission Performance Metrics
                        </h3>
                        <div className="space-y-6">
                            {activeMissions.filter(m => m.status === 'Active').map((mission, index) => (
                                <div key={mission.name}>
                                    <div className="flex justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <Satellite className="w-5 h-5 text-cyan-400" />
                                            <span className="text-white font-medium">{mission.name}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-slate-400 text-sm">{mission.dataCollected} TB</span>
                                            <span className="text-cyan-300 font-bold min-w-[3rem] text-right">{mission.efficiency}%</span>
                                        </div>
                                    </div>
                                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full relative"
                                            style={{
                                                width: isLoaded ? `${mission.efficiency}%` : '0%',
                                                transition: `width 1.5s ease-out ${index * 0.15}s`,
                                                boxShadow: '0 0 15px rgba(6, 182, 212, 0.6)'
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mission Distribution */}
                    <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all shadow-2xl mb-12">
                        <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
                            <Database className="w-6 h-6 text-emerald-400" />
                            Mission Distribution by Type
                        </h3>
                        <div className="space-y-6">
                            {missionTypes.map((type, index) => (
                                <div key={type.name} className="relative">
                                    <div className="flex justify-between mb-3">
                                        <span className="text-white font-medium">{type.name}</span>
                                        <span className="text-emerald-300 font-bold">{type.count} missions</span>
                                    </div>
                                    <div className="h-8 bg-slate-800 rounded-lg overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${type.color} rounded-lg relative`}
                                            style={{
                                                width: isLoaded ? `${(type.count / maxCount) * 100}%` : '0%',
                                                transition: `width 1.5s ease-out ${index * 0.2}s`,
                                                boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)'
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white/40" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Exploration Highlights */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <Globe className="w-8 h-8 text-blue-500" />
                            Exploration Highlights
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
                                <img
                                    src="https://images-assets.nasa.gov/image/PIA25440/PIA25440~large.jpg"
                                    alt="Mars Exploration"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="inline-block px-3 py-1 bg-red-600 rounded-full text-xs font-bold text-white mb-3">
                                        MARS
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Jezero Crater: Ancient River Delta
                                    </h3>
                                    <p className="text-slate-200 text-sm">
                                        Perseverance rover discovers evidence of ancient microbial life in Martian rocks
                                    </p>
                                </div>
                            </div>

                            <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
                                <img
                                    src="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001326/GSFC_20171208_Archive_e001326~large.jpg"
                                    alt="Deep Space"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-xs font-bold text-white mb-3">
                                        DEEP SPACE
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Webb Captures Distant Galaxy Formation
                                    </h3>
                                    <p className="text-slate-200 text-sm">
                                        James Webb reveals galaxies forming just 300 million years after the Big Bang
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Timeline */}
                    <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 mb-12">
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <Calendar className="w-8 h-8 text-blue-400" />
                            Upcoming Milestones
                        </h2>
                        <div className="space-y-6">
                            {[
                                { date: 'November 2024', event: 'Artemis II Crew Training Completion', mission: 'Artemis Program' },
                                { date: 'December 2024', event: 'Europa Clipper Launch Window', mission: 'Europa Clipper' },
                                { date: 'January 2025', event: 'Mars Sample Return Planning Review', mission: 'Mars Program' },
                                { date: 'March 2025', event: 'ISS Commercial Module Installation', mission: 'ISS' }
                            ].map((milestone, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-800/50 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-24 text-right">
                                        <span className="text-blue-400 font-semibold text-sm">{milestone.date}</span>
                                    </div>
                                    <div className="flex-shrink-0 w-px h-full bg-blue-500/30 relative">
                                        <div className="absolute -left-1.5 top-2 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-blue-500/20" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-semibold mb-1">{milestone.event}</h4>
                                        <p className="text-slate-400 text-sm">{milestone.mission}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* NASA Statistics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {[
                            { value: '18,000+', label: 'Scientists & Engineers', icon: Users },
                            { value: '20+', label: 'NASA Centers', icon: Globe },
                            { value: '60+', label: 'Years of Exploration', icon: Calendar },
                            { value: '500+', label: 'Successful Missions', icon: Target }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-blue-900/40 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 text-center"
                                style={{
                                    opacity: isLoaded ? 1 : 0,
                                    transform: isLoaded ? 'scale(1)' : 'scale(0.9)',
                                    transition: `all 0.5s ease-out ${index * 0.1}s`
                                }}
                            >
                                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                                <p className="text-slate-300 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <footer className="border-t border-slate-700/50 pt-12 pb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                                        <Rocket className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">NASA</h3>
                                </div>
                                <p className="text-slate-400 text-sm">
                                    National Aeronautics and Space Administration
                                </p>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-3">Missions</h4>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    <li className="hover:text-blue-400 cursor-pointer transition-colors flex items-center gap-2">
                                        <ChevronRight className="w-4 h-4" />
                                        Mars Exploration
                                    </li>
                                    <li className="hover:text-blue-400 cursor-pointer transition-colors flex items-center gap-2">
                                        <ChevronRight className="w-4 h-4" />
                                        Artemis Program
                                    </li>
                                    <li className="hover:text-blue-400 cursor-pointer transition-colors flex items-center gap-2">
                                        <ChevronRight className="w-4 h-4" />
                                        James Webb Telescope
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-3">Resources</h4>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    <li className="hover:text-blue-400 cursor-pointer transition-colors flex items-center gap-2">
                                        <ChevronRight className="w-4 h-4" />
                                        Mission Data
                                    </li>
                                    <li className="hover:text-blue-400 cursor-pointer transition-colors flex items-center gap-2">
                                        <ChevronRight className="w-4 h-4" />
                                        Image Gallery
                                    </li>
                                    <li className="hover:text-blue-400 cursor-pointer transition-colors flex items-center gap-2">
                                        <ChevronRight className="w-4 h-4" />
                                        Research Papers
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center text-slate-500 text-sm border-t border-slate-800 pt-6">
                            <p>NASA Mission Analytics Dashboard • Data updated in real-time</p>
                            <p className="mt-2">Advancing humanity's reach into space</p>
                        </div>
                    </footer>
                </div>
            </div>

            <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
        </div>
    );
}

export default App;