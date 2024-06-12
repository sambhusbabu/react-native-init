import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

// import {useLayoutEffect} from 'react';

function Home({navigation}) {
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: 'Home Page',
  //   });
  // }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}> Hello World - Home</Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('About')}
            style={styles.button}>
            About
          </Button>
          <Button mode="contained" onPress={() => navigation.navigate('Login')}>
            Login
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
  },
});

export default Home;
