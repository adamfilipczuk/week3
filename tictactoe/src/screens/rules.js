import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Rules({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.table}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Rules</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>Game Rules</Text>
          <Text style={styles.text}>Players take turns putting their marks in empty squares{'\n'}</Text>
          <Text style={styles.text}>The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.{'\n'}</Text>
          <Text style={styles.text}>When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.{'\n'}</Text>
        </View>
        
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 20, 
  },
  button: {
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleContainer: {
    backgroundColor: "green",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "blue",
    marginBottom: 20, 
    alignSelf: "center",
    width: '90%',  
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  table: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    width: '90%',  
    paddingHorizontal: 10,
  },
  textBox: {
    backgroundColor: "#666", 
    padding: 20,
    borderRadius: 10,
    width: '90%',  
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
