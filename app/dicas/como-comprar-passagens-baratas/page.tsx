import Image from "next/image";
import Header from "../../components/Header";
import TOC from "../../components/TOC";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const LATAM_URL  = "https://www.latam.com/pt_br/ofertas/promocoes/";
const MILHAS_URL = "https://123milhas.com";

const PAGE_URL   = "https://melhoresprecoaereos.com.br/dicas/como-comprar-passagens-baratas";
const PAGE_TITLE = "Como comprar passagens aéreas baratas e economizar na viagem internacional";
const enc        = encodeURIComponent;

const SHARE = {
  facebook:  `https://www.facebook.com/sharer/sharer.php?u=${enc(PAGE_URL)}`,
  twitter:   `https://twitter.com/intent/tweet?url=${enc(PAGE_URL)}&text=${enc(PAGE_TITLE)}`,
  linkedin:  `https://www.linkedin.com/sharing/share-offsite/?url=${enc(PAGE_URL)}`,
  whatsapp:  `https://api.whatsapp.com/send?text=${enc(PAGE_TITLE + " " + PAGE_URL)}`,
};
const UNS        = "https://images.unsplash.com/photo-";

const INLINE_PHOTOS = {
  airport:    `${UNS}1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80`,
  planning:   `${UNS}1488085061387-422e29b40080?auto=format&fit=crop&w=900&q=80`,
  planeView:  `${UNS}1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80`,
  beach:      `${UNS}1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80`,
  luggage:    `${UNS}1503220317375-aaad31d3e101?auto=format&fit=crop&w=900&q=80`,
};

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />

      <main className="main-wrapper">

        {/* ===== HERO ===== */}
        <section className="section_blog-top_content">
          <div className="padding-global">
            <div className="container-large">

              <div className="blog-breadcrumb">
                <a href="/" className="breadcrumb-blog-link">Home</a>
                <span>&gt;</span>
                <a href="/dicas" className="breadcrumb-blog-link">Dicas de Viagem</a>
                <span>&gt;</span>
                <span>Como comprar passagens aéreas baratas e economizar na viagem internacional?</span>
              </div>

              <div className="blog-top_content_title">
                <h1>Como comprar passagens aéreas baratas e economizar na viagem internacional?</h1>
                <div className="spacer-medium" />
                <p className="text-size-medium">
                  Quer saber como encontrar passagens aéreas baratas e reduzir os gastos da
                  viagem internacional? A gente te conta neste conteúdo.
                </p>
                <div className="spacer-small" />
                <div className="blog-meta">
                  <span>Por:</span>
                  <strong>Redação MelhoresPreçosAéreos</strong>
                  <span>·</span>
                  <span>Atualizado em: 02/04/2026</span>
                </div>
              </div>

              <Image
                src="https://cdn.prod.website-files.com/63b7026306af943f8e01771f/687e41c346af4a4d8a59d099_659dc6c1384fbe61ebc2a353_encontrar-passagens-aereas-baratas.webp"
                alt="Passagem aérea ao lado de uma moeda de euro"
                className="blog-categories-post_image_img"
                width={1200}
                height={630}
                priority
              />

            </div>
          </div>
        </section>

        {/* ===== MAIN CONTENT ===== */}
        <section className="section_blog-main-content">
          <div className="padding-global">
            <div className="container-large">
              <div className="blog_content-wrapper w-row">

                {/* ARTICLE */}
                <div className="blog_content-article w-col w-col-9">
                  <article className="blog-content_intro">

                    <TOC />

                    {/* Intro */}
                    <div className="blog-content_intro-rich w-richtext">
                      <p>
                        Quer viajar gastando menos? Então você precisa dominar a arte de encontrar{" "}
                        <strong>passagens aéreas baratas</strong>. Seja para um mochilão dos sonhos,
                        uma viagem em família, a trabalho ou um passeio romântico, economizar na
                        passagem faz toda a diferença no orçamento.
                      </p>
                      <p>
                        Mas onde estão essas ofertas? Com algumas estratégias simples – e um pouco
                        de paciência – dá pra garantir tarifas mais acessíveis. Neste post, vamos
                        compartilhar <strong>15 dicas</strong> para você comprar passagens aéreas
                        mais baratas, além de uma lista de plataformas para encontrá-las.
                      </p>
                    </div>

                    {/* Dual airline banner */}
                    <div className="airline-dual-banner">
                      <div className="airline-card airline-card-latam">
                        <div className="airline-card-emoji">✈️</div>
                        <h3>Passagens LATAM — até 50% off</h3>
                        <p>Promoções relâmpago para destinos nacionais e internacionais</p>
                        <a
                          href={LATAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-cta btn-cta-white"
                          style={{ marginTop: "4px" }}
                        >
                          Ver Ofertas LATAM →
                        </a>
                      </div>
                      <div className="airline-card airline-card-milhas">
                        <div className="airline-card-emoji">🎯</div>
                        <h3>123Milhas — voos com desconto</h3>
                        <p>Encontre passagens aéreas e pacotes completos pelo melhor preço</p>
                        <a
                          href={MILHAS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-cta btn-cta-white"
                          style={{ marginTop: "4px", color: "var(--color-milhas)" }}
                        >
                          Buscar na 123Milhas →
                        </a>
                      </div>
                    </div>

                    {/* Article content */}
                    <div className="blog-content_intro-rich w-richtext" id="content">

                      <h2 id="15-dicas-para-comprar-passagens-aereas-mais-baratas">
                        15 dicas para comprar passagens aéreas mais baratas
                      </h2>

                      <h2 id="1-planeje-com-antecedencia">1. Planeje com antecedência</h2>
                      <p>
                        Já ouviu aquele ditado "não deixe para amanhã o que você pode fazer hoje"?
                        Pois é, isso também vale para passagens aéreas.{" "}
                        <strong>Comprar com antecedência geralmente significa pagar menos.</strong>
                      </p>
                      <p>
                        O ideal é começar a pesquisar entre dois e três meses antes da data desejada
                        para voos nacionais. Para uma{" "}
                        <a href="#">viagem internacional</a>, o ideal é se organizar com quatro a
                        seis meses de antecedência.
                      </p>

                      {/* LATAM inline CTA */}
                      <div className="blog_banner-cta">
                        <div className="blog_banner-cta-wraper is-blue">
                          <div className="blog_banner-cta-text">
                            <p className="heading-style-h3">✈ Reserve com a LATAM agora</p>
                            <div className="spacer-small" />
                            <p className="text-size-small">
                              Garanta as melhores tarifas com pagamento fácil e seguro.
                            </p>
                            <div className="spacer-medium" />
                            <a
                              href={LATAM_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-cta btn-cta-latam"
                              style={{ alignSelf: "center" }}
                            >
                              Ver Promoções LATAM
                            </a>
                          </div>
                          <div className="blog_banner-cta-img">🛫</div>
                        </div>
                      </div>

                      <h2 id="2-tenha-flexibilidade-com-as-datas">2. Tenha flexibilidade com as datas</h2>
                      <p>
                        Flexibilidade é uma das chaves para economizar.{" "}
                        <strong>
                          Ajustar suas datas de ida e volta pode gerar preços bem mais baixos.
                        </strong>{" "}
                        Alguns buscadores mostram um calendário com as tarifas mais baratas por dia.
                      </p>
                      <p>
                        Evitar finais de semana, feriados prolongados e datas comemorativas pode
                        gerar economia expressiva. Às vezes, trocar uma viagem de sexta para quarta
                        pode fazer uma grande diferença no valor final.
                      </p>

                      <h2 id="3-use-sites-e-aplicativos-de-busca">3. Use sites e aplicativos de busca</h2>
                      <p>
                        Antes de fechar qualquer compra, <strong>vale a pena comparar.</strong>{" "}
                        Plataformas como{" "}
                        <a href={LATAM_URL} target="_blank" rel="noopener noreferrer">LATAM</a>,{" "}
                        <a href={MILHAS_URL} target="_blank" rel="noopener noreferrer">123Milhas</a>,{" "}
                        <a href="https://flights.google.com/" target="_blank" rel="noopener noreferrer">
                          Google Flights
                        </a>{" "}
                        e{" "}
                        <a href="https://www.skyscanner.com.br/" target="_blank" rel="noopener noreferrer">
                          Skyscanner
                        </a>{" "}
                        reúnem ofertas de várias companhias em um só lugar. Assim, você visualiza
                        as melhores opções de preço, horários e companhias de uma só vez.
                      </p>

                      {/* 123Milhas inline CTA */}
                      <div className="blog_banner-cta">
                        <div className="blog_banner-cta-wraper is-orange">
                          <div className="blog_banner-cta-text">
                            <p className="heading-style-h3">🎯 Compare na 123Milhas</p>
                            <div className="spacer-small" />
                            <p className="text-size-small">
                              Encontre passagens aéreas e pacotes completos pelo menor preço.
                            </p>
                            <div className="spacer-medium" />
                            <a
                              href={MILHAS_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-cta btn-cta-milhas"
                              style={{ alignSelf: "center" }}
                            >
                              Buscar na 123Milhas
                            </a>
                          </div>
                          <div className="blog_banner-cta-img">🎫</div>
                        </div>
                      </div>

                      {/* Foto inline 1 — aeroporto */}
                      <div className="article-inline-photo">
                        <Image src={INLINE_PHOTOS.airport} alt="Terminal de aeroporto movimentado" width={860} height={420} style={{ width: "100%", height: "auto", borderRadius: "16px", display: "block" }} />
                        <p className="article-inline-caption">Aeroportos internacionais oferecem conexões que podem baratear bastante sua passagem</p>
                      </div>

                      <h2 id="4-ative-alertas-de-preco">4. Ative alertas de preço</h2>
                      <p>
                        Alertas de preço são a forma mais prática de não perder uma promoção. Quando
                        o valor do voo cai abaixo de um limite definido, você recebe uma notificação
                        por e-mail ou pelo app.{" "}
                        <strong>Google Flights e Skyscanner oferecem esse recurso gratuitamente.</strong>
                      </p>

                      <h2 id="5-considere-voos-com-escalas">5. Considere voos com escalas</h2>
                      <p>
                        Voos diretos são mais convenientes, mas costumam ser significativamente mais
                        caros. <strong>Optar por um itinerário com escala pode gerar economia de
                        30% a 50%</strong> dependendo do destino. Avalie se o tempo extra compensa
                        a diferença no bolso.
                      </p>

                      <h2 id="6-explore-aeroportos-alternativos">6. Explore aeroportos alternativos</h2>
                      <p>
                        Grandes cidades têm mais de um aeroporto. Em São Paulo, há Congonhas e
                        Guarulhos. Voos partindo de aeroportos menos movimentados podem ser mais
                        baratos — verifique se a logística de deslocamento compensa.
                      </p>

                      {/* Dual CTA inline */}
                      <div className="airline-dual-banner">
                        <div className="airline-inline-banner is-latam" style={{ margin: 0 }}>
                          <div className="airline-inline-text">
                            <p className="heading-style-h3">✈ Oferta do dia LATAM</p>
                            <p className="subtext">Passagens com até 50% de desconto. Aproveite!</p>
                            <div className="spacer-small" />
                            <a
                              href={LATAM_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-cta btn-cta-white btn-cta-sm"
                              style={{ color: "#e30613" }}
                            >
                              Ver oferta →
                            </a>
                          </div>
                          <div className="airline-inline-img">🛩️</div>
                        </div>
                        <div className="airline-inline-banner is-milhas" style={{ margin: 0 }}>
                          <div className="airline-inline-text">
                            <p className="heading-style-h3">🎯 Destaque 123Milhas</p>
                            <p className="subtext">Pacotes e passagens com os melhores preços.</p>
                            <div className="spacer-small" />
                            <a
                              href={MILHAS_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-cta btn-cta-white btn-cta-sm"
                              style={{ color: "#ff6600" }}
                            >
                              Ver oferta →
                            </a>
                          </div>
                          <div className="airline-inline-img">🏷️</div>
                        </div>
                      </div>

                      {/* Foto inline 2 — planejamento */}
                      <div className="article-inline-photo">
                        <Image src={INLINE_PHOTOS.planning} alt="Casal planejando viagem com mapa" width={860} height={420} style={{ width: "100%", height: "auto", borderRadius: "16px", display: "block" }} />
                        <p className="article-inline-caption">Planejar com antecedência e comparar datas é fundamental para encontrar os melhores preços</p>
                      </div>

                      <h2 id="7-use-programas-de-milhas">7. Use programas de milhas</h2>
                      <p>
                        Acumular milhas é uma estratégia poderosa para quem viaja com frequência.
                      </p>
                      <ul>
                        <li>
                          <strong>LATAM Pass</strong> — ideal para quem voa LATAM e quer benefícios
                          no programa Star Alliance.
                        </li>
                        <li>
                          <strong>Smiles (Gol)</strong> — ótimo para resgates em rotas nacionais
                          a preços acessíveis.
                        </li>
                        <li>
                          <strong>TudoAzul</strong> — vantajoso para rotas menores operadas pela Azul.
                        </li>
                        <li>
                          <strong>123Milhas</strong> — plataforma com boas opções de resgate e
                          combos de viagem.
                        </li>
                      </ul>

                      <h2 id="8-acumule-pontos-no-cartao">8. Acumule pontos no cartão de crédito</h2>
                      <p>
                        Cartões de crédito com programas de pontos são aliados poderosos.{" "}
                        <strong>Concentre seus gastos em um único cartão</strong> para maximizar
                        o acúmulo e transfira os pontos para o programa de milhas que oferecer a
                        melhor conversão.
                      </p>

                      <h2 id="9-fique-de-olho-nas-promocoes-relampago">
                        9. Fique de olho nas promoções relâmpago
                      </h2>
                      <p>
                        Companhias lançam promoções por tempo limitado com descontos de até 70%.
                        Siga as redes sociais da LATAM, Gol, Azul e 123Milhas e assine os alertas
                        dos comparadores para ser o primeiro a saber.
                      </p>

                      {/* LATAM banner */}
                      <div className="airline-inline-banner is-latam">
                        <div className="airline-inline-text">
                          <p className="heading-style-h3">🔥 Promoções relâmpago LATAM</p>
                          <p className="subtext">
                            Novas ofertas todos os dias. Passagens nacionais e internacionais.
                          </p>
                          <div className="spacer-small" />
                          <a
                            href={LATAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cta btn-cta-latam"
                          >
                            Ver ofertas do dia →
                          </a>
                        </div>
                        <div className="airline-inline-img">🎉</div>
                      </div>

                      <h2 id="10-viaje-fora-da-alta-temporada">10. Viaje fora da alta temporada</h2>
                      <p>
                        Julho, dezembro e Carnaval são os períodos mais caros para viajar no Brasil.
                        Escolher datas fora da alta temporada, como março-maio ou agosto-outubro,
                        pode <strong>reduzir o custo da passagem em até 40%</strong>.
                      </p>

                      {/* Foto inline 3 — janela do avião */}
                      <div className="article-inline-photo">
                        <Image src={INLINE_PHOTOS.planeView} alt="Vista da janela do avião durante voo" width={860} height={420} style={{ width: "100%", height: "auto", borderRadius: "16px", display: "block" }} />
                        <p className="article-inline-caption">Voos com escala podem oferecer economias significativas e ainda a chance de conhecer uma cidade extra</p>
                      </div>

                      <h2 id="11-use-modo-anonimo">11. Use o modo anônimo no navegador</h2>
                      <p>
                        Sites de passagens usam cookies para rastrear suas buscas e,{" "}
                        <strong>em alguns casos, podem aumentar os preços</strong> quando percebem
                        que você está pesquisando a mesma rota repetidamente. Use a aba anônima
                        (Ctrl+Shift+N) para evitar isso.
                      </p>

                      <h2 id="12-compare-o-preco-total">12. Compare o preço total (com taxas)</h2>
                      <p>
                        Passagens com preços atraentes podem esconder taxas de embarque, tarifas
                        de bagagem e encargos que só aparecem no final da compra.{" "}
                        <strong>Sempre compare o preço final, não o valor anunciado.</strong>
                      </p>

                      <h2 id="13-voos-mistos">13. Considere voos mistos</h2>
                      <p>
                        Comprar a passagem de ida em uma companhia e a de volta em outra pode sair
                        mais barato do que um bilhete de ida e volta na mesma companhia. Use
                        comparadores como Google Flights e 123Milhas para simular essa combinação.
                      </p>

                      {/* 123Milhas banner */}
                      <div className="airline-inline-banner is-milhas">
                        <div className="airline-inline-text">
                          <p className="heading-style-h3">🎯 Compare voos na 123Milhas</p>
                          <p className="subtext">
                            Voos mistos, pacotes e as melhores combinações de preço.
                          </p>
                          <div className="spacer-small" />
                          <a
                            href={MILHAS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cta btn-cta-milhas"
                          >
                            Comparar agora →
                          </a>
                        </div>
                        <div className="airline-inline-img">💡</div>
                      </div>

                      <h2 id="14-assine-newsletters">14. Assine newsletters de promoções</h2>
                      <p>
                        Serviços como <strong>Passagens Imperdíveis</strong> e a newsletter da{" "}
                        <a href={MILHAS_URL} target="_blank" rel="noopener noreferrer">123Milhas</a>{" "}
                        enviam promoções diretamente para seu e-mail. É uma das formas mais
                        passivas e eficientes de encontrar passagens baratas.
                      </p>

                      <h2 id="15-reserva-antecipada-de-assento">
                        15. Atenção à reserva de assento
                      </h2>
                      <p>
                        Reservar assento com antecedência pode ter custo extra em algumas tarifas.
                        Se você não se importa com a posição no avião,{" "}
                        <strong>deixe para escolher gratuitamente no check-in online</strong> e
                        economize mais alguns reais que fazem diferença no orçamento total.
                      </p>

                      {/* Foto inline 4 — destino de praia */}
                      <div className="article-inline-photo">
                        <Image src={INLINE_PHOTOS.beach} alt="Praia tropical paradisíaca" width={860} height={420} style={{ width: "100%", height: "auto", borderRadius: "16px", display: "block" }} />
                        <p className="article-inline-caption">Com as dicas certas, destinos paradisíacos ficam muito mais acessíveis</p>
                      </div>

                      {/* Final CTA - dual */}
                      <div className="airline-dual-banner">
                        <div className="airline-card airline-card-latam">
                          <div className="airline-card-emoji">✈️</div>
                          <h3>Pronto para volar com a LATAM?</h3>
                          <p>As melhores tarifas estão esperando por você</p>
                          <a
                            href={LATAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cta btn-cta-white"
                            style={{ marginTop: "4px" }}
                          >
                            Reservar Agora
                          </a>
                        </div>
                        <div className="airline-card airline-card-milhas">
                          <div className="airline-card-emoji">🎯</div>
                          <h3>Encontre o melhor preço na 123Milhas</h3>
                          <p>Passagens, pacotes e muito mais com desconto</p>
                          <a
                            href={MILHAS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cta btn-cta-white"
                            style={{ marginTop: "4px", color: "var(--color-milhas)" }}
                          >
                            Buscar Passagem
                          </a>
                        </div>
                      </div>

                    </div>
                  </article>
                </div>

                {/* SIDEBAR */}
                <Sidebar />

              </div>
            </div>
          </div>
        </section>

        {/* ===== TAGS + AUTHOR + SHARE ===== */}
        <section className="section_blog-content">
          <div className="padding-global">
            <div className="container-large">

              <div className="blog-post_tag-list-wrapper">
                <ul className="blog-post_tag-list">
                  {["Passagens Baratas", "Voos Internacionais", "Dicas de Viagem", "Milhas",
                    "LATAM", "123Milhas", "Promoções", "Economia"].map((tag) => (
                    <li key={tag} className="blog-post_tag-item">
                      <a href="#">{tag}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="blog-content_author">
                <div className="blog-content_author-top">
                  <div className="blog-content_author-avatar" aria-hidden="true">✍️</div>
                  <div className="blog-content_author-top-right">
                    <p className="blog-content_author-text is-title">Redação MelhoresPreçosAéreos</p>
                    <p className="blog-content_author-text">Time Editorial</p>
                    <p className="blog-content_author-text">Brasil</p>
                  </div>
                </div>
                <p className="blog-content_author-desc">
                  O time editorial do MelhoresPreçosAéreos é formado por especialistas em viagens,
                  turismo e finanças pessoais. Nosso objetivo é ajudar você a viajar mais gastando
                  menos, com conteúdo prático, atualizado e confiável sobre passagens aéreas,
                  programas de milhas e destinos.
                </p>
              </div>

              <div className="blog-content_share">
                <p className="blog-content_share-text">Compartilhe este artigo:</p>
                <div className="blog-content_share-logos">
                  <a href={SHARE.facebook} target="_blank" rel="noopener noreferrer" className="blog-content_share-icon-wrap">📘 Facebook</a>
                  <a href={SHARE.twitter}  target="_blank" rel="noopener noreferrer" className="blog-content_share-icon-wrap">🐦 Twitter / X</a>
                  <a href={SHARE.linkedin} target="_blank" rel="noopener noreferrer" className="blog-content_share-icon-wrap">💼 LinkedIn</a>
                  <a href={SHARE.whatsapp} target="_blank" rel="noopener noreferrer" className="blog-content_share-icon-wrap">📱 WhatsApp</a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== RELATED POSTS ===== */}
        <section className="section_blog-posts">
          <div className="padding-global">
            <div className="container-large">

              <h2 className="blog-posts_heading">Você também pode gostar</h2>

              <div className="blog-posts_component">
                {[
                  { emoji: "🌍", title: "Voos baratos para a Europa: guia completo para economizar em 2025" },
                  { emoji: "🏖️", title: "Melhores destinos nacionais baratos para viajar nas férias" },
                  { emoji: "✈️", title: "Como usar milhas para viajar de graça: guia passo a passo" },
                  { emoji: "🎯", title: "Erros que encarecem sua passagem aérea e como evitá-los" },
                ].map((post) => (
                  <a key={post.title} href="#" className="blog-posts_item">
                    <div className="blog-posts_item-thumb" aria-hidden="true">
                      {post.emoji}
                    </div>
                    <div className="blog-posts_item-bottom">
                      <p className="blog-posts_item-heading">{post.title}</p>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
