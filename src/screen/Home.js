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
          <Button mode="contained" onPress={() => navigation.navigate('About')}>
            About
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
});

export default Home;
