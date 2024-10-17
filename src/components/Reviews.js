import { reviews } from '../data'
import Review from './Review'

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="section-center">
        <h1>Testimonials</h1>

        <div className="reviews-center">
          {reviews.map((review) => {
            return <Review {...review} key={review.id} />
          })}
        </div>
      </div>
      {/* <div className="section-center reviews-center">
        <h1>This Week Specials!</h1>
        <div className="special-button-menu">
          <a href="#menu" className="btn hero-btn">
            Online Menu
          </a>
        </div>
      </div> */}
      {/* <h1 className="section-center">Testimonials</h1> */}
    </section>

    //     <section className="section confirmation">
    //   <div className="section-center">
    //     <section className="confirmation-card">
    //       <h1>Your Reservation is Confirmed!</h1>
    //       <p>A confirmation message has been sent to your email.</p>
    //       <h4>Thanks for dining with us!</h4>
    //     </section>
    //   </div>
    // </section>
  )
}
export default Reviews
