import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div className="speakathon-page">
      <header>
        <img src='https://placehold.co/600x400' alt="Speakathon 2023" className="header-image" />
        <h1>Speakathon 2023</h1>
        <p>Your Voice, Your Power</p>
      </header>
      <main>
        <section className="objectives">
          <div className="objective">
            <p>Promote BRAC University</p>
          </div>
          <div className="objective">
            <p>Discover Talent</p>
          </div>
          <div className="objective">
            <p>Enhance Skills</p>
          </div>
        </section>
        <section className="description">
          <p>We are committed to promoting BRAC University as a leading institution in Bangladesh and beyond. We have three main objectives for BRAC Speakathon 2023.</p>
        </section>
        <section className="important-dates">
          <ul>
            <li><strong>Launch of the competition</strong></li>
            <li><strong>Selection of top 50 participants</strong></li>
            <li><strong>Selection of top 10 finalists</strong></li>
            <li><strong>Announcement of winners</strong></li>
          </ul>
        </section>
        <section className="organizer">
          <p>Organized by: BRAC University</p>
        </section>
        <button className="apply-now-button">Apply Now</button>
      </main>
    </div>
  );
};

export default Home;
