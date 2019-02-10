import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
            { key: 'Cesar' },
            { key: 'Mariana' },
            { key: 'Alex' },
            { key: 'Chos' },
            { key: 'Juanito' },
            { key: 'Dani' },
            { key: 'Victor' },
            { key: 'Osky' },
            { key: 'Yolis' },
            { key: 'Mama' },
            { key: 'Papa' },
            { key: 'Kaiser' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'steelblue',
    margin: 8,
  },
})

