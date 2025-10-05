import type React from "react";
import { Navigation } from "../components/Navbar";
import { Rocket, Globe, Users, Telescope } from "lucide-react";

type AboutDocumentationProps = {};

const AboutDocumentation: React.FC<AboutDocumentationProps> = () => {
  return (
    <div style={styles.container}>
      <Navigation />

      {/* Hero Section with NASA imagery */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>About Our Mission</h1>
          <p style={styles.heroSubtitle}>
            Exploring the cosmos and expanding human knowledge beyond Earth
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Mission Statement */}
        <section style={styles.section}>
          <div style={styles.sectionContent}>
            <h2 style={styles.sectionTitle}>Our Mission</h2>
            <p style={styles.sectionText}>
              We are dedicated to pioneering the future of space exploration, scientific discovery,
              and aeronautics research. Our mission is to reach for new heights and reveal the unknown
              for the benefit of humankind. Through cutting-edge technology and innovative research,
              we continue to push the boundaries of what is possible in space exploration.
            </p>
          </div>
        </section>

        {/* Featured Image Grid */}
        <section style={styles.imageGrid}>
          <div style={styles.imageCard}>
            <img
              src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Space exploration"
              style={styles.gridImage}
            />
            <div style={styles.imageCaption}>International Space Station</div>
          </div>
          <div style={styles.imageCard}>
            <img
              src="https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Mars rover"
              style={styles.gridImage}
            />
            <div style={styles.imageCaption}>Mars Exploration Program</div>
          </div>
          <div style={styles.imageCard}>
            <img
              src="https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Rocket launch"
              style={styles.gridImage}
            />
            <div style={styles.imageCaption}>Launch Systems</div>
          </div>
        </section>

        {/* Core Values */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What We Do</h2>
          <div style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <div style={styles.iconWrapper}>
                <Rocket size={32} style={styles.icon} />
              </div>
              <h3 style={styles.valueTitle}>Space Exploration</h3>
              <p style={styles.valueText}>
                Leading missions to explore our solar system and beyond, from Mars rovers
                to deep space probes that venture into the unknown reaches of our universe.
              </p>
            </div>

            <div style={styles.valueCard}>
              <div style={styles.iconWrapper}>
                <Globe size={32} style={styles.icon} />
              </div>
              <h3 style={styles.valueTitle}>Earth Science</h3>
              <p style={styles.valueText}>
                Monitoring our planet's vital signs, studying climate patterns, and
                understanding Earth's systems to protect our home for future generations.
              </p>
            </div>

            <div style={styles.valueCard}>
              <div style={styles.iconWrapper}>
                <Users size={32} style={styles.icon} />
              </div>
              <h3 style={styles.valueTitle}>Human Spaceflight</h3>
              <p style={styles.valueText}>
                Advancing human presence in space through the International Space Station
                and preparing for future crewed missions to the Moon and Mars.
              </p>
            </div>

            <div style={styles.valueCard}>
              <div style={styles.iconWrapper}>
                <Telescope size={32} style={styles.icon} />
              </div>
              <h3 style={styles.valueTitle}>Science & Research</h3>
              <p style={styles.valueText}>
                Conducting groundbreaking research in astrophysics, planetary science,
                and technology development to answer fundamental questions about our universe.
              </p>
            </div>
          </div>
        </section>

        {/* Large Feature Image */}
        <section style={styles.featureImageSection}>
          <img
            src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Earth from space"
            style={styles.featureImage}
          />
          <div style={styles.featureCaption}>
            <h3 style={styles.featureCaptionTitle}>Our Home Planet</h3>
            <p style={styles.featureCaptionText}>
              Viewing Earth from space provides a unique perspective that inspires us to
              protect and understand our planet while reaching for the stars.
            </p>
          </div>
        </section>

        {/* History Timeline */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Journey</h2>
          <div style={styles.timeline}>
            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>Present</div>
              <div style={styles.timelineContent}>
                <h4 style={styles.timelineTitle}>Artemis Program</h4>
                <p style={styles.timelineText}>
                  Preparing to return humans to the Moon and establish a sustainable presence
                  as a stepping stone to Mars exploration.
                </p>
              </div>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>2020s</div>
              <div style={styles.timelineContent}>
                <h4 style={styles.timelineTitle}>Mars 2020 Mission</h4>
                <p style={styles.timelineText}>
                  Perseverance rover and Ingenuity helicopter continue to explore the
                  Red Planet, searching for signs of ancient life.
                </p>
              </div>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>2021</div>
              <div style={styles.timelineContent}>
                <h4 style={styles.timelineTitle}>James Webb Space Telescope</h4>
                <p style={styles.timelineText}>
                  Launched the most powerful space telescope ever built, revealing
                  unprecedented views of the early universe.
                </p>
              </div>
            </div>

            <div style={styles.timelineItem}>
              <div style={styles.timelineYear}>1998</div>
              <div style={styles.timelineContent}>
                <h4 style={styles.timelineTitle}>International Space Station</h4>
                <p style={styles.timelineText}>
                  Assembly began on humanity's laboratory in space, fostering international
                  cooperation and scientific discovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Join Us in Exploring the Unknown</h2>
          <p style={styles.ctaText}>
            Whether you're a student, educator, researcher, or space enthusiast, there are
            countless ways to engage with our mission and be part of humanity's journey to the stars.
          </p>
        </section>
      </div>

      <style>{mediaQueries}</style>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0a0a1e",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  heroSection: {
    position: "relative",
    height: "70vh",
    minHeight: "500px",
    backgroundImage: "url(https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1600)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 20, 0.6)",
  },
  heroContent: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    padding: "0 24px",
    maxWidth: "900px",
  },
  heroTitle: {
    fontSize: "4rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "24px",
    letterSpacing: "-0.02em",
    textShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
  },
  heroSubtitle: {
    fontSize: "1.5rem",
    color: "#e0e7ff",
    lineHeight: "1.6",
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
  },
  mainContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px 80px",
  },
  section: {
    marginTop: "80px",
  },
  sectionContent: {
    maxWidth: "800px",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "24px",
    borderLeft: "4px solid #fc3d21",
    paddingLeft: "20px",
  },
  sectionText: {
    fontSize: "1.125rem",
    lineHeight: "1.8",
    color: "#cbd5e1",
    marginBottom: "20px",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    marginTop: "60px",
  },
  imageCard: {
    position: "relative",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#1e293b",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  gridImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    display: "block",
  },
  imageCaption: {
    padding: "16px",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#e0e7ff",
    backgroundColor: "#1e293b",
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "32px",
    marginTop: "40px",
  },
  valueCard: {
    padding: "32px",
    backgroundColor: "#1e293b",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "all 0.3s ease",
  },
  iconWrapper: {
    width: "60px",
    height: "60px",
    borderRadius: "12px",
    backgroundColor: "rgba(252, 61, 33, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  icon: {
    color: "#fc3d21",
  },
  valueTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "12px",
    marginTop: 0,
  },
  valueText: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#94a3b8",
    margin: 0,
  },
  featureImageSection: {
    position: "relative",
    marginTop: "80px",
    borderRadius: "12px",
    overflow: "hidden",
  },
  featureImage: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    display: "block",
  },
  featureCaption: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "32px",
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)",
  },
  featureCaptionTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "12px",
    marginTop: 0,
  },
  featureCaptionText: {
    fontSize: "1.125rem",
    lineHeight: "1.6",
    color: "#cbd5e1",
    margin: 0,
    maxWidth: "600px",
  },
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    marginTop: "40px",
    borderLeft: "2px solid #fc3d21",
    paddingLeft: "32px",
  },
  timelineItem: {
    position: "relative",
    display: "flex",
    gap: "32px",
  },
  timelineYear: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#fc3d21",
    minWidth: "100px",
  },
  timelineContent: {
    flex: 1,
  },
  timelineTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#e0e7ff",
    marginBottom: "8px",
    marginTop: 0,
  },
  timelineText: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#94a3b8",
    margin: 0,
  },
  ctaSection: {
    marginTop: "80px",
    padding: "60px 40px",
    backgroundColor: "#1e293b",
    borderRadius: "12px",
    textAlign: "center",
    border: "1px solid rgba(252, 61, 33, 0.2)",
  },
  ctaTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "20px",
    marginTop: 0,
  },
  ctaText: {
    fontSize: "1.125rem",
    lineHeight: "1.8",
    color: "#cbd5e1",
    maxWidth: "700px",
    margin: "0 auto",
  },
};

const mediaQueries = `
  @media (hover: hover) {
    .imageCard:hover {
      transform: translateY(-4px);
    }

    .valueCard:hover {
      background-color: rgba(30, 41, 59, 0.8) !important;
      border-color: rgba(252, 61, 33, 0.3) !important;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem !important;
    }

    h2 {
      font-size: 2rem !important;
    }

    .heroSubtitle {
      font-size: 1.125rem !important;
    }

    .imageGrid {
      grid-template-columns: 1fr !important;
    }

    .valuesGrid {
      grid-template-columns: 1fr !important;
    }

    .featureImage {
      height: 300px !important;
    }

    .timeline {
      padding-left: 20px !important;
    }

    .timelineItem {
      flex-direction: column !important;
      gap: 12px !important;
    }

    .ctaSection {
      padding: 40px 24px !important;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem !important;
    }

    h2 {
      font-size: 1.5rem !important;
    }
  }
`;

export default AboutDocumentation;
