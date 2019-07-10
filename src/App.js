// External Dependencies
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Internal Dependencies
import BuiltInHome from './components/BuiltInHome';

// Router Definition
const AppNavigator = createStackNavigator({
  Home: {
    screen: BuiltInHome,
  },
  // Profile: { screen: ProfileScreen },
});

export default createAppContainer(AppNavigator);
