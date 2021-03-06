import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn116127197Navigator from '../features/SignIn116127197/navigator';
import ArticleList127165Navigator from '../features/ArticleList127165/navigator';
import ArticleList127164Navigator from '../features/ArticleList127164/navigator';
import ArticleList127163Navigator from '../features/ArticleList127163/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn116127197: { screen: SignIn116127197Navigator },
ArticleList127165: { screen: ArticleList127165Navigator },
ArticleList127164: { screen: ArticleList127164Navigator },
ArticleList127163: { screen: ArticleList127163Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
