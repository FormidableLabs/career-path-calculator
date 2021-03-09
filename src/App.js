import React from 'react';
import { AppContextProvider } from './context';
import Stage from './components/Stage';
import WelcomePage from './components/WelcomePage';
import StatusBar from './components/StatusBar';

function App() {
  return (
    <AppContextProvider>
      <div>
        <StatusBar />
        <WelcomePage />
        <Stage />
      </div>
    </AppContextProvider>
  );
}

export default App;
