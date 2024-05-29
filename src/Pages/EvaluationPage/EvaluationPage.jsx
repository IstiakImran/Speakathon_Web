import React from 'react';
import './EvaluationPage.css';

const placeholderImage = 'https://placehold.co/600x400';

const EvaluationPage = () => {
  return (
    <div className="evaluation-page">
      <header>
        <img src={placeholderImage} alt="Evaluation Criteria" className="header-image" />
        <button className="back-button">&larr;</button>
      </header>
      <main>
        <section className="evaluation-criteria">
          <h1>Evaluation Criteria</h1>
          <h2>Judging Panel</h2>
          <div className="judge">
            <img src={placeholderImage} alt="Dr. Paul Hua" className="judge-image" />
            <div>
              <h3>Dr. Paul Hua, judge</h3>
              <p>10 years of experience in public speaking and coaching.</p>
              <p>Stanford University, Lecturer</p>
            </div>
          </div>
          <div className="judge">
            <img src={placeholderImage} alt="Dr. Emma Li" className="judge-image" />
            <div>
              <h3>Dr. Emma Li, judge</h3>
              <p>Ph.D. in Communication, 5 years teaching experience.</p>
              <p>Harvard University, Assistant Professor</p>
            </div>
          </div>
          <div className="judge">
            <img src={placeholderImage} alt="Dr. Michael Liu" className="judge-image" />
            <div>
              <h3>Dr. Michael Liu, judge</h3>
              <p>Ph.D. in Rhetoric, 15 years of experience in teaching public speaking.</p>
              <p>Yale University, Associate Professor</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EvaluationPage;
