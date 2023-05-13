import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import InstaImage from '../Img/icons/instagram.png';

const instaLogin = () => {
  return (
    <View>
      <Image style={styles.InstaImageStyle} source={InstaImage} />
    </View>
  );
};

export default instaLogin;

const styles = StyleSheet.create({
  InstaImageStyle: {
    height: 40,
    width: 40,
  },
});
