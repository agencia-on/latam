export default function LatamBanner() {
  return (
    <div
      id="ofertas"
      style={{
        background: "linear-gradient(135deg, #e30613 0%, #c0000f 100%)",
        borderRadius: "12px",
        padding: "24px 28px",
        margin: "30px auto",
        maxWidth: "860px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h3
          style={{
            fontSize: "1.2rem",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "4px",
          }}
        >
          ✈ Ofertas LATAM — Voos com até 50% off
        </h3>
        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" }}>
          Promoções relâmpago para destinos nacionais e internacionais. Aproveite agora!
        </p>
      </div>

      <a
        href="#"
        style={{
          background: "#fff",
          color: "#e30613",
          padding: "12px 26px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: 800,
          fontSize: "0.95rem",
          whiteSpace: "nowrap",
        }}
      >
        Ver Promoções
      </a>
    </div>
  );
}
