import { useState } from 'react'

const SERVICES = [
  {
    icon: '🔨',
    name: 'Drywall Repair',
    desc: 'Holes, cracks, water damage, texture matching. Walls finished smooth and paint-ready.',
  },
  {
    icon: '🚪',
    name: 'Door & Window Install',
    desc: 'Interior and exterior door hanging, window replacement, hardware and weatherstripping.',
  },
  {
    icon: '🪟',
    name: 'Tile & Flooring',
    desc: 'Bathroom tile, kitchen backsplash, luxury vinyl plank. Straight lines, clean grout.',
  },
  {
    icon: '💡',
    name: 'Fixture Replacement',
    desc: 'Light fixtures, ceiling fans, faucets, showerheads, towel bars, and hardware swaps.',
  },
  {
    icon: '🪚',
    name: 'Fence & Gate Repair',
    desc: 'Wood, vinyl, and wrought iron. Broken posts, sagging gates, rot replacement.',
  },
  {
    icon: '🎨',
    name: 'Interior Painting',
    desc: 'Rooms, trim, ceilings, cabinets. Proper prep work included — no shortcuts.',
  },
  {
    icon: '🏗️',
    name: 'Deck & Patio Work',
    desc: 'Board replacement, staining, railing repair, and patio cover installs.',
  },
  {
    icon: '📦',
    name: 'Assembly & Mounting',
    desc: 'Furniture assembly, TV mounting, shelving, and cabinet installation.',
  },
]

const AREAS = [
  'Costa Mesa',
  'Irvine',
  'Newport Beach',
  'Huntington Beach',
  'Santa Ana',
  'Anaheim',
  'Garden Grove',
  'Fountain Valley',
]

function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-logo">
          <span>Mesa Verde</span> Handyman
        </div>
        <ul className="nav-links">
          <li><a href="#services" onClick={e => { e.preventDefault(); scrollTo('services') }}>Services</a></li>
          <li><a href="#about" onClick={e => { e.preventDefault(); scrollTo('about') }}>About</a></li>
          <li><a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact') }}>Contact</a></li>
        </ul>
        <button className="nav-cta" onClick={() => scrollTo('contact')}>
          Get a Quote
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-texture" />
      <div className="hero-accent-bar" />
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">Serving Orange County Since 2012</div>
          <h1>
            Home repairs done <em>right</em> the first time.
          </h1>
          <p className="hero-sub">
            Licensed and insured handyman serving Costa Mesa, Irvine, Newport Beach, and Huntington Beach.
            Same-day quotes. No job too small.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('contact')}>
              Get a Free Quote
            </button>
            <button className="btn-outline" onClick={() => scrollTo('services')}>
              See All Services
            </button>
          </div>
        </div>
        <div className="hero-trust">
          <div className="trust-card">
            <div className="trust-card-label">Experience</div>
            <div className="trust-card-value">12+ Years</div>
          </div>
          <div className="trust-card">
            <div className="trust-card-label">Status</div>
            <div className="trust-card-value">Licensed & Insured</div>
          </div>
          <div className="trust-card">
            <div className="trust-card-label">Quotes</div>
            <div className="trust-card-value">Same Day</div>
          </div>
          <div className="trust-card">
            <div className="trust-card-label">Service Area</div>
            <div className="trust-card-value">All of OC</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BadgeStrip() {
  return (
    <div className="badge-strip">
      <div className="badge-strip-inner">
        <div className="badge-item"><span className="badge-icon">✓</span> Licensed & Insured</div>
        <div className="badge-item"><span className="badge-icon">✓</span> Same-Day Quotes</div>
        <div className="badge-item"><span className="badge-icon">✓</span> No Job Too Small</div>
        <div className="badge-item"><span className="badge-icon">✓</span> OC Local Since 2012</div>
        <div className="badge-item"><span className="badge-icon">✓</span> Work Guaranteed</div>
      </div>
    </div>
  )
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-label">What We Do</div>
        <h2 className="section-title">Services</h2>
        <p className="section-sub">
          Most jobs completed within the week. We show up on time, clean up after, and don't leave until the work is right.
        </p>
      </div>
      <div className="container">
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.name}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-name">{s.name}</div>
              <div className="service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about-texture" />
      <div className="container">
        <div className="about-inner">
          <div className="about-photo">
            <div className="photo-placeholder">Photo placeholder</div>
          </div>
          <div className="about-content">
            <div className="section-label">About</div>
            <h2 className="section-title">Marco Vargas, Owner</h2>
            <div className="about-body">
              <p>
                I started Mesa Verde Handyman in 2012 after spending a decade working construction crews across OC. Tired of watching homeowners get overcharged for basic repairs, I went out on my own.
              </p>
              <p>
                I do the work myself. No subcontractors, no crews you've never met. When you call Mesa Verde, you get me on the job.
              </p>
              <p>
                I'm licensed, bonded, and insured. My truck is stocked for most common repairs so I'm not making trips back to the hardware store on your time.
              </p>
            </div>
            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-num">12+</div>
                <div className="about-stat-label">Years in OC</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">500+</div>
                <div className="about-stat-label">Jobs Completed</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">8</div>
                <div className="about-stat-label">Cities Served</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">100%</div>
                <div className="about-stat-label">Work Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceArea() {
  return (
    <section className="service-area">
      <div className="container">
        <div className="section-label">Where We Work</div>
        <h2 className="section-title">Service Area</h2>
        <div className="area-grid">
          {AREAS.map((area) => (
            <div className="area-item" key={area}>
              <div className="area-dot" />
              <div className="area-name">{area}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [formState, setFormState] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div>
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title">Request a Free Quote</h2>
            <p className="section-sub">
              Describe the job and we'll get back to you the same day with a quote. No obligation.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div>
                  <div className="contact-item-label">Phone / Text</div>
                  <div className="contact-item-value">(714) 555-0182</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div>
                  <div className="contact-item-label">Based In</div>
                  <div className="contact-item-value">Costa Mesa, CA</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">🕐</div>
                <div>
                  <div className="contact-item-label">Hours</div>
                  <div className="contact-item-value">Mon–Sat, 7am–6pm</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>✓</div>
                <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: '8px' }}>Request Received</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>We'll follow up same day with your quote.</div>
              </div>
            ) : (
              <>
                <div className="form-title">Tell Us About the Job</div>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(714) 555-0000"
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Service Needed</label>
                  <select name="service" value={formState.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => (
                      <option key={s.name} value={s.name}>{s.name}</option>
                    ))}
                    <option value="Other">Other / Not Listed</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Describe the Job</label>
                  <textarea
                    name="message"
                    placeholder="What needs to be done? Include location in OC if helpful."
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>
                <button className="form-submit" onClick={handleSubmit}>
                  Send Quote Request
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo"><span>Mesa Verde</span> Handyman</div>
            <div className="footer-tagline">Licensed and insured home repair serving Orange County since 2012.</div>
          </div>
          <ul className="footer-nav">
            <li><a href="#services" onClick={e => { e.preventDefault(); scrollTo('services') }}>Services</a></li>
            <li><a href="#about" onClick={e => { e.preventDefault(); scrollTo('about') }}>About</a></li>
            <li><a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact') }}>Contact</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2024 Mesa Verde Handyman. Costa Mesa, CA. (714) 555-0182</div>
          <div className="footer-credit">
            Site by <a href="https://rogers-websolutions.com" target="_blank" rel="noopener noreferrer">Rogers Web Solutions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <BadgeStrip />
      <Services />
      <About />
      <ServiceArea />
      <Contact />
      <Footer />
    </>
  )
}
