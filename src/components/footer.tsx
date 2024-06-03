import React from 'react';
import {Text} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
// import SvgUri from 'react-native-svg-uri';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <SvgUri uri="https://storage.googleapis.com/sn-v4-local-core-media/1703760913329_logo-dark.svg" />
        <Text style={styles.text}>© 2024</Text>
      </View>
      <View style={[styles.top, styles.social]}>
        <MaterialCommunityIcons name="twitter" size={30} />
        <MaterialCommunityIcons name="linkedin" size={30} />
        <MaterialCommunityIcons name="facebook" size={30} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  text: {
    marginLeft: 5,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 30,
    width: 'auto',
  },
  social: {
    marginTop: 10,
    justifyContent: 'center',
    gap: 10,
  },
});
export default Footer;
