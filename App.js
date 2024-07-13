import * as React from 'react';
import { View, Text, StatusBar, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import { useFonts } from 'expo-font';
import Register from './screens/Register';
import QuizDescription from './screens/QuizDescription';
import QuizScreen from './screens/QuizScreen';
import QuizResult from './screens/QuizResult';
import QuizTopic from './screens/QuizTopic';

const Stack = createNativeStackNavigator();

const screenOption = {
  title: 'Nova App',
  contentStyle: { backgroundColor: '#05011c' },
  headerStyle: {
    backgroundColor: '#452ed6',
    borderBottomColor: 'red',
    borderBottomWidth: 10
  },
  headerTitleAlign: 'center',
  headerTintColor: 'white',
  animation: 'fade_from_bottom',
  headerTitleStyle: {
    fontFamily: 'lobster-bold', 
    fontSize: 20, 
  },
};

function App() {
  const [fontsLoaded] = useFonts({
    'lobster-bold': require('./assets/fonts/lobster-bold.ttf'),
    'lobster-regular': require('./assets/fonts/lobster-regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          backgroundColor: '#05011c',
          height: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <ActivityIndicator size={60} color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#452ed6" barStyle="light-content" />

      <Stack.Navigator screenOptions={screenOption}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen options={{ headerBackVisible: false}} name="QuizTopic" component={QuizTopic} />
        <Stack.Screen options={{ headerBackVisible: false}}  name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="QuizResult" component={QuizResult} />
        <Stack.Screen options={{ headerBackVisible: false}} name="QuizDescription" component={QuizDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
