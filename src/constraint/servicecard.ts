import { CodeXml, type LucideIcon } from "lucide-react";
import { Lightbulb ,Brain, Cloudy, CardSim, Cpu} from "lucide-react";
export interface Service {
  id: number;
  title: string;
  description: string;
  iconClass: LucideIcon;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Custom Software",
    description: "Tailor-made web and mobile applications built to scale. We use modern stacks like React, Node, and Python.",
    iconClass: CodeXml,
  },
  {
    id: 2,
    title: "IT Consultancy",
    description: "Strategic guidance on digital transformation and technology roadmaps.",
    iconClass: Lightbulb,
  },
  {
    id: 3,
    title: "AI & Automation",
    description: "Intelligent document processing and predictive analytics to automate workflows.",
    iconClass: Brain, 
  },
  {
    id: 4,
    title: "Cloud & MLOps",
    description: "Robust cloud infrastructure setup (AWS/GCP) and MLOps pipelines.",
    iconClass: Cloudy,
  },
  {
    id: 5,
    title: "Data Analytics",
    description: "Turn raw data into actionable insights with custom dashboards and BI tools.",
    iconClass: CardSim,
  },
  {
    id: 6,
    title: "Tech Training",
    description: "Workshops and upskilling programs for teams covering Web Dev and AI basics.",
    iconClass: Cpu,
  },
];