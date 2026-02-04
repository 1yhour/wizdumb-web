import logo from '../images/wizdumb-logo.png'
import { CiFacebook,CiLinkedin } from 'react-icons/ci';
export const Footer = () => {
  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <img
              src={logo}
              alt="Wizdumb"
              height='70px'
              className="mb-3 bg-white rounded-3 p-2"
            />
            <p className="text-light opacity-75 small">
              Empowering businesses through intelligent software development and
              strategic consultancy.
            </p>
          </div>
          <div className="col-6 col-lg-2 offset-lg-1">
            <h5 className="fw-bold mb-3 text-white">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-light opacity-75 hover-text-white"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-light opacity-75 hover-text-white"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h5 className="fw-bold mb-3 text-white">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-light opacity-75 hover-text-white"
                >
                  Web Dev
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-light opacity-75 hover-text-white"
                >
                  Mobile Apps
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="fw-bold mb-3 text-white">Connect</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5">
                <CiFacebook/>
              </a>
              <a href="#" className="text-white fs-5">
                <CiLinkedin/>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-light opacity-25 my-4" />
        <div className="text-center text-light opacity-50 small">
          &copy; 2026 Wizdumb Software Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
