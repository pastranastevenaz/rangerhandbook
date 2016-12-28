import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import {
  Button
} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const styles = require('../../styles/MainStyles.js');

export default class RangersCreed extends Component {
  render() {
    return(
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <Text style={styles.title}>Rangers Creed</Text>
          <Text style={styles.content}>

            {"\n"}{"\n"}<Text style={styles.firstLetter}>A</Text>cknowledging the fact that a Ranger is a more elite Soldier who arrives at the cutting edge of battle by land, sea, or air, I accept the fact that as a Ranger my country expects me to move further, faster, and fight harder than any other Soldier.
            {"\n"}{"\n"}<Text style={styles.firstLetter}>N</Text>ever shall I fail my comrades I will always keep myself mentally alert, physically strong, and morally straight and I will shoulder more than my share of the task whatever it may be, one hundred percent and then some.
            {"\n"}{"\n"}<Text style={styles.firstLetter}>G</Text>allantly will I show the world that I am a specially selected and well trained Soldier. My courtesy to superior officers, neatness of dress, and care of equipment shall set the example for others to follow.
            {"\n"}{"\n"}<Text style={styles.firstLetter}>E</Text>nergetically will I meet the enemies of my country. I shall defeat them on the field of battle for I am better trained and will fight with all my might. Surrender is not a Ranger word. I will never leave a fallen comrade to fall into the hands of the enemy and under no circumstances will I ever embarrass my country.
            {"\n"}{"\n"}<Text style={styles.firstLetter}>R</Text>eadily will I display the intestinal fortitude required to fight on to the Ranger objective and complete the mission, though I be the lone survivor.
          </Text>
        </ScrollView>
        <View style={styles.footer}>
          <Button
            small
            buttonStyle={styles.footerButtons}
            iconLeft
            onPress={Actions.Home}
            icon={{name: 'keyboard-arrow-left'}}
            title='    Prev      ' />
          <Button
            small
            buttonStyle={styles.footerButtons}
            iconRight
            onPress={Actions.Orders}
            icon={{name: 'keyboard-arrow-right'}}
            title='      Next    ' />
          </View>
      </View>
    )
  }
}
