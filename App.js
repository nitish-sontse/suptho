import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import NearbyEventList from './src/components/NearbyEventList';
import ProfileModalScreen from './src/components/profileModal';
import BubblesWithImage from './src/components/BubblesWithImages';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <NearbyEventList /> */}
      {/* <ProfileModalScreen /> */}
      <BubblesWithImage />
      <StatusBar barStyle={'dark-content'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});

export default App;
