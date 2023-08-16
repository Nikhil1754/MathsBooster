import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './screens/AppNavigator'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'react-native-gesture-handler';
const App = () => {
  return (
<Provider store={store}>
<AppNavigator/>
</Provider>
  
  )
}

export default App