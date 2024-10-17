import { specials } from '../data'
import Special from './Special'

const Specials = () => {
  return (
    <section className="section">
      <div className="section-center specials-center">
        <h1>This Week Specials!</h1>
        <div className="special-button-menu">
          <a href="#menu" className="btn hero-btn">
            Online Menu
          </a>
        </div>
      </div>

      <div className="section-center featured-center">
        {specials.map((special) => {
          return <Special {...special} key={special.id} />
        })}
      </div>
    </section>
  )
}
export default Specials
