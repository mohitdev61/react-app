import { profile } from '../../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>Full Stack Developer • React • PHP • Laravel • Node.js • AWS</span>
    </footer>
  )
}
