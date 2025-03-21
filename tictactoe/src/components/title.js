import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colours';

const Title = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>Tic-Tac-Toe</Text>
  </View>
);

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: colors.titleBackground,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.borderColor,
    marginBottom: 20,
    alignSelf: 'center',
    width: '90%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.titleText,
    textAlign: 'center',
  },
});

export default Title;
