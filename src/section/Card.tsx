import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconClass: LucideIcon; 
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, iconClass: Icon }) => {
  return (
    
    <div className="col-md-6 col-lg-4">
      <section id="services">
      <article className="card service-card p-4 h-100 rounded-4 border-0">
        <div className="card-body">
          <div className="icon-box d-flex align-items-center justify-content-center mb-3">
            
            {/* Lucide icon inside your original icon box */}
            <Icon size={36} strokeWidth={1.75} />
          
          </div>

          <h3 className="h4 card-title fw-bold mb-3">{title}</h3>
          <p className="card-text text-muted">{description}</p>
        </div>
      </article>
      </section>
    </div>
    
  );
};

export default ServiceCard;
