import logo from "../images/digital-transformation-bro.png";
export const Hero = () => {
  return (
    <div>
      <section
        className="hero-section d-flex align-items-center"
        aria-label="Introduction"
      >
        <div className="container position-relative z-2">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="badge bg-white bg-opacity-10 border border-light border-opacity-25 rounded-pill px-3 py-2 mb-4">
                🚀 Award-Winning Software Consultancy
              </span>
              <h1 className="display-3 fw-bold mb-4">
                Smart Code.
                <br />
                Brilliant Solutions.
              </h1>
              <p
                className="lead mb-5 text-light text-opacity-75"
                style={{ maxWidth: "600px" }}
              >
                Wizdumb transforms complex business challenges into elegant
                software. We specialize in enterprise development, AI
                integration, and digital strategy.
              </p>
              <div className="d-flex gap-3">
                <a
                  href="#contact"
                  className="btn btn-light rounded-pill px-5 py-3 fw-bold text-primary"
                >
                  Start Project
                </a>
                <a
                  href="#services"
                  className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold"
                >
                  Explore Services
                </a>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <img
                src={logo}
                alt="Wizdumb Technology Illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
