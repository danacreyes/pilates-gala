import { motion, type Variants } from 'motion/react'
import galaImg from '../../assets/gala-img.png'
import { ArrowRight, Barbell, HandPalm, PersonSimpleTaiChi } from '@phosphor-icons/react'
import './about.css'

// lo que distingue las clases de Gala, cada punto con su ícono de Phosphor (textos provisorios)
// más íconos en https://phosphoricons.com
const highlights = [
    { Icon: PersonSimpleTaiChi, text: 'Método clásico de Joseph Pilates' },
    { Icon: Barbell, text: 'Clases en mat y reformer' },
    { Icon: HandPalm, text: 'Corrección en cada movimiento' },
]

// el texto entra de a partes, una sola vez, cuando la sección aparece en pantalla
const textContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const textItem: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
    return (
        <section id="sobre-gala" className="section" aria-labelledby="about-title">
            <div className="about container">
                {/* la foto entra con un leve zoom de salida */}
                <motion.div
                    className="about-photo"
                    initial={{ opacity: 0, scale: 1.06 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                    {/* foto provisoria: reemplazar por una de Gala en el estudio o dando clase */}
                    <img src={galaImg} alt="Gala Iturburu, profesora de pilates clásico" loading="lazy" />
                </motion.div>

                <motion.div
                    className="about-text"
                    variants={textContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <motion.h2 id="about-title" className="title-line" variants={textItem}>
                        Gala Iturburu
                    </motion.h2>
                    <motion.p className="about-role" variants={textItem}>
                        Profesora de pilates clásico
                    </motion.p>

                    {/* texto provisorio */}
                    <motion.p variants={textItem}>
                        Enseño pilates clásico, el método tal como lo creó Joseph Pilates: los ejercicios
                        en su orden, sobre la colchoneta y en el reformer. En mis clases trabajamos la
                        fuerza del centro, la postura y la respiración, y corrijo cada movimiento para
                        que entiendas qué estás haciendo y por qué.
                    </motion.p>

                    <motion.ul className="about-highlights" variants={textItem}>
                        {highlights.map(h => (
                            <li key={h.text}>
                                <span className="about-highlight-icon" aria-hidden="true">
                                    <h.Icon size={22} weight="light" />
                                </span>
                                {h.text}
                            </li>
                        ))}
                    </motion.ul>

                    <motion.a href="#agenda" className="about-link" variants={textItem}>
                        Ver la agenda <ArrowRight className="about-link-icon" size={16} weight="bold" aria-hidden="true" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
