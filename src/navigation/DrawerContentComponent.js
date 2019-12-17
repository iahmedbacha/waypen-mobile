import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const mainColor = '#8bc34a';

class DrawerContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          
        </View>
        <View>
          <TouchableOpacity style={styles.itemContainer}>
            <Feather name="home" size={28} color={mainColor} style={styles.icon}></Feather>
            <Text style={styles.titleItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <Feather name="edit" size={28} color={mainColor} style={styles.icon}></Feather>
            <Text style={styles.titleItem}>Tests</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <Feather name="file-text" size={28} color={mainColor} style={styles.icon}></Feather>
            <Text style={styles.titleItem}>Texts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <Feather name="award" size={28} color={mainColor} style={styles.icon}></Feather>
            <Text style={styles.titleItem}>Badges</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    paddingTop: 40,
    paddingHorizontal: 30
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15
  },
  icon: {
    marginRight: 20
  },
  titleItem: {
    fontSize: 16,
    fontWeight: '600'
  }
})

export default DrawerContentComponent;