import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from './screens/about';
import HomeScreen from './screens/Home';
import MapScreen from './screens/map';
import { Provider } from 'react-redux';
import store from './store/store'
import fetchArticles from './store/getApi';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function App() {

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="About">
          <Drawer.Screen name="About" component={AboutScreen} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name='Map' component={MapScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

