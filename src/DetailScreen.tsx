// DetailScreen.tsx
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


type RootStackParamList = {
  Home: undefined;
  Detail: { name: string; url: string }; // Add url to the Detail route
};

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;

interface DetailScreenProps {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
}

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const { name, url } = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F2F6F6'}}>
      <WebView
        bounces={false}
        startInLoadingState
        automaticallyAdjustContentInsets
        isMultipleTouchEnabled={false}
        hideKeyboardAccessoryView={true}
        
        renderLoading={() => (
          <ActivityIndicator
            style={{position: 'absolute', height: '100%', width: '100%', backgroundColor : '#F2F6F6'}}
            color="#0E82FD"
            size="large"
          />
        )}
        source={{uri: url}}
      />
    </SafeAreaView>
  );
};

export default DetailScreen;
