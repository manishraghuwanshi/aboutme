import React, { useEffect, useRef } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(`.${styles.section}`);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = {
    webTechnologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'ReactJs', 'WordPress', 'PHP', 'Node.js', 'Express.js'],
    languages: ['Java', 'C++', 'C', 'Python'],
    database: ['MongoDB', 'MySQL'],
    mobile: ['React Native']
  };

  const projects = [
    {
      name: 'Buttonsny',
      tech: 'ReactJS',
      link: 'https://buttonsny.com',
      description: 'ReactJS SPA with client-side routing via React Router'
    },
    {
      name: 'TaskMax',
      tech: 'React Native',
      link: null,
      description: 'Cross-platform task management app with OAuth 2.0 authentication'
    },
    {
      name: 'Kazem\'s Kitchen',
      tech: 'WordPress',
      link: 'https://www.kazemskitchen.com',
      description: 'Restaurant website with custom WordPress theme'
    },
    {
      name: 'Green Injury Law Firm',
      tech: 'WordPress',
      link: 'https://www.greeninjurylawfirm.com',
      description: 'Professional legal services website'
    },
    {
      name: 'My Organica',
      tech: 'WordPress',
      link: 'https://myorganica.com.au',
      description: 'E-commerce platform for organic products'
    }
  ];

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={`${styles.hero} ${styles.section}`} ref={heroRef}>
        <div className={styles.heroBackground}>
          <div className={styles.gridOverlay}></div>
          <div className={styles.gradientOrb}></div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.name}>
              <span className={styles.nameFirst}>Manish</span>
              <span className={styles.nameLast}>Raghuwanshi</span>
            </h1>
            <p className={styles.title}>Frontend Web Developer</p>
            <p className={styles.subtitle}>
              Crafting responsive, high-performance web applications with ReactJS, 
              React Native, and modern frontend technologies
            </p>
            
            <div className={styles.ctaButtons}>
              <a href="#contact" className={styles.primaryBtn}>
                Get in touch
                <span className={styles.arrow}>→</span>
              </a>
              <a href="#projects" className={styles.secondaryBtn}>
                View work
              </a>
            </div>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>1+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Technologies</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`${styles.about} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>About</span>
            <h2 className={styles.sectionTitle}>Building digital experiences</h2>
          </div>

          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p className={styles.paragraph}>
                Frontend Web Developer with 1+ years of experience at <strong>SmartInfosys.net 
                (WebConnect Private Limited)</strong>, specializing in ReactJS, React Native, PHP, 
                and WordPress.
              </p>
              <p className={styles.paragraph}>
                I'm proficient in building responsive and user-friendly interfaces using modern 
                frontend technologies. Passionate about learning and implementing new tools to 
                create impactful and high-performance web applications.
              </p>
              <p className={styles.paragraph}>
                During my tenure at WebConnect Private Limited, I worked on various projects 
                ranging from SPAs to mobile applications, consistently delivering quality solutions 
                that meet client requirements.
              </p>
            </div>

            <div className={styles.education}>
              <div className={styles.educationCard}>
                <div className={styles.eduIcon}>🎓</div>
                <h3 className={styles.eduTitle}>Bachelor of Technology</h3>
                <p className={styles.eduField}>Computer Science and Engineering</p>
                <p className={styles.eduSchool}>Vellore Institute of Technology, Bhopal</p>
                <p className={styles.eduDate}>August 2019 - September 2023</p>
                <p className={styles.eduGrade}>CGPA: 7.53/10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`${styles.experience} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Experience</span>
            <h2 className={styles.sectionTitle}>Professional journey</h2>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>
                <span>May 2023 - Sep 2024</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.jobTitle}>Junior Web Developer</h3>
                <p className={styles.company}>WebConnect Private Limited</p>
                <ul className={styles.responsibilities}>
                  <li>Developed frontend of web applications and mobile apps using ReactJS, PHP, WordPress, and React Native</li>
                  <li>Built a ReactJS SPA for a sound production company with client-side routing via React Router</li>
                  <li>Created reusable functional components using hooks and props-driven rendering</li>
                  <li>Optimized performance with virtual DOM and keyed lists</li>
                  <li>Worked on various client projects delivering high-quality solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`${styles.skills} ${styles.section}`} ref={skillsRef}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Skills</span>
            <h2 className={styles.sectionTitle}>Technical expertise</h2>
          </div>

          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>Web Technologies</h3>
              <div className={styles.skillTags}>
                {skills.webTechnologies.map((skill, index) => (
                  <span key={index} className={styles.skillTag} style={{ animationDelay: `${index * 0.05}s` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>Languages</h3>
              <div className={styles.skillTags}>
                {skills.languages.map((skill, index) => (
                  <span key={index} className={styles.skillTag} style={{ animationDelay: `${index * 0.05}s` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>Database</h3>
              <div className={styles.skillTags}>
                {skills.database.map((skill, index) => (
                  <span key={index} className={styles.skillTag} style={{ animationDelay: `${index * 0.05}s` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>Mobile</h3>
              <div className={styles.skillTags}>
                {skills.mobile.map((skill, index) => (
                  <span key={index} className={styles.skillTag} style={{ animationDelay: `${index * 0.05}s` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`${styles.projects} ${styles.section}`} id="projects">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Projects</span>
            <h2 className={styles.sectionTitle}>Featured work</h2>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <span className={styles.projectTech}>{project.tech}</span>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.projectLink}
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`${styles.contact} ${styles.section}`} id="contact">
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <div className={styles.contactText}>
              <h2 className={styles.contactTitle}>Let's work together</h2>
              <p className={styles.contactSubtitle}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className={styles.contactInfo}>
              <a href="mailto:manishraghuwanshiofficial@gmail.com" className={styles.contactItem}>
                <span className={styles.contactIcon}>✉</span>
                <span className={styles.contactLabel}>manishraghuwanshiofficial@gmail.com</span>
              </a>
              <a href="tel:+918827738124" className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <span className={styles.contactLabel}>+91 8827738124</span>
              </a>
              <a 
                href="https://github.com/manishraghuwanshi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.contactItem}
              >
                <span className={styles.contactIcon}>💻</span>
                <span className={styles.contactLabel}>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/manishraghuwanshi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.contactItem}
              >
                <span className={styles.contactIcon}>🔗</span>
                <span className={styles.contactLabel}>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
