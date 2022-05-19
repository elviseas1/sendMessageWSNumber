import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './src/screens/home'
import Previus from './src/screens/previus'
const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      
      {/*<View style={styles.container}>
        <Text>Aqui é Elvis New now!!!!</Text>
        <StatusBar style="auto" />
  </View>*/}

        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Recentes') {
              iconName = focused ? 'list' : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Recentes" component={Previus} />
      </Tab.Navigator>
      
    </NavigationContainer>

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
