import React, { Component } from 'react'
import { StyleSheet, Button, View, Text, FlatList } from 'react-native'

export default class DeckList extends Component {

  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={[{key: 'Deck 1'}, {key: 'Deck 2'}, {key: 'Deck 3'}]}
          renderItem={({item}) => <Text style={styles.title}>{item.key}</Text>}
        />
        <Button
          title='Details'
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title='Show Props'
          onPress={() => console.log(this.props)}
        />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  title: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 40,
  }
})
