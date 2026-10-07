import { profile } from '../data/profile'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <SectionHeading
        number="06"
        eyebrow="CONTACT"
        title="Have a product worth building?"
      />

      <Reveal><p className="contact-text">
        For Full Stack Developer, Senior Software Engineer or product
        development opportunities, let&apos;s start a conversation.
      </p>

      <div className="contact-buttons">
        <a className="button button-primary" href={`mailto:${profile.email}`}>
          Email me ↗
        </a>
        <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a className="button" href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>

      <div className="contact-meta">
        <span>{profile.location}</span>
        <span>{profile.email}</span>
        <span>{profile.phone}</span>
      </div></Reveal>
    </section>
  )
}
