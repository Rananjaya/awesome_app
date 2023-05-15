import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../const/colos'

const logoutButton = ({logoutText}) => {
  return (
    <TouchableOpacity style={styles.logoutButtonMain}>
     <Text style={styles.logoutText}>
        {logoutText}
     </Text>
    </TouchableOpacity>
  )
}

export default logoutButton

const styles = StyleSheet.create({
    logoutText : {
        color : COLORS.White,
        fontSize : 20,
        fontWeight : "bold",
    },
    logoutButtonMain : {
      height : 45,
      width : 200,
      backgroundColor : "rgb(118,188,33)",
      borderRadius: 10,
      elevation : 10,
      justifyContent : "center", 
      alignItems : "center",
      marginTop : 10
  }
})