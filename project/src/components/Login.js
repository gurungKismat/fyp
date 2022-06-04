import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';

const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#145DA0'} />
      <Text style={styles.loginText}>Log in</Text>
      <View style={styles.inputWrapper}>
        <MaterialIcons
          name="person"
          size={28}
          color="black"
          style={styles.personIcon}
        />
        <TextInput style={styles.textInput} placeholder="email" />
      </View>
      <View style={styles.inputWrapper}>
        <Foundation
          name="key"
          size={28}
          color="black"
          style={styles.personIcon}
        />
        <TextInput style={styles.textInput} placeholder="password" />
      </View>

      <TouchableOpacity style={styles.buttonWrapper}>
        <Text style={styles.loginTxt}>Login</Text>
      </TouchableOpacity>

      <View style={styles.bottomItemWrapper}>
        <Text style={styles.bottomText}>Forget password?</Text>
        <Text style={styles.bottomText}>Register</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#145DA0',
  },

  centerWrapper: {},

  loginText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },

  inputWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '70%',
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    // marginLeft: 10,
  },

  buttonWrapper: {
    borderRadius: 10,
    width: '70%',
    backgroundColor: '#478C5C',
    padding: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  loginTxt: {
    color: 'white',
    fontSize: 18,
  },

  bottomItemWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    // alignItems: 'center'
  },

  bottomText: {
    color: 'white',
    fontSize: 16,
  },

  personIcon: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
});
