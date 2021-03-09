import React from 'react';
import { Router } from 'wouter';
import { AppContextProvider } from './context';
import Stage from './components/Stage';
import WelcomePage from './components/WelcomePage';
import StatusBar from './components/StatusBar';

function App() {
  return (
    <Router base="/career-path-calculator">
      <AppContextProvider>
        <div>
          <StatusBar />
          <WelcomePage />
          <Stage />
        </div>
      </AppContextProvider>
    </Router>
  );
}

export default App;
