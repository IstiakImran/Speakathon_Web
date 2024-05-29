import React from 'react';
import './ContactPage.css';

const placeholderImage = 'https://placehold.co/600x400';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <header>
        <h1>Contact</h1>
      </header>
      <main>
        <section className="contact-info">
          <div className="contact-item">
            <img src={placeholderImage} alt="Office Hours" />
            <div>
              <h3>Office Hours</h3>
              <p>Mon-Fri, 8:30am-4:30pm</p>
            </div>
          </div>
          <div className="contact-item">
            <img src={placeholderImage} alt="General Information" />
            <div>
              <h3>General Information</h3>
              <p>For general inquiries and information</p>
            </div>
            <a href="tel:+1234567890">Call</a>
          </div>
          <div className="contact-item">
            <img src={placeholderImage} alt="Registration" />
            <div>
              <h3>Registration</h3>
              <p>For registration and competition questions</p>
            </div>
            <a href="tel:+1234567890">Call</a>
          </div>
        </section>
        <section className="social-media">
          <h2>Connect with us</h2>
          <div className="social-item">
            <img src={placeholderImage} alt="Instagram" />
            <p>@californiastatespeech</p>
            <a href="#">&#8594;</a>
          </div>
          <div className="social-item">
            <img src={placeholderImage} alt="Facebook" />
            <p>California State Speech & Debate</p>
            <a href="#">&#8594;</a>
          </div>
          <div className="social-item">
            <img src={placeholderImage} alt="Snapchat" />
            <p>csda1</p>
            <a href="#">&#8594;</a>
          </div>
        </section>
        <section className="location">
          <p>Hosted at Long Beach State University</p>
          <img src={placeholderImage} alt="Map" className="map-image" />
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
