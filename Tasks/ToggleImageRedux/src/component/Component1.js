import React, { Component } from "react";
import {
    View,
    Text,
    TouchableHighlight,
     Image,
} from "react-native";
import { connect } from 'react-redux'
import styles from '../styles/styles'
import changePic from '../actions/actionIndex'
import { bindActionCreators } from 'redux'

 class Component1 extends Component{
    render(){
        return(
            <View style={styles.container}>
      <Image
          style={styles.image}
          source = {{uri: this.props.img}}
        />
      <View style={styles.touchView}>
      <TouchableHighlight onPress = {() => this.props.changeImage()} style={styles.touchable}>
         <Text style={styles.text}>
            Tap Here
         </Text>
       </TouchableHighlight>

      </View>
       
      </View>
    );
        
    }
}

function mapStateToProps(state) {
    return {
        img : state.img
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeImage: () => dispatch(changePic()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component1)


//...bindActionCreators(changePic, dispatch)