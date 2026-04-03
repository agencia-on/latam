const recentPosts = [
  { href: "/dicas/como-comprar-passagens-baratas", text: "Como comprar passagens aéreas baratas e economizar na viagem" },
  { href: "#", text: "Milhas Smiles: como usar, acumular e não perder pontos" },
  { href: "#", text: "Melhores destinos nacionais para viajar barato" },
  { href: "#", text: "Como viajar de graça para o exterior usando milhas" },
  { href: "#", text: "Alta temporada: quando evitar e quanto economizar" },
  { href: "#", text: "Passagens baratas para os EUA: dicas práticas" },
];

export default function Sidebar() {
  return (
    <aside className="blog_content-aside w-col w-col-3">

      <div className="sidebar-cta-card is-blue">
        <span className="card-emoji">🔔</span>
        <h3>Alerta de Preço Grátis</h3>
        <p>Receba notificações quando o voo que você quer baixar de preço</p>
        <a href="/#newsletter">Ativar Agora</a>
      </div>

      <div className="sidebar-cta-card is-latam">
        <span className="card-emoji">✈️</span>
        <h3>Passagens LATAM</h3>
        <p>Voos nacionais e internacionais com as melhores tarifas da América Latina</p>
        <a href="https://www.latam.com/pt_br/ofertas/promocoes/" target="_blank" rel="noopener noreferrer">
          Ver Promoções →
        </a>
      </div>

      <div className="sidebar-cta-card is-milhas">
        <span className="card-emoji">🎯</span>
        <h3>Voe com 123Milhas</h3>
        <p>Encontre passagens aéreas com desconto e pacotes de viagem completos</p>
        <a href="https://123milhas.com" target="_blank" rel="noopener noreferrer">
          Buscar Passagens →
        </a>
      </div>

      <div className="blog_sidebar-recent-posts">
        <p className="heading-style-h5">Artigos Populares</p>
        <ul>
          {recentPosts.map((post, i) => (
            <li key={i}><a href={post.href}>{post.text}</a></li>
          ))}
        </ul>
      </div>

    </aside>
  );
}
