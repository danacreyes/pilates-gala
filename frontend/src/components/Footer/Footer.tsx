import { NAV_LINKS } from '../../data/navigation'
import './footer.css'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer id="contacto" className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div>
                        <a href="#inicio" className="footer-logo">GALA</a>
                        <p className="footer-text">Pilates clásico en mat y reformer con Gala Iturburu.</p>
                    </div>
                    <nav className="footer-links" aria-label="Pie de página">
                        {NAV_LINKS.map(link => (
                            <a key={link.href} href={link.href}>{link.label}</a>
                        ))}
                    </nav>
                </div>

                <p className="footer-legal">&copy; {year} Gala Pilates</p>
            </div>
        </footer>
    )
}
