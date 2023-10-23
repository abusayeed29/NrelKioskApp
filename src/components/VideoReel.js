import React, { useRef, useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';

const VideoReel = ({item, index, currentIndex}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef(null);

  const onBuffer = buffer => {
    console.log('buffering', buffer);
  };

  const onError = error => {
    console.log('error', error);
  };

  //console.log(item.thumbnailUrl);

  const [mute, setMute] = useState(false);

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={{width: '100%', height: '100%', position: 'absolute'}}>
        <Video
         // source={require('../assets/video/welcome.mp4')}
          poster={item.thumbnailUrl}
          source={{uri: item.videoUrl}}
          resizeMode="cover"
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={false}
          paused={false}
          mute={mute}
          style={{width: '100%', height: '100%', position: 'absolute'}}
        />
        <Ionic
          name="volume-mute"
          style={{
            fontSize: mute ? 20 : 0,
            color: 'white',
            position: 'absolute',
            top: windowHeight / 2.3,
            left: windowWidth / 2.3,
            backgroundColor: 'rgba(52,52,52,0.6)',
            borderRadius: 100,
            padding: mute ? 10 : 0,
          }}
        />
      </TouchableOpacity>

      {/* <View
        style={{
          position: 'absolute',
          width: windowWidth,
          zIndex: 1,
          bottom: 0, //edited
          padding: 10,
        }}>

        <View style={{}}>
          <TouchableOpacity style={{width: 150}}>
            <View
              style={{width: 100, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'white', fontSize: 16}}>{item.title}</Text>
            </View>
          </TouchableOpacity>

          <Text style={{color: 'white', fontSize: 14, marginHorizontal: 10}}>
            {item.description}
          </Text>
        </View>
      </View> */}
    </View>
  );
};

export default VideoReel;
