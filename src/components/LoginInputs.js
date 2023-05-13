import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import React from 'react';
import COLORS from '../const/colos';
const window = Dimensions.get('window');
const textInputs = () => {
  return (
    <View>
      <View style={{marginTop: 10}}>
        <Text style={styles.LableStyle}>User Name</Text>
      </View>

      <View style={[styles.mainInputBox]}>
        <TextInput
          onChangeText={value => {
            onChange(value);
          }}
          placeholder={'User Name'}
          placeholderTextColor="rgb(193,193,194)"
          style={styles.textInputStyle}
        />
      </View>
    </View>
  );
};

export default textInputs;

const styles = StyleSheet.create({
  mainInputBox: {
    backgroundColor: 'rgb(249,250,255)',
    height: window.width * 0.13,
    width: window.width * 0.8,
    borderColor: COLORS.mainborderColor,
    borderWidth: 1,
    paddingHorizontal: 13,
    marginTop: 6,
    justifyContent: 'center',
    elevation: 0,
    borderRadius: 2,

    // alignItems : "center",
  },
  textInputStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    width: window.width * 0.6,
    color: 'rgb(190,190,191)',
  },
  LableStyle: {
    // fontWeight : "bold",
    fontSize: 13,
    marginLeft: window.width * 0.01,
    color: '#000',
  },
});
