import './home.css'
import presentationImg from '../../assets/presentation-img.jpg'
import galaImg from '../../assets/gala-img.png'

export const Home = () => {

    return (
        <>
        <section>
            <div className="welcome-img-container">
                <img src={presentationImg} alt="welcome-img" className='welcome-img'/>
                <div className="welcome-img-overlay">
                    <h1 className='welcome-title'>Pilates clasico</h1>
                    <h3 className='welcome-subtitle'>Elegi como queres sentirte hoy</h3>
                </div>
            </div>
            <div></div>
        </section>
        <section className="about-section">
            <div>
                <img src={galaImg} alt="gala-img" className='gala-img'/>
            </div>
            <div className="about-text">
                
            </div>

        </section>
        </>        
    )    
}

