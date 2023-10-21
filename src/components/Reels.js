import React, { useState } from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist';
import VideoReel from './VideoReel';
import { videoData } from './data/ProjectData';

const Reels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };

  return (

    <SwiperFlatList
    //autoplay
    //autoplayDelay={2}
    //autoplayLoop
    //index={2}
    //showPagination
    data={videoData}
    onChangeIndex={handleChangeIndexValue}
    renderItem={({item, index}) => (
        <VideoReel
            item={item}
            index={index}
            currentIndex={currentIndex}
        />
    )}
    keyExtractor={(item, index) => index}
    />

  );
};

export default Reels;
