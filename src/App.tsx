import { useState } from 'react'
import './App.css'

const services = [
  { name: 'Party Makeup', price: '800 SEK', duration: '60 min' }, { name: 'Bridal Makeup', price: '2,500 SEK', duration: '120 min' },
  { name: 'Engagement Makeup', price: '1,500 SEK', duration: '90 min' }, { name: 'Natural Makeup', price: '600 SEK', duration: '45 min' },
  { name: 'Hair Styling', price: '500 SEK', duration: '45 min' }, { name: 'Haircut & Styling', price: '650 SEK', duration: '60 min' },
  { name: 'Hair Treatment', price: '700 SEK', duration: '60 min' }, { name: 'Bridal Hair Styling', price: '1,200 SEK', duration: '90 min' },
]
const artists = [
  { name: 'Sania', role: 'Makeup Artist', image: '/images/sania.jpg', alt: 'Sania, makeup artist, in a softly lit studio portrait' },
  { name: 'Aisha', role: 'Hair Stylist', image: '/images/aisha.jpg', alt: 'Aisha, hair stylist, in a softly lit portrait' },
  { name: 'Meera', role: 'Makeup & Hair Artist', image: '/images/meera.jpg', alt: 'Meera, makeup and hair artist, smiling in a portrait' },
]
const gallery = [
  { image: '/images/bridal-gallery.jpg', alt: 'Bridal beauty look with softly polished makeup', label: 'Bridal beauty' },
  { image: '/images/party-gallery.jpg', alt: 'Glowing party makeup with elegant eye detail', label: 'Party glow' },
  { image: '/images/hair-service.jpg', alt: 'Glossy, professionally styled hair', label: 'Beautifully styled' },
  { image: '/images/salon-gallery.jpg', alt: 'A calm and welcoming salon interior', label: 'Our studio' },
]
const benefits = [
  ['01', 'Professional Artists', 'Thoughtful technique and a careful eye for every detail.'],
  ['02', 'Personalised Beauty Services', 'Beauty services shaped around your features, style and occasion.'],
  ['03', 'Quality Products', 'We choose trusted products that feel as lovely as they look.'],
  ['04', 'Comfortable Experience', 'Take a breath, settle in and enjoy a little time just for you.'],
]
const testimonials = [
  ['I felt listened to from the very first moment. My makeup looked like me, only more radiant.', 'Elina R.', 'Party makeup'],
  ['Such a warm studio and such a beautiful result. My hair stayed perfect all evening.', 'Nora S.', 'Hair styling'],
  ['The whole experience felt calm and personal. I left feeling completely confident.', 'Maya K.', 'Bridal beauty'],
]
const currentYear = new Date().getFullYear()
const navLinks = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Our Artists', '#artists'], ['Gallery', '#gallery'], ['Contact', '#contact']]

function App() {
  const [noticeOpen, setNoticeOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const book = () => setNoticeOpen(true)

  return <>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Sania Beauty Studio home" onClick={closeMenu}><span className="brand-mark" aria-hidden="true">S</span><span className="brand-name">Sania <span>Beauty Studio</span></span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /><span /></button>
      <nav id="primary-navigation" className={menuOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Main navigation">{navLinks.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}</nav>
      <button className="button button-dark header-book" type="button" onClick={book}>Book Appointment <span aria-hidden="true">↗</span></button>
    </header>
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <img className="hero-photo" src="/images/hero-beauty.png" alt="A makeup artist applying a soft, radiant look in a warm beauty studio" />
        <div className="hero-shade" />
        <div className="hero-copy"><p className="eyebrow eyebrow-light"><span /> A little moment, just for you</p><h1 id="hero-title">Your Beauty,<br /><em>Our Passion.</em></h1><p className="hero-description">Discover the art of beauty with personalised makeup and hair services designed to make you feel confident, elegant and beautiful.</p><div className="hero-actions"><button className="button button-blush" type="button" onClick={book}>Book an Appointment <span aria-hidden="true">↗</span></button><a className="button button-outline-light" href="#services">Explore Our Services <span aria-hidden="true">↓</span></a></div><div className="hero-note"><span className="hero-note-line" /> Thoughtful beauty. A feeling that stays.</div></div>
        <a className="hero-scroll" href="#about" aria-label="Scroll to learn about the studio"><span /> Scroll to discover</a><span className="hero-index" aria-hidden="true">01 — 04</span>
      </section>
      <section className="intro section-wrap" id="about" aria-labelledby="about-title">
        <div className="intro-image-wrap"><img src="/images/about-studio.jpg" alt="A beauty artist preparing a client for a personalised makeup session" loading="lazy" /><div className="image-caption"><span aria-hidden="true">✳</span> Beauty, at your pace.</div><span className="image-frame" aria-hidden="true" /></div>
        <div className="intro-copy"><p className="eyebrow"><span /> A warm welcome</p><h2 id="about-title">Welcome to<br /><em>Sania Beauty Studio</em></h2><p className="lead">A welcoming space to feel like the most beautiful version of yourself.</p><p>From polished makeup to considered hair styling, we create personal beauty experiences for the moments that matter — and the ones that are simply yours. Our artists take time to understand your style, so you can feel at ease from the moment you arrive.</p><a className="text-link" href="#artists">Meet the artists <span aria-hidden="true">→</span></a><div className="signature">With care, <span>Sania</span></div></div><div className="intro-side-note" aria-hidden="true">YOUR MOMENT OF BEAUTY</div>
      </section>
      <section className="services-section" id="services" aria-labelledby="services-title"><div className="section-wrap">
        <div className="section-heading section-heading-centered"><p className="eyebrow"><span /> The art of feeling beautiful <span /></p><h2 id="services-title">A service for <em>every occasion</em></h2><p>Considered touches, expert hands and a look that feels entirely yours.</p></div>
        <div className="service-groups">
          <article className="service-group"><div className="service-image"><img src="/images/makeup-service.jpg" alt="Makeup brushes and beauty essentials ready for a client" loading="lazy" /><span className="service-image-label">01 / Makeup</span></div><div className="service-list"><div className="service-group-heading"><div><p className="eyebrow">Makeup artistry</p><h3>Makeup</h3></div><span className="service-flower" aria-hidden="true">✳</span></div>{services.slice(0, 4).map((service) => <ServiceItem key={service.name} {...service} onBook={book} />)}</div></article>
          <article className="service-group service-group-reverse"><div className="service-image"><img src="/images/hair-service.jpg" alt="Beautifully finished hair after professional salon styling" loading="lazy" /><span className="service-image-label">02 / Hair</span></div><div className="service-list"><div className="service-group-heading"><div><p className="eyebrow">Hair, with intention</p><h3>Hair</h3></div><span className="service-flower" aria-hidden="true">✳</span></div>{services.slice(4).map((service) => <ServiceItem key={service.name} {...service} onBook={book} />)}</div></article>
        </div><p className="price-note">Sample prices and durations shown for illustration.</p>
      </div></section>
      <section className="artists-section section-wrap" id="artists" aria-labelledby="artists-title"><div className="section-heading artists-heading"><div><p className="eyebrow"><span /> The people behind the artistry</p><h2 id="artists-title">Meet our <em>artists</em></h2></div><p>Good beauty begins with listening. Meet the hands and hearts that make your visit special.</p></div>
        <div className="artist-grid">{artists.map((artist, index) => <article className="artist-card" key={artist.name}><div className="artist-photo"><img src={artist.image} alt={artist.alt} loading="lazy" /><span className="artist-number">0{index + 1}</span></div><div className="artist-info"><div><h3>{artist.name}</h3><p>{artist.role}</p></div><span className="artist-arrow" aria-hidden="true">↗</span></div></article>)}</div>
      </section>
      <section className="gallery-section" id="gallery" aria-labelledby="gallery-title"><div className="section-wrap"><div className="section-heading gallery-heading"><div><p className="eyebrow"><span /> Little details, lasting memories</p><h2 id="gallery-title">A glimpse of <em>our world</em></h2></div><p>Every look tells a story. Here are a few moments from our studio.</p></div><div className="gallery-grid">{gallery.map((item, index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={item.label}><img src={item.image} alt={item.alt} loading="lazy" /><figcaption><span>{item.label}</span><span aria-hidden="true">↗</span></figcaption></figure>)}</div></div></section>
      <section className="benefits-section" aria-labelledby="benefits-title"><div className="section-wrap benefits-wrap"><div className="benefits-intro"><p className="eyebrow eyebrow-light"><span /> The Sania feeling</p><h2 id="benefits-title">Beauty should feel<br /><em>like you.</em></h2><p>We believe the best result is the one that lets your own beauty shine through.</p><a className="button button-blush" href="#contact">Come say hello <span aria-hidden="true">↗</span></a></div><div className="benefit-list">{benefits.map(([number, title, text]) => <article className="benefit-row" key={number}><span className="benefit-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><span className="benefit-sparkle" aria-hidden="true">✳</span></article>)}</div></div></section>
      <section className="testimonials-section section-wrap" aria-labelledby="testimonials-title"><div className="section-heading section-heading-centered"><p className="eyebrow"><span /> Kind words from our guests <span /></p><h2 id="testimonials-title">A little love <em>shared</em></h2></div><div className="testimonial-grid">{testimonials.map(([quote, name, occasion]) => <article className="testimonial-card" key={name}><div className="stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“{quote}”</blockquote><div className="testimonial-person"><span className="testimonial-initial" aria-hidden="true">{name.charAt(0)}</span><div><strong>{name}</strong><span>{occasion} · Fictional testimonial</span></div></div></article>)}</div></section>
      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="section-wrap contact-wrap"><div className="contact-copy"><p className="eyebrow"><span /> Your next lovely moment</p><h2 id="contact-title">We'd love to<br /><em>meet you.</em></h2><p>Drop by, get in touch, or simply come and see our little corner of beauty.</p><button className="button button-dark" type="button" onClick={book}>Book Appointment <span aria-hidden="true">↗</span></button></div><div className="contact-details"><div className="contact-block"><h3>Find the studio</h3><p>[Studio Address]</p><p>[Phone Number]</p><p>[Email Address]</p></div><div className="contact-block hours-block"><h3>Opening hours</h3><p><span>Monday – Friday</span><span>10:00 – 19:00</span></p><p><span>Saturday</span><span>10:00 – 17:00</span></p><p><span>Sunday</span><span>Closed</span></p></div><p className="contact-placeholder">Contact details are placeholders and will be updated.</p></div></div></section>
    </main>
    <footer className="site-footer"><div className="footer-main section-wrap"><div className="footer-brand"><a className="brand brand-footer" href="#home"><span className="brand-mark" aria-hidden="true">S</span><span className="brand-name">Sania <span>Beauty Studio</span></span></a><p>A little moment, just for you.<br />Beauty with care, always.</p></div><div className="footer-column"><h2>Explore</h2>{navLinks.slice(1).map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div><div className="footer-column"><h2>Say hello</h2><span>[Studio Address]</span><span>[Phone Number]</span><span>[Email Address]</span></div><div className="footer-column"><h2>Follow along</h2><a href="#contact">Instagram <span>↗</span></a><a href="#contact">Facebook <span>↗</span></a><small>Social links coming soon</small></div></div><div className="footer-bottom section-wrap"><span>© {currentYear} Sania Beauty Studio</span><span>Made with care, for your moments of beauty.</span><a href="#home">Back to top ↑</a></div></footer>
    {noticeOpen && <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setNoticeOpen(false) }}><section className="booking-dialog" role="dialog" aria-modal="true" aria-labelledby="booking-title"><button className="dialog-close" type="button" aria-label="Close booking information" onClick={() => setNoticeOpen(false)}>×</button><span className="dialog-flower" aria-hidden="true">✳</span><p className="eyebrow"><span /> A note from the studio</p><h2 id="booking-title">Online booking<br /><em>is coming soon.</em></h2><p>We’re not taking online appointments just yet. Our contact details are placeholders for now, so please check back soon for booking information.</p><button className="button button-dark" type="button" onClick={() => setNoticeOpen(false)}>Lovely, thank you</button></section></div>}
  </>
}
function ServiceItem({ name, price, duration, onBook }: { name: string; price: string; duration: string; onBook: () => void }) {
  return <div className="service-item"><div><h4>{name}</h4><p>{duration}</p></div><div className="service-price"><strong>{price}</strong><button type="button" onClick={onBook} aria-label={`Booking information for ${name}`}>+</button></div></div>
}
export default App


