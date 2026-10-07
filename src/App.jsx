import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

const technologies = [
  'PHP', 'Laravel', 'React.js', 'Node.js', 'Express.js',
  'AWS', 'MySQL', 'PostgreSQL', 'REST APIs', 'WebSockets',
]

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.style.colorScheme = theme
  }, [theme])

  return (
    <div className={`app theme-${theme}`}>
      <div className="noise" aria-hidden="true" />

      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />

      <main>
        <Hero />

        <div className="tech-marquee" aria-hidden="true">
          <div className="tech-marquee-track">
            {[...technologies, ...technologies].map((tech, index) => (
              <span key={`${tech}-${index}`}>{tech}<b>✦</b></span>
            ))}
          </div>
        </div>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
