import React, { Component } from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  render() {
    return (
      <View styles={styles.test}>
        <Text>Test Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Test;
