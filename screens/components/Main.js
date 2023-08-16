import { View, Text, StyleSheet, Image, TouchableOpacity,Share } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { setOperator } from '../../redux/slices/operatorSlices';
import { useDispatch } from 'react-redux';


const Main = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const setOperators = (s) => {
        dispatch(setOperator(s));
    }
    const content = 'Check out this amazing content!';
    const handleShare = async () => {
        try {
          await Share.share({
            message: content,
          });
        } catch (error) {
          console.error('Error sharing content:', error);
        }
      };
    return (
        <View style={styles.Main}>
            <View style={styles.Header}>
                <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#1616FF' }}>Maths Booster</Text>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Setting')
                }}><Image style={{ width: 27, height: 27, tintColor: '#1616FF' }} source={require('../images/settings.png')} /></TouchableOpacity>
            </View>
            <View style={styles.btnArea}>
                <TouchableOpacity onPress={() => {
                    setOperators('Addition');
                    navigation.navigate('Common');
                }} style={[styles.btn, styles.shadowProp]}><Text style={{ color: '#fff', fontSize: 20, fontWeight: 400 }}>Addition</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setOperators('Subtraction');
                    navigation.navigate('Common');
                }} style={[styles.btn, styles.shadowProp]}><Text style={{ color: '#fff', fontSize: 20, fontWeight: 400 }}>Subtraction</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setOperators('Multiplication');
                    navigation.navigate('Common');
                }} style={[styles.btn, styles.shadowProp]}><Text style={{ color: '#fff', fontSize: 20, fontWeight: 400 }}>Multiplication</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setOperators('Division');
                    navigation.navigate('Common');
                }} style={[styles.btn, styles.shadowProp]}><Text style={{ color: '#fff', fontSize: 20, fontWeight: 400 }}>Division</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setOperators('Mixed');
                    navigation.navigate('Common');
                }} style={[styles.btn, styles.shadowProp]}><Text style={{ color: '#fff', fontSize: 20, fontWeight: 400 }}>Mixed</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setOperators('Squares');
                    navigation.navigate('Common');
                }} style={[styles.btn, styles.shadowProp]}><Text style={{ color: '#fff', fontSize: 20, fontWeight: 400 }}>Squares</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setOperators('Cubes');
                    navigation.navigate('Common');
                }} style={[styles.btn, styles.shadowProp]}><Text style={{ color: '#fff', fontSize: 20, fontWeight: 400 }}>Cubes</Text></TouchableOpacity>
            </View>
            <View style={styles.Footer}>
                <TouchableOpacity><Image style={{ width: 27, height: 27, tintColor: '#1616FF' }} source={require('../images/heart.png')} /></TouchableOpacity>
                <TouchableOpacity  onPress={handleShare}><Image style={{ width: 27, height: 27, tintColor: '#1616FF' }} source={require('../images/share.png')} /></TouchableOpacity>
            </View>
        </View>
    )
}

export default Main
const styles = StyleSheet.create({
    Main: {
        flex: 1,
    },
    Header: {
        top: 0,
        width: '100',
        height: 70,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center'
    },

    btnArea: {
        width: '100%',
        alignItems: 'center',
        marginTop: 30

    },
    btn: {
        width: '80%',
        marginTop: 25,
        height: 50,
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
    Footer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        position: 'relative',
        top: 42,
        width: '100',
        height: 60,
        justifyContent: 'space-around',
        alignItems: 'center',

    },

})