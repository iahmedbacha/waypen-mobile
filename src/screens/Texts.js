import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import TextCard from '../components/TextCard';

const dimensions = Dimensions.get('window');
const screenWidth = dimensions.width;

var table = [
    {
      id: 1,
      title: 'Title01',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      title: 'Title02',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      title: 'Title03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 4,
      title: 'Title04',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ]

class Texts extends Component {
  static navigationOptions = {
    title: 'Texts',
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Choose a text to start your test</Text>
          <TextCard title={table[0].title} text={table[0].text}/>
          <TextCard title={table[1].title} text={table[1].text}/>
          <TextCard title={table[2].title} text={table[2].text}/>
          <TextCard title={table[3].title} text={table[3].text}/>
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