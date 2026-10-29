import { ArrowDownRight, ArrowUpRight, Code2, Camera, Link, Phone, Sparkles } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/nandish87', label: 'GitHub', Icon: Code2 },
  { href: 'https://www.linkedin.com/in/nandish-y-238987357?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn', Icon: Link },
  { href: 'https://www.instagram.com/nandish_yalapala/', label: 'Instagram', Icon: Camera },
];

const focus = [
  ['01', 'Learning by building', 'Exploring technology through practical projects, experiments, and continuous learning.'],
  ['02', 'Open-source journey', 'Documenting my growth through code, collaboration, and public work on GitHub.'],
  ['03', 'Creator mindset', 'Developing an interest in sharing useful ideas, tech learnings, and honest progress.'],
];

const faqs = [
  ['Who is Y. Nandish?', 'Y. Nandish is a B.Tech student from Tamil Nadu, India, exploring technology, building projects, and developing a creator mindset.'],
  ['What is this portfolio for?', 'It is a home for Nandish’s work, learning journey, technical experiments, and future projects.'],
  ['How can I connect?', 'You can reach Nandish by email, phone, GitHub, LinkedIn, or Instagram.'],
];

export default function Home() {
  const personSchema = { '@context': 'https://schema.org', '@type': 'Person', name: 'Y. Nandish', description: 'B.Tech student exploring technology and content creation.', email: 'mailto:ynandish87@gmail.com', telephone: '+918143102696', address: { '@type': 'PostalAddress', addressRegion: 'Tamil Nadu', addressCountry: 'IN' }, sameAs: socialLinks.map((item) => item.href) };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <section className="hero" id="home">
      <nav aria-label="Primary navigation"><a className="logo" href="#home" aria-label="Y. Nandish home">N<span>.</span></a><div className="nav-links"><a href="#about">About</a><a href="#focus">Focus</a><a href="#contact">Contact</a></div></nav>
      <div className="hero-grid">
        <p className="eyebrow"><span /> Tamil Nadu, India</p>
        <div className="hero-copy"><p className="status"><Sparkles size={14} /> Currently studying B.Tech</p><h1>BUILDING<br /><em>MY NEXT</em><br />CHAPTER.</h1><p className="intro">I’m Y. Nandish — a tech enthusiast exploring ideas, building projects, and growing into a creator.</p><a className="pill" href="#about">Explore my journey <ArrowDownRight size={18} /></a></div>
        <aside className="hero-note"><span>01 / 03</span><p>Curious by nature.<br />Grounded by learning.</p></aside>
      </div>
      <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="glow" />
    </section>

    <section className="ticker" aria-label="Interests"><div>TECHNOLOGY <i>✦</i> LEARNING <i>✦</i> IDEAS <i>✦</i> PROJECTS <i>✦</i> CONTENT <i>✦</i> TECHNOLOGY <i>✦</i></div></section>

    <section className="about section" id="about"><p className="section-label">/ About me</p><div className="about-content"><h2>A STUDENT WITH<br /><span>BIG CURIOSITY.</span></h2><div><p className="lead">I’m a B.Tech student from Tamil Nadu with a growing interest in technology and content creation.</p><p>I enjoy learning in public, turning curiosity into small experiments, and using every project as a chance to get better. This site will evolve along with my work.</p></div></div><div className="stats"><div><strong>∞</strong><span>Curiosity to learn</span></div><div><strong>B.Tech</strong><span>Currently studying</span></div><div><strong>IN</strong><span>Based in Tamil Nadu</span></div></div></section>

    <section className="focus section" id="focus"><p className="section-label">/ Current focus</p><h2>WORK IN<br /><span>PROGRESS.</span></h2><div className="focus-list">{focus.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={24} /></article>)}</div></section>

    <section className="projects section"><div className="projects-header"><p className="section-label">/ Selected work</p><h2>THE BEST IS<br /><span>ON ITS WAY.</span></h2><p>New projects, experiments, and stories will appear here as I build them.</p></div><div className="project-card"><div className="project-monogram">N</div><div><span>COMING SOON / 2026</span><h3>My first<br />chapter.</h3></div><ArrowUpRight size={32} /></div></section>

    <section className="faq section"><p className="section-label">/ Quick answers</p><div>{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

    <footer id="contact"><div><p className="section-label">/ Let’s connect</p><h2>START A<br /><span>CONVERSATION.</span></h2></div><div className="contact-actions"><a href="mailto:ynandish87@gmail.com" className="email">ynandish87@gmail.com <ArrowUpRight /></a><a href="tel:+918143102696" className="phone"><Phone size={17} /> +91 81431 02696</a><div className="socials">{socialLinks.map(({ href, label, Icon }) => <a href={href} key={label} target="_blank" rel="noreferrer" aria-label={label}><Icon size={20} /></a>)}</div></div><p className="copyright">© {new Date().getFullYear()} Y. Nandish. Built with curiosity.</p></footer>
  </main>;
}
