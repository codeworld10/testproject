
import { StyleSheet, Text, View } from 'react-native';
import ProfileState from './component/context/ProfileState';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStart from './src/screens/GetStart';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import SignC from './src/screens/SignC';
import LogC from './src/screens/LogC';
import Wform from './src/screens/Worker/Wform';
import WorkProfile from './src/screens/Worker/Workprofile';
import TalentH from './src/screens/Hiring/TalentH';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ProfileState>
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName='WForm'>
      <Stack.Screen name="Get Start" component={GetStart} />
     
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name= "Login" component={SignIn} />
      <Stack.Screen name="Find Talent" component={SignC} />
      <Stack.Screen name="Talent Login" component={LogC} />
      <Stack.Screen name="WForm" component={Wform} />
      <Stack.Screen name="Profile" component={WorkProfile} />
      <Stack.Screen name="Worker" component={TalentH} />
     
      
    </Stack.Navigator>
  </NavigationContainer>
     
  
    </ProfileState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
