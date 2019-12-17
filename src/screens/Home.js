import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
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

import Texts from './Texts';


const mainColor = '#8bc34a';

const dataRing = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [, ,0.8]
};

const dataChart = {
  labels: ["a", "t", "m", "g", "y"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99]
    }
  ]
};

const commitsData = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 }
];

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

class Home extends Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      headerTitle: <Text style={{fontSize: 20, fontWeight: '400', marginLeft: 10}}></Text>,
      headerLeft: (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress = {navigation.toggleDrawer}
        >
          <View >
            <Image
              resizeMode="contain"
              source={require('../assets/menu.png')}
              style={{ width: 20, height: 24 }}
            />
            <View
              style={{
                width: 8, height: 8,
                backgroundColor: 'red',
                borderRadius: 4,
                position: 'absolute', top: 0, left: 12
              }}
            >
            </View>
          </View>
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity 
          style={{
            marginRight: 20,
          }}
        >
          <Image source={require('../assets/profile.png')}/>
        </TouchableOpacity>
      )
    }
    
  }

  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    };
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

  renderHome() {
    return(
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.title}> Overall score</Text>
          <View style={styles.chartHolder}>
            <ProgressChart
              data={dataRing}
              width={imageWidth-40}
              height={220}
              chartConfig={chartConfig}
              hideLegend={true}
              style={{position: 'relative', left: 40}}
            />
            <Text style={styles.overallScore}>79%</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}> Characters with best precision</Text>
          <View style={styles.chartHolder}>
            <BarChart data={dataChart} width={imageWidth-40} height={220}
              yAxisLabel={'%'} chartConfig={chartConfig} verticalLabelRotation={30}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}> Characters with worst precision</Text>
          <View style={styles.chartHolder}>
            <BarChart data={dataChart} width={imageWidth-40} height={220}
              yAxisLabel={'%'} chartConfig={chartConfig} verticalLabelRotation={30}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}> Characters Heatmap</Text>
          <View style={styles.chartHolder}>
            <ContributionGraph values={commitsData} endDate={new Date('2017-04-01')}
              numDays={105} width={imageWidth-40} height={220} chartConfig={chartConfig} 
            />
          </View>
        </View>
        <View style={styles.section}>
          <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.navigate('Editor')}
          >
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '700'}}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.page == 'home' ? this.renderHome() : null}
        {this.state.page == 'texts' ? <Texts/> : null}
        {this.renderAppBarBttom()}
      </View>
    );
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
})

export default Home;