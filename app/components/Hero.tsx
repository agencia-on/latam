export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#1a1f1e",
        padding: "40px 5% 50px",
        maxWidth: "900px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Breadcrumb */}
      <nav style={{ fontSize: "0.8rem", color: "#aaa", marginBottom: "20px" }}>
        <a href="/" style={{ color: "#aaa", textDecoration: "none" }}>
          Início
        </a>
        {" › "}
        <span>Passagens Aéreas</span>
      </nav>

      {/* Title */}
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1.2,
          marginBottom: "20px",
        }}
      >
        Passagens Baratas: <br />
        Como Encontrar as Melhores Ofertas em 2025
      </h1>

      <p style={{ fontSize: "1.1rem", color: "#ccc", marginBottom: "14px" }}>
        Descubra estratégias comprovadas para economizar até 70% em voos
        nacionais e internacionais. Dicas de especialistas em viagens baratas.
      </p>

      <p style={{ fontSize: "0.85rem", color: "#aaa" }}>
        Atualizado em{" "}
        <span style={{ fontWeight: 700, color: "#ddd" }}>02 de abril de 2025</span>
        {" · "}
        <span style={{ fontWeight: 700, color: "#ddd" }}>8 min</span> de leitura
      </p>

      {/* Hero image placeholder */}
      <div
        style={{
          width: "100%",
          height: "320px",
          borderRadius: "12px",
          marginTop: "30px",
          background: "linear-gradient(135deg, #0a2a4a 0%, #0057b8 60%, #003d82 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path
            d="M10 36L24 32L36 52L40 50L32 30L48 26C51 25 53 22 52 19C51 16 48 15 45 16L10 30L10 36Z"
            fill="rgba(255,255,255,0.6)"
          />
          <path
            d="M12 36L16 42L24 39L20 32Z"
            fill="rgba(255,255,255,0.3)"
          />
          <path
            d="M28 31L44 14L48 16L34 33Z"
            fill="rgba(255,255,255,0.3)"
          />
        </svg>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
          ✈ Melhores Preços Aéreos
        </span>
      </div>
    </section>
  );
}
