import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Title from '../components/title';  // Corrected import path
import Board from '../components/board';  // Corrected import path
import Button from '../components/button';  // Corrected import path
import { colors } from '../constants/colours';  // Correct path to colors

const plays = ["O", "", "O", "X", "X", "O", "X", "", "O"];

const screenHeight = Dimensions.get('window').height; // used for milestone find it much easier

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Title />

      {/* Board */}
      <View style={[styles.boardContainer, { top: screenHeight/2 - 200}]}>{/* Will hopefully be consistent on other devices need to check */}
        <Board plays={plays} />
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate('Rules')}
          title="Rules"
        />
        <Button
          onPress={() => navigation.navigate('Credits')}
          title="Credits"
        />
      </View>
    </View>
  );
}
///removed grey box because think it doesnt look great
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 20,
    justifyContent: "flex-start",
  },
  boardContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
