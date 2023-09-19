import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import PropTypes from "prop-types";

export default function AccordionProps({
  title,
  id,
  description,
  active,
  setActive,
}) {
  return (
    <div className="single-container">
      <span
        className={(active === id ? "active-title" : "") + " heading" + " flex"}
      >
        {title}
        <span className="heading-icon" onClick={() => setActive(id)}>
          {active === id ? (
            <BsArrowDownCircle className="icon" />
          ) : (
            <BsArrowUpCircle className="icon" />
          )}
        </span>
      </span>
      <p className={(active === id ? "show" : "") + " description"}>
        {description}
      </p>
    </div>
  );
}
