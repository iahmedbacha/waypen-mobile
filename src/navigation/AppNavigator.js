import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';

import Loading from '../screens/Loading';
import Auth from './Auth';
import MainNavigation from './MainNavigation';

export default createAppContainer(createSwitchNavigator({
	Loading,
	Auth,
	MainNavigation,
}))