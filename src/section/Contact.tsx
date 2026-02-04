export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-5 position-relative overflow-hidden"
      // Fixed: camelCase and object syntax
      style={{ backgroundColor: "var(--wiz-dark)" }}
    >
      <div className="container py-5 position-relative z-2">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold text-white mb-4">
              Ready to build something intelligent?
            </h2>
            <p className="text-white text-opacity-75 mb-5 fs-5">
              Whether you need a full enterprise system or a consultation on
              your next move, Wizdumb is here to help.
            </p>
            <form className="bg-white p-4 p-md-5 rounded-4 text-start shadow-lg">
              <div className="row g-3">
                <div className="col-md-6">
                  {/* Fixed: htmlFor instead of for */}
                  <label htmlFor="name" className="form-label fw-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light border-0"
                    id="name"
                    placeholder="John Doe"
                  />
                </div>
                <div className="col-md-6">
                  {/* Fixed: htmlFor instead of for */}
                  <label htmlFor="email" className="form-label fw-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg bg-light border-0"
                    id="email"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label fw-bold">
                    Project Details
                  </label>
                  <textarea
                    className="form-control form-control-lg bg-light border-0"
                    id="message"
                    // Fixed: Numeric prop passed as {4}
                    rows={4}
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <div className="col-12 mt-4">
                  {/* Suggestion: Change type to "submit" for actual forms */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 rounded-pill fw-bold"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;