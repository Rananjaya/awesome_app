import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../const/colos';

const Footer = () => {
  return <View style={styles.MainScreen}>
    <Text style={styles.footerText}>Awesome App Footer</Text>
    <Text style={styles.footerText}>Copy Rights</Text>
    <View style={{marginTop : 10}}>
        <TouchableOpacity>
            <Text style={{color : "#000"}}>Link to web</Text>
        </TouchableOpacity>
    </View>
  </View>;
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
    justifyContent : "center", 
    alignItems : "center",
    padding : 10

  },
  footerText: {
    color : COLORS.black,
    fontWeight : "bold"
  }
});
