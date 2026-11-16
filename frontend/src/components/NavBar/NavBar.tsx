import { useState } from 'react'
import { AnimatePresence, motion, type Variants } from 'motion/react'
import { useOnInit } from '../../hooks/useOnInit'
import { BOOKING, NAV_LINKS } from '../../data/navigation'
import './navbar.css'

// la barra queda quieta: solo el logo, los links y el botón entran uno tras otro al cargar
const textContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const textItem: Variants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const closeMenu = () => setIsOpen(false)

    // Cerrar el menú con la tecla Escape
    useOnInit(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false)
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    })

    const linkList = NAV_LINKS.map(link => (
        <a key={link.href} href={link.href} className="navbar-link" onClick={closeMenu}>
            {link.label}
        </a>
    ))

    return (
        <header className="navbar">
            <motion.nav
                className="navbar-inner container"
                aria-label="Principal"
                variants={textContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.a href="#inicio" className="navbar-logo" onClick={closeMenu} variants={textItem}>GALA</motion.a>

                <div className="navbar-actions">
                    {/* escritorio */}
                    <motion.div className="navbar-links" variants={textItem}>{linkList}</motion.div>

                    {/* siempre visible: la acción principal del sitio */}
                    <motion.a href={BOOKING.href} className="btn btn--light navbar-cta" onClick={closeMenu} variants={textItem}>
                        {BOOKING.label}
                    </motion.a>

                    {/* celular */}
                    <button
                        type="button"
                        className={`navbar-toggle ${isOpen ? 'is-open' : ''}`}
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isOpen}
                        aria-controls="navbar-menu"
                        onClick={() => setIsOpen(open => !open)}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="navbar-menu"
                        className="navbar-menu"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                        {linkList}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
