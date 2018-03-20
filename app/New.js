
import React, { Component } from 'react';
import {View,Image} from 'react-native';
import {connect} from 'react-redux';

import { getNasaImage } from './store/actions';

export class New extends React.Component {
  // componentDidMount(){
  //   this.props.dispatch(getNasaImage('moon'));
  // }
  
  render(){
    <View>
      <Image source={{uri: this.props.image}}/>
    </View>  

  }
}

const mapStateToProps = (state, props) => {
  image: this.state.image
};

export default connect(mapStateToProps)(New);