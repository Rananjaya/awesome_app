import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../const/colos'


const MainHeader = ({
    headerText,
    headerText2
}) => {
  return (
    <View>
        <View style={{flexDirection:"row"}}>
        <Text style={styles.headerText1}>
            {headerText}
        </Text>
        <Text style={styles.headerText2}>
            {headerText2}
        </Text>
        </View>
  
    </View>
  )
}

export default MainHeader

const styles = StyleSheet.create({
    headerText1 : {
        fontSize : 35,
        color : COLORS.black,
        fontWeight : "bold",
        
    },
    headerText2 : {
        fontSize : 35,
        color : COLORS.textGreen,
        fontWeight : "bold",
        marginLeft : 4
        
    }
})