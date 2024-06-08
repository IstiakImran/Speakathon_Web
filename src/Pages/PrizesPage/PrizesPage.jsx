import React from 'react';
import './PrizesPage.css';

const placeholderImage = 'https://placehold.co/600x400';

const PrizesPage = () => {
  return (
    <div className="prizes-page">
      <div>
        <h1>Prizes & Awards</h1>
        <button className="settings-button">⚙️</button>
      </div>
      <main>
        <section className="prizes">
          <h2>$5000 to the top 3 winners</h2>
          <img style={{ width: '150px' }} src={placeholderImage} alt="Top 3 Winners" />
          <h2>$2500 for best speaker</h2>
          <img style={{ width: '150px' }} src={placeholderImage} alt="Best Speaker" />
          <h2>$1500 for most inspirational</h2>
          <img style={{ width: '150px' }} src={placeholderImage} alt="Most Inspirational" />
          <h2>$1000 for best persuasive speech</h2>
          <img style={{ width: '150px' }} src={placeholderImage} alt="Best Persuasive Speech" />
        </section>
      </main>

    </div>
  );
};

export default PrizesPage;
