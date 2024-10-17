import heroImg from '../images/restauranfood.jpg'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="hero-title">Little Lemon</div>
          <div className="hero-sub-title">Vancouver</div>
          <div className="hero-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Aspernatur quisquam harum nam cumque temporibus explicabo
            dolorum sapiente odio unde dolor?
          </div>
          <a href="#reservations" className="btn hero-btn ">
            Reserve a Table
          </a>
        </article>
        <div className="hero-img">
          <img src={heroImg} className="hero-photo" alt="awesome food" />
        </div>
      </div>
    </section>
  )
}
export default Hero
