import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        number="02"
        eyebrow="TECH STACK"
        title="Tools I use to ship."
        note="ATS-friendly technology keywords"
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <span className="skill-number">/ {group.title}</span>

            <div className="skill-list">
              {group.items.map((skill) => (
                <span className="skill-chip" key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
