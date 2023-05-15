import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../const/colos'
import LogoutButton from './logoutButton'


const dashboardMiddelBox = ({
    content
}) => {
  return (
    <View style={styles.mainWrapper}>
        <Text style={styles.TextStyle}>{content}</Text>
        <TouchableOpacity>
        <View style={{}}>
             <LogoutButton logoutText={'Logout'}/>
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default dashboardMiddelBox

const styles = StyleSheet.create({
    mainWrapper : {
        //height : 250,
        width : 250,
        backgroundColor : 'rgb(246,132,34)',
        elevation: 10,
        borderRadius : 10,
        padding : 25
        // justifyContent : "center", 
        // alignItems : "center"
    },
    TextStyle : {color : COLORS.White, fontWeight : "bold", fontSize : 15}
})