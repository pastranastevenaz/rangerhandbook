import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import {
  List,
  ListItem
} from 'react-native-elements';
import { Actions } from 'react-native-router-flux'

export default class Navigation extends Component {
  render() {
    return(
      <ScrollView>
        <List>
          <ListItem onPress={Actions.RangersCreed}><Text>Rangers Creed</Text></ListItem>
          <ListItem onPress={Actions.Orders}><Text>2</Text></ListItem>
          <ListItem onPress={Actions.History}><Text>3</Text></ListItem>
          <ListItem><Text>4</Text></ListItem>
          <ListItem><Text>5</Text></ListItem>
          <ListItem><Text>6</Text></ListItem>
          <ListItem><Text>7</Text></ListItem>
        </List>
      </ScrollView>

    )
  }
}
