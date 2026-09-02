// Describes this component for search. Optional — leave empty to omit it.
export const description = "the Zscaler home page: hero, platform, stats, customer stories, pillars, news, partners and footer"

/*
  Home — the full landing page as one component.

  Replaces the earlier three-file version (home.mdx markup + styles/home.css +
  scripts/home.js), which is kept as a backup OUTSIDE the docs project in
  ../backup-home-html-version/. Markup, styles and behaviour now live here.

  SCOPING: the CSS below is wrapped in :root:has(#zs-home). Snippet styles are
  global once rendered, and this page hides platform chrome (sidebar, TOC, sticky
  header) to run full-bleed — the :has() guard is what stops those hides reaching
  any other page. Keep id="zs-home" on the root element or the whole stylesheet
  stops matching.

  FONT: real face is GT Haptik (Grilli Type, commercial licence, not
  redistributable). Figtree is the closest free substitute and is what loads.
*/

const STORIES = [
  {
    tags: ['Financial Services and Insurance', '16,000 employees'],
    title: 'Deutsche Börse Group Secures Financial Markets with the Zscaler Zero Trust Exchange',
    by: 'Nataliia Iskra, Head of Security IT, Deutsche Börse Group',
    cta: 'Read the customer story',
    image: 'https://cms.zscaler.com/sites/default/files/images/customer-slide/main-image/deutsche-telekom-zscaler-customer-large.jpeg',
    logoOnImage: 'https://cms.zscaler.com/sites/default/files/images/customer-slide/logo/deutsche-boerse-logo-white_0.png',
    tabLogo: 'https://cms.zscaler.com/sites/default/files/images/customer-slide/logo/deutsche-boerse-logo_0.png',
    name: 'Deutsche Börse',
  },
  {
    tags: ['Telecommunications', '3 month rollout'],
    title: 'T-Mobile deploys Zscaler Zero Trust Exchange within its operations in just 3 months',
    by: 'T-Mobile',
    cta: 'Watch the video',
    image: 'https://cms.zscaler.com/sites/default/files/images/customer-slide/main-image/t-mobile-zscaler-customer-success.jpg',
    logoOnImage: 'https://cms.zscaler.com/sites/default/files/images/customer-slide/logo/t-mobile-logo-white.png',
    tabLogo: 'https://cms.zscaler.com/sites/default/files/images/customer-slide/logo/t-mobile-logo-navy.png',
    name: 'T-Mobile',
  },
  {
    tags: ['Professional Services', 'Global CISO'],
    title: 'Having a unified, zero-trust framework to trace data lineage and govern agent-to-agent interactions is paramount to maintaining trust, compliance, and competitive advantage.',
    by: 'John Israel, Global CISO',
    cta: 'Watch the video',
    image: 'https://cms.zscaler.com/sites/default/files/images/customer-slide/main-image/zscaler-customer-kpmg.jpeg',
    logoOnImage: 'https://cms.zscaler.com/sites/default/files/images/customer-slide/logo/zscaler-customer-kpmg-logo.png',
    tabLogo: 'https://cms.zscaler.com/sites/default/files/images/customer-slide/logo/zscaler-customer-kpmg-logo-gray.png',
    name: 'KPMG',
  },
  {
    tags: ['Transportation Services', '80,000+ employees', '350+ locations worldwide'],
    title: 'United Airlines detects and blocks evolving threats with Zscaler',
    by: 'United Airlines',
    cta: 'Read the customer story',
    image: 'https://cms.zscaler.com/sites/default/files/images/customer-slide/main-image/zscaler-customer-united-airlines.jpg',
    logoOnImage: 'https://cms.zscaler.com/sites/default/files/images/customer-slide/logo/zscaler-customer-united-airlines-logo.png',
    tabLogo: 'https://cms.zscaler.com/sites/default/files/images/customer-slide/logo/zscaler-customer-united-airlines-logo-gray.png',
    name: 'United Airlines',
  },
]

const STATS = [
  { figure: '40%', label: 'of Global 2000 companies use Zscaler', cta: 'See our customers' },
  { figure: '750B+', label: 'transactions secured daily by Zscaler', cta: 'See the data' },
  { figure: '>75', label: 'Net Promoter Score', cta: 'See case studies' },
]

const AWARDS = [
  { logo: 'https://cms.zscaler.com/sites/default/files/images/stats-cards-image-logo/gartner-logo_2_0.png', alt: 'Gartner', text: 'Leader in Gartner Magic Quadrants SASE Platforms and SSE' },
  { logo: 'https://cms.zscaler.com/sites/default/files/images/stats-cards-image-logo/microsoft-logo_3_0.png', alt: 'Microsoft', text: '2022 Zero Trust Champion of the Year' },
  { logo: 'https://cms.zscaler.com/sites/default/files/images/stats-cards-image-logo/nist-logo_3_0.png', alt: 'NIST', text: 'Selected by the National Cybersecurity Center of Excellence' },
  { logo: 'https://cms.zscaler.com/sites/default/files/images/stats-cards-image-logo/fortune-logo_2_0.png', alt: 'Fortune', text: 'Best Places to Work in Technology' },
]

const PILLARS = [
  { icon: 'https://cms.zscaler.com/sites/default/files/columnsIconsModuleCard/superior-protection.png', title: 'Achieve superior protection', copy: 'Stop cyberattacks, prevent data loss, and securely embrace AI' },
  { icon: 'https://cms.zscaler.com/sites/default/files/columnsIconsModuleCard/agility-and-productivity.png', title: 'Increase agility and productivity', copy: 'Accelerate branch deployments, cloud adoption, and M&A time to value' },
  { icon: 'https://cms.zscaler.com/sites/default/files/columnsIconsModuleCard/cost-and-complexity.png', title: 'Reduce costs and complexity', copy: 'Eliminate firewalls and point products, and slash infrastructure spend' },
]

const NEWS = [
  { image: 'https://cms.zscaler.com/sites/default/files/images/card-slide/news-and-events-zscaler-leader-gartner-2026-sase_620x400.jpg', kicker: 'Industry Report', title: 'Zscaler: A Leader in the 2026 Gartner Magic Quadrant reports for SASE and SSE', cta: 'Get the full reports' },
  { image: 'https://cms.zscaler.com/sites/default/files/images/card-slide/zscaler-90days-frontier-ai-1.png', kicker: 'Exclusive Webinar', title: '90 Days With Frontier AI: What We Learned', cta: 'Watch On Demand' },
  { image: 'https://cms.zscaler.com/sites/default/files/images/card-slide/astonmartin-partnership.jpg', kicker: 'Partnership', title: 'Racing innovation meets Zero Trust', cta: 'Read More' },
  { image: 'https://cms.zscaler.com/sites/default/files/images/card-slide/zs-blog-zs-anthropic-310x200.jpg', kicker: 'News and Announcements', title: "Zscaler Is Proud to be Part of Project Glasswing: AI Can't Breach What It Can't Find", cta: 'Read the Announcement' },
  { image: 'https://cms.zscaler.com/sites/default/files/images/card-slide/zs-blog-zs-openai.jpg', kicker: 'News and Announcements', title: 'Zscaler and OpenAI Partner to Advance the Next Era of Cybersecurity', cta: 'Read the Announcement' },
  { image: 'https://cms.zscaler.com/sites/default/files/images/card-slide/thumb-news-events-vpn-risk-report.jpg', kicker: 'Industry Report', title: 'Zscaler ThreatLabz 2026 VPN Risk Report with Cybersecurity Insiders', cta: 'Get the full report' },
]

const PARTNERS = [
  { logo: 'https://cms.zscaler.com/sites/default/files/images/organization/microsoft-logo_0.png', alt: 'Microsoft' },
  { logo: 'https://cms.zscaler.com/sites/default/files/images/organization/crowdstrike-logo.png', alt: 'CrowdStrike' },
  { logo: 'https://cms.zscaler.com/sites/default/files/images/organization/aws-logo.png', alt: 'AWS' },
  { logo: 'https://cms.zscaler.com/sites/default/files/images/organization/okta-logo.png', alt: 'Okta' },
  { logo: 'https://cms.zscaler.com/sites/default/files/images/organization/sap-logo%20%281%29.png', alt: 'SAP' },
  { logo: 'https://cms.zscaler.com/sites/default/files/images/organization/rubrik-logo.png', alt: 'Rubrik' },
]

const FOOTER = [
  { heading: 'Platform', links: ['Zero Trust Exchange', 'Secure Internet Access (ZIA)', 'Secure Private Access (ZPA)', 'Digital Experience (ZDX)', 'Data Security', 'Zscaler Cellular'] },
  { heading: 'Solutions', links: ['AI Security', 'Zero Trust SASE', 'Zero Trust Branch', 'Microsegmentation', 'IoT/OT Segmentation', 'BYOD Security'] },
  { heading: 'Resources', links: ['Customer Stories', 'Analyst Recognition', 'Take a product tour', 'Blog', 'Webinars', 'ThreatLabz'] },
  { heading: 'Company', links: ['Why Zscaler', 'Leadership in AI', 'Partners', 'Careers', 'Support', 'Get in touch'] },
]

const METANAV = ['ThreatLabz', 'Customer Success Stories', 'Careers', 'Partners']
const NAVMENU = ['Platform', 'Products', 'Solutions', 'Resources', 'Company']
const NEWS_GAP = 20

const pad = (n) => String(n + 1).padStart(2, '0')

export const Home = () => {
  const [story, setStory] = useState(0)
  const [newsIndex, setNewsIndex] = useState(0)
  const [perView, setPerView] = useState(3)
  const [navOpen, setNavOpen] = useState(false)

  // Cards per view follows the same breakpoints as the stylesheet (768 / 1024).
  // Guarded because window is not available during server render.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined

    const wide = window.matchMedia('(min-width: 1024px)')
    const mid = window.matchMedia('(min-width: 768px)')

    const sync = () => setPerView(wide.matches ? 3 : mid.matches ? 2 : 1)

    sync()
    wide.addEventListener('change', sync)
    mid.addEventListener('change', sync)

    return () => {
      wide.removeEventListener('change', sync)
      mid.removeEventListener('change', sync)
    }
  }, [])

  const maxNews = Math.max(0, NEWS.length - perView)

  // Keep the index legal when the breakpoint changes under us.
  useEffect(() => {
    setNewsIndex((current) => Math.min(current, maxNews))
  }, [maxNews])

  // Card width and shift are computed rather than measured, so the track is
  // correct on first paint with no layout read.
  const cardWidth = `calc((100% - ${(perView - 1) * NEWS_GAP}px) / ${perView})`
  const trackShift = `translateX(calc(-${newsIndex} * (${cardWidth} + ${NEWS_GAP}px)))`

  return (
    <div className="zs-page">
      <style>{STYLES}</style>

      <div id="zs-home" className="zs-home">
        <div className="zs-metanav">
          <div className="zs-metanav__inner">
            <button className="zs-metanav__search" type="button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
              <span>Search</span>
            </button>
            <nav className="zs-metanav__links">
              {METANAV.map((label) => (
                <a key={label} href="#">{label}</a>
              ))}
              <a className="zs-metanav__support" href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M21 12a8 8 0 1 1-3.2-6.4" />
                  <path d="M3 20l1.6-4" />
                </svg>
                <span>Support</span>
              </a>
              <a className="zs-has-caret" href="#">Contact Us</a>
              <a className="zs-has-caret" href="#">Sign In</a>
              <a className="zs-has-caret" href="#">English</a>
            </nav>
          </div>
        </div>

        <header className={navOpen ? 'zs-nav is-open' : 'zs-nav'}>
          <div className="zs-nav__inner">
            <a className="zs-nav__logo" href="/" aria-label="Zscaler">
              <span className="zs-nav__logomark" />
            </a>
            <nav className="zs-nav__menu">
              {NAVMENU.map((label) => (
                <a key={label} href="#zs-platform" onClick={() => setNavOpen(false)}>{label}</a>
              ))}
            </nav>
            <div className="zs-nav__actions">
              <a className="zs-btn zs-btn--aqua-outline" href="#">Take a product tour</a>
              <a className="zs-btn zs-btn--aqua" href="#zs-cta">Request a demo</a>
              <button
                className="zs-nav__burger"
                type="button"
                aria-label="Open menu"
                aria-expanded={navOpen}
                onClick={() => setNavOpen(!navOpen)}
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </header>
      </div>

      <section className="zs-hero" id="zs-hero">
        <img className="zs-hero__bg" src="https://cms.zscaler.com/sites/default/files/images/hero-slide/desktop-image/agentic-secops-homepage-animated-v5-poster-large.jpg" alt="Agentic SecOps background" />
        <div className="zs-hero__scrim" />
        <div className="zs-hero__inner">
          <img className="zs-hero__logo" src="https://cms.zscaler.com/sites/default/files/images/hero-slide/logo/secops-logo.png" alt="Agentic SecOps logo" />
          <h1 className="zs-t-h1">Virtual Event | September 9th</h1>
          <p className="zs-hero__copy">Get ahead of modern threats. Hear the latest in threat intelligence and learn how Zscaler can help your SOC operate at machine speed.</p>
          <div className="zs-hero__actions">
            <a className="zs-btn zs-btn--aqua" href="#">Save Your Spot</a>
          </div>
        </div>
      </section>

      <section className="zs-platform" id="zs-platform">
        <div className="zs-container">
          <h2 className="zs-t-h2 zs-center zs-platform__title">The Zscaler Platform</h2>
          <div className="zs-platform__figure">
            <img src="https://cms.zscaler.com/sites/default/files/images/intro-with-graphic-module/platform-tablet-desktop_1.png" alt="Zscaler's unified platform diagram" />
          </div>
          <div className="zs-platform__actions">
            <a className="zs-btn zs-btn--aqua" href="#">Learn more</a>
          </div>
        </div>
      </section>

      <section className="zs-stats" id="zs-stats">
        <div className="zs-container">
          <h2 className="zs-t-h2 zs-center zs-stats__title">The most trusted AI Security Platform</h2>
          <div className="zs-stats__grid">
            {STATS.map((stat) => (
              <div className="zs-stat" key={stat.figure}>
                <p className="zs-stat__figure">{stat.figure}</p>
                <h3 className="zs-stat__label">{stat.label}</h3>
                <a className="zs-link" href="#">{stat.cta}</a>
              </div>
            ))}
          </div>
          <div className="zs-awards">
            {AWARDS.map((award) => (
              <a className="zs-award" href="#" key={award.alt}>
                <img src={award.logo} alt={award.alt} />
                <span>{award.text}</span>
              </a>
            ))}
          </div>
          <div className="zs-stats__cta">
            <a className="zs-btn zs-btn--pink" href="#">See more news and press</a>
          </div>
        </div>
      </section>

      <section className="zs-stories" id="zs-stories">
        <div className="zs-container">
          <h2 className="zs-t-h2 zs-center zs-stories__title">Empowering leading organizations around the world</h2>
          <div className="zs-stories__grid">
            <div className="zs-stories__copy">
              {STORIES.map((item, index) => (
                <article
                  className={index === story ? 'zs-story is-active' : 'zs-story'}
                  key={item.name}
                  aria-hidden={index !== story}
                >
                  <div className="zs-story__tags">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <h3 className="zs-story__title">{item.title}</h3>
                  <p className="zs-story__by">{item.by}</p>
                  <a className="zs-btn zs-btn--pink" href="#" tabIndex={index === story ? 0 : -1}>{item.cta}</a>
                </article>
              ))}
            </div>
            <div className="zs-stories__media">
              <div className="zs-storyimg-stack">
                {STORIES.map((item, index) => (
                  <figure
                    className={index === story ? 'zs-storyimg is-active' : 'zs-storyimg'}
                    key={item.name}
                    aria-hidden={index !== story}
                  >
                    <img src={item.image} alt={item.name} />
                    <img className="zs-storyimg__logo" src={item.logoOnImage} alt={item.name} />
                  </figure>
                ))}
              </div>
              <p className="zs-stories__counter">{pad(story)}/{pad(STORIES.length - 1)}</p>
            </div>
          </div>
          <div className="zs-storytabs">
            {STORIES.map((item, index) => (
              <button
                className={index === story ? 'zs-storytab is-active' : 'zs-storytab'}
                type="button"
                key={item.name}
                aria-label={item.name}
                aria-pressed={index === story}
                onClick={() => setStory(index)}
              >
                <img src={item.tabLogo} alt={item.name} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="zs-infobar">
        <div className="zs-container">
          <div className="zs-infobar__tile">
            <h4 className="zs-infobar__title">Hear from our customers on how they reclaim capital and reduce risk with zero trust architecture</h4>
            <a className="zs-btn zs-btn--aqua" href="#">See the infographic</a>
          </div>
        </div>
      </section>

      <section className="zs-pillars" id="zs-pillars">
        <div className="zs-container">
          <h2 className="zs-t-h2 zs-center">Secure, simplify, and transform your enterprise with zero trust</h2>
          <div className="zs-pillars__grid">
            {PILLARS.map((pillar) => (
              <div className="zs-pillar" key={pillar.title}>
                <div className="zs-pillar__icon"><img src={pillar.icon} alt={pillar.title} /></div>
                <h5 className="zs-pillar__title">{pillar.title}</h5>
                <p className="zs-pillar__copy">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="zs-news" id="zs-news">
        <div className="zs-container">
          <p className="zs-eyebrow">news and events</p>
          <h2 className="zs-news__title">Latest events and announcements</h2>
          <div className="zs-news__viewport">
            <div className="zs-news__track" style={{ transform: trackShift }}>
              {NEWS.map((card) => (
                <article className="zs-newscard" key={card.title} style={{ flex: `0 0 ${cardWidth}` }}>
                  <img src={card.image} alt={card.title} />
                  <div className="zs-newscard__body">
                    <p className="zs-newscard__kicker">{card.kicker}</p>
                    <h3 className="zs-newscard__title">{card.title}</h3>
                    <a className="zs-link" href="#">{card.cta}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="zs-news__controls">
            <p className="zs-news__counter">{pad(newsIndex)}/{pad(NEWS.length - 1)}</p>
            <div className="zs-news__buttons">
              <button
                className="zs-arrow"
                type="button"
                aria-label="Go to previous slide"
                disabled={newsIndex <= 0}
                onClick={() => setNewsIndex(Math.max(0, newsIndex - 1))}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
              </button>
              <button
                className="zs-arrow"
                type="button"
                aria-label="Go to next slide"
                disabled={newsIndex >= maxNews}
                onClick={() => setNewsIndex(Math.min(maxNews, newsIndex + 1))}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="zs-partners" id="zs-partners">
        <div className="zs-container">
          <h2 className="zs-t-h2 zs-center">Industry-leading experience. World-class partners.</h2>
          <p className="zs-partners__copy">Our ecosystem of partners and integrations enables faster and more reliable deployments, facilitates easier and more agile operations, and enhances our customers' cloud experience.</p>
          <div className="zs-partners__grid">
            {PARTNERS.map((partner) => (
              <a href="#" key={partner.alt}><img src={partner.logo} alt={partner.alt} /></a>
            ))}
          </div>
          <div className="zs-partners__cta">
            <a className="zs-btn zs-btn--pink" href="#">Explore our partner integrations</a>
          </div>
        </div>
      </section>

      <section className="zs-cta" id="zs-cta">
        <div className="zs-container">
          <h2 className="zs-t-h2 zs-center">Request a demo</h2>
          <p className="zs-cta__copy">Let our experts show you how the Zscaler Zero Trust Exchange platform can securely and quickly transform the way you do business.</p>
          <div className="zs-cta__actions">
            <a className="zs-btn zs-btn--aqua" href="#">Get started</a>
          </div>
        </div>
      </section>

      <footer className="zs-footer">
        <div className="zs-container">
          <div className="zs-footer__grid">
            {FOOTER.map((column) => (
              <div className="zs-footer__col" key={column.heading}>
                <p className="zs-footer__heading">{column.heading}</p>
                {column.links.map((link) => <a href="#" key={link}>{link}</a>)}
              </div>
            ))}
          </div>
          <div className="zs-footer__bottom">
            <span className="zs-footer__logo">zscaler</span>
            <nav className="zs-footer__legal">
              {['Privacy', 'Terms of use', 'Accessibility', 'Contact us', 'IBM.com'].map((link) => (
                <a href="#" key={link}>{link}</a>
              ))}
            </nav>
            <p className="zs-footer__copy">&copy; 2026 Zscaler, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const STYLES = `
/*
  Zscaler home page replica — scoped stylesheet.

  SCOPING: every rule lives inside :root:has(#zs-home) / :root:has(.zs-home).
  Those hooks exist only on home.mdx, so nothing here can leak onto a real docs
  page. This matters because we hide platform chrome (page header, breadcrumbs,
  feedback, prev/next) that must stay visible everywhere else. Do NOT lift any
  rule out of the :has() block, and do NOT register a second global stylesheet
  with these hides in it.

  TOKENS: taken verbatim from zscaler.com's compiled Tailwind theme.
  UNITS: zscaler.com sets html{font-size:10px} so all their sizes are rem where
  1rem = 10px. We cannot change the root font size (it would wreck the docs
  site), so every value below is the px equivalent. 3.2rem -> 32px, etc.

  FONT: the real face is GT Haptik (Grilli Type, commercial licence — cannot be
  redistributed). Figtree is the closest free geometric grotesque and is what
  loads here. Drop GTHaptikFont woff2 files in and prepend the family to
  --zs-font if you hold a licence.

  TO ACTIVATE: editor -> Site Config -> Custom CSS -> Add Stylesheet ->
  styles/home.css -> Publish.
*/
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

:root:has(#zs-home),
:root:has(.zs-home) {
  /* ─── Zscaler palette (exact values from their theme) ─── */
  --zs-core-blue: #2368F5;
  --zs-sky-blue: #256CF7;
  --zs-soft-blue: #2D72F5;
  --zs-dark-blue: #001744;
  --zs-navy-dark-blue: #00143A;
  --zs-navy-dark: #001235;
  --zs-cloud-burst: #172D56;
  --zs-navy-80: #334569;
  --zs-navy-60: #66748F;
  --zs-navy-40: #99A2B4;
  --zs-navy-20: #CCD1DA;
  --zs-rebrand-sky-blue: #12D4FF;
  --zs-aqua-green: #6BFFB3;
  --zs-pink: #FE00E2;
  --zs-light-blue: #E5F1FA;
  --zs-alice-blue: #E9F0FE;
  --zs-dark-grey: #323232;

  --zs-font: 'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --zs-mono: 'DM Mono', ui-monospace, SFMono-Regular, Menlo, monospace;

  /* ─── Hide the platform chrome this page replaces ─── */
  .dai-page-header { display: none !important; }
  .dai-breadcrumbs { display: none !important; }
  .dai-navbar-tabs { display: none !important; }
  .page-title { display: none !important; }
  .page-description { display: none !important; }
  .dai-feedback { display: none !important; }
  .dai-page-nav { display: none !important; }
  .dai-footer { display: none !important; }
  [data-component="Heading"] > div { display: none !important; }

  /* The replica ships its own header, so the whole sticky header band is hidden
     here — hiding only .dai-navbar leaves its 104px (h-26) container behind as a
     white gap above the hero. COMMENT OUT THE NEXT LINE to keep site navigation
     on the home page. */
  .dai-sticky-header { display: none !important; }

  /* ─── Full-bleed: neutralise the layout chain ───
     Published DOM nests content as
       .dai-layout[max-w-1560px mx-auto]
         > .dai-content-area > .dai-content-column
           > .dai-page[px-8 lg:px-0] > .dai-page-main[lg:px-10 pb-10]
             > article.dai-article.mdx-container.mx-auto
               > div.mt-8.mdx-container        <- our sections live in HERE
     so sections are NOT direct children of .dai-article and a '>' breakout never
     matches. Rather than viewport math, every inset in the chain is zeroed —
     the sections then fill the width on their own. */
  .dai-layout {
    max-width: none !important;
    width: 100% !important;
    margin: 0 !important;
  }

  /* .dai-content-area is 'relative flex' and lays out three columns:
       .dai-sidebar-column[w-75 = 300px] | .dai-page-main | .dai-page-aside[max-w-280 + mr-32]
     show-sidebar/show-toc:false do not remove these from the DOM, they only
     empty them — so both still reserve width and the page renders inset with a
     stray home pill on the left and the Copy-page rail on the right. Remove the
     columns outright and collapse the flex rows to blocks. */
  .dai-sidebar-column,
  .dai-sidebar,
  .dai-page-aside,
  .dai-toc { display: none !important; }

  .dai-content-area,
  .dai-page { display: block !important; }

  .dai-page-main {
    flex: none !important;
    width: 100% !important;
    max-width: none !important;
  }

  /* .dai-article also carries xl:max-w-[672px] */
  .dai-article { max-width: none !important; }

  .dai-content-area,
  .dai-content-column {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow-x: clip !important;
  }

  .dai-page,
  .dai-page-main {
    max-width: none !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .dai-article,
  .mdx-container {
    max-width: none !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: 0 !important;
    font-family: var(--zs-font) !important;
  }

  /* The two spacer divs the renderer puts above the content (.mt-8 / .lg:mt-10)
     are what push the hero down once the header is gone. */
  .dai-article > div { margin-top: 0 !important; }

  /* Sections already fill the cleared width; this just pins it. */
  .zs-home,
  .dai-article section[class^="zs-"],
  .dai-article footer[class^="zs-"] {
    width: 100% !important;
    max-width: none !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  /* ─── Base ─── */
  .zs-home,
  .zs-home *,
  [class^="zs-"],
  [class*=" zs-"] {
    font-family: var(--zs-font) !important;
    box-sizing: border-box !important;
  }

  [class^="zs-"] img,
  [class*=" zs-"] img { border-radius: 0 !important; box-shadow: none !important; }

  .zs-center { text-align: center !important; }

  /* ─── Type scale (zscaler typography-* utilities, rem -> px) ─── */
  .zs-t-h1 {
    font-size: 40px !important; font-weight: 500 !important;
    line-height: 100% !important; letter-spacing: -0.8px !important;
    margin: 0 !important;
  }
  .zs-t-h2 {
    font-size: 32px !important; font-weight: 500 !important;
    line-height: 100% !important; letter-spacing: -0.64px !important;
    margin: 0 !important; color: var(--zs-dark-blue) !important;
  }

  /* ─── Container + grid (rebrand-container / default-grid) ─── */
  .zs-container {
    max-width: 100% !important;
    padding: 50px 20px !important;
    margin: 0 auto !important;
  }

  /* ─── Buttons (btn-cta-section: 2px border, square, 8px/20px pad) ─── */
  .zs-btn {
    display: inline-block !important;
    font-weight: 700 !important;
    font-size: 16px !important;
    letter-spacing: -0.14px !important;
    line-height: 1.5 !important;
    padding: 8px 20px !important;
    border-width: 2px !important;
    border-style: solid !important;
    border-radius: 0 !important;
    text-decoration: none !important;
    cursor: pointer !important;
    transition: background-color 0.5s, color 0.5s, border-color 0.5s !important;
  }
  .zs-btn--aqua {
    background: var(--zs-aqua-green) !important;
    border-color: var(--zs-aqua-green) !important;
    color: var(--zs-dark-blue) !important;
  }
  .zs-btn--aqua:hover {
    background: transparent !important;
    color: var(--zs-aqua-green) !important;
  }
  .zs-btn--aqua-outline {
    background: transparent !important;
    border-color: var(--zs-aqua-green) !important;
    color: var(--zs-aqua-green) !important;
  }
  .zs-btn--aqua-outline:hover {
    background: var(--zs-aqua-green) !important;
    color: var(--zs-dark-blue) !important;
  }
  .zs-btn--pink {
    background: var(--zs-pink) !important;
    border-color: var(--zs-pink) !important;
    color: var(--zs-dark-blue) !important;
  }
  .zs-btn--pink:hover {
    background: transparent !important;
    color: var(--zs-pink) !important;
  }
  .zs-link {
    display: inline-block !important;
    color: var(--zs-pink) !important;
    font-weight: 700 !important;
    font-size: 16px !important;
    letter-spacing: -0.14px !important;
    text-decoration: none !important;
    background: none !important;
    border: 0 !important;
  }
  .zs-link:hover { text-decoration: underline !important; filter: brightness(80%) !important; }

  /* ─── Meta nav (top row) ───
     Real zscaler.com: Search sits far LEFT, every utility link is pushed right. */
  .zs-metanav { background: var(--zs-dark-blue) !important; color: #fff !important; }
  .zs-metanav__inner {
    max-width: 1440px !important;
    margin: 0 auto !important;
    padding: 0 20px !important;
    min-height: 48px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    gap: 24px !important;
  }
  .zs-metanav__search {
    display: flex !important; align-items: center !important; gap: 10px !important;
    background: none !important; border: 0 !important; padding: 0 !important;
    color: #fff !important; font-size: 15px !important; font-weight: 400 !important;
    cursor: pointer !important; flex: 0 0 auto !important;
  }
  .zs-metanav__search:hover { color: var(--zs-rebrand-sky-blue) !important; }
  .zs-metanav__links {
    display: none !important; align-items: center !important;
    gap: 24px !important; margin-left: auto !important; flex-wrap: wrap !important;
  }
  .zs-metanav a {
    display: inline-flex !important; align-items: center !important; gap: 6px !important;
    color: #fff !important; font-size: 14px !important; font-weight: 400 !important;
    text-decoration: none !important; white-space: nowrap !important;
  }
  .zs-metanav a:hover { color: var(--zs-rebrand-sky-blue) !important; }
  /* dropdown carets on Contact Us / Sign In / English */
  .zs-has-caret::after {
    content: "" !important;
    width: 0 !important; height: 0 !important; margin-left: 2px !important;
    border-left: 4px solid transparent !important;
    border-right: 4px solid transparent !important;
    border-top: 5px solid currentColor !important;
  }

  /* ─── Main nav (second row) ─── */
  .zs-nav {
    position: sticky !important;
    top: 0 !important;
    z-index: 20 !important;
    background: var(--zs-dark-blue) !important;
    box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.30) !important;
  }
  .zs-nav__inner {
    max-width: 1440px !important;
    margin: 0 auto !important;
    padding: 14px 20px !important;
    display: flex !important;
    align-items: center !important;
    gap: 24px !important;
  }
  .zs-nav__logo { text-decoration: none !important; flex: 0 0 auto !important; display: block !important; }
  /* The real mark (cloud + wordmark), white variant, as a background image so it
     keeps its exact geometry and needs no inline SVG in the MDX. */
  .zs-nav__logomark {
    display: block !important;
    width: 186px !important;
    height: 38px !important;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDgiIGhlaWdodD0iNDMiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyMDggNDMiPiA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJtOTMuODA0IDE3LjkyIDEuMDktNC43NmgtMTguMjFsLS40MSAxLjg0YTIuMTMgMi4xMyAwIDAgMCAyLjIgMi43NWg4LjQ0bC0xNC45NSAxMy4xOS0xIDQuNDNoMTkuMjdsMS4xMS00Ljg1aC0xMi4xOXptMTIuMTQgMy44NGMtLjg1LS4yMi01LjY0LS45My01LjM0LTIuNTkuMzQtMS44NSAyLjYtMiAzLjcxLTIgMi4yNy4wNyAzIDEuMDcgMy4xMSAxLjQyYTIgMiAwIDAgMCAyLjEgMS40MmgzLjU5Yy4zOS0yLjIyLjUtNy4zNS03Ljg0LTcuMzUtMi42OCAwLTYuMjQuNjctOC42MSAzLjM5LTEuMjYgMS40Ni0zLjQ0IDUuMDgtMS4yMSA3LjggMS4xNyAxLjM4IDQuMjEgMi40NSA3LjQ3IDMuMDkgMi4xMS40MSAzLjIyIDEuMjUgMyAyLjI1LS4xNC42Ny0xIDIuMTgtNC4wOCAyLjE3LTEuMzkgMC00LjM5LS4yMS0zLjgzLTMuMzRoLTUuNjdjLS42NyAyLjg0LS45MSA3Ljc3IDcuNzQgNy43NyAzLjM0IDAgMTAuMTMtLjQyIDExLjktNy41MiAxLjI3LTUuMTEtNC40OC02LjEyLTYtNi41MXptMjAuMTEgNy44NWE1LjA2IDUuMDYgMCAwIDEtMy43MSAxLjMzYy00LjI5IDAtMy44LTQuMi0zLjIyLTYuNzZzMi02LjY4IDYtNi42OGMyLjg5IDAgMy4yMiAxLjg3IDMuMzcgMi40Mmg1Ljg0Yy0uMjEtNi4xNi00LjkzLTcuMzQtOC4yNy03LjI2LTkuMTYuMjMtMTEuODEgNy44OC0xMi42MyAxMS40NC0yLjM5IDEwLjM5IDQuMjUgMTEuNjkgNy40MyAxMS42OWExMi41IDEyLjUgMCAwIDAgMTEuNjgtNy4yNmgtNC4xN2EzIDMgMCAwIDAtMi40MiAxLjA4em0yMy43NSAyLjEzYTEwLjg3IDEwLjg3IDAgMCAxLTYuNjEgMy43MWMtNS4wNy44NC0xMiAuNjMtMTAuMjktNi42N2E3LjQ0IDcuNDQgMCAwIDEgMy4xOC01YzIuOTMtMS45MyA2LjgzLTIuMiA4LjA5LTIuMzQuNDMtLjA1IDMuNjItLjI5IDQuMTctMi4xOHMtMi4zOS0yLTMuMjEtMmMtMi41MSAwLTMuMzcgMS0zLjc5IDEuNThoLTUuNTljMi4yNi01Ljk1IDguNDktNi4xOCAxMC4xOC02LjE4IDEuODggMCA5LjQ1IDAgOCA2LjI3LTIuMiA5LjU2LTIuMjggMTAuNTEtNC4xMyAxMi44MW0tMi40Ni03LjU2Yy0xLjEzMy40Ni0yLjMwNS44Mi0zLjUgMS4wOC0xLjE3LjM2LTMuMzYuNDktNC40MyAxLjUxLS45Mi44Ni0yLjUzIDQuNDMgMS4zIDQuNTFhNi4xMSA2LjExIDAgMCAwIDYuMTktNS4xN2MuMTktLjg4LjQ0LTEuOTMuNDQtMS45M20xNC40LTE3LjUzaC0zbC02LjU1IDI4LjcyaDUuODRsNS45Mi0yNmEyLjExOCAyLjExOCAwIDAgMC0yLjItMi43NnptMTUuMTUgMjEuODRoNC4xOGExMi42OCAxMi42OCAwIDAgMS0xMS43MyA3LjNjLTguODkgMC04LjM0LTcuOTMtNy40My0xMS42OSAyLjUyLTEwLjQ1IDkuNTEtMTEuNDQgMTIuNjMtMTEuNDQgNC4xNSAwIDEwLjY2IDEuNzIgNy4zNiAxMy4xMWgtMTQuNDFjLS4zNSAxLjUxLS42NSA1LjIyIDMuMzMgNS4xN2E0Ljg3IDQuODcgMCAwIDAgMy4wNy0uODdjLjU0LS4yOCAxLTEuNTEgMy0xLjU0em0tOC41NS02LjQ5aDguNTFjLjczLTQuMDgtMS44LTQuNTEtMy4yMy00LjUxLTEuMjIgMC00LjEzLjQ1LTUuMjggNC41MW0yMS4wNS02LjQzYTE0LjYyIDE0LjYyIDAgMCAwLTUuNjYgOWMtLjM1IDEuNjItMi40NiAxMC43Ny0yLjQ2IDEwLjc3aDUuODVzMi4yMi0xMC4wNCAyLjYyLTExLjRhNy4zMzMgNy4zMzMgMCAwIDEgNy43OS01LjhsMS4zNS01YTE1Ljc1IDE1Ljc1IDAgMCAwLTkuNDggMi40MnptMTAuMjEtNi43Ni4xNS0uN2gzLjE1bC0uMTUuN2gtMS4xM2wtLjY1IDMuMDdoLS44M2wuNjQtMy4wN3ptNS4xNy0uNy4yOSAyLjczIDEuNDYtMi43M2gxLjE1bC0uOCAzLjc3aC0uNzdsLjY4LTMtMS41OSAzaC0uNjNsLS4zNy0zLS41NiAzaC0uNzlsLjgtMy43N3pNNjkuNDg0IDIxLjg2YzEuMTIgNi44Ny00Ljg1IDEwLjc0LTEwLjg5IDExLjE0LTMuODUgOC0xNy40MSAxMy4yOS0yOS4xNiA3LjUzLTUgLjc3LTcuNzktLjQ5LTkuOTEtMi44OSA0LjMtNS41MyAxNy4zMS0xNS40OSAzMy4yMS0xMC4zNSA4LjQ5IDIuNzQgMTAuNjktMy43IDguNTUtNi4xMi04LTkuMDktMjYuMDktLjktMjYuNzMtLjIyIDcuMS0xMC44NiAzMi41LTEzLjkxIDM0LjkzLjkxIj4gPC9wYXRoPiA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNDUuMTM0IDkuMzdzLTUuNzktMi4wNy0xMy45MSAxLjQ1bC0xLS40MmM3Ljg2LTUuMiAxNC43Mi03LjQgMjAuNTktNi41NC0zLjU1LTQuMDktMjAuNjItNy4xLTMwLjM5IDIuN0M4LjM0NCA0LjE4LS4xMTYgMTQuNDIuMzQ0IDIzLjc3czEwLjcxIDE1LjIzIDE2LjUyIDEzLjZxLjIxLS4wMy40MiAwYzEuMjktNi4xOCA2LjU1LTIwLjU2IDI3Ljg1LTI4Ij4gPC9wYXRoPiA8L3N2Zz4=") no-repeat left center / contain !important;
  }
  .zs-nav__menu {
    display: none !important;
    gap: 30px !important;
    margin: 0 auto !important;
  }
  .zs-nav__menu a {
    color: #fff !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    text-decoration: none !important;
    padding: 6px 0 !important;
    border-bottom: 2px solid transparent !important;
    white-space: nowrap !important;
  }
  .zs-nav__menu a:hover { border-bottom-color: var(--zs-rebrand-sky-blue) !important; }
  .zs-nav__actions {
    display: flex !important; align-items: center !important;
    gap: 12px !important; margin-left: auto !important; flex: 0 0 auto !important;
  }
  .zs-nav__actions .zs-btn { padding: 10px 22px !important; white-space: nowrap !important; }
  .zs-nav__burger {
    background: none !important; border: 0 !important; cursor: pointer !important;
    display: flex !important; flex-direction: column !important; gap: 4px !important; padding: 4px !important;
  }
  .zs-nav__burger span { display: block !important; width: 22px !important; height: 2px !important; background: #fff !important; }
  .zs-nav.is-open .zs-nav__menu {
    display: flex !important; flex-direction: column !important;
    position: absolute !important; left: 0 !important; right: 0 !important; top: 100% !important;
    background: var(--zs-dark-blue) !important; padding: 20px !important;
    gap: 16px !important; margin: 0 !important;
  }

  /* ─── Hero ─── */
  .zs-hero {
    position: relative !important;
    background: var(--zs-navy-dark-blue) !important;
    min-height: 480px !important;
    display: flex !important;
    align-items: center !important;
    overflow: hidden !important;
  }
  .zs-hero__bg {
    position: absolute !important; inset: 0 !important;
    width: 100% !important; height: 100% !important;
    object-fit: cover !important; margin: 0 !important;
  }
  .zs-hero__scrim {
    position: absolute !important; inset: 0 !important;
    background: linear-gradient(0deg, rgba(51, 69, 105, 0.5) 0%, rgba(51, 69, 105, 0.5) 100%) !important;
  }
  .zs-hero__inner {
    position: relative !important; z-index: 10 !important;
    max-width: 1000px !important;
    margin: 0 auto !important;
    padding: 96px 20px !important;
    text-align: center !important;
    color: #fff !important;
  }
  .zs-hero__logo { height: 44px !important; width: auto !important; margin: 0 auto 20px !important; display: block !important; }
  .zs-hero__inner .zs-t-h1 { color: #fff !important; }
  .zs-hero__copy {
    margin: 20px auto 0 !important;
    font-size: 16px !important; line-height: 150% !important; letter-spacing: 0.32px !important;
    color: #fff !important;
  }
  .zs-hero__actions { margin-top: 36px !important; display: flex !important; justify-content: center !important; }

  /* ─── Platform ─── */
  .zs-platform { background: var(--zs-dark-blue) !important; }
  .zs-platform__title { color: #fff !important; margin-bottom: 20px !important; }
  .zs-platform__figure img { width: 100% !important; height: auto !important; object-fit: contain !important; display: block !important; }
  .zs-platform__actions { margin-top: 36px !important; display: flex !important; justify-content: center !important; }

  /* ─── Stats ─── */
  .zs-stats { background: var(--zs-light-blue) !important; }
  .zs-stats__title { margin-bottom: 50px !important; }
  .zs-stats__grid { display: grid !important; grid-template-columns: 1fr !important; gap: 50px 20px !important; }
  .zs-stat { display: flex !important; flex-direction: column !important; align-items: center !important; text-align: center !important; }
  .zs-stat__figure {
    font-size: 72px !important; font-weight: 400 !important;
    line-height: 80% !important; letter-spacing: -3.6px !important;
    color: var(--zs-pink) !important; margin: 0 !important;
  }
  .zs-stat__label {
    font-size: 18px !important; font-weight: 500 !important; line-height: 100% !important;
    color: var(--zs-dark-blue) !important;
    margin: 16px 0 0 !important; padding-bottom: 10px !important;
    max-width: 260px !important;
    min-height: 46px !important;
  }
  .zs-awards {
    margin-top: 40px !important;
    display: grid !important; grid-template-columns: repeat(2, 1fr) !important;
    gap: 20px !important;
  }
  .zs-award {
    display: flex !important; flex-direction: column !important; align-items: center !important;
    text-align: center !important; gap: 12px !important; text-decoration: none !important;
  }
  .zs-award img { max-height: 32px !important; width: auto !important; object-fit: contain !important; }
  .zs-award span { font-size: 14px !important; letter-spacing: 0.28px !important; color: var(--zs-dark-blue) !important; line-height: 150% !important; }
  .zs-stats__cta { margin-top: 40px !important; display: flex !important; justify-content: center !important; }

  /* ─── Customer stories ─── */
  .zs-stories { background: #fff !important; }
  .zs-stories__title { margin-bottom: 30px !important; }
  .zs-stories__grid { display: grid !important; grid-template-columns: 1fr !important; gap: 20px !important; }
  .zs-stories__copy { position: relative !important; }
  .zs-story { display: none !important; }
  .zs-story.is-active { display: block !important; }
  .zs-story__tags { display: flex !important; flex-wrap: wrap !important; gap: 5px !important; }
  .zs-story__tags span {
    font-family: var(--zs-mono) !important;
    font-size: 10px !important; font-weight: 500 !important;
    line-height: 125% !important; letter-spacing: 1px !important;
    text-transform: uppercase !important;
    color: var(--zs-dark-blue) !important;
    border: 1px solid var(--zs-navy-20) !important;
    padding: 3px 6px !important;
  }
  .zs-story__title {
    font-size: 26px !important; font-weight: 500 !important;
    line-height: 110% !important; letter-spacing: -0.26px !important;
    color: var(--zs-dark-blue) !important;
    margin: 10px 0 !important;
  }
  .zs-story__by {
    font-size: 14px !important; letter-spacing: 1.4px !important;
    text-transform: uppercase !important;
    color: var(--zs-dark-blue) !important;
    margin: 0 0 30px !important;
  }
  .zs-stories__media { position: relative !important; order: -1 !important; }
  .zs-storyimg { display: none !important; position: relative !important; margin: 0 !important; }
  .zs-storyimg.is-active { display: block !important; }
  .zs-storyimg > img:first-child { width: 100% !important; height: auto !important; aspect-ratio: 4 / 3 !important; object-fit: cover !important; display: block !important; }
  .zs-storyimg__logo {
    position: absolute !important; left: 20px !important; bottom: 20px !important;
    max-height: 40px !important; width: auto !important;
  }
  .zs-stories__counter {
    position: absolute !important; right: 0 !important; bottom: -32px !important;
    font-family: var(--zs-mono) !important; font-size: 14px !important;
    color: var(--zs-navy-60) !important; margin: 0 !important;
  }
  .zs-storytabs {
    margin-top: 50px !important;
    display: flex !important; flex-wrap: wrap !important;
    align-items: center !important; justify-content: center !important;
    gap: 32px !important;
  }
  .zs-storytab {
    background: none !important; border: 0 !important;
    border-bottom: 2px solid transparent !important;
    padding: 8px 4px !important; cursor: pointer !important;
    opacity: 0.7 !important; transition: opacity 0.3s, border-color 0.3s !important;
  }
  .zs-storytab img { max-height: 28px !important; max-width: 140px !important; width: auto !important; object-fit: contain !important; }
  .zs-storytab:hover { opacity: 0.8 !important; }
  .zs-storytab.is-active { opacity: 1 !important; border-bottom-color: var(--zs-pink) !important; }

  /* ─── Info bar ─── */
  .zs-infobar { background: var(--zs-dark-blue) !important; }
  .zs-infobar .zs-container { padding-top: 0 !important; padding-bottom: 0 !important; }
  .zs-infobar__tile {
    background: var(--zs-light-blue) !important;
    padding: 30px !important;
    display: flex !important; flex-direction: column !important;
    gap: 20px !important; align-items: flex-start !important;
  }
  .zs-infobar__title {
    font-size: 24px !important; font-weight: 500 !important;
    line-height: 110% !important; letter-spacing: -0.24px !important;
    color: var(--zs-dark-blue) !important; margin: 0 !important;
  }
  .zs-infobar .zs-btn { width: 100% !important; text-align: center !important; }

  /* ─── Pillars ─── */
  .zs-pillars { background: var(--zs-light-blue) !important; }
  .zs-pillars__grid {
    margin-top: 45px !important;
    display: grid !important; grid-template-columns: 1fr !important; gap: 30px !important;
  }
  .zs-pillar { display: flex !important; flex-direction: column !important; gap: 10px !important; align-items: center !important; }
  .zs-pillar__icon { height: 100px !important; display: flex !important; align-items: center !important; justify-content: center !important; }
  .zs-pillar__icon img { max-height: 100px !important; width: auto !important; object-fit: contain !important; }
  .zs-pillar__title {
    font-size: 18px !important; font-weight: 500 !important; line-height: 100% !important;
    color: var(--zs-dark-blue) !important; margin: 0 !important; text-align: center !important;
  }
  .zs-pillar__copy {
    font-size: 14px !important; line-height: 150% !important; letter-spacing: 0.28px !important;
    color: var(--zs-dark-blue) !important; margin: 0 !important; text-align: center !important;
  }

  /* ─── News and events ─── */
  .zs-news { background: #fff !important; }
  .zs-eyebrow {
    color: var(--zs-sky-blue) !important;
    font-weight: 700 !important; font-size: 12px !important;
    line-height: 1.5 !important; text-transform: uppercase !important;
    letter-spacing: 3px !important; text-align: center !important;
    margin: 0 0 20px !important;
  }
  .zs-news__title {
    font-weight: 500 !important; font-size: 24px !important; line-height: 30px !important;
    color: var(--zs-dark-blue) !important; text-align: center !important;
    margin: 0 0 44px !important;
  }
  .zs-news__viewport { overflow: hidden !important; }
  .zs-news__track {
    display: flex !important; gap: 20px !important;
    transition: transform 0.4s ease !important;
  }
  .zs-newscard {
    flex: 0 0 100% !important;
    display: flex !important; flex-direction: column !important;
    background: var(--zs-light-blue) !important;
    color: var(--zs-dark-blue) !important;
  }
  .zs-newscard > img { width: 100% !important; height: auto !important; aspect-ratio: 62 / 40 !important; object-fit: cover !important; display: block !important; margin: 0 !important; }
  .zs-newscard__body { padding: 20px !important; display: flex !important; flex-direction: column !important; gap: 10px !important; flex: 1 1 auto !important; }
  .zs-newscard__kicker {
    font-family: var(--zs-mono) !important;
    font-size: 10px !important; font-weight: 500 !important;
    line-height: 125% !important; letter-spacing: 1px !important;
    text-transform: uppercase !important;
    color: var(--zs-navy-60) !important; margin: 0 !important;
  }
  .zs-newscard__title {
    font-size: 18px !important; font-weight: 500 !important; line-height: 120% !important;
    color: var(--zs-dark-blue) !important; margin: 0 !important; flex: 1 1 auto !important;
  }
  .zs-news__controls {
    margin-top: 24px !important;
    display: flex !important; align-items: center !important; justify-content: space-between !important;
  }
  .zs-news__counter { font-family: var(--zs-mono) !important; font-size: 14px !important; color: var(--zs-navy-60) !important; margin: 0 !important; }
  .zs-news__buttons { display: flex !important; gap: 10px !important; }
  .zs-arrow {
    width: 44px !important; height: 44px !important;
    display: flex !important; align-items: center !important; justify-content: center !important;
    background: transparent !important;
    border: 2px solid var(--zs-dark-blue) !important;
    color: var(--zs-dark-blue) !important;
    cursor: pointer !important;
    transition: background-color 0.3s, color 0.3s !important;
  }
  .zs-arrow:hover { background: var(--zs-dark-blue) !important; color: #fff !important; }
  .zs-arrow[disabled] { opacity: 0.3 !important; cursor: not-allowed !important; }

  /* ─── Partners ─── */
  .zs-partners { background: var(--zs-light-blue) !important; }
  .zs-partners .zs-t-h2 { margin-bottom: 24px !important; }
  .zs-partners__copy {
    font-size: 16px !important; line-height: 150% !important; letter-spacing: 0.32px !important;
    color: var(--zs-dark-blue) !important; text-align: center !important;
    margin: 0 0 46px !important;
  }
  .zs-partners__grid {
    display: flex !important; flex-wrap: wrap !important;
    align-items: center !important; justify-content: center !important;
    gap: 60px 40px !important;
  }
  .zs-partners__grid a { display: flex !important; justify-content: center !important; width: calc(50% - 20px) !important; }
  .zs-partners__grid img { max-width: 200px !important; max-height: 40px !important; width: auto !important; height: auto !important; object-fit: contain !important; margin: 0 auto !important; }
  .zs-partners__cta { margin-top: 42px !important; display: flex !important; justify-content: center !important; }

  /* ─── Closing CTA ─── */
  .zs-cta { background: var(--zs-dark-blue) !important; }
  .zs-cta .zs-t-h2 { color: #fff !important; }
  .zs-cta__copy {
    font-size: 16px !important; line-height: 150% !important; letter-spacing: 0.32px !important;
    color: #fff !important; text-align: center !important; margin: 10px 0 !important;
  }
  .zs-cta__actions { margin-top: 20px !important; display: flex !important; justify-content: center !important; }

  /* ─── Footer ─── */
  .zs-footer { background: linear-gradient(180deg, #00143A 0%, #001744 100%) !important; }
  .zs-footer__grid { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 40px 20px !important; }
  .zs-footer__col { display: flex !important; flex-direction: column !important; gap: 12px !important; }
  .zs-footer__heading {
    font-size: 12px !important; font-weight: 700 !important;
    text-transform: uppercase !important; letter-spacing: 3px !important;
    color: var(--zs-rebrand-sky-blue) !important; margin: 0 0 4px !important;
  }
  .zs-footer__col a { font-size: 14px !important; color: var(--zs-navy-20) !important; text-decoration: none !important; }
  .zs-footer__col a:hover { color: #fff !important; }
  .zs-footer__bottom {
    margin-top: 50px !important; padding-top: 30px !important;
    border-top: 1px solid var(--zs-navy-80) !important;
    display: flex !important; flex-direction: column !important; gap: 20px !important;
    align-items: flex-start !important;
  }
  .zs-footer__legal { display: flex !important; flex-wrap: wrap !important; gap: 24px !important; }
  .zs-footer__legal a { font-size: 13px !important; color: var(--zs-navy-20) !important; text-decoration: none !important; }
  .zs-footer__legal a:hover { color: #fff !important; }
  .zs-footer__copy { font-size: 13px !important; color: var(--zs-navy-40) !important; margin: 0 !important; }

  /* ─── Breakpoints (zscaler uses 390 / 600 / 768 / 1024 / 1280 / 1440) ─── */
  @media (min-width: 768px) {
    .zs-container { padding: 40px !important; }
    .zs-metanav__inner,
    .zs-nav__inner { padding-left: 40px !important; padding-right: 40px !important; }
    .zs-t-h1 { font-size: 50px !important; letter-spacing: -1px !important; }
    .zs-t-h2 { font-size: 38px !important; letter-spacing: -0.76px !important; }
    .zs-nav__menu { display: flex !important; }
    .zs-metanav__links { display: flex !important; }
    .zs-nav__burger { display: none !important; }
    .zs-hero__copy { font-size: 20px !important; letter-spacing: 0.4px !important; }
    .zs-hero__logo { height: 56px !important; }
    .zs-stats__grid { grid-template-columns: repeat(3, 1fr) !important; }
    .zs-awards { grid-template-columns: repeat(4, 1fr) !important; gap: 40px !important; }
    .zs-stat__label { font-size: 20px !important; }
    .zs-stories__grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; align-items: center !important; }
    .zs-stories__media { order: 0 !important; }
    .zs-story__title { font-size: 30px !important; letter-spacing: -0.3px !important; }
    .zs-infobar__tile { flex-direction: row !important; align-items: center !important; justify-content: space-between !important; gap: 40px !important; }
    .zs-infobar .zs-btn { width: auto !important; flex: 0 0 auto !important; }
    .zs-pillars__grid { grid-template-columns: repeat(3, 1fr) !important; gap: 30px 20px !important; }
    .zs-pillar__title { font-size: 20px !important; }
    .zs-newscard { flex: 0 0 calc((100% - 20px) / 2) !important; }
    .zs-partners__copy { font-size: 20px !important; letter-spacing: 0.4px !important; margin-bottom: 28px !important; }
    .zs-partners__grid a { width: auto !important; }
    .zs-partners__grid { gap: 60px !important; }
    .zs-cta__copy { font-size: 20px !important; letter-spacing: 0.4px !important; }
    .zs-footer__grid { grid-template-columns: repeat(4, 1fr) !important; }
    .zs-footer__bottom { flex-direction: row !important; align-items: center !important; justify-content: space-between !important; }
  }

  @media (min-width: 1024px) {
    .zs-t-h1 { font-size: 60px !important; letter-spacing: -1.2px !important; }
    .zs-t-h2 { font-size: 48px !important; letter-spacing: -0.96px !important; }
    .zs-hero__copy { font-size: 24px !important; letter-spacing: 0.48px !important; }
    .zs-hero__logo { height: 64px !important; }
    .zs-stories__title { margin-bottom: 50px !important; }
    .zs-story__title { font-size: 36px !important; letter-spacing: -0.36px !important; }
    .zs-newscard { flex: 0 0 calc((100% - 40px) / 3) !important; }
    .zs-news__viewport { max-width: 970px !important; margin: 0 auto !important; }
    .zs-news__controls { max-width: 970px !important; margin-left: auto !important; margin-right: auto !important; }
    .zs-partners__copy { margin-bottom: 69px !important; }
    .zs-cta__copy { font-size: 24px !important; letter-spacing: 0.48px !important; }
  }

  @media (min-width: 1440px) {
    .zs-container { max-width: 1440px !important; padding: 50px 40px !important; }
  }

  /* ─── Dark mode ───
     This is a brand replica: zscaler.com has one look, so the palette does not
     invert. Only the surfaces the docs theme would otherwise repaint are pinned. */
  &.dark .zs-stories,
  &.dark .zs-news { background: #fff !important; }
  &.dark .zs-newscard__title,
  &.dark .zs-news__title,
  &.dark .zs-story__title,
  &.dark .zs-story__by,
  &.dark .zs-stat__label,
  &.dark .zs-award span,
  &.dark .zs-pillar__title,
  &.dark .zs-pillar__copy,
  &.dark .zs-partners__copy,
  &.dark .zs-infobar__title,
  &.dark .zs-t-h2 { color: var(--zs-dark-blue) !important; }
  &.dark .zs-platform__title,
  &.dark .zs-cta .zs-t-h2 { color: #fff !important; }
}


/* ─── React snippet additions ───────────────────────────────────────────────
   The HTML version swapped slides with display:none -> block, which cannot be
   transitioned and made the section jump height between stories. Here both the
   copy column and the image column are grid stacks: every slide occupies the
   same cell, so the container is always as tall as the TALLEST slide (no jump),
   and slides crossfade on opacity. This is what zscaler.com does via swiper-fade. */
:root:has(#zs-home),
:root:has(.zs-home) {
  .zs-page { display: contents !important; }

  .zs-stories__copy,
  .zs-storyimg-stack { display: grid !important; }

  .zs-story,
  .zs-storyimg {
    grid-area: 1 / 1 !important;
    display: block !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    transition: opacity 0.45s ease, visibility 0.45s ease !important;
  }
  /* The stack is as tall as the longest story, so centre the shorter ones
     instead of letting them hang from the top with dead space beneath. */
  .zs-story { align-self: center !important; }
  .zs-story.is-active,
  .zs-storyimg.is-active {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }

  @media (prefers-reduced-motion: reduce) {
    .zs-story,
    .zs-storyimg,
    .zs-news__track { transition: none !important; }
  }
}

`
