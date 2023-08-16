import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

const SubCommon = ({ navigation }) => {
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    if (timer > 0) {
      const timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(timerInterval);
    } else {
      navigation.navigate('Calculation'); // Replace 'AnotherScreen' with your actual screen name
    }
  }, [timer, navigation]);

  return (
    <View style={{ backgroundColor: '#1616FF', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ backgroundColor: '#1616FF', width: '50%', height: 200,borderWidth:5,borderRadius: 200,borderColor:'#fff' }}>
        <Text style={{ color: '#fff', fontSize: 150, position: 'relative', top: 2, left: 40 }}>{timer}</Text>
      </View>
    </View>
  );
};

export default SubCommon;
