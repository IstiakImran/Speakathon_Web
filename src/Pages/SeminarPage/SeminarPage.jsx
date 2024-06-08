import React from 'react';
import './SeminarPage.css';

const placeholderImage = 'https://placehold.co/600x400';

const SeminarPage = () => {
  return (
    <div className="seminar-page">
      <div>
        <img src={placeholderImage} alt="Seminar" className="header-image" />
        <button className="close-button">&times;</button>
      </div>
      <main>
        <section className="seminar-info">
          <h1>Seminar: The Power of Persuasion in Public Speaking</h1>
          <p>Wed, Dec 29, 12:00 PM</p>
          <p>Join us for a seminar on the power of persuasion in public speaking. Learn how to use your voice to inspire and influence others.</p>
          <div className="speaker-info">
            <img src={placeholderImage} alt="Speaker" className="speaker-image" />
            <div>
              <h2>Speaker</h2>
              <p>Vice President, Research at Meta</p>
              <p>Dr. Alex Kowalski</p>
            </div>
          </div>
          <div className="workshop-info">
            <div className="workshop-time">
              <img src={placeholderImage} alt="Workshop" />
              <p>Workshop</p>
              <p>1:00 - 2:00 PM</p>
            </div>
            <p>How to communicate with confidence</p>
          </div>
          <div className="actions">
            <button className="attend-button">Attend event</button>
            <button className="reminder-button">Set reminder</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SeminarPage;
