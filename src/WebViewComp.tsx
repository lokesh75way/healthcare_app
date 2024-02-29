import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {WebView} from 'react-native-webview';


const WebViewComp = () => {

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
            style={{position: 'absolute', height: '100%', width: '100%'}}
            color="rgb(16, 185, 129)"
            size="large"
          />
        )}
        source={{uri: 'https://healthcare.patient.75way.com/'}}
      />
    </SafeAreaView>
  );
};


export default WebViewComp;