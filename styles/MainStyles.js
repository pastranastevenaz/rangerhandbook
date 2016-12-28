import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
  //////////////////////////
  //   Container styles   //
  //////////////////////////
  container: {
    backgroundColor: '#1f1f1f',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 55
  },
  homeContainer : {
    flexGrow: 22,
  },
  contentContainer: {
    marginLeft: 10,
    marginRight: 10
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
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#d1d1d1'
  },
  firstLetter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e8e7e1'
  },
  content: {
    color: '#e8e7e1'
  },
  homeTitle: {
    color: '#d6cc1d',
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 30,
    marginTop: -20
  },
  homeTitle2: {
    color: '#d6cc1d',
    textAlign: 'center',
    fontSize: 24,
    marginTop: -5
  },
  ////////////////////
  // Image Styles   //
  ////////////////////
  homeSoldier: {
    alignSelf: 'center',
    marginTop: -18
  },
  homeRanger: {
    alignSelf: 'center',
    marginTop: 10
  }
})

module.exports = styles;
