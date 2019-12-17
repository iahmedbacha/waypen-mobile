import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class Loading extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const user = JSON.parse(await SecureStore.getItemAsync('user'));
    const accessToken = user && user.accessToken ? user.accessToken : null;

    // This will switch to the Main screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(accessToken ? 'Home' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default Loading;
