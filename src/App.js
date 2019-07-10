// External Dependencies
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Internal Dependencies
import Home from './components/Home';

// Router Definition
const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  // Profile: { screen: ProfileScreen },
});

export default createAppContainer(AppNavigator);
