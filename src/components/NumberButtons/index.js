import React, { Component } from 'react';
import {
  View,
  Text, 
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default class NumberButtons extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  _handleOnPress = (value) => {
    requestAnimationFrame(() => {
      this.props.onBtnPress(value);
    });
  }

  render() {
    return (
        <View style={styles.container}>
          {
            this.props.buttons.map((row, index) => (
              <View key={index} style={index === 0 ? styles.contRowTop : styles.contRow }>
                { 
                  row.map((col,index) => (
                    <TouchableOpacity style={styles.contRow}
                      key={index}
                      onPress={() => this._handleOnPress(col)}>
                        <View style={styles.contButton}>
                          <Text style={styles.txtDefault}>{col}</Text>
                        </View>
                    </TouchableOpacity>
                  ))
                }
              </View>
            ))
          }
        </View>
    );
    
  }
}