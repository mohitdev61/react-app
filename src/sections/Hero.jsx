import Reveal from '../components/ui/Reveal'
import { profile } from '../data/profile'
import profilePhoto from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="top" className="section hero">
      <div className="hero-copy">
        <Reveal>
          <div className="availability">
            <span className="availability-dot" />
            Open to MNC opportunities
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="hero-label">SENIOR FULL STACK DEVELOPER</p>
        </Reveal>

        <Reveal delay={140}>
          <h1>
            Building <span>scalable</span>
            <br />
            digital products.
          </h1>
        </Reveal>

        <Reveal delay={190}>
          <p className="hero-description">{profile.summary}</p>
        </Reveal>

        <Reveal delay={240}>
          <div className="hero-buttons">
            <a href="#projects" className="button button-primary">
              Explore my work <span>↗</span>
            </a>
            <a href={profile.resume} className="button" download>
              Download Resume <span>↓</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={290}>
          <div className="hero-stats">
            <div><strong>8+</strong><span>Years experience</span></div>
            <div><strong>Full Stack</strong><span>End-to-end ownership</span></div>
            <div><strong>AWS</strong><span>Cloud & deployment</span></div>
          </div>
        </Reveal>
      </div>

      <Reveal className="hero-visual" delay={170}>
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-cross cross-one" />
        <div className="hero-cross cross-two" />

        <div className="profile-photo-frame">
          <div className="profile-photo-ring" />
          <img
            src={profilePhoto}
            alt={`${profile.name} — Senior Full Stack Developer`}
            className="profile-photo"
          />
        </div>

        <div className="floating-card floating-card-top">
          <span>01</span>
          <b>Full Stack</b>
          <small>8+ years experience</small>
        </div>

        <div className="floating-card floating-card-bottom">
          <span>02</span>
          <b>Cloud Ready</b>
          <small>AWS · APIs · Deployment</small>
        </div>
      </Reveal>
    </section>
  )
}
