import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../screens/Home';
import Editor from '../screens/Editor';

export default createDrawerNavigator({
  Editor,
  Home,
})