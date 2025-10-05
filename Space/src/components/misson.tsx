"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Navigation } from "../components/Navbar" // adjust the path if needed

export default function MissionsExperimentsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const missions = [
    {
      name: "Artemis I",
      description: "Uncrewed test flight around the Moon, paving the way for human exploration.",
      year: "2022",
      status: "Completed",
      type: "mission",
    },
    {
      name: "James Webb Space Telescope",
      description: "Revolutionary infrared observatory revealing the earliest galaxies and exoplanet atmospheres.",
      year: "2021",
      status: "Active",
      type: "mission",
    },
    {
      name: "Mars Perseverance Rover",
      description: "Searching for signs of ancient microbial life and collecting samples for future return to Earth.",
      year: "2020",
      status: "Active",
      type: "mission",
    },
  ]

  const experiments = [
    {
      name: "ISS Plant Growth",
      description: "Studying how plants grow in microgravity to support long-duration space missions.",
      year: "2023",
      status: "Active",
      type: "experiment",
    },
    {
      name: "Protein Crystal Growth",
      description: "Growing protein crystals in space for pharmaceutical research and drug development.",
      year: "2023",
      status: "Active",
      type: "experiment",
    },
    {
      name: "Radiation Shielding Test",
      description: "Testing new materials to protect astronauts from cosmic radiation on deep space missions.",
      year: "2024",
      status: "Active",
      type: "experiment",
    },
  ]

  return (
    <div style={styles.container}>
        <Navigation />
      {/* Animated background elements */}
      <div style={styles.starsBackground}></div>
      <div style={styles.satellite}></div>
      <div style={styles.planet}></div>

      {/* Main content */}
      <div style={styles.content}>
        {/* Header */}
        <header style={styles.header}>
          <h1 className="mt-5"
            style={{
              ...styles.title,
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(-20px)",
              transition: "all 1s ease-out",
            }}
          >
            Missions & Experiments
          </h1>
          <p
            style={{
              ...styles.subtitle,
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1.5s ease-out 0.3s",
            }}
          >
            Exploring the cosmos, one discovery at a time
          </p>
        </header>

        {/* Missions Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.glowText}>Active Missions</span>
          </h2>
          <div style={styles.grid}>
            {missions.map((mission, index) => (
              <div
                key={mission.name}
                style={{
                  ...styles.card,
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                  transition: `all 0.8s ease-out ${index * 0.2}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.03)"
                  e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(100, 200, 255, 0.6), inset 0 0 20px rgba(100, 200, 255, 0.1)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)"
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(100, 200, 255, 0.3), inset 0 0 10px rgba(100, 200, 255, 0.05)"
                }}
              >
                <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>{mission.name}</h3>
                  <span
                    style={{
                      ...styles.badge,
                      ...(mission.status === "Active" ? styles.badgeActive : styles.badgeCompleted),
                    }}
                  >
                    {mission.status}
                  </span>
                </div>
                <p style={styles.cardDescription}>{mission.description}</p>
                <div style={styles.cardFooter}>
                  <span style={styles.year}>📅 {mission.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Animated Separator */}
        <div style={styles.separator}>
          <div style={styles.separatorLine}></div>
          <span style={styles.separatorIcon}>✦</span>
          <div style={styles.separatorLine}></div>
        </div>

        {/* Experiments Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.glowText}>Research Experiments</span>
          </h2>
          <div style={styles.grid}>
            {experiments.map((experiment, index) => (
              <div
                key={experiment.name}
                style={{
                  ...styles.card,
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                  transition: `all 0.8s ease-out ${(index + 3) * 0.2}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.03)"
                  e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(150, 100, 255, 0.6), inset 0 0 20px rgba(150, 100, 255, 0.1)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)"
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(150, 100, 255, 0.3), inset 0 0 10px rgba(150, 100, 255, 0.05)"
                }}
              >
                <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>{experiment.name}</h3>
                  <span
                    style={{
                      ...styles.badge,
                      ...(experiment.status === "Active" ? styles.badgeActive : styles.badgeCompleted),
                    }}
                  >
                    {experiment.status}
                  </span>
                </div>
                <p style={styles.cardDescription}>{experiment.description}</p>
                <div style={styles.cardFooter}>
                  <span style={styles.year}>📅 {experiment.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>✨ Inspired by NASA's vision for interplanetary exploration</p>
        </footer>
      </div>

      {/* Inline keyframe animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
      `}</style>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #000000, #0a0a1a, #1a0a2e, #0f0520)",
    position: "relative",
    overflow: "hidden",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  starsBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(2px 2px at 20% 30%, white, transparent),
      radial-gradient(2px 2px at 60% 70%, white, transparent),
      radial-gradient(1px 1px at 50% 50%, white, transparent),
      radial-gradient(1px 1px at 80% 10%, white, transparent),
      radial-gradient(2px 2px at 90% 60%, white, transparent),
      radial-gradient(1px 1px at 33% 80%, white, transparent),
      radial-gradient(1px 1px at 15% 90%, white, transparent)
    `,
    backgroundSize: "200% 200%",
    animation: "twinkle 3s ease-in-out infinite",
    opacity: 0.6,
  },
  satellite: {
    position: "absolute",
    top: "10%",
    right: "10%",
    width: "40px",
    height: "40px",
    background: "linear-gradient(135deg, #64c8ff, #4a9eff)",
    borderRadius: "50%",
    boxShadow: "0 0 20px rgba(100, 200, 255, 0.8)",
    animation: "float 6s ease-in-out infinite",
  },
  planet: {
    position: "absolute",
    bottom: "15%",
    left: "5%",
    width: "100px",
    height: "100px",
    background: "radial-gradient(circle at 30% 30%, #ff6b9d, #c44569)",
    borderRadius: "50%",
    boxShadow: "0 0 40px rgba(255, 107, 157, 0.6), inset -10px -10px 30px rgba(0, 0, 0, 0.5)",
    animation: "orbit 20s linear infinite",
  },
  content: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
  },
  header: {
    textAlign: "center" as const,
    marginBottom: "80px",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    background: "white",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "20px",
    textShadow: "0 0 30px rgba(100, 200, 255, 0.5)",
    letterSpacing: "2px",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#a0aec0",
    fontWeight: 300,
    letterSpacing: "1px",
  },
  section: {
    marginBottom: "80px",
  },
  sectionTitle: {
    fontSize: "2rem",
    textAlign: "center" as const,
    marginBottom: "50px",
  },
  glowText: {
    color: "#ffffff",
    textShadow: "0 0 10px rgba(100, 200, 255, 0.8), 0 0 20px rgba(100, 200, 255, 0.6)",
    letterSpacing: "3px",
    fontWeight: 600,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "rgba(15, 15, 35, 0.7)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(100, 200, 255, 0.2)",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 0 20px rgba(100, 200, 255, 0.3), inset 0 0 10px rgba(100, 200, 255, 0.05)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "15px",
    gap: "10px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#ffffff",
    fontWeight: 600,
    margin: 0,
    textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
  },
  badge: {
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "0.75rem",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    whiteSpace: "nowrap" as const,
  },
  badgeActive: {
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "#ffffff",
    boxShadow: "0 0 15px rgba(16, 185, 129, 0.6)",
  },
  badgeCompleted: {
    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
    color: "#ffffff",
    boxShadow: "0 0 15px rgba(99, 102, 241, 0.6)",
  },
  cardDescription: {
    color: "#cbd5e0",
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  year: {
    color: "#a0aec0",
    fontSize: "0.9rem",
    fontWeight: 500,
  },
  separator: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "60px 0",
    gap: "20px",
  },
  separatorLine: {
    flex: 1,
    height: "2px",
    background: "linear-gradient(to right, transparent, rgba(100, 200, 255, 0.5), transparent)",
    animation: "pulse 2s ease-in-out infinite",
  },
  separatorIcon: {
    fontSize: "1.5rem",
    color: "#64c8ff",
    textShadow: "0 0 20px rgba(100, 200, 255, 0.8)",
    animation: "pulse 2s ease-in-out infinite",
  },
  footer: {
    textAlign: "center" as const,
    marginTop: "80px",
    paddingTop: "40px",
    borderTop: "1px solid rgba(100, 200, 255, 0.2)",
  },
  footerText: {
    color: "#718096",
    fontSize: "1rem",
    fontStyle: "italic",
    letterSpacing: "1px",
  },
}