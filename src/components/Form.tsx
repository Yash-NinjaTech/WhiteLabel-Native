import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const Form = () => {
  return (
    <View style={styles.container}>
      <TextInput
        label="Destination"
        placeholder="Where are you going?"
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon icon="map-marker" />}
      />
      <TextInput
        label="Dates"
        placeholder="06/04/24 - 06/10/24"
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon icon="calendar" />}
      />
      <TextInput
        label="Guests"
        placeholder="1 Guest, 1 Room"
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon icon="account" />}
      />
      <Button
        mode="contained"
        onPress={() => console.log('Searching...')}
        style={styles.button}>
        SEARCH
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    marginTop: 50,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#8A2BE2',
  },
});
export default Form;
