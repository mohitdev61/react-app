import { useState } from 'react'
import { profile } from '../../data/profile'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <a href="#top" className="brand" onClick={close}>
        <span className="brand-mark">MD</span>
        <span className="brand-name">{profile.name}</span>
      </a>

      <nav className={`nav-links ${open ? 'is-open' : ''}`}>
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={close}>{label}</a>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '☀' : '☾'}
        </button>

        <a className="nav-button" href="#contact" onClick={close}>
          Let&apos;s talk <span>↗</span>
        </a>

        <button
          className={`menu-button ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <i /><i />
        </button>
      </div>
    </header>
  )
}
