export default function Header() {
  return (
    <header className="main-header">
      <a href="/" className="logo nav_blog">
        <div className="logo-icon">MPA</div>
        <span>MelhoresPreçosAéreos</span>
      </a>

      {/* Desktop nav */}
      <nav className="nav-desktop">
        <a href="/#destinos"  className="nav-link">Destinos</a>
        <a href="/#artigos"   className="nav-link">Dicas</a>
        <a href="/#ofertas"   className="nav-link">Promoções</a>
        <a href="/#newsletter" className="nav-link">Alertas</a>
        <div className="header-cta-group">
          <a
            href="https://www.latam.com/pt_br/ofertas/promocoes/"
            target="_blank" rel="noopener noreferrer"
            className="btn-cta btn-cta-latam btn-cta-sm"
          >
            ✈ LATAM
          </a>
          <a
            href="https://123milhas.com"
            target="_blank" rel="noopener noreferrer"
            className="btn-cta btn-cta-milhas btn-cta-sm"
          >
            🎯 123Milhas
          </a>
        </div>
      </nav>

      {/* Mobile */}
      <div className="hamburger-area">
        <a
          href="https://www.latam.com/pt_br/ofertas/promocoes/"
          target="_blank" rel="noopener noreferrer"
          className="btn-cta btn-cta-latam btn-cta-sm"
          style={{ fontSize: "0.78rem", padding: "8px 12px" }}
        >
          ✈ LATAM
        </a>
        <label htmlFor="menu-toggle" className="hamburger-label" aria-label="Menu">
          <span className="bar" /><span className="bar" /><span className="bar" />
        </label>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" defaultChecked={false} />
        <nav className="mobile-nav">
          <a href="/#destinos"   className="nav-link">🌍 Destinos</a>
          <a href="/#artigos"    className="nav-link">💡 Dicas de Viagem</a>
          <a href="/#ofertas"    className="nav-link">🔥 Promoções</a>
          <a href="/#newsletter" className="nav-link">🔔 Alertas de Preço</a>
          <div className="mobile-cta-row">
            <a href="https://www.latam.com/pt_br/ofertas/promocoes/" target="_blank" rel="noopener noreferrer" className="btn-cta btn-cta-latam">✈ Ver LATAM</a>
            <a href="https://123milhas.com" target="_blank" rel="noopener noreferrer" className="btn-cta btn-cta-milhas">🎯 123Milhas</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
