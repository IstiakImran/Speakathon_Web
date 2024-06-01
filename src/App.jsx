import React from 'react';
import Speakathon2023 from './Pages/Speakathon2023/Speakathon2023';
import CompetitionPage from './Pages/CompetitionPage/CompetitionPage';
import CompetitionStructure from './Pages/CompetitionStructure/CompetitionStructure';
import SeminarPage from './Pages/SeminarPage/SeminarPage';
import EvaluationPage from './Pages/EvaluationPage/EvaluationPage';
import VolunteerPage from './Pages/VolunteerPage/VolunteerPage';
import PrizesPage from './Pages/PrizesPage/PrizesPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import MarketingPage from './Pages/MarketingPage/MarketingPage';

const App = () => {
  return (
    <div>
      <Speakathon2023></Speakathon2023>
      <MarketingPage></MarketingPage>
      <CompetitionStructure></CompetitionStructure>
      <EvaluationPage></EvaluationPage>
      <SeminarPage></SeminarPage>
      <PrizesPage></PrizesPage>
      <VolunteerPage></VolunteerPage>

      <CompetitionPage></CompetitionPage>

      
  
      <ContactPage></ContactPage>
     
      
    </div>
  );
};

export default App;