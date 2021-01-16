import { Link } from "@reach/router"


const Navbar = ({ pageName }) => {
  return (  
    <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html"><h2>Sixteen <em>Clothing</em></h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${pageName === 'home' ? 'active' : ''}`}>
                <Link to="/" className="nav-link">Home</Link>
              </li> 
              <li className={`nav-item ${pageName === 'products' ? 'active' : ''}`}>
                <Link to="/products" className="nav-link">Our Products</Link>
              </li>
              <li className={`nav-item ${pageName === 'about' ? 'active' : ''}`}>
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className={`nav-item ${pageName === 'contact' ? 'active' : ''}`}>
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
 
export default Navbar;