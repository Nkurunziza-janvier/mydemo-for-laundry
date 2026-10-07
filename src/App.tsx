import { useEffect, useState } from "react";

const WHATSAPP = "https://wa.me/250788221335";

const photos = {
  hero: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?auto=format&fit=crop&w=2200&q=88",
  towels: "https://images.unsplash.com/photo-1596433904500-97b901c5d274?auto=format&fit=crop&w=1400&q=85",
  hotel: "https://images.unsplash.com/photo-1731336478850-6bce7235e320?auto=format&fit=crop&w=1400&q=85",
  airbnb: "https://images.unsplash.com/photo-1648132274182-1bd07089d2c9?auto=format&fit=crop&w=1400&q=85",
  resident: "https://images.unsplash.com/photo-1633655442432-620aa55d7ac1?auto=format&fit=crop&w=1400&q=85",
  shirt: "https://images.unsplash.com/photo-1604506847073-4a8e18e07d92?auto=format&fit=crop&w=1600&q=85",
  dry: "https://images.unsplash.com/photo-1589452537441-cf40d0bd7dbf?auto=format&fit=crop&w=1600&q=85",
  ironing: "https://images.unsplash.com/photo-1523212727988-82c430c79c8e?auto=format&fit=crop&w=1600&q=85",
  sofa: "https://images.unsplash.com/photo-1649185885618-4bda573fc4b4?auto=format&fit=crop&w=1600&q=85",
  shoes: "https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1600&q=85",
  delivery: "https://images.unsplash.com/photo-1781695579237-c78e99e22fbb?auto=format&fit=crop&w=1600&q=85",
  cinematic: "https://images.unsplash.com/photo-1747257574419-290e1e535d92?auto=format&fit=crop&w=2200&q=88",
};

const services = [
  { name: "Laundry", description: "Professional everyday laundry care.", image: photos.towels },
  { name: "Dry Cleaning", description: "Care for garments requiring specialized cleaning.", image: photos.dry },
  { name: "Ironing", description: "Freshly pressed clothing with a polished finish.", image: photos.ironing },
  { name: "Sofa Cleaning", description: "Professional cleaning for sofas and upholstery.", image: photos.sofa },
  { name: "Shoe Cleaning", description: "Restore freshness and appearance to your footwear.", image: photos.shoes },
  { name: "Pickup & Delivery", description: "Convenient collection and delivery across Kigali.", image: photos.delivery },
];

const reviews = [
  "The best service we've had in KIGALI!!!!",
  "Both your laundered and dry cleaned suit were fabulous.",
  "Faster on pick up & well cleaned with a good smell.",
  "My laundry is always returned in pristine condition.",
  "You are premium in Kigali.",
  "Only 6 hours service!!!",
];

function Arrow({ down = false }: { down?: boolean }) {
  return <span aria-hidden="true" className={`arrow ${down ? "arrow-down" : ""}`}>{down ? "↓" : "↗"}</span>;
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.45L3 20.5l1.3-4.75A8.5 8.5 0 1 1 20.5 11.7Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.2 7.7c.2-.45.42-.46.7-.47h.58c.18 0 .37.06.47.34l.7 1.7c.08.25.03.43-.1.62l-.5.63c-.16.18-.14.35-.03.55.66 1.12 1.58 1.97 2.75 2.55.2.1.4.1.55-.08l.76-.9c.18-.2.38-.23.61-.14l1.72.82c.25.12.4.18.45.37.06.2.06 1.12-.52 1.67-.52.5-1.2.8-1.96.8-.6 0-1.46-.19-2.78-.76a10.15 10.15 0 0 1-4.38-3.87c-.45-.68-.9-1.65-.9-2.62 0-.54.18-.94.37-1.22Z" fill="currentColor" />
    </svg>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`brand ${light ? "brand-light" : ""}`} aria-label="Laundry Boutique Kigali, home">
      <span>Laundry Boutique</span>
      <small>Kigali</small>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    ["Services", "#services"],
    ["Pickup & Delivery", "#how-it-works"],
    ["Pricing", "#pricing"],
    ["Reviews", "#reviews"],
    ["Contact", "#contact"],
  ];

  return (
    <header className={`site-header ${scrolled || open ? "header-solid" : ""}`}>
      <div className="nav-wrap">
        <Brand light={!scrolled && !open} />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer">Order on WhatsApp <Arrow /></a>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          <span /><span />
        </button>
      </div>
      <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a key={label} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>
          ))}
        </nav>
        <a className="button button-dark" href={WHATSAPP} target="_blank" rel="noreferrer">Order on WhatsApp <Arrow /></a>
        <p>Open until 10 PM · Kigali</p>
      </div>
    </header>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span />{children}</p>;
}

function Hero() {
  return (
    <section id="top" className="hero">
      <img className="hero-image" src={photos.hero} alt="Sunlit hotel bed dressed with fresh white linen" />
      <div className="hero-shade" />
      <div className="hero-content">
        <Eyebrow light>VIP Laundry Pickup & Delivery · Kigali</Eyebrow>
        <h1>Fresh laundry.<br /><em>Without leaving</em><br />your door.</h1>
        <div className="hero-lower">
          <p>Premium laundry and dry cleaning for hotel guests, Airbnb guests and residents in Kigali.</p>
          <div className="hero-actions">
            <a className="button button-ivory" href={WHATSAPP} target="_blank" rel="noreferrer">Order on WhatsApp <Arrow /></a>
            <a className="text-link light-link" href="#services">Explore services <Arrow down /></a>
          </div>
        </div>
      </div>
      <div className="hero-trust"><span aria-hidden="true">★★★★★</span> <strong>5.0</strong> · 31 Google Reviews</div>
      <a className="scroll-mark" href="#trust" aria-label="Scroll to discover"><span>Scroll to discover</span><i /></a>
    </section>
  );
}

function TrustStrip() {
  return (
    <section id="trust" className="trust-strip" aria-label="Business highlights">
      {[
        ["5.0", "Google rating"],
        ["31+", "Reviews"],
        ["Door to door", "Pickup & delivery"],
        ["10 PM", "Open until"],
        ["Kigali", "Rwanda"],
      ].map(([value, label]) => (
        <div key={label}><strong>{value}</strong><span>{label}</span></div>
      ))}
    </section>
  );
}

function Intro() {
  const points = [
    ["Convenience", "Pickup and delivery designed around your schedule."],
    ["Quality", "Professional laundry and dry-cleaning care."],
    ["Speed", "Fast service for customers who value their time."],
    ["Trust", "A 5.0 Google rating from real customers."],
  ];
  return (
    <section className="section intro-section">
      <div className="section-heading">
        <Eyebrow>Laundry care, elevated</Eyebrow>
        <h2>Your laundry.<br /><em>Handled professionally.</em></h2>
      </div>
      <div className="intro-grid">
        <figure className="editorial-image tall-image">
          <img src={photos.towels} alt="Fresh white linen folded with care" loading="lazy" />
          <figcaption><span>01</span> Every detail, considered.</figcaption>
        </figure>
        <div className="intro-copy">
          <p className="lead">From hotel rooms and Airbnb apartments to homes across Kigali, Laundry Boutique makes professional laundry care simple, convenient and reliable.</p>
          <div className="feature-list">
            {points.map(([title, copy], index) => (
              <div className="feature-row" key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Guests() {
  const cards = [
    ["Hotel guests", "Enjoy professional laundry care without leaving your hotel.", "Arrange pickup", photos.hotel],
    ["Airbnb guests", "Fresh clothes delivered directly to your accommodation.", "Request pickup", photos.airbnb],
    ["Residents", "Reliable laundry care for your everyday life.", "Order service", photos.resident],
  ];
  return (
    <section className="section guest-section">
      <div className="section-heading split-heading">
        <div><Eyebrow>For every kind of stay</Eyebrow><h2>Leave the laundry<br /><em>to us.</em></h2></div>
        <p>Designed for guests who don't want laundry to interrupt their stay.</p>
      </div>
      <div className="guest-grid">
        {cards.map(([title, copy, cta, image], index) => (
          <article className={`guest-card card-${index + 1}`} key={title}>
            <img src={image} alt={`${title} laundry service`} loading="lazy" />
            <div className="card-overlay" />
            <div className="guest-card-content">
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{copy}</p><a href={WHATSAPP} target="_blank" rel="noreferrer">{cta} <Arrow /></a></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["Book", "Send us a WhatsApp message."],
    ["Pickup", "We collect from your hotel, Airbnb or residence."],
    ["Care", "Your items receive professional laundry, ironing or dry-cleaning care."],
    ["Delivery", "Your fresh laundry comes back to you."],
  ];
  return (
    <section id="how-it-works" className="process-section">
      <div className="process-top">
        <Eyebrow light>Pickup & delivery</Eyebrow>
        <h2>Four simple steps.<br /><em>Zero hassle.</em></h2>
        <a className="button button-outline" href={WHATSAPP} target="_blank" rel="noreferrer">Schedule pickup <Arrow /></a>
      </div>
      <div className="steps">
        {steps.map(([title, copy], index) => (
          <article className="step" key={title}>
            <span>0{index + 1}</span><i />
            <h3>{title}</h3><p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState(0);
  const service = services[active];
  return (
    <section id="services" className="section services-section">
      <div className="section-heading split-heading">
        <div><Eyebrow>Our services</Eyebrow><h2>Care for more than<br /><em>just clothes.</em></h2></div>
        <p>Thoughtful, professional care for the things you live in and live with.</p>
      </div>
      <div className="service-desktop">
        <div className="service-list" role="tablist" aria-label="Laundry services">
          {services.map((item, index) => (
            <button key={item.name} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={index === active ? "active" : ""} role="tab" aria-selected={index === active}>
              <span>0{index + 1}</span>{item.name}<Arrow />
            </button>
          ))}
        </div>
        <div className="service-visual">
          <img key={service.image} src={service.image} alt={service.name} loading="lazy" />
          <div className="service-caption">
            <p>{service.description}</p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">Request this service <Arrow /></a>
          </div>
        </div>
      </div>
      <div className="service-mobile">
        {services.map((item, index) => (
          <article key={item.name}>
            <img src={item.image} alt={item.name} loading="lazy" />
            <span>0{index + 1}</span><h3>{item.name}</h3><p>{item.description}</p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">Request service <Arrow /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="price-panel">
        <Eyebrow>Pricing</Eyebrow>
        <h2>Simple. Clear.<br /><em>Convenient.</em></h2>
        <p>Need a price before ordering? Contact us on WhatsApp and we'll help you choose the right service.</p>
      </div>
      <div className="price-action">
        <span>Current pricing</span>
        <strong>Available<br />on request</strong>
        <a className="button button-dark" href={WHATSAPP} target="_blank" rel="noreferrer">Ask for pricing <Arrow /></a>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="reviews-section">
      <div className="review-score">
        <Eyebrow light>Google Reviews</Eyebrow>
        <strong>5.0</strong>
        <div aria-label="5 out of 5 stars">★★★★★</div>
        <p>31 Google Reviews</p>
      </div>
      <div className="review-content">
        <h2>Trusted by <em>Kigali.</em></h2>
        <div className="review-rail" aria-label="Customer reviews">
          {reviews.map((review, index) => (
            <blockquote key={review}>
              <span>“</span><p>{review}</p><footer>Google review · 0{index + 1}</footer>
            </blockquote>
          ))}
        </div>
        <a className="text-link light-link" href="https://www.google.com/maps/search/?api=1&query=22CX%2BR7%20Kigali" target="_blank" rel="noreferrer">View on Google <Arrow /></a>
      </div>
    </section>
  );
}

function Reasons() {
  const reasons = ["Fast service", "Pickup & delivery", "Quality cleaning", "Professional care", "Convenience", "Customer trust"];
  return (
    <section className="section reasons-section">
      <div className="section-heading"><Eyebrow>Why people come back</Eyebrow><h2>Fast when it matters.<br /><em>Careful when it counts.</em></h2></div>
      <div className="reason-list">
        {reasons.map((reason, index) => <div key={reason}><span>0{index + 1}</span><strong>{reason}</strong><i /></div>)}
      </div>
    </section>
  );
}

function Cinematic() {
  return (
    <section className="cinematic">
      <img src={photos.cinematic} alt="Soft white fabric in natural light" loading="lazy" />
      <div />
      <article>
        <Eyebrow light>Effortless from start to finish</Eyebrow>
        <h2>Good service should<br /><em>feel effortless.</em></h2>
        <p>From pickup to delivery, Laundry Boutique takes care of the details.</p>
        <a className="button button-ivory" href={WHATSAPP} target="_blank" rel="noreferrer">Order your pickup <Arrow /></a>
      </article>
    </section>
  );
}

function Conversion() {
  return (
    <section className="conversion-section">
      <div className="conversion-mark"><WhatsAppIcon /></div>
      <Eyebrow light>Ready when you are</Eyebrow>
      <h2>Your laundry is<br /><em>one message away.</em></h2>
      <p>Tell us what you need. We'll help arrange your pickup.</p>
      <a className="button button-accent" href={WHATSAPP} target="_blank" rel="noreferrer"><WhatsAppIcon /> Chat on WhatsApp <Arrow /></a>
      <small><i /> Available until 10 PM</small>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-copy">
        <Eyebrow>Visit us in Kigali</Eyebrow>
        <h2>Laundry Boutique<br /><em>Kigali.</em></h2>
        <div className="contact-details">
          <div><span>Address</span><p>342 KN 2 Ave<br />Kigali, Rwanda</p></div>
          <div><span>Contact</span><p><a href="tel:+250788221335">+250 788 221 335</a><br /><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp us</a></p></div>
          <div><span>Opening</span><p>Open until 10 PM</p></div>
          <div><span>Plus code</span><p>22CX+R7 Kigali</p></div>
        </div>
        <a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=22CX%2BR7%20Kigali" target="_blank" rel="noreferrer">Get directions <Arrow /></a>
      </div>
      <a className="map-card" href="https://www.google.com/maps/search/?api=1&query=22CX%2BR7%20Kigali" target="_blank" rel="noreferrer" aria-label="Open Laundry Boutique Kigali in Google Maps">
        <div className="map-grid" />
        <span className="map-pin"><i /></span>
        <strong>342 KN 2 Ave</strong>
        <small>Kigali, Rwanda</small>
        <em>22CX+R7</em>
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div><Brand light /><p>Kigali's convenient premium laundry<br />pickup & delivery service.</p></div>
        <div className="footer-links"><span>Explore</span><a href="#services">Services</a><a href="#how-it-works">Pickup & Delivery</a><a href="#pricing">Pricing</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a></div>
        <div className="footer-links"><span>Contact</span><a href="tel:+250788221335">+250 788 221 335</a><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp <Arrow /></a><p>342 KN 2 Ave<br />Kigali, Rwanda</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Laundry Boutique Kigali</span><span>Women-owned · LGBTQ+ friendly</span><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Intro />
        <Guests />
        <HowItWorks />
        <Services />
        <Pricing />
        <Reviews />
        <Reasons />
        <Cinematic />
        <Conversion />
        <Contact />
      </main>
      <Footer />
      <a className="mobile-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer"><WhatsAppIcon /> Order on WhatsApp <Arrow /></a>
    </>
  );
}
