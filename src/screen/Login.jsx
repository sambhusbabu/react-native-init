import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ToastAndroid} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {APP_NAME} from '../config';

function Login({navigation}) {
  const showToast = () => {
    ToastAndroid.show('Login is Progress...', ToastAndroid.SHORT);
  };
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View>
        <Text style={styles.sectionTitle}> {APP_NAME}</Text>
        <TextInput
          label="Email"
          mode="outlined"
          style={styles.inputContainer}
        />
        <TextInput
          label="Password"
          secureTextEntry
          mode="outlined"
          style={styles.inputContainer}
        />
        <Button mode="contained" onPress={showToast} style={styles.button}>
          LOGIN
        </Button>
        <Button
          mode="text"
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          Back to Home
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 0,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    alignSelf: 'center',
  },
  inputContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  button: {
    marginTop: 8,
    marginBottom: 8,
  },
});

export default Login;
