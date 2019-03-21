import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    ActivityIndicator


} from "react-native";
import * as Actions from '../actions/Actions'
import { connect } from 'react-redux'


class authorPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.isLoading ?
                    <ActivityIndicator />
                    :
                    <View>

                        <Text style={styles.text}>{this.props.author}</Text>
                        
                    </View>
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        author: state.author,
        isLoading: state.isLoading,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadQuote: () => dispatch(Actions.loadQuote())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(authorPage);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
        
    }
});