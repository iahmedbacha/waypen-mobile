import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


class TextCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.text}>{this.props.text}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: '#fff', fontWeight: '700'}}>See more</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    height: 180,
    width: '90%',
    padding: 20,
    backgroundColor: '#fefefe',
    borderRadius: 10,
    elevation: 4,
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(0,0,0,.6)'
  },
  text: {
    fontSize: 16,
    color: 'rgba(0,0,0,.6)'
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#8bc34a',
    width: 85,
    marginTop: 15,
    borderRadius: 4,
  }
})


export default TextCard;