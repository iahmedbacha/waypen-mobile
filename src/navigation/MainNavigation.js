import { createDrawerNavigator, DrawerRouter } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import Editor from '../screens/Editor';
import Texts from '../screens/Texts';
import Test from '../screens/Test';

const StackNavigator = createStackNavigator({
  Home, 
  Editor,
  Texts,
  Test,
})

const DrawerNavigator =  createDrawerNavigator( {
  StackNavigator: {
    screen: StackNavigator
  }
})

export default DrawerNavigator;

