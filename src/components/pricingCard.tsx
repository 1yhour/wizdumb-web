// PricingCard.tsx
import React from 'react';
import type { PricingPlan } from '../constraint/pricingdata';
const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  return (
    <div className="col-lg-4">
      <div className={`card rounded-4 h-100 ${plan.isFeatured ? 'border-primary border-2 shadow-lg position-relative overflow-hidden' : 'border-0 shadow-sm'}`}>
        {plan.isFeatured && (
          <div className="bg-primary text-white text-center py-2 small fw-bold text-uppercase ls-wider">
            Most Popular
          </div>
        )}
        <div className="card-body p-5">
          <h4 className={`fw-bold mb-4 ${plan.isFeatured ? 'text-dark' : 'text-muted'}`}>{plan.name}</h4>
          <div className="d-flex align-items-baseline mb-4">
            <span className="h1 fw-bold">{plan.price}</span>
            {plan.unit && <span className="text-muted ms-2">{plan.unit}</span>}
          </div>
          <p className="text-muted mb-4">{plan.description}</p>
          <ul className="list-unstyled mb-5">
            {plan.features.map((feature, index) => (
              <li key={index} className={`mb-3 ${!feature.included ? 'text-muted' : ''}`}>
                <i className={`bi ${feature.included ? 'bi-check-circle-fill text-primary' : 'bi-x-circle'} me-2`}></i>
                {feature.text}
              </li>
            ))}
          </ul>
          <a href="#contact" className={`btn w-100 rounded-pill py-3 fw-bold ${plan.buttonClass}`}>
            {plan.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;