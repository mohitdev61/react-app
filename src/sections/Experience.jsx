import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        number="03"
        eyebrow="EXPERIENCE"
        title="What I bring to an MNC engineering team."
      />

      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-row" key={item.period}>
            <span className="experience-number">{item.period}</span>

            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

            <span className="experience-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}
