export default function SectionHeading({ number, eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-eyebrow">{number} — {eyebrow}</p>
        <h2>{title}</h2>
      </div>

      {note && <span className="section-note">{note}</span>}
    </div>
  )
}
