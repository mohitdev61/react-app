import { profile } from '../data/profile'
import Reveal from '../components/ui/Reveal'

export default function Resume() {
  return (
    <section className="resume-section">
      <Reveal><div className="resume-card">
        <div>
          <p className="section-eyebrow">05 — RESUME & COVER LETTER</p>
          <h2>Ready for the next engineering challenge.</h2>
          <p>
            Download the ATS-friendly resume or editable cover letter and
            tailor it for the role you are applying for.
          </p>
        </div>

        <div className="resume-actions">
          <a className="button button-primary" href={profile.resume} download>
            Download Resume ↓
          </a>
          <a className="button" href={profile.coverLetter} download>
            Download Cover Letter ↓
          </a>
        </div>
      </div></Reveal>
    </section>
  )
}
