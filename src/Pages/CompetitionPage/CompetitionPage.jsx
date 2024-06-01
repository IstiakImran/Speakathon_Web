import React from 'react';
import './CompetitionPage.css';


const CompetitionPage = () => {
  return (
    <div className="competition-page">
      <main>
        <section className="how-to-register">
          <h2>How to register</h2>
          <div className="steps">
            <div className="step">
              <img src='https://placehold.co/600x400' alt="Complete the form" />
              <p>Complete the form</p>
              <span>Step 1</span>
            </div>
            <div className="step">
              <img src='https://placehold.co/600x400' alt="Get a confirmation email" />
              <p>Get a confirmation email</p>
              <span>Step 2</span>
            </div>
            <div className="step">
              <img src='https://placehold.co/600x400' alt="Submit your video" />
              <p>Submit your video</p>
              <span>Step 3</span>
            </div>
          </div>
        </section>
        <section className="eligibility-criteria">
          <h2>Eligibility Criteria</h2>
          <p>Must be an undergraduate student enrolled in a college or university in California.</p>
        </section>
        <section className="important-dates">
          <h2>Important Dates</h2>
          <ul>
            <li><strong>Jan 15</strong> - Registration deadline</li>
            <li><strong>Feb 5</strong> - Video submission deadline</li>
            <li><strong>Mar 15</strong> - Winners announced</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CompetitionPage;
