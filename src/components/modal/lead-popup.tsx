"use client";
import React, { useEffect, useState } from "react";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    adSoyad: "",
    numara: "",
    sektor: "",
    hedef: "",
  });

  useEffect(() => {
    // Session'da daha önce gösterilmemişse aç
    const hasShown = sessionStorage.getItem("sg_popup_shown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("sg_popup_shown", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { adSoyad, numara, sektor, hedef } = formData;
    const message =
      `Merhaba, size özel teklif almak istiyorum.%0A%0A` +
      `*Ad Soyad:* ${encodeURIComponent(adSoyad)}%0A` +
      `*Telefon:* ${encodeURIComponent(numara)}%0A` +
      `*Sektör:* ${encodeURIComponent(sektor)}%0A` +
      `*Hedef:* ${encodeURIComponent(hedef)}`;
    window.open(`https://wa.me/905388654405?text=${message}`, "_blank");
    setIsOpen(false);
  };

  const handleClose = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="sg-popup-overlay"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal dialog */}
      <div
        className="sg-popup-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sg-popup-title"
      >
        {/* Close button */}
        <button
          className="sg-popup-close"
          onClick={handleClose}
          aria-label="Formu kapat"
          type="button"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="sg-popup-inner">
          {/* Badge */}
          <div className="sg-popup-badge">
            <span>Studio Gria</span>
          </div>

          {/* Heading */}
          <h2 id="sg-popup-title" className="sg-popup-title">
            Sizlere Özel Strateji
            <br />
            veya Ücret Teklifi İçin
          </h2>

          {/* Decorative divider */}
          <div className="sg-popup-divider" aria-hidden="true" />

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="sg-popup-form" noValidate>
            {/* Row 1 */}
            <div className="sg-popup-field-row">
              <div className="sg-popup-field">
                <label htmlFor="sg-adSoyad">Ad Soyad</label>
                <input
                  id="sg-adSoyad"
                  name="adSoyad"
                  type="text"
                  placeholder="Adınız ve soyadınız"
                  value={formData.adSoyad}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="sg-popup-field">
                <label htmlFor="sg-numara">Numara</label>
                <input
                  id="sg-numara"
                  name="numara"
                  type="tel"
                  placeholder="+90 5__ ___ __ __"
                  value={formData.numara}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="sg-popup-field-row">
              <div className="sg-popup-field">
                <label htmlFor="sg-sektor">Sektör</label>
                <input
                  id="sg-sektor"
                  name="sektor"
                  type="text"
                  placeholder="Faaliyet gösterdiğiniz sektör"
                  value={formData.sektor}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sg-popup-field">
                <label htmlFor="sg-hedef">Hedef</label>
                <input
                  id="sg-hedef"
                  name="hedef"
                  type="text"
                  placeholder="Dijital hedefiniz nedir?"
                  value={formData.hedef}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Submit — WhatsApp */}
            <button
              type="submit"
              className="sg-popup-submit"
              id="sg-popup-submit-btn"
            >
              <span className="sg-popup-submit-text">
                WhatsApp ile Gönder
              </span>
              <span className="sg-popup-submit-icon" aria-hidden="true">
                {/* WhatsApp icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
            </button>
          </form>

          {/* Disclaimer */}
          <p className="sg-popup-note">
            Bilgileriniz yalnızca teklif hazırlama amacıyla kullanılacaktır.
          </p>
        </div>
      </div>
    </>
  );
}
