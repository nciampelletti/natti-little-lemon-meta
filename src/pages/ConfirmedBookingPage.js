import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmedBooking = () => {
  return (
    <section className="section confirmation">
      <div className="section-center">
        <section className="confirmation-card">
          <h1>Your Reservation is Confirmed!</h1>
          <p>A confirmation message has been sent to your email.</p>
          <h4>Thanks for dining with us!</h4>
        </section>
      </div>
    </section>
  )
}

export default ConfirmedBooking
