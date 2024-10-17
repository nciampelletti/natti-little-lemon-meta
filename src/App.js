import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BookingPage from './pages/BookingPage'
import HomePage from './pages/Homepage'
import Confirmation from './pages/ConfirmedBookingPage'
import Login from './pages/LoginPage'
import Order from './pages/OrderPage'

function App() {
  return (
    <>
      <Header />
      {/* <Hero />
      <Specials /> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reservations" element={<BookingPage />}></Route>
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
