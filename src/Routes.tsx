import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import CreateList from './pages/Market/CreateList/CreateList';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: () => <Header />}}
        />
        <Stack.Screen
          name="Create List"
          component={CreateList}
          options={{header: () => <Header />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
