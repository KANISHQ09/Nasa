import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  // Updated navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Missions", path: "/missions" },
    { name: "Resources", path: "/resources" },
    { name: "Graph", path: "/graph" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 backdrop-blur-[4px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Clickable to navigate Home */}
        <img
          src="/nasa-removebg-preview (1).png"
          className="h-9 w-25 cursor-pointer"
          onClick={() => navigate("/")}
          alt="Logo"
        />

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 py-2 px-5 rounded-2xl">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className="relative px-2 text-white/90 font-medium group transition-all duration-300"
            >
              <span>{item.name}</span>
              {/* underline animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button onClick={() => navigate("/spaceai")} className="relative inline-block group cursor-pointer w-max">
          <span className="relative z-10 px-3.5 py-2 overflow-hidden font-medium leading-tight flex items-centrer justify-center text-black transition-colors duration-300 ease-out border-2 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease hover:border-white"></span>
            <span className="relative text-base font-semibold">Search with AI <i className="fa-solid fa-bolt-lightning"></i></span>
          </span>
        </button>
      </div>
    </nav>
  );
};
