'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail]         = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="newsletter-success">
        <span className="newsletter-success-icon">✅</span>
        <p>
          <strong>Tudo certo!</strong> Você receberá alertas de passagens baratas em{' '}
          <strong>{email}</strong>
        </p>
      </div>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
        className="newsletter-input"
        required
      />
      <button
        type="submit"
        className="btn-cta btn-cta-blue"
        disabled={loading}
        style={{ opacity: loading ? 0.7 : 1 }}
      >
        {loading ? 'Ativando...' : 'Ativar Alertas Grátis'}
      </button>
    </form>
  );
}
