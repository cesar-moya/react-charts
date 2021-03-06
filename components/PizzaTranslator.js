import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40, padding: 5, borderWidth: 1, borderColor: 'silver', borderRadius: 5 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text })}
        />
        
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
