import { useState } from 'react'

// ─── DATA ──────────────────────────────────────────────
const SERVICES = [
  {
    num: '01',
    name: 'Drywall Repair',
    desc: 'Holes, cracks, water damage, texture matching. Finished smooth and paint-ready.',
  },
  {
    num: '02',
    name: 'Door & Window Install',
    desc: 'Interior and exterior hanging, window replacement, hardware and weatherstripping.',
  },
  {
    num: '03',
    name: 'Tile & Flooring',
    desc: 'Bathroom tile, kitchen backsplash, luxury vinyl plank. Clean lines, solid grout.',
  },
  {
    num: '04',
    name: 'Fixture Replacement',
    desc: 'Light fixtures, ceiling fans, faucets, showerheads, towel bars, hardware swaps.',
  },
  {
    num: '05',
    name: 'Fence & Gate Repair',
    desc: 'Wood, vinyl, and wrought iron. Broken posts, sagging gates, rot replacement.',
  },
  {
    num: '06',
    name: 'Interior Painting',
    desc: 'Rooms, trim, ceilings, cabinets. Proper prep work — no shortcuts.',
  },
  {
    num: '07',
    name: 'Deck & Patio Work',
    desc: 'Board replacement, staining, railing repair, and patio cover installs.',
  },
  {
    num: '08',
    name: 'Assembly & Mounting',
    desc: 'Furniture assembly, TV mounting, shelving, and cabinet installation.',
  },
]

const AREAS = [
  { name: 'Costa Mesa', county: 'Orange County' },
  { name: 'Irvine', county: 'Orange County' },
  { name: 'Newport Beach', county: 'Orange County' },
  { name: 'Huntington Beach', county: 'Orange County' },
  { name: 'Santa Ana', county: 'Orange County' },
  { name: 'Anaheim', county: 'Orange County' },
  { name: 'Garden Grove', county: 'Orange County' },
  { name: 'Fountain Valley', county: 'Orange County' },
]

// ─── NAV ───────────────────────────────────────────────
function Nav() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-logo">
          <div className="nav-logo-main">Mesa Verde Handyman</div>
          <div className="nav-logo-sub">Costa Mesa, CA</div>
        </div>

        <ul className="nav-links">
          {['services', 'about', 'contact'].map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>
                {id}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-phone">
          <div>
            <div className="nav-phone-label">Call or Text</div>
            <div className="nav-phone-number">
              <a href="tel:7145550182">(714) 555-0182</a>
            </div>
          </div>
        </div>

        <button className="nav-quote-btn" onClick={() => scrollTo('contact')}>
          Free Quote
        </button>
      </div>
    </nav>
  )
}

// ─── HERO ──────────────────────────────────────────────
function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="hero-tag">Serving OC Since 2012</div>
        <h1>
          Done Right
          <span className="accent">the First</span>
          Time.
        </h1>
        <p className="hero-desc">
          Licensed and insured handyman serving Costa Mesa, Irvine, Newport Beach, and Huntington Beach. Same-day quotes. No job too small.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Get a Free Quote
          </button>
          <a className="btn-call" href="tel:7145550182">
            Call (714) 555-0182
          </a>
        </div>
        <div className="hero-trust-row">
          {['Licensed & Insured', 'Same-Day Quotes', 'Work Guaranteed', 'OC Local'].map((t) => (
            <div className="trust-pill" key={t}>
              <div className="trust-pill-dot" />
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo hero-photo-main">
          <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80&fit=crop" alt="Contractor working on home repair" />
        </div>
        <div className="hero-photo">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop&crop=center" alt="Tradesman using power tools" />
        </div>
        <div className="hero-photo">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop" alt="Finished home renovation result" />
        </div>
      </div>
    </section>
  )
}

// ─── TRUST BAR ─────────────────────────────────────────
function TrustBar() {
  const items = [
    { num: '12+', text: 'Years in OC' },
    { num: '500+', text: 'Jobs Completed' },
    { num: '8', text: 'Cities Served' },
    { num: '100%', text: 'Work Guaranteed' },
  ]

  return (
    <div className="trust-bar">
      <div className="trust-bar-inner">
        {items.map((item) => (
          <div className="trust-item" key={item.text}>
            <div className="trust-item-num">{item.num}</div>
            <div className="trust-item-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── SERVICES ──────────────────────────────────────────
function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">What We Do</div>
          <h2 className="section-title">Services</h2>
          <p className="section-sub">
            Most jobs completed within the week. We show up on time, clean up after, and don't leave until the work is right.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.num}>
              <div className="service-num">{s.num}</div>
              <div className="service-name">{s.name}</div>
              <div className="service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── ABOUT ─────────────────────────────────────────────
function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-photo-block">
            <div className="about-photo-main">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&fit=crop&crop=face" alt="Marco Vargas, owner of Mesa Verde Handyman" />
            </div>
            <div className="about-photo-accent" />
          </div>

          <div className="about-content">
            <div className="section-tag">About</div>
            <h2 className="section-title">Marco Vargas, Owner</h2>
            <div className="about-body">
              <p>
                I started Mesa Verde Handyman in 2012 after spending a decade on construction crews across OC. Tired of watching homeowners get overcharged for basic repairs, I went out on my own.
              </p>
              <p>
                I do the work myself. No subcontractors, no crews you've never met. When you call Mesa Verde, you get me on the job.
              </p>
              <p>
                Licensed, bonded, and insured. My truck is stocked for most common repairs so I'm not making trips back to the hardware store on your time.
              </p>
            </div>
            <div className="about-stats">
              {[
                { num: '12+', label: 'Years in OC' },
                { num: '500+', label: 'Jobs Completed' },
                { num: '8', label: 'Cities Served' },
                { num: '100%', label: 'Work Guaranteed' },
              ].map((s) => (
                <div className="about-stat" key={s.label}>
                  <div className="about-stat-num">{s.num}</div>
                  <div className="about-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SERVICE AREA ───────────────────────────────────────
function ServiceArea() {
  return (
    <section className="service-area">
      <div className="container">
        <div className="section-tag">Where We Work</div>
        <h2 className="section-title">Service Area</h2>
        <div className="area-grid">
          {AREAS.map((a) => (
            <div className="area-item" key={a.name}>
              <div className="area-item-name">{a.name}</div>
              <div className="area-item-county">{a.county}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT ───────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = () => { if (form.name && form.phone) setSubmitted(true) }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-info">
            <div className="section-tag">Get in Touch</div>
            <h2 className="section-title">Free Quote, Same Day</h2>
            <p className="section-sub">
              Describe the job. We get back to you same day with a number. No obligation.
            </p>
            <div className="contact-info-items">
              {[
                { label: 'Phone / Text', value: <a href="tel:7145550182">(714) 555-0182</a> },
                { label: 'Based In', value: 'Costa Mesa, CA' },
                { label: 'Hours', value: 'Mon–Sat, 7am–6pm' },
                { label: 'Response', value: 'Same Day' },
              ].map((item) => (
                <div className="contact-info-item" key={item.label}>
                  <div className="contact-info-label">{item.label}</div>
                  <div className="contact-info-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-check">
                  <svg viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="form-success-title">Request Received</div>
                <div className="form-success-sub">
                  We'll follow up same day with your quote.
                </div>
              </div>
            ) : (
              <>
                <div className="form-heading">Tell Us About the Job</div>
                <div className="form-subheading">
                  Fill out the form and we'll get back to you with a quote the same day.
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(714) 555-0000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s.num} value={s.name}>{s.name}</option>
                    ))}
                    <option value="Other">Other / Not Listed</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Describe the Job</label>
                  <textarea
                    name="message"
                    placeholder="What needs to be done? Location in OC helps."
                    value={form.message}
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

// ─── FOOTER ────────────────────────────────────────────
function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">Mesa Verde Handyman</div>
            <div className="footer-brand-tagline">
              Licensed and insured home repair serving Orange County since 2012.
            </div>
          </div>

          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links">
              {['services', 'about', 'contact'].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-item">
              <a href="tel:7145550182">(714) 555-0182</a>
            </div>
            <div className="footer-contact-item">Costa Mesa, CA</div>
            <div className="footer-contact-item">Mon–Sat, 7am–6pm</div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © {new Date().getFullYear()} Mesa Verde Handyman. Costa Mesa, CA.
          </div>
          <div className="footer-credit">
            Site by{' '}
            <a href="https://rogers-websolutions.com" target="_blank" rel="noopener noreferrer">
              Rogers Web Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── APP ───────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <ServiceArea />
      <Contact />
      <Footer />
    </>
  )
}
