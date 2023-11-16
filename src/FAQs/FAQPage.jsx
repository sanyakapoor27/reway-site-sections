import React, { useState, useEffect } from 'react';
import AccordionCard from './AccordionCard';
import Navbar from './Navbar';
import './FAQPage.css';

const FAQPage = () => {
  const topics = [
    {
      
      topic: 'About Us',
      data: [
        { question: 'What is the Meaning of Reway?', answer: 'Reway signifies a unique approach to accomplishing the same task. Our aim was to revolutionise the traditional method of E-waste disposal, which previously ended up in the unorganised sector. Our ultimate objective was to introduce "REWAY" as the 6th R in waste management alongside the existing 5 Rs.' },
        { question: 'Who Do We Serve?', answer: 'Currently, we cater to bulk consumers of E-waste. However, we have future plans to expand into the individual customer market as well.'},
        { question: 'What services will you be providing us?', 
        answer: `We offer a comprehensive range of services required for the responsible disposal of E-Waste as a Bulk Consumer, including: 

        • Collection and environmentally responsible recycling of E-waste. 
        • Competitive rates due to multiple quotations from various recyclers.
        • EPR certificate from a Government Authorized Recycler. 
        • A certificate quantifying the reduction in Greenhouse Gas emissions resulting from your recycling efforts. This certificate is generated using our proprietary algorithm to calculate carbon emissions, which can assist your company in achieving NET ZERO targets. 
        • PAN India Collection Network.`},
        { question: 'How should we contact you?', answer: `You can reach out to us via email at reway.ewm@gmail.com or on WhatsApp at +91 93158 36383.` },
      ],
    },
    {
      
      topic: 'Circular Economy',
      data: [
        { question: 'What is a Circular Economy?', answer: 'In a linear economy, we extract resources from the ground to create products, use them, and then dispose of them, following a take-make-waste approach. A circular economy, on the other hand, is based on principles aimed at reducing waste and pollution, maintaining the use of products and materials, and regenerating natural systems.' },
        { question: 'Why is the Circular Economy Important?', answer: `The current system is no longer effective for businesses, individuals, or the environment. It is crucial to transform all aspects of the take-make-waste system, including resource management, product manufacturing, product usage, and material handling. This transformation is essential to create a thriving economy within the constraints of our planet.

        Shifting to this system requires the participation of everyone and everything, from businesses, governments, and individuals to our cities, products, and jobs. By designing products that minimize waste and pollution, recycling and reusing materials, and conserving natural resources, we can drive the development of a truly circular economy.`},
        { question: 'How Does the Circular Economy Impact Emissions and Climate Change?', answer: `The circular economy and climate change mitigation are closely linked. Various facets of the circular economy, such as material efficiency, reuse, and recycling, have different effects on emissions. For instance, recycling one ton of e-waste can prevent 0.87 metric tons of CO2 emissions, while recycling one ton of plastic waste can prevent 1.34 metric tons of CO2 emissions. The circular economy aims to find economically viable ways to achieve these goals while significantly reducing the energy required for production.` }
      ],
    },
    {
      
      topic: 'EPR',
      data: [
        { question: 'What is EPR?', answer: 'EPR, according to the rules, refers to the responsibility of any producer of electrical or electronic equipment to manage e-waste in an environmentally sound manner. The core concept is to promote environmental impact reduction during the end-of-life phase by internalizing costs and producing more recyclable and less toxic products during manufacturing.' },
        { question: 'What are the E-waste rules of CPCB (Central pollution control board)?', answer: 'You can access all the E-waste rules and the latest amendments at this link:', hasLink:true, },
      ],
    },
    {
      
      topic: 'E-Waste',
      data: [
        { question: 'What is E-Waste?', answer: 'E-waste encompasses electrical and electronic equipment, either wholly or partially discarded as waste or having reached the end of their life cycle. It also includes rejects from manufacturing, refurbishment, and repair processes.' },
        { question: "Who Qualifies as a 'Producer'?", answer: `According to the rules, a 'Producer' is any person or entity that:

        • Manufactures and offers for sale electrical or electronic equipment and their components, consumables, parts, or spares under their own brand.
        • Offers for sale, under their own brand, assembled electrical and electronic equipment and their components, consumables, parts, or spares produced by other manufacturers or suppliers.
        • Offers for sale imported electrical and electronic equipment (EEE) and their components, consumables, parts, or spares.`},
        { question: 'Do I Need EPR Authorization as an Electronics Producer?', answer: 'Yes, as a producer of electronics, you must apply for EPR Authorization by submitting an EPR Application to the Central Pollution Control Board (CPCB).' },
        { question: 'Are There Penalties for Non-Compliance with the Rules?', answer: `Non-compliance with the rules can result in severe penalties, such as:

        • Inability to market products in India if CPCB refuses or cancels EPR Authorization due to non-compliance.
        • Operating without EPR Authorization is considered an environmental violation, directly violating the Environment (Protection) Act, 1986. The penalty for such violations includes imprisonment for up to five years (extendable to seven years in cases of continued contravention) and substantial fines.`},
      ],
    },
    {
      
      topic: 'Consumers',
      data: [
        { question: 'What Types of E-Waste Does Reway Accept?', answer: 'Reway accepts all types of electronics and electrical equipment that have been discarded or have reached the end of their product life for recycling. We also accept items that can be repaired and refurbished.' },
        { question: 'Where Does Reway Collect E-Waste From?', answer: 'Reway currently operates on a B2B model. We collect e-waste from aggregators, waste pickers, educational institutions, NGOs, businesses, corporations, and any organisation with bulk E-waste.' },
        { question: 'How Can I Dispose of My E-Waste?', answer: 'You can easily dispose of your E-waste by providing details on our app or by sending the information to our WhatsApp number, +91 93158 36383. We will then schedule a pickup for your E-waste.' },
        { question: 'How Can I Verify the Recycling of My E-Waste?', answer: 'The E-waste collected by Reway is sent to an authorized dismantling/recycling facility. At the end of the recycling process, we provide a certificate of destruction or recycling. Additionally, we share a material recovery report with our clients to validate the recycling process.' },
      ],
    },
  ];

  const [cardToShow, setCardToShow] = useState(null);

  // Use useEffect to set the default cardToShow when the component mounts
  useEffect(() => {
    if (cardToShow === null) {
      setCardToShow(0);
    }
  }, [cardToShow]);

  return (
    <div className="faq-page">
      <h2 className="faq-title"> Questions? </h2>
      <h2 className="faq-title-2">We've Got Answers.</h2>
      <Navbar setCardToShow={setCardToShow} />
      {cardToShow !== null && (
        <AccordionCard
          data={topics[cardToShow].data}
          topic={topics[cardToShow].topic}
          
        />
      )}
    </div>
  );
};

export default FAQPage;