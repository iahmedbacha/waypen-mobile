import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
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
          >Sign In</Text>
          <TextInput
            label='Email'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
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
            onPress={() => this.props.navigation.navigate('MainNavigation')}
            style={{width: '100%', 
            backgroundColor: '#8bc34a', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: 48,
            borderRadius: 10,
            marginTop: 20
          }}
          >
            <Text
              style={{fontSize: 16, fontWeight: '700', color: '#fff'}}
            >LOGIN</Text>
          </TouchableOpacity>
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

export default SignIn;