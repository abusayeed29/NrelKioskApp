import { useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Video from 'react-native-video';
import { videoData } from './data/ProjectData';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Reels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoRef = useRef(null);

  const onBuffer = buffer => {
    console.log('buffering', buffer);
  };

  const onError = error => {
    console.log('error raised', error);
  };

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
    //console.log("props ===>>>", index);
  };
  
  useEffect(()=>{
    //console.log("videoRef", videoRef);
    if(!!videoRef.current){
      videoRef.current.seek(0);
    }
  },[currentIndex])

  renderItem = ({item, index}) => {
    console.log("itemsss", item);
    return (
      <View
        style={{
          width: windowWidth,
          height: windowHeight,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Video
          // source={require('../assets/video/welcome.mp4')}
          source={{uri: item.videoUrl}}
          resizeMode="cover"
          poster={item.thumbnailUrl}
          posterResizeMode="cover"
          ref={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={false}
          paused={currentIndex !== index}
          style={{width: '100%', height: '100%', position: 'absolute'}}
        />
      </View>
    );
  };

  return (
    /*<SwiperFlatList
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
    keyExtractor={(item, index) => index.toString()}
    /> */

    <SwiperFlatList
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      //vertical={true} // its for vertical swipe
    />

  );
};

export default Reels;
