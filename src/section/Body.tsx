import ServiceCard from "./Card";
import { services } from "../constraint/servicecard";
export const Body = () => {
  return (
    <div>
      <section id="services" className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase fw-bold ls-wider">
              Our Expertise
            </h6>
            <h2 className="display-5 fw-bold">
              Engineering Digital Excellence
            </h2>
          </div>
          <div className="row g-4">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                iconClass={service.iconClass}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Body;