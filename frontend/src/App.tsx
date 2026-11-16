import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import AppRouter from './router/AppRouter'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    // reducedMotion="user": si la persona pidió menos movimiento en su sistema, las animaciones se desactivan
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <NavBar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </MotionConfig>
  )
}

export default App
