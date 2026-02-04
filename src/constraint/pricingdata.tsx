export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  unit: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonClass: string;
  isFeatured?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Consultation",
    price: "$150",
    unit: "/ hour",
    description: "Perfect for audits, strategy sessions, and technical guidance.",
    buttonText: "Book Session",
    buttonClass: "btn-outline-primary",
    features: [
      { text: "Tech Stack Review", included: true },
      { text: "Architecture Planning", included: true },
      { text: "Security Audit", included: true },
      { text: "Development Hours", included: false },
    ],
  },
  {
    id: 2,
    name: "MVP Build",
    price: "$5,000",
    unit: "/ start",
    description: "Launch your startup idea or internal tool quickly and efficiently.",
    buttonText: "Get Started",
    buttonClass: "btn-primary shadow",
    isFeatured: true,
    features: [
      { text: "Web or Mobile App", included: true },
      { text: "UI/UX Design Included", included: true },
      { text: "1 Month Support", included: true },
      { text: "Source Code Ownership", included: true },
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    unit: "",
    description: "Full-scale digital transformation and dedicated development teams.",
    buttonText: "Contact Sales",
    buttonClass: "btn-outline-dark",
    features: [
      { text: "Dedicated Dev Team", included: true },
      { text: "24/7 SLA Support", included: true },
      { text: "Cloud Infrastructure", included: true },
      { text: "AI Model Integration", included: true },
    ],
  },
];