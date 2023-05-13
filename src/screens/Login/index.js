import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import COLORS from '../../const/colos';
import Header from '../../components/MainHeader';
import Logo from '../../Img/icons/logo.png';
import LoginBox from '../../components/LoginBox';
import Footer from '../../components/Footer';

const loginScreen = () => {
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={{flex: 1}}>
        {/* header */}
        <View style={styles.HeaderWrapper}>
          <Header headerText={'Awesome'} headerText2={'App'} />
        </View>
        <View style={styles.logoWrapper}>
          {/* logo */}
          <Image style={styles.LogoStyle} source={Logo} />
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {/* Login contioner */}
          <LoginBox />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        {/* footer */}
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default loginScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: COLORS.BackgroundLogin,
  },
  HeaderWrapper: {
    marginVertical: 30,
    marginHorizontal: 10,
  },
  logoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoStyle: {
    height: 100,
    width: 100,
  },
});
