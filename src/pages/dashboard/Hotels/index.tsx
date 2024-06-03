import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text} from 'react-native';
import Form from '../../../components/Form';
import Footer from '../../../components/footer';

const Hotels = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://storage.googleapis.com/sn-v4-local-core-media/1712007529194_hero.jpg',
        }}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>Book Everything, Anywhere.®</Text>
        <Form />
      </ImageBackground>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 52,
    lineHeight: 68,
    fontWeight: '700',
    textTransform: 'uppercase',
    // textShadow: '0 2px 10px rgba(0, 0, 0, .2)',
  },
});
export default Hotels;
