import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Credits({navigation}) {
    return (
        <View style={styles.container}>
          {/* Main Content */}
          <View style={styles.table}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Credits</Text>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text}>Game Credits: {'\n'}</Text>
              <Text style={styles.text}>Me,{'\n'}</Text>
              <Text style={styles.text}>Myself,{'\n'}</Text>
              <Text style={styles.text}>and I.{'\n'}</Text>
              <Text style={styles.text}>{'\n'}Definitely the internet for help with code, MAD2025 lectures including the team, and creator of the game however many centuries ago.</Text>
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
        paddingTop: 20,  // Space from top, adjust as necessary
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
        marginBottom: 20, // Reduced marginBottom to lift title up
        alignSelf: "center",
        width: '90%',  // Same width as the grey text box
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
        width: '90%',  // Same width as the title
        paddingHorizontal: 10,
      },
      textBox: {
        backgroundColor: "#666", 
        padding: 20,
        borderRadius: 10,
        width: '90%',  // Same width as the title container
        marginTop: 10,
      },
      text: {
        fontSize: 20,
        color: 'white',
      },
    });