import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header/Header';
import { useI18n } from './hooks/useI18n';

import Home from './pages/Home/Home';
import CreateList from './pages/Market/CreateList/CreateList';

const Stack = createNativeStackNavigator();

function Routes() {
  const { t } = useI18n()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: () => <Header hideInfo />, }}
        />
        <Stack.Screen
          name="Create List"
          component={CreateList}
          options={{header: () => <Header title={ t('routes.createList') } />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
