import Aboutlogo from '../images/team-work-rafiki.png'
export const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src={Aboutlogo}
              alt="Wizdumb Team Meeting"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 ps-lg-5">
            <h2 className="display-6 fw-bold mb-4">Why Choose Wizdumb?</h2>
            <p className="lead text-muted mb-4">
              We don't just write code; we build partnerships. Our agile
              methodology ensures transparency and adaptability at every stage
              of the lifecycle.
            </p>

            <div className="row g-4 mt-2">
              <div className="col-sm-6">
                <div className="stat-card">
                  <h4 className="fw-bold display-6 text-dark">100%</h4>
                  <p className="text-muted m-0">Project Transparency</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="stat-card">
                  <h4 className="fw-bold display-6 text-dark">Agile</h4>
                  <p className="text-muted m-0">Development Cycle</p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <a href="#" className="btn btn-outline-dark rounded-pill px-4">
                Read Our Story <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
