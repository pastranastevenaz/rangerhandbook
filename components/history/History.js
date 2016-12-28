import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
const styles = require('../../styles/MainStyles.js');

export default class History extends Component {
  render() {
    return(
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <Text style={styles.title}>
            Ranger History
          </Text>
          <Text style={styles.content}>
            <Text style={styles.firstLetter}>T</Text>
            he history of the American Ranger is a long and colorful saga of courage, daring, and outstanding leadership. It is a story of men
whose skills in the art of fighting have seldom been surpassed. Only the highlights of their numerous exploits are told here
            {'\n'}{'\n'}<Text style={styles.firstLetter}>R</Text>angers mainly performed defensive missions until, during King Phillip’s War in 1675, Benjamin Church’s Company of Independent
Rangers (from Plymouth Colony) conducted successful raids on hostile Indians. In 1756, Major Robert Rogers, of New Hampshire,
recruited nine companies of American colonists to fight for the British during the French and Indian War. Ranger techniques and
methods of operation inherently characterized the American frontiersmen. Major Rogers was the first to capitalize on them and
incorporate them into the fighting doctrine of a permanently organized fighting force.
            {'\n'}{'\n'}<Text style={styles.firstLetter}>T</Text>he method of fighting used by the first Rangers was further developed during the Revolutionary War by Colonel Daniel Morgan,
who organized a unit known as “Morgan’s Riflemen.” According to General Burgoyne, Morgan’s men were “….the most famous
corps of the Continental Army, all of them crack shots.”
            {'\n'}{'\n'}<Text style={styles.firstLetter}>F</Text>rancis Marion, the “Swamp Fox,” organized another famous Revolutionary War Ranger element known as “Marion’s Partisans.”
Marion’s Partisans, numbering anywhere from a handful to several hundred, operated both with and independent of other elements
of General Washington’s Army. Operating out of the Carolina swamps, they disrupted British communications and prevented the
organization of loyalists to support the British cause, substantially contributing to the American victory.
            {'\n'}{'\n'}<Text style={styles.firstLetter}>T</Text>he American Civil War was again the occasion for the creation of special units such as Rangers. John S. Mosby, a master of the
prompt and skillful use of cavalry, was one of the most outstanding Confederate Rangers. He believed that by resorting to
aggressive action he could compel his enemies to guard a hundred points. He would then attack one of the weakest points and be
assured numerical superiority.
            {'\n'}{'\n'}
          </Text>
        </ScrollView>
      </View>
    )
  }
}
