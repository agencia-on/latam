const items = [
  { href: "#15-dicas-para-comprar-passagens-aereas-mais-baratas", label: "15 dicas para comprar passagens aéreas mais baratas", level: "h2" },
  { href: "#1-planeje-com-antecedencia",        label: "1. Planeje com antecedência",                     level: "h2" },
  { href: "#2-tenha-flexibilidade-com-as-datas", label: "2. Tenha flexibilidade com as datas",            level: "h2" },
  { href: "#3-use-sites-e-aplicativos-de-busca", label: "3. Use sites e aplicativos de busca",            level: "h2" },
  { href: "#4-ative-alertas-de-preco",           label: "4. Ative alertas de preço",                      level: "h2" },
  { href: "#5-considere-voos-com-escalas",       label: "5. Considere voos com escalas",                  level: "h2" },
  { href: "#6-explore-aeroportos-alternativos",  label: "6. Explore aeroportos alternativos",             level: "h2" },
  { href: "#7-use-programas-de-milhas",          label: "7. Use programas de milhas",                     level: "h2" },
  { href: "#8-acumule-pontos-no-cartao",         label: "8. Acumule pontos no cartão de crédito",         level: "h2" },
  { href: "#9-fique-de-olho-nas-promocoes-relampago", label: "9. Fique de olho nas promoções relâmpago",  level: "h2" },
  { href: "#10-viaje-fora-da-alta-temporada",    label: "10. Viaje fora da alta temporada",               level: "h2" },
  { href: "#11-use-modo-anonimo",                label: "11. Use o modo anônimo no navegador",            level: "h2" },
  { href: "#12-compare-o-preco-total",           label: "12. Compare o preço total (com taxas)",          level: "h2" },
  { href: "#13-voos-mistos",                     label: "13. Considere voos mistos",                      level: "h2" },
  { href: "#14-assine-newsletters",              label: "14. Assine newsletters de promoções",            level: "h2" },
  { href: "#15-reserva-antecipada-de-assento",   label: "15. Atenção à reserva de assento",               level: "h2" },
];

export default function TOC() {
  return (
    <nav id="toc" role="navigation" aria-label="Sumário">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`tocitem${item.level === "h3" ? " toc-h3" : ""}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
