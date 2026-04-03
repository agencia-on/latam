const columns = [
  {
    title: "Destinos",
    links: [
      { label: "Voos para Europa", href: "#" },
      { label: "Voos para os EUA", href: "#" },
      { label: "Voos para a Ásia", href: "#" },
      { label: "Voos Nacionais", href: "#" },
      { label: "Passagens para Cancún", href: "#" },
    ],
  },
  {
    title: "Companhias",
    links: [
      { label: "LATAM Airlines", href: "https://www.latam.com/pt_br/ofertas/promocoes/" },
      { label: "123Milhas", href: "https://123milhas.com" },
      { label: "Gol Linhas Aéreas", href: "#" },
      { label: "Azul Linhas Aéreas", href: "#" },
      { label: "American Airlines", href: "#" },
    ],
  },
  {
    title: "Dicas",
    links: [
      { label: "Como comprar barato", href: "#" },
      { label: "Programas de Milhas", href: "#" },
      { label: "Alertas de Preço", href: "#" },
      { label: "Bagagem Despachada", href: "#" },
      { label: "Check-in Online", href: "#" },
    ],
  },
  {
    title: "Promoções",
    links: [
      { label: "Ofertas LATAM", href: "https://www.latam.com/pt_br/ofertas/promocoes/" },
      { label: "Ofertas 123Milhas", href: "https://123milhas.com" },
      { label: "Passagens Relâmpago", href: "#" },
      { label: "Voos de Última Hora", href: "#" },
      { label: "Pacotes de Viagem", href: "#" },
    ],
  },
  {
    title: "Sobre",
    links: [
      { label: "Quem Somos", href: "#" },
      { label: "Como Funciona", href: "#" },
      { label: "Fale Conosco", href: "#" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer5_component">
      <div className="padding-global">
        <div className="container-large">

          <div className="footer5_top-wrapper">
            {columns.map((col) => (
              <div key={col.title} className="footer5_link-column">
                <span className="footer5_col-title">{col.title}</span>
                <div className="footer5_link-list">
                  {col.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="footer5_bottom-wrapper">
            <a href="/" className="footer5_bottom-logo">
              <div className="logo-icon">MPA</div>
              MelhoresPreçosAéreos
            </a>

            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <a
                href="https://www.latam.com/pt_br/ofertas/promocoes/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta btn-cta-latam btn-cta-sm"
              >
                ✈ LATAM
              </a>
              <a
                href="https://123milhas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta btn-cta-milhas btn-cta-sm"
              >
                🎯 123Milhas
              </a>
            </div>

            <div className="footer5_social-links">
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">👤</a>
              <a href="#" aria-label="Twitter/X">✖</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="footer-legal">
            <p>
              © 2026 MelhoresPreçosAéreos. Todos os direitos reservados.
              Este site não é afiliado oficialmente à LATAM Airlines, 123Milhas, Gol ou Azul.
              Os preços exibidos são orientativos e podem variar conforme disponibilidade.
              Sempre confirme os valores diretamente nas plataformas de compra.{" "}
              <a href="#">Política de Privacidade</a> · <a href="#">Termos de Uso</a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
