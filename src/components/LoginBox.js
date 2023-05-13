import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import COLORS from '../const/colos';
import LoginInputs from './LoginInputs';
import PasswordBox from './PasswordBox';
import LoginButton from './LoginButton';
import InstaLogin from './instaLogin';
const window = Dimensions.get('window');

const LoginBox = () => {
  return (
    <View style={styles.Mainwappper}>
      {/* TextInputs */}
      <LoginInputs />
      <PasswordBox />
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <InstaLogin />
        <TouchableOpacity>
          <Text style={{color: '#000', marginLeft: 10}}>
            Login with Instagram
          </Text>
        </TouchableOpacity>
      </View>

      <LoginButton />
    </View>
  );
};

export default LoginBox;

const styles = StyleSheet.create({
  Mainwappper: {
    backgroundColor: COLORS.White,
    width: window.width * 0.9,
    borderRadius: 10,
    elevation: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
