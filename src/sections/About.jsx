import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="section about-section">
      <SectionHeading
        number="01"
        eyebrow="ABOUT"
        title="Engineering with a product mindset."
      />

      <div className="about-layout">
        <Reveal><p className="about-lead">
          I build business applications that need to be stable, maintainable
          and ready to scale.
        </p></Reveal>

        <Reveal delay={100}><div className="about-copy">
          <p>
            My experience spans backend architecture, frontend development,
            REST APIs, third-party integrations, real-time communication,
            databases and cloud deployment.
          </p>
          <p>
            I enjoy owning a feature from requirements and database design
            through implementation, testing, deployment and production support.
          </p>
        </div></Reveal>
      </div>
    </section>
  )
}
