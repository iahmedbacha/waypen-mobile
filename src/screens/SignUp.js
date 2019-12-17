import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { API_URL } from 'react-native-dotenv';
import * as SecureStore from 'expo-secure-store';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null
    };
  }

  signup = () => {
    console.log(API_URL);
    return fetch((API_URL+'/auth/signup'), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: this.state.fullName,
        email: this.state.email,
        password: this.state.password,
      }),
    })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      this.props.navigation.navigate('Loading');
    })
    .catch(error => {
      console.error(error);
    });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
          <View>
            <Image 
            style={{width: 250, height: 202, alignSelf: 'center', marginBottom: 40, marginTop: 60}}
            source={require('../assets/illustration.png')}/>
          </View>
          <View style={styles.textInputHolder}>
            <Text
              style={{alignSelf: 'center', fontSize: 20, fontWeight: '700', color: 'rgba(0,0,0,.5)'}}
            >Hello!</Text>
            <TextInput
              label='Full name'
              value={this.state.fullName}
              onChangeText={fullName => this.setState({ fullName })}
              style={{marginTop: 10}}
            />
            <TextInput
              label='Email'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={{marginTop: 10}}
            />
            <TextInput
              label='Password'
              secureTextEntry={true}
              textContentType='password'
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              style={{marginTop: 10}}
            />
            <TouchableOpacity
              onPress={() => this.signup()}
              style={{width: '100%', 
                backgroundColor: '#8bc34a', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: 48,
                borderRadius: 10,
                marginTop: 20
              }}>
              <Text
                style={{fontSize: 16, fontWeight: '700', color: '#fff'}}
              >SIGN UP</Text>
            </TouchableOpacity>
            <View style={{width: '100%',
                alignItems: 'center',
                justifyContent: 'center', 
                height: 48,
                borderRadius: 10,
                marginTop: 10
              }}>
              <Text onPress={() => navigation.navigate('SignIn')}>
                Already have an account? Sign in
              </Text>
            </View>     
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    paddingHorizontal: 10
  },
  textInputHolder: { 
    width: '80%',
    alignSelf: 'center'
  }
})

export default SignUp;