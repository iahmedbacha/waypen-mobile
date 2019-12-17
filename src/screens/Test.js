import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({data: navigation.getParam('data')});

    if (!this.data) {
      this.setState({ isLoaded: true });
    }
  }

  render() {
    if (!this.state.isLoaded) {
      return null;
    }
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
