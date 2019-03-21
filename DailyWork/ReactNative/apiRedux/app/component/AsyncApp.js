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

class AsyncApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.isLoading ?
                    <ActivityIndicator />
                    :
                    <View>
                        <Text style={{ fontSize: 24, textAlign: 'center' }}>{this.props.quote}</Text>
                        
                        <Button title="Load Quote" onPress={() => this.props.loadQuote()} />
                        <Button title="View Author Name" onPress={() => this.props.navigation.navigate('author')} />
                    </View>
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        quote: state.quote,
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

export default connect(mapStateToProps, mapDispatchToProps)(AsyncApp);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
        
    }
});