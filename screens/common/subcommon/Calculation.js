import React, { useState, useEffect,useCallback } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Calculation = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const operator = useSelector(state => {
    return state.operator;
  });

  const questions = Array.from({ length: 10 }, () => [
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
  ]);

  const navigation = useNavigation();

  useEffect(() => {
    if (questionIndex < questions.length) {
      const [newNum1, newNum2] = questions[questionIndex];
      setNum1(newNum1);
      setNum2(newNum2);
      setAnswer('');
    } else {
      navigation.navigate('Common'); // Navigate to a common screen after all questions are answered
    }
  }, [questionIndex]);
  const handleNumberClick = (number) => {
    setAnswer(prevAnswer => {
      const newAnswer = prevAnswer + number.toString();
      console.log(newAnswer); // Check if newAnswer is being constructed correctly
      return newAnswer;
    });
  };
  
  console.log(answer);

  const handleOperatorClick = () => {
    let expectedAnswer;

    if (operator === 'Addition') {
      expectedAnswer = num1 + num2;
    } else if (operator === 'Subtraction') {
      expectedAnswer = num1 - num2;
    } else if (operator === 'Multiplication') {
      expectedAnswer = num1 * num2;
    }
    console.log(expectedAnswer);
    if (parseInt(answer) === expectedAnswer) {
      setQuestionIndex(questionIndex + 1);
      setAnswer(''); // Clear the answer for the next question
    } else {
      // Incorrect answer handling, if desired
      // For example, you could show an error message to the user
      // or apply some other logic to handle incorrect answers.
      // For now, I'll just clear the answer.
    }
  };



  const handleClearAnswer = () => {
    setAnswer('');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', height: 60, backgroundColor: '#1616FF' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Common')} style={{ position: 'absolute', top: 15, left: 10 }}>
          <Image style={{ width: 27, height: 27, tintColor: '#ffff' }} source={require('./asset/back.png')} />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '90%', height: 60, marginTop: 20, borderWidth: 2, borderColor: '#1616FF', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 40, fontWeight: '500' }}>
            {operator === 'Addition' ? `${num1} + ${num2}` : operator === 'Multiplication' ? `${num1} x ${num2}` : operator === 'Subtraction' ? `${num1} - ${num2}`:operator === 'Division' ? `${num1} / ${num2}`:operator === 'Squares' ? `${num1}^2`:operator === 'Cubes' ? `${num1}^3`:""}
          </Text>
        </View>
        <View style={{ width: '90%', height: 60, marginTop: 20, borderWidth: 2, borderColor: '#1616FF', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 40, fontWeight: '500' }}>
            {answer}
          </Text>
        </View>
      </View>
      <View style={{ width: '100%', height: '70%', justifyContent: 'flex-end', alignItems: 'center' }}>
        {/* Number buttons */}
        <View style={{ width: '100%', height: '70%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          {[7, 8, 9, 4, 5, 6, 1, 2, 3].map(number => (
            <TouchableOpacity
              key={number}
              onPress={() => handleNumberClick(number)}
              style={{ width: '30%', height: '20%', margin: '1%', backgroundColor: '#1616FF', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5 }}>
              <Text style={{ color: 'white', fontSize: 24 }}>{number}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() => handleNumberClick(0)}
            style={{ width: '30%', height: '20%', margin: '1%', backgroundColor: '#1616FF', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5 }}>
            <Text style={{ color: 'white', fontSize: 24 }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleClearAnswer}
            style={{ width: '30%', height: '20%', margin: '1%', backgroundColor: '#1616FF', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5 }}>
            <Text style={{ color: 'white', fontSize: 24 }}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


export default Calculation;