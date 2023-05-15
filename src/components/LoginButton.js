import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../const/colos';

const LoginButton = ({
  buttonText
}) => {
  return (
    <TouchableOpacity style={styles.mainButton}>
      <Text style={styles.LoginText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  mainButton: {
    height: 60,
    width: 300,
    backgroundColor: '#F68422',
    borderRadius: 10,
    elevation: 10,
    marginTop: 30,
    marginVertical: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginText: {
    color: COLORS.White,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
