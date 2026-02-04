import { pricingPlans } from '../constraint/pricingdata';
import PricingCard from '../components/pricingCard';

export const PricingSection = () => {
  return (
    <section id="process" className="py-5 position-relative bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h6 className="text-primary text-uppercase fw-bold ls-wider">Pricing Plans</h6>
          <h2 className="display-5 fw-bold">Invest in Your Growth</h2>
          <p className="lead text-muted">Transparent pricing for projects of all sizes.</p>
        </div>
        <div className="row g-4 align-items-center">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PricingSection;