import { motion, type Variants } from 'motion/react'
import heroImg from '../../assets/presentation-img.jpg'
import { BOOKING } from '../../data/navigation'
import './hero.css'

// El título, las frases y el botón aparecen uno detrás del otro al cargar.
const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}
const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
    return (
        <section id="inicio" className="hero" aria-labelledby="hero-title">
            <img
                className="hero-img"
                src={heroImg}
                alt="Pelota de pilates sobre una colchoneta, con luz de ventana"
                fetchPriority="high"
            />
            <motion.div className="hero-content container" variants={container} initial="hidden" animate="visible">
                <motion.h1 id="hero-title" className="hero-title title-line title-line--both" variants={item}>
                    {/* la palabra en itálica de Bodoni: el acento tipográfico de la marca */}
                    <span>Pilates <em>clásico</em></span>
                </motion.h1>
                {/* frase de marca */}
                <motion.p className="hero-subtitle" variants={item}>
                    Elegí cómo querés sentirte hoy
                </motion.p>
                {/* el dato concreto: qué clases hay y con quién */}
                <motion.p className="hero-detail" variants={item}>
                    Clases de mat y reformer con Gala Iturburu
                </motion.p>
                <motion.a href={BOOKING.href} className="btn btn--light" variants={item} whileTap={{ scale: 0.97 }}>
                    {BOOKING.label}
                </motion.a>
            </motion.div>
        </section>
    )
}
