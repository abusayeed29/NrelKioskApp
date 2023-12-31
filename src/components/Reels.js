import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Video from 'react-native-video';
import { videoData } from './data/ProjectData';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Reels = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

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

  useEffect(() => {
    //console.log("videoRef", videoRef);
    if (!videoRef.current) {
      videoRef.current.seek(0);
    }
  }, [currentIndex]);

  const togglePlayPause = () => {
    setIsPaused(!isPaused);
  };

  // Start Play and Pause the video on and off screen 
  useFocusEffect(
    useCallback(() => {
      // Function to play the video when the screen is focused
      const playVideo = () => {
        if (videoRef.current) {
          videoRef.current.seek(0); // This seeks the video to the beginning before playing
          setIsPaused(true);
        }
      };

      // Function to pause the video when the screen loses focus
      const pauseVideo = () => {
        if (videoRef.current) {
          setIsPaused(false);
        }
      };

      // Play the video when the screen is focused
      playVideo();
      // Pause the video when the screen loses focus
      return pauseVideo;
    }, []),
  );
  // End Play and Pause the video on and off screen 

  renderItem = ({item, index}) => {
    console.log('indexx', index);
    return (
      <View>
        <TouchableOpacity
          onPress={togglePlayPause}
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
            resizeMode="contain"
            poster={item.thumbnailUrl}
            posterResizeMode="cover"
            ref={videoRef}
            onBuffer={onBuffer}
            onError={onError}
            repeat={true}
            //paused={currentIndex !== index}
            paused={!isPaused}
            style={{width: '100%', height: '100%', position: 'absolute'}}
          />
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={togglePlayPause}>
          <View style={{padding: 10}}>
            {isPaused ? <Text>Pause</Text> : <Text>Play</Text>}
          </View>
      </TouchableOpacity> */}
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
      showPagination
      // autoplayLoop
      //vertical={true} // its for vertical swipe
    />
  );
};

export default Reels;
