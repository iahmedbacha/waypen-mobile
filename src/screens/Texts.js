import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { API_URL } from 'react-native-dotenv';
import * as SecureStore from 'expo-secure-store';

import TextCard from '../components/TextCard';

const dimensions = Dimensions.get('window');
const screenWidth = dimensions.width;

class Texts extends Component {
  static navigationOptions = {
    title: 'Texts',
  };

  constructor(props) {
    super(props);
    this.state = {
      texts: [],
      recieved: false
    };
    this.getTexts();
  }

  getTexts = async () => {
    return fetch((API_URL+'/texts'), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + JSON.parse(await SecureStore.getItemAsync('user')).accessToken
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson.result);
      this.setState({
        texts: responseJson.result,
        recieved: true
      });
    })
    .catch(error => {
      console.error(error);
    });
  }

  performTest = (text) => {
    this.props.navigation.navigate('Editor', {
      text: text
    });
  }

  render() {
    if (!this.state.recieved){
      return null;
    }

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Choose a text to start your test</Text>
          {this.state.texts.map(text => {
            return (<TextCard key={text.id} title={text.designation} text={text.content} onPress={() => this.performTest(text)}/>);
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  scrollContainer: {
    paddingTop: 30,
    paddingBottom: 80,
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'flex-start', 
    marginHorizontal: 20,
    fontSize: 20, 
    marginBottom: 10,
    fontWeight: '700',
    color: 'rgba(0,0,0,.5)'
  }
})

export default Texts;