import { useState } from 'react';

const Reelss = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //const [selectIndex, setSelectIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
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

    <FlatList
      data={videoData}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={renderItem}
    />

  );
};

export default Reelss;
