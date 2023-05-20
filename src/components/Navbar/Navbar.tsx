import '../Navbar/navbar.css'
import logo from '../../assets/logo.jpg'
const Navbar = () => {
  return (
    <header>
    <section className="logo-sec">
<h1>service</h1> <img src={logo}   alt="Logo" className="logo"/>
    </section>
    <section className="navbar">
      <button>LIST VIEW</button>
      <div className="navbar-btn">
                    <button>+</button>
                        <button>100%</button>
                        <button>-</button>
                </div>
    </section>
    
    
  </header>
  )
}

export default Navbar