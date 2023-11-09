import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Video from 'react-native-video';
import { videoData } from './data/ProjectData';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Reels = () => {
  const navigation = useNavigation();

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

  // This effect will be triggered when navigating away from the screen
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (videoRef.current) {
        console.log(videoRef.current);
        videoRef.current.pauseAsync(); // Pause the video before navigating away
      }
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    //console.log("videoRef", videoRef);
    if (!!videoRef.current) {
      videoRef.current.seek(0);
    }
  }, [currentIndex]);


  /* useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      console.log('Blur');
      //Every time the screen loses focus the Video is paused
      if (this.video) {
        this.video.pauseAsync();
      }
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('Focus');
      //Every time the screen is focused the Video starts playing
      if (this.video) {
        this.video.playAsync();
      }
    }); 

    return unsubscribe;
  }, [navigation]); */

  renderItem = ({item, index}) => {
    console.log('itemsss', item);
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
          resizeMode="contain"
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
      showPagination
      // autoplayLoop
      //vertical={true} // its for vertical swipe
    />
  );
};

export default Reels;
