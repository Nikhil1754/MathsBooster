import { View, Text ,Image} from 'react-native'
import React,{useEffect} from 'react'
import  {useNavigation}  from '@react-navigation/native';
import Main from './Main';
const Splash = () => {
    const navigation=useNavigation();
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Main');
      }, 3000)
    }, [])
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#00acee' }}>
        <Image source={require("../images/splash.png")} 
        style={{ width:'87%', height:300,overflow:'hidden',borderRadius:200 }} />
      </View>
    )
}

export default Splash