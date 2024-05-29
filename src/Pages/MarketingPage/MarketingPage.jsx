import React from 'react';
import './MarketingPage.css';

const placeholderImage = 'https://placehold.co/600x400';

const MarketingPage = () => {
  return (
    <div className="marketing-strategies-page">
      <header>
        <h1>Marketing Strategies</h1>
      </header>
      <main>
        <section className="current-events">
          <h2>What's Going On Now</h2>
          <div className="event-item">
            <img src={placeholderImage} alt="Preliminary Round" />
            <div>
              <h3>Preliminary Round</h3>
              <p>Date: Feb 10</p>
            </div>
          </div>
          <div className="event-item">
            <img src={placeholderImage} alt="Semi-Final Round" />
            <div>
              <h3>Semi-Final Round</h3>
              <p>Date: Apr 20</p>
            </div>
          </div>
          <div className="event-item">
            <img src={placeholderImage} alt="Pre-Final Workshop" />
            <div>
              <h3>Pre-Final Workshop</h3>
              <p>Date: May 7</p>
            </div>
          </div>
          <div className="event-item">
            <img src={placeholderImage} alt="Final Round" />
            <div>
              <h3>Final Round</h3>
              <p>Date: Jun 11</p>
            </div>
          </div>
        </section>
        <section className="social-media">
          <h2>Social Media</h2>
          <div className="social-post">
            <img src={placeholderImage} alt="Facebook" />
            <div>
              <h3>Facebook</h3>
              <p>Announcing the launch of our event, check out our website to learn more.</p>
              <p>2023-02-10</p>
            </div>
          </div>
          <div className="social-post">
            <img src={placeholderImage} alt="Twitter" />
            <div>
              <h3>Twitter</h3>
              <p>We are excited to announce that we have a new sponsor, join us at the event!</p>
              <p>2023-04-20</p>
            </div>
          </div>
          <div className="social-post">
            <img src={placeholderImage} alt="Instagram" />
            <div>
              <h3>Instagram</h3>
              <p>Our agenda is live! Visit our website to see all the amazing speakers and sessions!</p>
              <p>2023-05-07</p>
            </div>
          </div>
        </section>
        <section className="timeline">
          <h2>Timeline</h2>
          <ul>
            <li><strong>Announce Launch</strong> - Feb 10</li>
            <li><strong>Sponsorship</strong> - Apr 20</li>
            <li><strong>Agenda Live</strong> - May 7</li>
            <li><strong>Early Bird Ends</strong> - Jun 1</li>
            <li><strong>Day of Event</strong> - Jun 11</li>
          </ul>
        </section>
        <section className="media-coverage">
          <h2>Media Coverage</h2>
          <div className="media-post">
            <img src={placeholderImage} alt="Forbes" />
            <div>
              <h3>Forbes</h3>
              <p>The future of public speaking is here. Join us at Speakathon 2023.</p>
              <p>2023-06-01</p>
            </div>
          </div>
          <div className="media-post">
            <img src={placeholderImage} alt="TechCrunch" />
            <div>
              <h3>TechCrunch</h3>
              <p>Meet the 100+ companies presenting at Speakathon 2023.</p>
              <p>2023-05-25</p>
            </div>
          </div>
          <div className="media-post">
            <img src={placeholderImage} alt="New York Times" />
            <div>
              <h3>New York Times</h3>
              <p>Join us for the largest public speaking event in the world.</p>
              <p>2023-06-01</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <nav>
          <a href="#home" className="active">Home</a>
          <a href="#speakers">Speakers</a>
          <a href="#agenda">Agenda</a>
          <a href="#schedule">My Schedule</a>
          <a href="#library">Video Library</a>
        </nav>
      </footer>
    </div>
  );
};

export default MarketingPage;
