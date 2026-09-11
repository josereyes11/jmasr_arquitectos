export function ContactSection() {
  return (
    <div>
      <h2>CONTACTO</h2>
      <p>
        Si deseas más información, envíanos un mensaje y nos pondremos en contacto contigo o
        llámanos directamente al 2159 2828 o 55 3959 5525
      </p>
      <form>
        <input type="text" name="name" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Correo electrónico" required />
        <textarea name="message" placeholder="Déjanos tu mensaje" required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
