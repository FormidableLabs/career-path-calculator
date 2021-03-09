import React from 'react';
import { Router } from 'wouter';
import { AppContextProvider } from './context';
import Stage from './components/Stage';
import WelcomePage from './components/WelcomePage';
import StatusBar from './components/StatusBar';

function App() {
  return (
    <AppContextProvider>
      {/* eslint-disable-next-line no-undef */}
      <Router base={process.env.PUBLIC_URL}>
        <div>
          <StatusBar />
          <WelcomePage />
          <Stage />
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
