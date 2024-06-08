import React from 'react';
import './MarketingPage.css';

const placeholderImage = 'https://placehold.co/600x400';

const MarketingPage = () => {
  return (
    <div className="marketing-strategies-page">
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
      </main>
    </div>
  );
};

export default MarketingPage;
