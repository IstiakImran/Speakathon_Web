import React, { useState } from 'react';
import './VolunteerPage.css';

const placeholderImage = 'https://placehold.co/600x400';

const VolunteerPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="volunteer-page">

      <main>

        <section className="faq">
          <h2>FAQ</h2>
          <div className="faq-item" onClick={() => toggleFaq(0)}>
            <p>What is the role of a facilitator?</p>
            <button>{activeFaq === 0 ? '▲' : '▼'}</button>
            {activeFaq === 0 && <div className="faq-answer">Facilitators assist in coordinating and managing event activities, ensuring everything runs smoothly.</div>}
          </div>
          <div className="faq-item" onClick={() => toggleFaq(1)}>
            <p>What do judges do?</p>
            <button>{activeFaq === 1 ? '▲' : '▼'}</button>
            {activeFaq === 1 && <div className="faq-answer">Judges evaluate participants' performances based on predefined criteria.</div>}
          </div>
          <div className="faq-item" onClick={() => toggleFaq(2)}>
            <p>What is the time commitment?</p>
            <button>{activeFaq === 2 ? '▲' : '▼'}</button>
            {activeFaq === 2 && <div className="faq-answer">Time commitment varies by role, ranging from a few hours to several days.</div>}
          </div>
          <div className="faq-item" onClick={() => toggleFaq(3)}>
            <p>Is there a dress code?</p>
            <button>{activeFaq === 3 ? '▲' : '▼'}</button>
            {activeFaq === 3 && <div className="faq-answer">Yes, volunteers are expected to dress in business casual attire.</div>}
          </div>
          <div className="faq-item" onClick={() => toggleFaq(4)}>
            <p>Can I volunteer if I am not a U.S. citizen?</p>
            <button>{activeFaq === 4 ? '▲' : '▼'}</button>
            {activeFaq === 4 && <div className="faq-answer">Yes, non-U.S. citizens can volunteer if they have the appropriate visa.</div>}
          </div>
        </section>
      </main>
    </div>
  );
};

export default VolunteerPage;
