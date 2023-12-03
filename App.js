import React from 'react';
import { VideoProvider } from './src/context/VideoContext';
import AppNavigation from './src/navigation';

const App = () => {
  return (
    <VideoProvider>
      <AppNavigation />
    </VideoProvider>
  );
};

export default App;
