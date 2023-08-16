import { View, Text, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Easy');
  const navigation=useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', height: 60, backgroundColor: '#1616FF' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ position: 'absolute', top: 15, left: 10 }}>
          <Image style={{ width: 27, height: 27, tintColor: '#ffff' }} source={require('../images/back.png')} />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, color: '#fff', fontWeight: '500', alignSelf: 'center' }}>Settings</Text>
      </View>
      <View style={{ width: '80%', height: 60, borderBottomWidth: 0.3, borderBlockColor: '#000', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: 'black' }}>Sounds</Text>
        <Switch
          value={isEnabled}
          onValueChange={value => setIsEnabled(value)}
        />
      </View>
      <View style={{ width: '80%', height: 60, borderBottomWidth: 0.3, borderBlockColor: '#000', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: 'black' }}>Difficulty</Text>
        <Picker
           selectedValue={selectedValue}
          onValueChange={itemValue => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Easy" value="Easy" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="Hard" value="Hard" />
        </Picker>
      </View>
      <View style={{ width: '80%', height: 70, alignSelf: 'center' ,marginTop:10}}>
      <Text style={{ fontSize: 20, color: 'black' }}>Questions</Text>
      <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:20}}>
        <TouchableOpacity style={{width:'30%'}}><Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>10</Text></TouchableOpacity>
        <TouchableOpacity style={{borderBottomWidth:1,borderBottomColor:'#1616FF',width:'30%'}}><Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>20</Text></TouchableOpacity>
        <TouchableOpacity style={{width:'30%'}}><Text style={{fontSize:20,fontWeight:'bold',color:'black',}}>30</Text></TouchableOpacity>
      </View>
      </View>
      <View style={{ width: '80%', height: 60, borderBottomWidth: 0.3, borderBlockColor: '#000', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: 'black' }}>Language</Text>
        <Picker
           selectedValue={selectedValue}
          onValueChange={itemValue => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Easy" value="Easy" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="Hard" value="Hard" />
        </Picker>
      </View>
      <View style={{ width: '80%', height: 60, borderBottomWidth: .3, borderBlockColor: '#000', alignSelf: 'center' }}></View>
      <View style={{ width: '80%', height: 60, borderBottomWidth: .3, borderBlockColor: '#000', alignSelf: 'center' }}></View>
      <View style={{ width: '80%', height: 60, borderBottomWidth: .3, borderBlockColor: '#000', alignSelf: 'center' }}></View>
      <View style={{ width: '80%', height: 60, borderBottomWidth: .3, borderBlockColor: '#000', alignSelf: 'center' }}></View>
      <View style={{ width: '80%', height: 60, borderBottomWidth: .3, borderBlockColor: '#000', alignSelf: 'center' }}></View>
    </View>
  )
}

export default Setting