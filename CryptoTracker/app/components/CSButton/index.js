import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class CSButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.btnContainer, this.props.btnStyle]}
        onPress={this.props.onPress}
        activeOpacity={0.5}>
        <Text style={[styles.btnTxt,this.props.txtStyle]}>{this.props.BtnName}</Text>
      </TouchableOpacity>
    );
  }
}
