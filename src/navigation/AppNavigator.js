import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';

import Auth from './Auth';
import MainNavigation from './MainNavigation';

export default createAppContainer(createSwitchNavigator({
	Auth,
	MainNavigation,
}))