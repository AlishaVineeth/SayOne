import { createStackNavigator} from 'react-navigation'; 
import AsyncApp from '../component/AsyncApp'
import authorPage from '../component/authorPage'

 const RootStack = createStackNavigator(
    {
      Home: AsyncApp,
      author: authorPage,
      
    },
    {
      initialRouteName: 'Home',
    },
    {
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      }
  }
  );

  export default RootStack