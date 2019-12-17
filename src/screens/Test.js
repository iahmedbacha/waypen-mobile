import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Button } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { Gravatar } from 'react-native-gravatar';

import { API_URL } from 'react-native-dotenv';
import * as SecureStore from 'expo-secure-store';

const mainColor = '#8bc34a';

const dataRing = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [, ,0.8]
};

const chartConfig = {
  backgroundGradientFrom: "rgba(0,0,0,0)",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "rgba(0, 0, 0, 0)",
  backgroundGradientToOpacity: 0.0,
  color: (opacity = 1) => `rgba(139, 195, 74, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
};

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      recieved: false,
      bestCharacters: null,
      worstCharacters: null
    };
    this.getTestResults();
  }

  getTestResults = async () => {
    var body = '{"handwriting":' + this.props.navigation.getParam('data') + ',"textId":"' + this.props.navigation.getParam('text').id + '"}';
    alert(API_URL);
    console.log(body);
    return fetch((API_URL+'/tests'), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + JSON.parse(await SecureStore.getItemAsync('user')).accessToken
      },
      body: body
    })
    .then(response => response.json())
    .then(responseJson => {
      const result = JSON.parse(JSON.stringify(responseJson)).result;
      var bestCharacters = {
        labels: [],
        datasets: [{
          data: []
        }]
      };
      var worstCharacters = {
        labels: [],
        datasets: [{
          data: []
        }]
      };
      console.log(result);
      console.log(result.recognitionAnalysis);
      for(let i = 0; i < Math.min(5, result.recognitionAnalysis.analysis.length); i++) {
        bestCharacters.labels.push(result.recognitionAnalysis.analysis[result.recognitionAnalysis.analysis.length - 1 - i].character);
        bestCharacters.datasets[0].data.push(result.recognitionAnalysis.analysis[result.recognitionAnalysis.analysis.length - 1 - i].accuracy*100);
        worstCharacters.labels.push(result.recognitionAnalysis.analysis[i].character);
        worstCharacters.datasets[0].data.push(result.recognitionAnalysis.analysis[i].accuracy*100);
      }
      this.setState({
        result: result,
        recieved: true,
        bestCharacters: bestCharacters,
        worstCharacters: worstCharacters
      });
    })
    .catch(error => {
      console.error(error);
    });
  }

  renderAppBarBttom() {
    return(
      <View style={styles.appBarBottom}>
        <Image resizeMode={'cover'} style={{width: imageWidth, height: 90}} source={require('../assets/appBar.png')}/>
        <View style={{
          width: '100%', 
          height: '60%', 
          position: 'absolute',
          flexDirection: 'row',
          bottom: 3}}>
            <View style={styles.iconContainer}  >
              <Button style={{width: '100%'}} mode="text"
                onPress={() => this.setState(previousState => ({page: 'home'}))}
              >
                <Feather name="home" size={28} color={mainColor} />
              </Button> 
            </View>
            <View style={styles.iconContainer}>
              <Button style={{width: '100%'}} mode="text" 
                onPress={() => this.setState(previousState => ({page: 'texts'}))}
              >
                <Feather name="file-text" size={28} color={mainColor}/>
              </Button> 
            </View>
            <View style={[styles.iconContainer, {flex: 1.5}]}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Texts')}
                style={styles.FAB}
              >
                <Image style={{width: 36, height: 36}} source={require('../assets/QRCode.png')}/>
              </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
              <Button style={{width: '100%'}} mode="text" 
                onPress={() => this.setState(previousState => ({page: 'award'}))}
              >
                <Feather name="award" size={28} color={mainColor}/>
              </Button> 
            </View>
            <View style={styles.iconContainer}>
              <Button style={{width: '100%'}} mode="text" 
                onPress={() => this.setState(previousState => ({page: 'settings'}))}
              >
                <Feather name="settings" size={28} color={mainColor}/>
              </Button> 
            </View>
        </View>
        
      </View>
    )
  }

  render() {
    if (!this.state.recieved) {
      return null;
    }
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.section}>
            <Text style={styles.title}> Test score</Text>
            <View style={styles.chartHolder}>
              <ProgressChart
                data={dataRing}
                width={imageWidth-40}
                height={220}
                chartConfig={chartConfig}
                hideLegend={true}
                style={{position: 'relative', left: 40}}
              />
              <Text style={styles.overallScore}>{Math.floor(this.state.result.score*100)}%</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}> Characters with best precision</Text>
            <View style={styles.chartHolder}>
              <BarChart fromZero={true} data={this.state.bestCharacters} width={imageWidth-40} height={220}
                yAxisLabel={'%'} chartConfig={chartConfig} verticalLabelRotation={30}
              />
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}> Characters with worst precision</Text>
            <View style={styles.chartHolder}>
              <BarChart fromZero={true} data={this.state.worstCharacters} width={imageWidth-40} height={220}
                yAxisLabel={'%'} chartConfig={chartConfig} verticalLabelRotation={30}
              />
            </View>
          </View>
        </ScrollView>
        {this.renderAppBarBttom()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  scrollContainer: {
    paddingTop: 30,
    paddingBottom: 80,
    width: imageWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    width: '100%',
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  chartHolder: {
    backgroundColor: 'rgba(139, 195, 74,.05)',
    position: 'relative'
  },
  overallScore: {
    position: 'absolute',
    alignSelf: 'center',
    top: '42%',
    fontSize: 24,
    fontWeight: '700',
    color: '#8bc34a'
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    color: 'rgba(0,0,0,.4)'
  },
  button: {
    width: '60%',
    height: 48,
    backgroundColor: '#8bc34a',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appBarBottom: {
    position: 'absolute',
    bottom: -5,
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
  },
  iconContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },  
  FAB: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: '#8bc34a',
    position: 'relative',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundedProfileImage: {
    width:50, height:50, borderWidth:3,
    borderColor:'white', borderRadius:50
  }
})

export default Test;
