import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Imersão Winnicottiana",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Por favor, preencha todos os campos obrigatórios."
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus({
        type: "success",
        message: "Mensagem enviada com sucesso! Larissa responderá em breve pelo e-mail informado."
      });
      setFormData({
        name: "",
        email: "",
        subject: "Imersão Winnicottiana",
        message: ""
      });
    } catch {
      setStatus({
        type: "error",
        message: "Não foi possível enviar sua mensagem no momento. Tente novamente ou use o WhatsApp."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contato"
      className="section-padding bg-[#f7e9e0]"
      aria-labelledby="contato-heading"
    >
      <div className="max-w-[700px] mx-auto text-center">
        <span className="inline-block bg-[#c5e6e8] text-[#8b4a7a] px-4 py-1 rounded-[6px] text-xs font-semibold uppercase tracking-wider mb-3">
          Contato
        </span>
        
        <h2 id="contato-heading" className="heading-h2 uppercase tracking-wide mb-2">
          Iniciar uma Conversa
        </h2>
        <div className="w-20 h-1 bg-[#d228a7] mx-auto mb-4 rounded-full"></div>
        
        <p className="body-text mb-8 max-w-[65ch] mx-auto">
          Preencha o formulário abaixo para dúvidas sobre supervisão clínica, cursos ou palestras.
        </p>

        {/* Formulário com background #DCEDF8 */}
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="bg-[#DCEDF8] p-6 sm:p-10 rounded-[16px] border border-[#c084b8]/50 shadow-sm text-left space-y-5"
          noValidate
        >
          {status.type && (
            <div
              id="form-status"
              className={`p-4 rounded-[8px] text-sm flex items-start gap-2.5 ${
                status.type === "success"
                  ? "bg-[#ffffff] text-[#8b4a7a] border-2 border-[#8b4a7a]"
                  : "bg-[#ffffff] text-[#d228a7] border-2 border-[#d228a7]"
              }`}
              role="status"
              aria-live="polite"
            >
              {status.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-[#8b4a7a] shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-[#d228a7] shrink-0 mt-0.5" />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-[#8b4a7a] mb-1">
              Seu nome completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex.: Dra. Maria Silva"
              required
              className="w-full px-4 py-3 bg-[#ffffff] text-[#333333] placeholder-[#333333]/50 rounded-[8px] border border-[#badbde] focus:outline-none focus:ring-2 focus:ring-[#d228a7] text-base"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#8b4a7a] mb-1">
              Seu e-mail de contato *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seuemail@exemplo.com"
              required
              className="w-full px-4 py-3 bg-[#ffffff] text-[#333333] placeholder-[#333333]/50 rounded-[8px] border border-[#badbde] focus:outline-none focus:ring-2 focus:ring-[#d228a7] text-base"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-[#8b4a7a] mb-1">
              Assunto de interesse
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#ffffff] text-[#333333] rounded-[8px] border border-[#badbde] focus:outline-none focus:ring-2 focus:ring-[#d228a7] text-base cursor-pointer"
            >
              <option value="Supervisão Clínica">Supervisão Clínica</option>
              <option value="Imersão Winnicottiana">Imersão Winnicottiana</option>
              <option value="Psicoterapia">Psicoterapia</option>
              <option value="Cursos e Palestras">Cursos e Palestras</option>
              <option value="Outro">Outro assunto</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-[#8b4a7a] mb-1">
              Sua mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Compartilhe suas dúvidas ou objetivos..."
              required
              className="w-full px-4 py-3 bg-[#ffffff] text-[#333333] placeholder-[#333333]/50 rounded-[8px] border border-[#badbde] focus:outline-none focus:ring-2 focus:ring-[#d228a7] text-base resize-y"
            ></textarea>
          </div>

          {/* Botão Primário: fundo #d228a7, texto branco, border-radius 8px, hover brightness(0.9) */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full text-base font-medium py-3.5"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>{isSubmitting ? "Enviando mensagem..." : "Enviar mensagem"}</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
