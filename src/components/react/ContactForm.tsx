// Formulario de contacto (React) con validación nativa
import { useState, type FormEvent } from 'react';

const SUCCESS_MSG =
  'Gracias por tu mensaje. En el sitio final, tu consulta se enviará a la organización de ExpoJuy.';

export default function ContactForm() {
  const [status, setStatus] = useState<{ kind: 'ok' | 'error'; text: string } | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const valid = form.checkValidity();
    if (!valid) {
      form.reportValidity();
      return;
    }
    setStatus({ kind: 'ok', text: SUCCESS_MSG });
    form.reset();
  }

  return (
    <form className="contact-form" data-contact-form noValidate onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="nombre">Nombre completo *</label>
        <input id="nombre" name="nombre" type="text" autoComplete="name" required />
      </div>

      <div className="field">
        <label htmlFor="email">Correo electrónico *</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="field">
        <label htmlFor="tema">Tema</label>
        <select id="tema" name="tema">
          <option value="expositor">Quiero ser expositor</option>
          <option value="sponsor">Quiero ser sponsor</option>
          <option value="entradas">Entradas</option>
          <option value="prensa">Prensa</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="mensaje">Mensaje *</label>
        <textarea id="mensaje" name="mensaje" rows={5} required></textarea>
      </div>

      <button className="btn btn-accent btn-send" type="submit">
        Enviar consulta
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      </button>
      <p
        className={'form-status' + (status ? ` ${status.kind}` : '')}
        data-form-status
        role="status"
        aria-live="polite"
      >
        {status?.text ?? ''}
      </p>
    </form>
  );
}