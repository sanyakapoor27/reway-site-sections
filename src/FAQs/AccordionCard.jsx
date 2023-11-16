import React, { useState } from 'react';
import './AccordionCard.css';

const AccordionCard = ({ data, topic }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-card">
      <h2 className="topic-name">{topic}</h2>
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-header">
            <button
              className={`accordion-btn ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </button>
            <button
              className="toggle-btn"
              onClick={() => toggleAccordion(index)}
            >
              {openIndex === index ? '-' : '+'}
            </button>
          </div>
          {openIndex === index && (
            <div className="accordion-content">
            {item.answer.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
            {item.hasLink && (
              <a href="https://cpcb.nic.in/e-waste/">https://cpcb.nic.in/e-waste/</a>
            )}
          </div>
        )}
      </div>
    ))}
  </div>
);
};

export default AccordionCard;