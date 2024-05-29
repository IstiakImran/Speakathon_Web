import React from 'react';
import Speakathon2023 from './Pages/Speakathon2023/Speakathon2023';
import Home from './Pages/Home/Home';
import CompetitionPage from './Pages/CompetitionPage/CompetitionPage';
import CompetitionStructure from './Pages/CompetitionStructure/CompetitionStructure';
import SeminarPage from './Pages/SeminarPage/SeminarPage';
import EvaluationPage from './Pages/EvaluationPage/EvaluationPage';
import MarketingStrategiesPage from './Pages/MarketingStrategiesPage/MarketingStrategiesPage';
import VolunteerPage from './Pages/VolunteerPage/VolunteerPage';
import PrizesPage from './Pages/PrizesPage/PrizesPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import MarketingPage from './Pages/MarketingPage/MarketingPage';

const App = () => {
  return (
    <div>
      <Home></Home>
      <Speakathon2023></Speakathon2023>
      <CompetitionPage></CompetitionPage>
      <CompetitionStructure></CompetitionStructure>
      <SeminarPage></SeminarPage>
      <EvaluationPage></EvaluationPage>
      <MarketingStrategiesPage></MarketingStrategiesPage>
      <VolunteerPage></VolunteerPage>
      <PrizesPage></PrizesPage>
      <ContactPage></ContactPage>
      <MarketingPage></MarketingPage>
      
    </div>
  );
};

export default App;