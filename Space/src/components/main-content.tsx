import { useNavigate } from "react-router-dom";

export function MainContent() {
    const navigate = useNavigate();
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black text-white">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/40 -z-10" />

            {/* Content Wrapper (2-column layout) */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 h-full">
                {/* LEFT SIDE — Text Section */}
                <div className="flex flex-col justify-center px-6 sm:px-12 md:px-20 max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                        Explore the <br /> Universe from <br /> your Inbox
                    </h1>

                    <p className="text-base sm:text-lg font-semibold mb-3">
                        Stay up-to-date on the latest news from NASA—from Earth to the Moon,
                        the Solar System and beyond.
                    </p>

                    <p className="text-sm text-gray-300 mb-6">
                        We will never share your email address.{" "}
                        <a href="#" className="underline hover:text-white">
                            Privacy Policy
                        </a>
                    </p>

                    <button onClick={() => navigate("/spaceai")} className="relative inline-block group cursor-pointer w-max">
                        <span className="relative z-10 px-3.5 py-2 overflow-hidden font-medium leading-tight flex items-centrer justify-center text-black transition-colors duration-300 ease-out border-2 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease hover:border-white"></span>
                            <span className="relative text-base font-semibold">Search with AI <i className="fa-solid fa-bolt-lightning"></i></span>
                        </span>
                    </button>
                </div>

                {/* RIGHT SIDE — NASA GLTF Embed */}
                <div className="hidden md:flex items-center justify-center pr-20">
                    <iframe
                        src="https://solarsystem.nasa.gov/gltf_embed/2393/"
                        className="w-full h-[70%] rounded-xl border border-white/20 shadow-lg"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}