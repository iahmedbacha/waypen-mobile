import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from './Auth';
import Screens from './Screens';

export default createAppContainer(createSwitchNavigator({
	Screens,
}))