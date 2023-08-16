import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import SubCommon from './subcommon/SubCommon';
import { useSelector } from 'react-redux';
const Common = () => {
    const navigation = useNavigation();
    const data=useSelector((state) => {
        return state.operator;
      })
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: '30%' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../images/logo.png')} />
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }} style={{ position: 'absolute', top: 15, left: 10 }}>
                    <Image style={{ width: 27, height: 27, tintColor: '#ffff' }} source={require('../images/back.png')} />
                </TouchableOpacity>
                <Text style={{ position: 'absolute', top: 10, left: '50%', color: '#fff', fontSize: 30, fontWeight: "bold", transform: [{ translateX: -50 }] }}>{data}</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'500'}}>No. of Question: 10</Text>
                <Text style={{fontSize:20,fontWeight:'500'}}>Level Of Difficulty: Hard</Text>
            </View>
            <View style={{ position: "absolute", bottom: 30, width: '100%', height: 60, justifyContent: 'center', alignItems: 'center' }}>

                <TouchableOpacity onPress={()=>{
                    navigation.navigate('SubCommon');
                }} style={[styles.btn, styles.shadowProp]}><Text style={{ color: '#fff', fontSize: 25, fontWeight: 400 }}>Start</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Common

const styles = StyleSheet.create({
    btn: {
        width: '80%',
        marginTop: 25,
        height: 40,
        backgroundColor: '#1616FF',
        borderColor: '#fff',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2, shadowRadius: 3,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})