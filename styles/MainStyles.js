import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
  //////////////////////////
  //   Container styles   //
  //////////////////////////
  container: {
    backgroundColor: '#d8d8d8',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 55
  },
  homeContainer : {
    flexGrow: 22,
  },
  ///////////////////////
  //   Footer styles   //
  ///////////////////////
  footer : {
    backgroundColor: '#d6cc1d',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footerButtons: {
    backgroundColor: '#d6cc1d'
  },
  ////////////////////////
  //   NAV BAR Styles   //
  ////////////////////////
  navBar: {
    backgroundColor:'#4a4b4c',
  },
  titleStyle: {
    color: '#fff'
  },
  navBarTitle:{
    color: 'white'
  },
  barButtonTextStyle:{
    color:'#FFFFFF'
  },
  barButtonIconStyle:{
    tintColor:'rgb(255,255,255)'
  },

  /////////////////////
  //   Text Styles   //
  /////////////////////
  title: {
    marginBottom: 20,
    fontSize: 28,
    textAlign: 'center',
    color: '#d1d1d1'
  },
  firstLetter: {
    fontSize: 20,
    fontWeight: 'bold'
  },
})

module.exports = styles;
