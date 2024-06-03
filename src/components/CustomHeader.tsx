// CustomHeader.js
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {SvgUri} from 'react-native-svg';

const CustomHeader = () => {
  const navigation = useNavigation();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: withSpring(isDrawerOpen ? 0 : -200)}],
    };
  });

  return (
    <View>
      <View style={styles.header}>
        <SvgUri
          uri="https://storage.googleapis.com/sn-v4-local-core-media/1703760913329_logo-dark.svg"
          height={30}
          width={30}
        />
        <TouchableOpacity onPress={toggleDrawer}>
          <Text style={styles.drawerButton}>☰</Text>
        </TouchableOpacity>
      </View>
      <Animated.View style={[styles.drawer, animatedStyle]}>
        <Text>Drawer Content</Text>
        {/* Add your drawer content here */}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    elevation: 4,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  drawerButton: {
    fontSize: 30,
  },
  drawer: {
    // position: 'absolute',
    // top: 60,
    // left: 0,
    // right: 0,
    // height: 200,
    // backgroundColor: '#fff',
    zIndex: 1,
    elevation: 4,
    padding: 20,
  },
});

export default CustomHeader;
