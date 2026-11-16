// Links y acción principal compartidos por la navbar, el hero y el footer.

export const NAV_LINKS = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#agenda', label: 'Agenda' },
    { href: '#contacto', label: 'Contacto' },
]

// La acción principal de todo el sitio: se escribe igual en todos lados.
// Mientras no haya sistema de reservas, lleva a la agenda.
export const BOOKING = { href: '#agenda', label: 'Reservar clase' }
