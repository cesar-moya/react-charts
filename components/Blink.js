import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    bigBlue:{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 16,
    },
    red: {
        color: 'red',
        fontSize: 16,
    },
});

export class Blink extends Component{
    constructor(props){
        super(props);
        this.state = {isShowingText: true};

        setInterval(() => (
            this.setState(previousState => (
              { isShowingText: !previousState.isShowingText }
            ))
          ), 3000);

    }

    render(){
        return (
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-around'}}>
                {/* <View style={{flex:1, backgroundColor:'powderblue', margin: 5}}></View>
                <View style={{flex:2, backgroundColor:'skyblue', margin: 5}}></View>
                <View style={{flex:3, backgroundColor:'steelblue', margin: 5}}></View> */}

                <View style={{width:50, height:50, backgroundColor:'powderblue', margin: 5}}></View>
                <View style={{width:50, height:50, backgroundColor:'skyblue', margin: 5}}></View>
                <View style={{width:50, height:50, backgroundColor:'steelblue', margin: 5}}></View>
            </View>
        );
        /*return (
            <View style={{width:250, height:250, backgroundColor:'silver'}}>
                <Text style={styles.bigBlue} onPress={this.onPressTitle}>
                    {this.props.text}
                </Text>
            </View>
        );*/
        /*if(!this.state.isShowingText){
            return(
                <Text style={styles.red}>{this.props.text}</Text>
            );
        }else{
            return (
                <Text style={styles.bigBlue} onPress={this.onPressTitle}>{this.props.text}</Text>
            );
        }*/
    }


}
