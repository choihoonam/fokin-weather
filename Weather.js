import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const wetherOptions = {
  Thunderstorm: {
    iconName: "ios-thunderstorm",
    gradient: ['#4c669f', '#3b5998', '#192f6a'],
    title: "Thunderstorm",
    subtitle: "Thunderstorm"
  },
  Drizzle: {
    iconName: "cloud-drizzle",
    gradient: ['#734b6d', '#42275a'],
    title: "Drizzle",
    subtitle: "Drizzle"
  },
  Rain: {
    iconName: "ios-rainy",
    gradient: ['#734b6d', '#42275a'],
    title: "Rain",
    subtitle: "Rain"
  },
  Snow: {
    iconName: "ios-snow",
    gradient: ['#734b6d', '#42275a'],
    title: "Snow",
    subtitle: "Snow"
  },
  Clear: {
    iconName: "ios-sunny",
    gradient: ['#734b6d', '#42275a'],
    title: "Clear",
    subtitle: "Clear"
  },
  Clouds: {
    iconName: "ios-cloud",
    gradient: ['#734b6d', '#42275a'],
    title: "Clouds",
    subtitle: "Clouds"
  },
  Mist: {
    iconName: "ios-cloud",
    gradient: ['#734b6d', '#42275a'],
    title: "Mist",
    subtitle: "Mist"
  },
  Smoke: {
    iconName: "ios-cloud",
    gradient: ['#734b6d', '#42275a'],
    title: "Smoke",
    subtitle: "Smoke"
  },
  Haze: {
    iconName: "ios-cloud",
    gradient: ['#734b6d', '#42275a'],
    title: "Haze",
    subtitle: "Haze"
  },
  Dust: {
    iconName: "ios-cloud",
    gradient: ['#734b6d', '#42275a'],
    title: "Dust",
    subtitle: "Dust"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ['#734b6d', '#42275a'],
    title: "Fog",
    subtitle: "Fog"
  },
  Sand: {
    iconName: "weather-hail",
    gradient: ['#734b6d', '#42275a'],
    title: "Sand",
    subtitle: "Sand"
  },
  Dust: {
    iconName: "ios-cloud",
    gradient: ['#734b6d', '#42275a'],
    title: "Dust",
    subtitle: "Dust"
  },
  Ash: {
    iconName: "ios-cloud",
    gradient: ['#734b6d', '#42275a'],
    title: "Ash",
    subtitle: "Ash"
  },
  Squall: {
    iconName: "weather-hurricane",
    gradient: ['#734b6d', '#42275a'],
    title: "Squall",
    subtitle: "Squall"
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradient: ['#734b6d', '#42275a'],
    title: "Tornado",
    subtitle: "Tornado"
  },
}

export default function Weather({ temp, condition }){
  return (
    <LinearGradient
      colors={wetherOptions[condition].gradient}
      style={styles.container}>       
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <Ionicons size={100} name={wetherOptions[condition].iconName} color="white"></Ionicons>
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{wetherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{wetherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  halfContainer: {    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    color: 'white',
    fontSize: 40
  },
  title: {
    marginBottom: 15,
    color: 'white',
    fontSize: 44,
    fontWeight: '300'
  },
  subtitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start'
  }
});