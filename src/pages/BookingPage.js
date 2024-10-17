import BookingForm from '../components/BookingForm'
import { useReducer } from 'react'
import { fetchAPI } from '../bookingsAPI'

const BookingPage = () => {
  function updateTimes(date) {
    return fetchAPI(date)
  }

  const output = fetchAPI(new Date())

  const [availableTimes, dispatch] = useReducer(updateTimes, output)

  return (
    <section className="section reservation">
      <div className="section-center">
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
      </div>
    </section>
  )
}

export default BookingPage
