import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import {
  Button
} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const styles = require('../../styles/MainStyles.js');

export default class Home extends Component {
  render(){
    return(
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <Image source={require('../../resources/rangerSmall.png')} style={styles.homeRanger}></Image>
          <Text style={styles.homeTitle}>
            Handbook
          </Text>
          <Image source={require('../../resources/soldierSmall2.png')} style={styles.homeSoldier}></Image>
          <Text style={styles.homeTitle2}>
            Rangers Lead The Way!
          </Text>
        </ScrollView>
        <View style={styles.footer}>
          <Button
            small
            buttonStyle={styles.footerButtons}
            iconLeft
            icon={{name: 'keyboard-arrow-left'}}
            title='    Prev      ' />
          <Button
            small
            buttonStyle={styles.footerButtons}
            iconRight
            onPress={Actions.RangersCreed}
            icon={{name: 'keyboard-arrow-right'}}
            title='      Next    ' />
          </View>
        </View>
        )
      }
    }
