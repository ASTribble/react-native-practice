import React from 'react';
import React, { Component } from 'react';
import {View,Image} from 'react-native';
import {connect} from 'react-redux';

import { getNasaImage } from '../New';

export class New extends React.Component {
  componentDidMount(){
    this.props.dispatch(getNasaImage('moon'));
  }
  
  render(){
    <View>
      <Image source={{uri: this.props.image}}/>
    </View>  

  }
}

const mapStateToProps = (state, props) => {
  return console.log('state in New', state);
};

export default connect(mapStateToProps)(New);