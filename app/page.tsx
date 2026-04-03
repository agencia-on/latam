import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsletterForm from "./components/NewsletterForm";

const LATAM_URL  = "https://www.latam.com/pt_br/ofertas/promocoes/";
const MILHAS_URL = "https://123milhas.com";
const UNS        = "https://images.unsplash.com/photo-";

/* ── Unsplash photo IDs ───────────────────────────────────────────── */
const PHOTOS = {
  heroCouple:   `${UNS}1488085061387-422e29b40080?auto=format&fit=crop&w=900&q=80`,
  heroPlane:    `${UNS}1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80`,
  heroBeach:    `${UNS}1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80`,
  heroParis:    `${UNS}1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80`,
  airport:      `${UNS}1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80`,
  roadtrip:     `${UNS}1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80`,
  planeWindow:  `${UNS}1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80`,
  /* deal destinations — IDs verificados */
  lisboa:       `${UNS}1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80`,
  miami:        `${UNS}1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80`,
  buenosaires:  `${UNS}1462275646964-a0e3386b89fa?auto=format&fit=crop&w=800&q=80`,
  cancun:       `${UNS}1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80`,
  orlando:      `${UNS}1575408264798-b50b252663e6?auto=format&fit=crop&w=800&q=80`,
  paris:        `${UNS}1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80`,
  europe:       `${UNS}1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80`,
  brazil:       `${UNS}1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80`,
  miles:        `${UNS}1541535650810-10d26f5c2ab3?auto=format&fit=crop&w=800&q=80`,
  luggage:      `${UNS}1503220317375-aaad31d3e101?auto=format&fit=crop&w=800&q=80`,
  phone:        `${UNS}1512699527-be8b4cb3a4da?auto=format&fit=crop&w=800&q=80`,
};

const featuredDeals = [
  { from: "São Paulo", to: "Lisboa",        price: "R$ 2.890", airline: "LATAM",    photo: PHOTOS.lisboa,      href: LATAM_URL  },
  { from: "São Paulo", to: "Miami",         price: "R$ 3.240", airline: "123Milhas",photo: PHOTOS.miami,       href: MILHAS_URL },
  { from: "Rio de Janeiro", to: "Buenos Aires", price: "R$ 1.190", airline: "LATAM", photo: PHOTOS.buenosaires, href: LATAM_URL  },
  { from: "São Paulo", to: "Cancún",        price: "R$ 2.650", airline: "123Milhas",photo: PHOTOS.cancun,      href: MILHAS_URL },
  { from: "Brasília",  to: "Orlando",       price: "R$ 3.480", airline: "LATAM",    photo: PHOTOS.orlando,     href: LATAM_URL  },
  { from: "São Paulo", to: "Paris",         price: "R$ 4.120", airline: "123Milhas",photo: PHOTOS.paris,       href: MILHAS_URL },
];

const articles = [
  {
    slug:    "como-comprar-passagens-baratas",
    photo:   PHOTOS.heroPlane,
    category:"Dicas",
    title:   "Como comprar passagens aéreas baratas e economizar na viagem?",
    excerpt: "15 estratégias comprovadas para encontrar voos mais baratos e viajar gastando menos.",
    date:    "02/04/2026", readTime: "8 min",
  },
  {
    slug:    "#",
    photo:   PHOTOS.europe,
    category:"Destinos",
    title:   "Voos baratos para a Europa: guia completo para economizar em 2025",
    excerpt: "Descubra as melhores épocas e estratégias para voar para a Europa pagando menos.",
    date:    "28/03/2026", readTime: "10 min",
  },
  {
    slug:    "#",
    photo:   PHOTOS.miles,
    category:"Milhas",
    title:   "Como usar milhas para viajar de graça: guia passo a passo",
    excerpt: "Aprenda a acumular e resgatar pontos nos melhores programas de fidelidade.",
    date:    "20/03/2026", readTime: "7 min",
  },
  {
    slug:    "#",
    photo:   PHOTOS.brazil,
    category:"Nacional",
    title:   "Melhores destinos nacionais baratos para viajar nas férias",
    excerpt: "Praias, serras e cidades históricas com ótimos preços de passagem.",
    date:    "15/03/2026", readTime: "6 min",
  },
  {
    slug:    "#",
    photo:   PHOTOS.luggage,
    category:"Dicas",
    title:   "Erros que encarecem sua passagem aérea e como evitá-los",
    excerpt: "Pequenos deslizes na hora de pesquisar podem custar muito caro.",
    date:    "10/03/2026", readTime: "5 min",
  },
  {
    slug:    "#",
    photo:   PHOTOS.phone,
    category:"Ferramentas",
    title:   "Melhores apps para encontrar passagens baratas em 2025",
    excerpt: "Conheça os aplicativos que todo viajante econômico precisa ter no celular.",
    date:    "05/03/2026", readTime: "5 min",
  },
];

const categories = [
  { label: "Dicas de Viagem",        emoji: "💡", count: 24, photo: PHOTOS.luggage      },
  { label: "Destinos Internacionais",emoji: "🌍", count: 18, photo: PHOTOS.heroParis    },
  { label: "Destinos Nacionais",     emoji: "🇧🇷", count: 15, photo: PHOTOS.brazil      },
  { label: "Programas de Milhas",    emoji: "⭐", count: 12, photo: PHOTOS.miles        },
  { label: "Promoções e Ofertas",    emoji: "🔥", count: 30, photo: PHOTOS.airport      },
  { label: "Ferramentas e Apps",     emoji: "📱", count: 9,  photo: PHOTOS.phone        },
];

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />

      <main className="main-wrapper">

        {/* ===== HERO ===== */}
        <section className="home-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="home-hero-grid">

                {/* Left: text */}
                <div className="home-hero-content">
                  <span className="home-hero-badge">✈ Seu guia de passagens baratas</span>
                  <h1 className="home-hero-title">
                    Encontre as{" "}
                    <span className="text-gradient">Melhores Passagens</span>
                    <br />Aéreas do Brasil
                  </h1>
                  <p className="home-hero-subtitle">
                    Compare preços da LATAM, 123Milhas e muito mais. Dicas, promoções
                    e estratégias para você viajar mais gastando menos.
                  </p>
                  <div className="home-hero-ctas">
                    <a href={LATAM_URL}  target="_blank" rel="noopener noreferrer" className="btn-cta btn-cta-latam">✈ Ver Ofertas LATAM</a>
                    <a href={MILHAS_URL} target="_blank" rel="noopener noreferrer" className="btn-cta btn-cta-milhas">🎯 Buscar na 123Milhas</a>
                  </div>
                  <p className="home-hero-note">🔒 Comparamos preços reais das companhias aéreas</p>
                </div>

                {/* Right: 2×2 photo mosaic */}
                <div className="hero-mosaic">
                  <div className="hero-mosaic-top">
                    <div className="hero-mosaic-img hero-mosaic-big">
                      <Image src={PHOTOS.heroCouple} alt="Casal viajando" fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 400px" />
                    </div>
                    <div className="hero-mosaic-img hero-mosaic-small">
                      <Image src={PHOTOS.heroParis} alt="Torre Eiffel em Paris" fill style={{ objectFit: "cover" }} sizes="200px" />
                    </div>
                  </div>
                  <div className="hero-mosaic-bottom">
                    <div className="hero-mosaic-img hero-mosaic-small">
                      <Image src={PHOTOS.heroBeach} alt="Praia tropical" fill style={{ objectFit: "cover" }} sizes="200px" />
                    </div>
                    <div className="hero-mosaic-img hero-mosaic-big">
                      <Image src={PHOTOS.heroPlane} alt="Janela do avião" fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 400px" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Stats */}
              <div className="home-stats">
                {[
                  { value: "50+",    label: "Companhias aéreas" },
                  { value: "R$ 800", label: "Economia média por voo" },
                  { value: "120+",   label: "Destinos cobertos" },
                  { value: "24h",    label: "Alertas em tempo real" },
                ].map((s) => (
                  <div key={s.label} className="home-stat-item">
                    <span className="home-stat-value">{s.value}</span>
                    <span className="home-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== AIRLINE BANNERS ===== */}
        <section className="home-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="airline-dual-banner">
                <div className="airline-card airline-card-latam">
                  <div className="airline-card-emoji">✈️</div>
                  <h3>LATAM Airlines — Passagens em Promoção</h3>
                  <p>Voos nacionais e internacionais com as melhores tarifas. Aproveite as promoções exclusivas.</p>
                  <a href={LATAM_URL} target="_blank" rel="noopener noreferrer" className="btn-cta btn-cta-white" style={{ marginTop: "8px" }}>Ver todas as ofertas →</a>
                </div>
                <div className="airline-card airline-card-milhas">
                  <div className="airline-card-emoji">🎯</div>
                  <h3>123Milhas — Compare e Economize</h3>
                  <p>Passagens aéreas, pacotes completos e os melhores preços para todos os destinos.</p>
                  <a href={MILHAS_URL} target="_blank" rel="noopener noreferrer" className="btn-cta btn-cta-white" style={{ marginTop: "8px", color: "var(--color-milhas)" }}>Buscar passagens →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURED DEALS ===== */}
        <section id="ofertas" className="home-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="home-section-header">
                <h2 className="home-section-title">🔥 Ofertas em Destaque</h2>
                <p className="home-section-subtitle">Preços atualizados diariamente. Aproveite antes que acabem!</p>
              </div>
              <div className="deals-grid">
                {featuredDeals.map((deal) => (
                  <a key={`${deal.from}-${deal.to}`} href={deal.href} target="_blank" rel="noopener noreferrer"
                    className={`deal-card ${deal.airline === "LATAM" ? "deal-latam" : "deal-milhas"}`}>
                    <div className="deal-card-photo">
                      <Image src={deal.photo} alt={`Voo para ${deal.to}`} fill style={{ objectFit: "cover" }} sizes="(max-width:767px) 100vw, 300px" />
                      <div className="deal-card-photo-overlay" />
                      <span className={`deal-badge ${deal.airline === "LATAM" ? "badge-latam" : "badge-milhas"}`}>{deal.airline}</span>
                    </div>
                    <div className="deal-card-body">
                      <div className="deal-route">
                        <span className="deal-from">{deal.from}</span>
                        <span className="deal-arrow">→</span>
                        <span className="deal-to">{deal.to}</span>
                      </div>
                      <div className="deal-price">
                        <span className="deal-from-label">a partir de</span>
                        <span className="deal-price-value">{deal.price}</span>
                      </div>
                      <span className="deal-cta">Ver oferta →</span>
                    </div>
                  </a>
                ))}
              </div>
              <div className="home-cta-row">
                <a href={LATAM_URL}  target="_blank" rel="noopener noreferrer" className="btn-cta btn-cta-latam">✈ Ver mais ofertas LATAM</a>
                <a href={MILHAS_URL} target="_blank" rel="noopener noreferrer" className="btn-cta btn-cta-milhas">🎯 Ver mais na 123Milhas</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FULL-WIDTH INSPIRATION PHOTO ===== */}
        <div className="inspiration-strip">
          <Image src={PHOTOS.roadtrip} alt="Viagem de estrada" fill style={{ objectFit: "cover", objectPosition: "center 60%" }} sizes="100vw" />
          <div className="inspiration-overlay">
            <div className="padding-global" style={{ width: "100%" }}>
              <div className="container-large">
                <div className="inspiration-text">
                  <p className="inspiration-tag">✈ Sua próxima aventura começa aqui</p>
                  <h2 className="inspiration-title">O mundo inteiro ao alcance do seu bolso</h2>
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <a href={LATAM_URL}  target="_blank" rel="noopener noreferrer" className="btn-cta btn-cta-latam">✈ LATAM</a>
                    <a href={MILHAS_URL} target="_blank" rel="noopener noreferrer" className="btn-cta btn-cta-milhas">🎯 123Milhas</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CATEGORIES ===== */}
        <section id="destinos" className="home-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="home-section-header">
                <h2 className="home-section-title">Explorar por Categoria</h2>
              </div>
              <div className="categories-grid">
                {categories.map((cat) => (
                  <a key={cat.label} href="/#artigos" className="category-card">
                    <div className="category-photo">
                      <Image src={cat.photo} alt={cat.label} fill style={{ objectFit: "cover" }} sizes="120px" />
                    </div>
                    <div className="category-info">
                      <span className="category-emoji">{cat.emoji}</span>
                      <span className="category-label">{cat.label}</span>
                      <span className="category-count">{cat.count} artigos</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== ARTICLES GRID ===== */}
        <section id="artigos" className="home-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="home-section-header">
                <h2 className="home-section-title">Artigos e Dicas</h2>
                <p className="home-section-subtitle">Conteúdo prático para você viajar melhor gastando menos</p>
              </div>
              <div className="articles-grid">
                {articles.map((art, i) => (
                  <a key={art.slug + i} href={i === 0 ? `/dicas/${art.slug}` : "#"} className={`article-card ${i === 0 ? "article-card-featured" : ""}`}>
                    <div className="article-card-thumb">
                      <Image src={art.photo} alt={art.title} fill style={{ objectFit: "cover" }} sizes="(max-width:767px) 100vw, (max-width:1024px) 50vw, 33vw" />
                    </div>
                    <div className="article-card-body">
                      <span className="article-category">{art.category}</span>
                      <h3 className="article-title">{art.title}</h3>
                      <p className="article-excerpt">{art.excerpt}</p>
                      <div className="article-meta">
                        <span>{art.date}</span><span>·</span><span>{art.readTime} de leitura</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== NEWSLETTER ===== */}
        <section id="newsletter" className="home-newsletter">
          <div className="padding-global">
            <div className="container-large">
              <div className="newsletter-inner">
                <div className="newsletter-text">
                  <span className="newsletter-emoji">🔔</span>
                  <h2>Receba alertas de passagens baratas</h2>
                  <p>Cadastre-se e seja o primeiro a saber quando o preço do voo que você quer cair. 100% gratuito.</p>
                </div>
                <NewsletterForm />
                <div className="newsletter-airlines">
                  <span>Monitoramos:</span>
                  <a href={LATAM_URL}  target="_blank" rel="noopener noreferrer" className="btn-cta btn-cta-latam  btn-cta-sm">✈ LATAM</a>
                  <a href={MILHAS_URL} target="_blank" rel="noopener noreferrer" className="btn-cta btn-cta-milhas btn-cta-sm">🎯 123Milhas</a>
                  <span className="newsletter-more">e mais 50 fontes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
