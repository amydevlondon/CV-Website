import React from 'react'
import Header from './components/Header';
import Details from './components/Details';
import Links from './components/Links';
import SoftSkills from './components/SoftSkills';
import Languages from './components/Languages';
import Profile from './components/Profile';
import TechSkills from './components/TechSkills';
import Experience from './components/Experience';
import Education from './components/Education';

export const App = () => {
  return (
    <main>
      <Header />
      <Details />
      <Links />
      <SoftSkills />
      <Languages />
      <Profile />
      <TechSkills />
      <Experience />
      <Education />
    </main>
  )
}

export default App;