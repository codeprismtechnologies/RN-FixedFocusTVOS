import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import 'react-native/tvos-types.d';
import React from 'react'
import appStyles from './app.style';
const EnableScrollAniamtions = false;
const LaneNames = ["Continue Watching", "Favorites", "Movie", "TV Show", "Music", "Games", "Apps", "Books", "Other", "All"];

const App = () => {
  const flatListRef = React.useRef<FlatList>(null);
  const [currentLane, setCurrentLane] = React.useState(0);
  const laneHeightComputation = (appStyles.card.height + appStyles.laneTitleContainer.height + (appStyles.swimlaneContainer.marginVertical * 2));
  const onLaneFocusChange = (laneIndex: number) => {
    if (currentLane !== laneIndex) {
      setCurrentLane(laneIndex);
      flatListRef.current?.scrollToItem({ animated: EnableScrollAniamtions, item: laneIndex });
    }
  }

  return (
    <View style={appStyles.container}>
      <View style={appStyles.bannerContainer} />
      <FlatList
        ref={flatListRef}
        keyExtractor={(item) => item.toString()}
        data={Array(10).fill("").map((i, x) => x)}
        renderItem={({ item, index }) => <SwimLane onLaneFocusChange={onLaneFocusChange} laneIndex={index} inFocus={index === currentLane} />}
        scrollEnabled={false}
        getItemLayout={
          (data, index) => ({ length: laneHeightComputation, offset: laneHeightComputation * index, index })
        }
      />
    </View>
  )
}

const SwimLane = ({ onLaneFocusChange, laneIndex, inFocus = false }: { onLaneFocusChange: (laneIndex: number) => void, laneIndex: number, inFocus: boolean }) => {
  const flatListRef = React.useRef<FlatList>(null);
  const [currentCard, setCurrentCard] = React.useState<number | null>(null);
  const renderCards = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={appStyles.card}
        onFocus={() => onFocus(index)}
      >
        <ImageBackground
          source={{ uri: `https://picsum.photos/400/300?random=${index + (laneIndex * 10)}` }}
          resizeMode="cover"
          style={appStyles.cardImage}
        >
          <ImageBackground
            source={{ uri: `https://www.nicepng.com/png/full/98-985556_black-gradient-png-black-to-transparent-png.png` }}
            resizeMode="cover"
            style={appStyles.cardImage}
          >
            <Text style={appStyles.cardTitle}>MF Card - {item}</Text>
          </ImageBackground>
        </ImageBackground>
        <View style={StyleSheet.flatten([appStyles.card, appStyles.cardBorder, index === currentCard && inFocus ? appStyles.cardBorderFocused:{}])} />
      </TouchableOpacity>
    );
  }

  const onFocus = (index: number) => {
    setCurrentCard(index);
    flatListRef.current?.scrollToItem({ animated: EnableScrollAniamtions, item: index });
    onLaneFocusChange(laneIndex);
  }

  return (
    <View style={appStyles.swimlaneContainer}>
      <View style={appStyles.laneTitleContainer}>
        <Text style={appStyles.laneTitle}>{LaneNames[laneIndex]}</Text>
      </View>
      <FlatList
        ref={flatListRef}
        keyExtractor={(item) => item.toString()}
        data={Array(50).fill("").map((i, x) => x)}
        renderItem={renderCards}
        horizontal
        scrollEnabled={false}
        getItemLayout={
          (data, index) => ({ length: (appStyles.card.width + appStyles.card.marginRight), offset: (appStyles.card.width + appStyles.card.marginRight) * index, index })
        }
      />
    </View>
  )
}

export default App
