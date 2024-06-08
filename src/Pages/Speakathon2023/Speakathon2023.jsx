import React from 'react';
import './Speakathon2023.css';
import heroBanner1 from '/HeroBanner1.png'
import heroBanner2 from '/HeroBanner2.png'


const Speakathon2023 = () => {
  return (
    <div className="register-page">
      <header>
        <img src={heroBanner2} alt="Speakathon 2023" className="header-image" />
        <img src={heroBanner1} alt="Speakathon 2023" className="header-image" />
        <section className="intro">
          <h1>Your Voice, Your Power</h1>
          <p>Join us for the 2023 Speakathon</p>
          <button className="register-button">Register now</button>
        </section>
      </header>
      <main>

        <section className="why-attend">
          <h2>Why attend?</h2>
          <p>Get inspired by our speakers and learn from their experiences</p>
          <div className="benefits">
            <div className="benefit">
              <p>Connect with other attendees</p>
            </div>
            <div className="benefit">
              <p>Hear from top industry leaders</p>
            </div>
            <div className="benefit">
              <p>Get insights on what's next in tech</p>
            </div>
            <div className="benefit">
              <p>Meet potential clients</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Speakathon2023;
