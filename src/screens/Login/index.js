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
      <View style={styles.SecondWrapper}>
        {/* header */}
        <View style={styles.HeaderWrapper}>
          <Header headerText={'Awesome'} headerText2={'App'} />
        </View>
        <View style={styles.logoWrapper}>
          {/* logo */}
          <Image style={styles.LogoStyle} source={Logo} />
        </View>

        <View style={styles.middelCon}>
          {/* Login contioner */}
          <LoginBox />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        {/* footer */}
        <Footer footerHeader={'Awesome App Footer'}  footerSecondHeader={'Copy Rights'} FooterLink={'Link to web'}/>
      </View>
    </SafeAreaView>
  );
};

export default loginScreen;

const styles = StyleSheet.create({
  SecondWrapper : {flex: 1},
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
  middelCon : {justifyContent: 'center', alignItems: 'center'}
});
