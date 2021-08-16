import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importar as telas ou paginas
import home from './pages/home';
import consulta from './pages/consulta';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="home" component={home}/>
        <Stack.Screen options={{headerShown: false}} name="consulta" component={consulta}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;