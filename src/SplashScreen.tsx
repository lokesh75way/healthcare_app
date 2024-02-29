import { Dimensions, Text, View } from 'react-native'
import React, { Component, useEffect } from 'react'
import { Image } from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
  };
const imageUrl = require('../assets/logo/splashscreen.jpg') 

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const SplashScreen: React.FC<{navigation: HomeScreenNavigationProp;}> = ({navigation}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
        
          navigation.replace('Home');
        }, 3000);
        return () => {
          // Clear the timeout if the component is unmounted
          clearTimeout(timeout);
        };
      }, [navigation]);

    return (
        <View 
        style={{flex : 1, backgroundColor : 'white', justifyContent : 'center', alignItems : 'center'}}
        >
      <View >
        <Image source={imageUrl} style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 400,
            height: 400,
        }}/>
      </View>
        </View>
    )
  }


export default SplashScreen;