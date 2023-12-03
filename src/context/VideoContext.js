import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export const useVideoContext = () => {
  return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <VideoContext.Provider value={{ isVideoPlaying, setIsVideoPlaying }}>
      {children}
    </VideoContext.Provider>
  );
};