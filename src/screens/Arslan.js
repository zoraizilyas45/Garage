import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenNames from '../Helpers/ScreenNames'

const Arslan = ({navigation}) => {
  return (
    <TouchableOpacity
                    style={{  width: '40%', borderWidth: 1, paddingHorizontal: 20,
                     borderRadius: 10, marginTop: 320, 
                    paddingStart: 10, backgroundColor: '#FFA500', marginLeft: 110, }}
                    onPress={() => {
                        // btnActionSignIn()
                        navigation.navigate(ScreenNames.SignIn)
                    }}

                >
                    <Text style={{ textAlign: 'center', padding: 5, color: 'white', 
                    fontSize: 20, fontWeight: 'bold', marginLeft: 20, }} >Log Out</Text>
                </TouchableOpacity>
  )
}

export default Arslan