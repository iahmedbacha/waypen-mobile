import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Gravatar } from 'react-native-gravatar';
import { withNavigation } from 'react-navigation';



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
        <View style={styles.profileContainer}>
          <TouchableOpacity>
            <Gravatar options={{
              email: 'ibrahimb31@hotmail.fr',
              parameters: { "size": "100", "d": "retro" },
            }}
            style={styles.roundedProfileImage}
          />
          </TouchableOpacity>
          <Text style={styles.profileName}>Ibrahim Ahmed Bacha</Text>
        </View>
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.itemContainer}
           onPress={() => this.props.navigation.navigate('Home')}
          >
            <Feather name="home" size={28} color={mainColor} style={styles.icon}></Feather>
            <Text style={styles.titleItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}
            onPress={() => this.props.navigation.navigate('Test')}
          >
            <Feather name="edit" size={28} color={mainColor} style={styles.icon}></Feather>
            <Text style={styles.titleItem}>Tests</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}
            onPress={() => this.props.navigation.navigate('Texts')}
          >
            <Feather name="file-text" size={28} color={mainColor} style={styles.icon}></Feather>
            <Text style={styles.titleItem}>Texts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}
          >
            <Feather name="award" size={28} color={mainColor} style={styles.icon}></Feather>
            <Text style={styles.titleItem}>Badges</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <TouchableOpacity style={styles.itemContainer}>
            <Feather name="user" size={28} color={mainColor} style={styles.icon}></Feather>
            <Text style={styles.titleItem}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <Feather name="settings" size={28} color={mainColor} style={styles.icon}></Feather>
            <Text style={styles.titleItem}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}
            onPress={() => this.props.navigation.navigate('Auth')}
          >
            <Feather name="log-out" size={28} color={mainColor} style={styles.icon}></Feather>
            <Text style={styles.titleItem}>Log out</Text>
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
  listContainer: {
    marginVertical: 20
  },  
  profileContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30
  },
  profileName: {
    marginTop: 10,
    fontSize: 16, 
    fontWeight: '700',
    color: 'rgba(0,0,0,.6)'
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
  },
  roundedProfileImage: {
    width:80, height:80, borderWidth:3,
    borderColor:'white', borderRadius:50
  }
})

export default withNavigation(DrawerContentComponent);