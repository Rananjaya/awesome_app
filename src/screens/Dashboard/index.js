import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import COLORS from '../../const/colos';
import Header from '../../components/MainHeader';
import Footer from '../../components/Footer';
import DashboardMiddelBox from '../../components/dashboardMiddelBox';
import LogoutButton from '../../components/logoutButton';
const index = () => {
  return (
    <SafeAreaView style={styles.MainWrpapper}>
      <View style={{flex: 1}}>
        {/* header */}
        <View style={styles.HeaderWrapper}>
          <Header headerText={'Awesome'} headerText2={'App'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.ImageWrapper}>
            {/* avatar */}
            <Image
              style={styles.avatarStyle}
              source={{
                uri: 'https://i.ibb.co/kxQHVrZ/pexels-andrea-piacquadio-774909.jpg',
              }}
            />
          </View>
        </View>

        <View style={styles.MiddelWrapper}>
          <View>
            <Text style={[styles.dashbordText, {fontSize: 20}]}>Name :</Text>
          </View>
          <View>
            <Text style={styles.dashbordText}>Jhone Deo</Text>
          </View>
        </View>
        <View style={styles.MiddelWrapper}>
          <View>
            <Text style={[styles.dashbordText, {fontSize: 20}]}>Email :</Text>
          </View>
          <View>
            <Text style={styles.dashbordText}>jhone@gmail.com</Text>
          </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          {/* middel Box */}
          <View style={{flex: 1}}>
            <DashboardMiddelBox
              content={
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
              }
            />
          </View>
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

export default index;

const styles = StyleSheet.create({
  MainWrpapper: {
    flex: 1,
    backgroundColor: COLORS.BackgroundLogin,
  },
  HeaderWrapper: {
    marginVertical: 30,
    marginHorizontal: 10,
  },
  avatarStyle: {
    height: 160,
    width: 160,
    borderRadius: 100,
  },
  ImageWrapper: {
    //backgroundColor : "#000",
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 100,
  },
  MiddelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 100,
  },
  dashbordText: {
    color: COLORS.black,
  },
});
