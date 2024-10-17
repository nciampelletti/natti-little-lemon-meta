import logo from '../images/Logo.svg'
import PageLinks from './PageLinks'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="Little Lemon" />
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
      </div>
    </nav>
  )
}
export default Navbar
