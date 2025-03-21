import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colours';

const plays = ["O", "", "O", "X", "X", "O", "X", "", "O"];

const Cell = ({ play }) => (
  <View style={styles.box}>
    <Text style={styles.text}>{play}</Text>
  </View>
);

const Board = () => (
  <View style={styles.board}>
    {plays.map((p, i) => (
      <Cell key={i} play={p} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  board: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: colors.boardBackground,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 30,
  },
  box: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: colors.boxBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.textColor,
  },
});

export default Board;
