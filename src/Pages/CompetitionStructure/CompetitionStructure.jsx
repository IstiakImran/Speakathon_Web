import React from 'react';
import './CompetitionStructure.css';

const CompetitionStructure = () => {
  return (
    <div className="finals-page">
      <header>
        <img src='https://placehold.co/600x400' alt="California State Finals" className="header-image" />
        <h1>California State Finals</h1>
        <p>Public Speaking Competition</p>
      </header>
      <main>
        <section className="competition-structure">
          <h2>Competition Structure</h2>
          <div className="round">
            <img src='https://placehold.co/600x400' alt="Preliminary Round" />
            <div>
              <h3>Preliminary Round</h3>
              <p>San Francisco, CA</p>
              <p>Sat, Feb 25, 2023 : 9:00 AM - 5:00 PM</p>
            </div>
          </div>
          <div className="round">
            <img src='https://placehold.co/600x400' alt="Semi-Final Round" />
            <div>
              <h3>Semi-Final Round</h3>
              <p>Los Angeles, CA</p>
              <p>Sun, Feb 26, 2023 : 9:00 AM - 5:00 PM</p>
            </div>
          </div>
          <div className="round">
            <img src='https://placehold.co/600x400' alt="Final Round" />
            <div>
              <h3>Final Round</h3>
              <p>Sacramento, CA</p>
              <p>Mon, Feb 27, 2023 : 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </section>
        <section className="evaluation-metrics">
          <h2>Evaluation Metrics</h2>
          <ul>
            <li>Content (30%)</li>
            <li>Delivery (30%)</li>
            <li>Language (20%)</li>
            <li>Non-verbal (20%)</li>
          </ul>
        </section>
        <section className="themes">
          <h2>Themes</h2>
          <ul>
            <li>Elimination of Nuclear Weapons</li>
            <li>Climate Change and Biodiversity</li>
            <li>Economic Development in Africa</li>
          </ul>
        </section>
        <button className="register-button">Register for the event</button>
      </main>
    </div>
  );
};

export default CompetitionStructure;
