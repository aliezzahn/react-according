import { useState } from "react";
import AccordionProps from "./accordion.props";
import "./accordion.styles.css";

const content = [
  {
    id: 1,
    title: "What crops are commonly grown in farming?",
    description:
      "Corn, wheat, rice, and soybeans are some of the most common crops grown in farming. This varies with different locations and land.",
  },
  {
    id: 2,
    title: "What is sustainable farming?",
    description:
      "Sustainable farming focuses on practices that protect the environment, conserve resources, and maintain long-term viability for future generations.",
  },
  {
    id: 3,
    title: "How do farmers irrigate their fields?",
    description:
      "Farmers use various methods for irrigation, including drip irrigation, sprinkler systems, and flood irrigation, depending on the crop and local conditions.",
  },
  {
    id: 4,
    title: "How do farmers control pests and diseases?",
    description:
      "Farmers use integrated pest management techniques, such as crop rotation, natural predators, and pesticide application when necessary.",
  },
];

export default function AccordionComponent() {
  const [active, setActive] = useState(content[0].id);

  return (
    <div className="accordion container">
      <h1 className="title">ReactJS According</h1>
      <div className="section-container grid">
        {content.map((data, index) => (
          <AccordionProps
            key={index}
            active={active}
            setActive={setActive}
            id={data.id}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}
