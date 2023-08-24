import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const AccordionSection = ({ title, items }) => {
  const [accordion, setAccordion] = useState(false);

  return (
    <div className="first-accordion">
      <ul>
        <li className="first-m-item">{title}</li>
        {accordion &&
          items.map((item, index) => (
            <li className="item" key={index}>
              {item}
            </li>
          ))}
      </ul>
      <button
        className="accordion-first-btn"
        onClick={() => setAccordion(!accordion)}
      >
        {accordion ? <AiOutlineMinus size={22} /> : <AiOutlinePlus size={22} />}
      </button>
    </div>
  );
};

export default AccordionSection;
