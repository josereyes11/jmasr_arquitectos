export function ContactSection() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h2 className="text-3xl font-black uppercase">CONTACTO</h2>
      <p className="mt-4 text-neutral-600">
        Si deseas más información, envíanos un mensaje y nos pondremos en contacto contigo o
        llámanos directamente al 2159 2828 o 55 3959 5525
      </p>
      <form className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          className="rounded border border-neutral-300 px-4 py-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          className="rounded border border-neutral-300 px-4 py-3"
        />
        <textarea
          name="message"
          placeholder="Déjanos tu mensaje"
          required
          rows={4}
          className="rounded border border-neutral-300 px-4 py-3"
        />
        <button
          type="submit"
          className="rounded-full bg-greenforest px-6 py-3 font-semibold text-white hover:bg-green"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
