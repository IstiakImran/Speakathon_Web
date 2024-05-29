import React from 'react';
import './Speakathon2023.css';


const Speakathon2023 = () => {
  return (
    <div className="register-page">
      <header>
        <img src='https://placehold.co/600x400' alt="Speakathon 2023" className="header-image" />
        <h1>Speakathon</h1>
      </header>
      <main>
        <section className="intro">
          <h2>Your Voice, Your Power</h2>
          <p>Join us for the 2023 Speakathon</p>
          <button className="register-button">Register now</button>
        </section>
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
        <footer>
          <p>&copy; 2023 Speakathon. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Speakathon2023;
