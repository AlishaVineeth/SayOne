import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    touchView: {
        flexDirection : 'row',
    },
    touchable:{
        margin:10,
         flex:1,
          height: 60,
           backgroundColor: '#778899', 
           justifyContent: 'center'
    },
    text:{
        color:'white',
         fontSize: 16, 
         textAlign:'center'
    },
    image: {
        width: 150,
         height: 150
    },
  });
export default styles