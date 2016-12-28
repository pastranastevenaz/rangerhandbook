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

export default class Orders extends Component {
  render(){
    return(
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <Text style={styles.title}>
            Standing Orders, Rogers' Rangers
          </Text>
          <Text style={styles.subtitle}>
            Major Robert Rogers, 1759
          </Text>
          <Text style={styles.content}>
            1. Don't forget nothing
            {"\n"}{"\n"}2. Have your musket clean as a whistle, hatchet scoured, sixty rounds powder and ball, and be ready to march at a minute's warning.
            {"\n"}{"\n"}3. When you're on the march, act the way you would if you was sneaking up on a deer. See the enemy first.
            {'\n'}{'\n'}4. Tell the truth about what you see and what you do. There is an army depending on us for correct information. You can lie all you please when you tell other folks about the Rangers, but don't never lie to a Ranger or officer.
            {'\n'}{'\n'}5. Don't never take a chance you don't have to.
            {'\n'}{'\n'}6. When we're on the march we march single file, far enough apart so one shot can't go through two men.
            {'\n'}{'\n'}7. If we strike swamps, or soft ground, we spread out abreast, so it's hard to track us.
            {'\n'}{'\n'}8. When we march, we keep moving till dark, so as to give the enemy the least possible chance at us.
            {'\n'}{'\n'}9. When we camp, half the party stays awake while the other half sleeps.
            {'\n'}{'\n'}10. If we take prisoners, we keep' em separate till we have had time to examine them, so they can't cook up a story between' em.
            {'\n'}{'\n'}11. Don't ever march home the same way. Take a different route so you won't be ambushed.
            {'\n'}{'\n'}12. No matter whether we travel in big parties or little ones, each party has to keep a scout 20 yards ahead, 20 yards on each flank, and 20 yards in the rear so the main body can't be surprised and wiped out.
            {'\n'}{'\n'}13. Every night you'll be told where to meet if surrounded by a superior force.
            {'\n'}{'\n'}14. Don't sit down to eat without posting sentries.
            {'\n'}{'\n'}15. Don't sleep beyond dawn. Dawn's when the French and Indians attack.
            {'\n'}{'\n'}16. Don't cross a river by a regular ford.
            {'\n'}{'\n'}17. If somebody's trailing you, make a circle, come back onto your own tracks, and ambush the folks that aim to ambush you.
            {'\n'}{'\n'}18. Don't stand up when the enemy's coming against you. Kneel down, lie down, hide behind a tree.
            {'\n'}{'\n'}19. Let the enemy come till he's almost close enough to touch, then let him have it and jump out and finish him up with your hatchet.
          </Text>
        </ScrollView>
        <View style={styles.footer}>
          <Button
            small
            buttonStyle={styles.footerButtons}
            iconLeft
            onPress={Actions.RangersCreed}
            icon={{name: 'keyboard-arrow-left'}}
            title='    Prev      ' />
          <Button
            small
            buttonStyle={styles.footerButtons}
            iconRight
            onPress={Actions.History}
            icon={{name: 'keyboard-arrow-right'}}
            title='      Next    ' />
          </View>
      </View>
    )
  }
}
