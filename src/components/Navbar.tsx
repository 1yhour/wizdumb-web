import logo from '../images/wizdumb-logo.png';
export const Navbar = () => {
  return (
    <div>
      {" "}
      <header className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand py-0" href="#">
              <img
                style={{height: "80px"}}
                src={logo}
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#process">
                    Process
                  </a>
                </li>
                <li className="nav-item ms-lg-3">
                  <a className="btn btn-primary rounded-pill px-4" href="#contact">
                    Get a Quote
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
