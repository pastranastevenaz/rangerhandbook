import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Drawer from 'react-native-drawer';
import { SideMenu, List, ListItem } from 'react-native-elements';
import { Router, Scene } from 'react-native-router-flux';
///////////////////////
//   Scenes import   //
///////////////////////
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import RangersCreed from './components/rangersCreed/RangersCreed';
import Orders from './components/orders/Orders';
import History from './components/history/History';

const styles = require('./styles/MainStyles.js');

export default class rangerHandbook extends Component {

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  render() {

    return (
      <Drawer
        type="static"
        content={<Navigation />}
        openDrawerOffset={100}
        styles={drawerStyles}
        tapToClose={true}
        tweenHandler={Drawer.tweenPresets.parallax}>
            <Router
              navigationBarStyle={styles.navBar}
              titleStyle={styles.navbarTitle}
              barButtonTextStyle={styles.barButtonTextStyle}
              barButtonIconStyle={styles.barButtonIconStyle}
              titleStyle={styles.titleStyle}>
              <Scene key="root">
                <Scene key="Home" component={Home} title="Ranger handbook" initial={true} />
                <Scene key="RangersCreed" component={RangersCreed} title="Rangers Creed" />
                <Scene key="Orders" component={Orders} title="Orders" />
                <Scene key="History" component={History} title="Ranger History" />
              </Scene>
            </Router>
        </Drawer>

        );
      }
    }
    const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

    AppRegistry.registerComponent('rangerHandbook', () => rangerHandbook);
