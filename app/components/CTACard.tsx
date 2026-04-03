interface CTACardProps {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export default function CTACard({ title, description, linkText, href }: CTACardProps) {
  return (
    <div
      style={{
        backgroundColor: "#22292a",
        borderLeft: "4px solid #0057b8",
        borderRadius: "8px",
        padding: "20px 24px",
        margin: "24px 0",
      }}
    >
      <h4
        style={{
          fontSize: "1rem",
          fontWeight: 800,
          color: "#4da6ff",
          marginBottom: "6px",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontSize: "0.9rem",
          marginBottom: "12px",
          color: "#bbb",
        }}
      >
        {description}
      </p>
      <a
        href={href}
        style={{
          display: "inline-block",
          backgroundColor: "#0057b8",
          color: "#fff",
          padding: "9px 20px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "0.88rem",
        }}
      >
        {linkText}
      </a>
    </div>
  );
}
