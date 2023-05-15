import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../const/colos';

const Footer = (
  {
    footerHeader, // Awesome App Footer
    footerSecondHeader, // Copy Rights
    FooterLink // Link to web
  }
) => {
  return (
    <View style={styles.MainScreen}>
      <Text style={styles.footerText}>{footerHeader}</Text>
      <Text style={styles.footerText}>{footerSecondHeader}</Text>
      <View style={styles.LinksStyle}>
        <TouchableOpacity>
          <Text style={{color: '#000'}}>{FooterLink}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  MainScreen: {
    //height: 130,
    width: 350,
    backgroundColor: '#fff',
    elevation: 10,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  footerText: {
    color: COLORS.black,
    fontWeight: 'bold',
  },
  LinksStyle: {marginTop: 10},
});
