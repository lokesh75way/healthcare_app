import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Detail: {name: string; url: string};
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<{
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}> = ({navigation}) => {
  const subjects = [
    {
      id: 1,
      name: 'Patient',
      imageUrl: require('../assets/icon/patient.png'),
      url: 'https://healthcare.patient.75way.com',
    },
    {
      id: 2,
      name: 'Doctor',
      imageUrl: require('../assets/icon/doctor.png'),
      url: 'https://healthcare.doctor.75way.com',
    },
    {
      id: 3,
      name: 'Pharmacy',
      imageUrl: require('../assets/icon/pharmacy.png'),
      url: 'https://healthcare.pharmacy.75way.com/',
    },
    {
      id: 4,
      name: 'Telemedicine',
      imageUrl: require('../assets/icon/telemedicine.png'),
      url: 'https://healthcare.telemedicine.75way.com/',
    },
    {
      id: 5,
      name: 'Admin',
      imageUrl: require('../assets/icon/admin.png'),
      url: 'https://healthcare.admin.75way.com/',
    },
  ];

  const navigateToDetail = (name: string, url: string) => {
    navigation.navigate('Detail', {name, url});
  };

  const cardGap = 16;
  const cardWidth = (Dimensions.get('window').width - cardGap * 6) / 2;

  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: '#F2F6F6'}}>
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
            <Text style={styles.heading}>Login As</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', paddingBottom: 16 }}>
              {subjects.map((subject, i) => (
                <TouchableOpacity
                  key={subject.id}
                  style={{
                    marginBottom: cardGap,
                    marginLeft: i % 2 !== 0 ? cardGap : 6,
                    width: cardWidth,
                    height: 150,
                    ...styles.card,
                  }}
                  onPress={() => navigateToDetail(subject.name, subject.url)}>
                  <Image
                    source={subject.imageUrl}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 60,
                      height: 60,
                    }}
                  />
                  <Text style={styles.cardText}>{subject.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
    );
    
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor : 'red',
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: '500',
    color: 'rgb(14, 130, 253)',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000', // for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // for Android
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 8,
  },
  cardText: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgb(14, 130, 253)',
  },
});

export default HomeScreen;
