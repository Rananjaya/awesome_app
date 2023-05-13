import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../const/colos';
const window = Dimensions.get('window');

const PasswordBox = () => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <View>
      <View style={{marginTop: 10}}>
        <Text style={styles.LableStyle}>Password</Text>
      </View>
      <View style={[styles.mainInputBox]}>
        <TextInput
          onChangeText={value => {
            // onChange(value)
          }}
          placeholder={'Password'}
          placeholderTextColor="rgb(193,193,194)"
          secureTextEntry={passwordVisible}
          style={styles.textInputStyle}
        />

        <View style={styles.showIocnStyle}>
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <MaterialCommunityIcons
              name={passwordVisible ? 'eye-off' : 'eye'}
              color={'rgb(186,187,190)'}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PasswordBox;

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
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    width: window.width * 0.7,
    color: 'rgb(190,190,191)',
  },
  LableStyle: {
    // fontWeight : "bold",
    fontSize: 13,
    marginLeft: window.width * 0.01,
    color: '#000',
  },
  showIocnStyle: {
    // margin
  },
});
