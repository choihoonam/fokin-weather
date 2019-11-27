import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "eb814cf63d8e5e9c578b67ebd5581407";


export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude,longitude) => {
    const { data: { main: { temp }, weather } } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );  
    console.log({ data: { main: { temp }, weather } });
    
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    }); 
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
    } catch (error) {
      console.log(error);
      
      Alert.alert("Can't find you"); 
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, condition, temp } = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
