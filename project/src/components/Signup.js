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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Signup = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#145DA0'} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      <View style={styles.textInputWrapper}>
        <View style={styles.inputWrapper}>
          <MaterialIcons
            name="person"
            size={28}
            color="black"
            style={styles.iconStyle}
          />
          <TextInput style={styles.textInput} placeholder="Username" />
        </View>

        <View style={styles.inputWrapper}>
          <Foundation
            name="key"
            size={28}
            color="black"
            style={styles.iconStyle}
          />
          <TextInput style={styles.textInput} placeholder="Password" />
        </View>

        <View style={styles.inputWrapper}>
          <MaterialIcons
            name="smartphone"
            size={28}
            color="black"
            style={styles.iconStyle}
          />
          <TextInput style={styles.textInput} placeholder="Phone" />
        </View>

        <View style={styles.inputWrapper}>
          <MaterialIcons
            name="home"
            size={28}
            color="black"
            style={styles.iconStyle}
          />
          <TextInput style={styles.textInput} placeholder="Address" />
        </View>

        <TouchableOpacity style={styles.buttonWrapper}>
          <Text style={styles.createText}>Create Account</Text>
        </TouchableOpacity>

        <Text style={styles.message}>Already have an Account? Login here</Text>

        <View
          style={{
            marginTop: 20,
            borderBottomColor: 'white',
            borderBottomWidth: 2,
          }}
        />
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'white', marginTop: 15}}>OR</Text>
          <Text style={{color: 'white', marginTop: 15}}>
            Sign in with google
          </Text>
          <FontAwesome
            name="google"
            size={28}
            color="white"
            style={styles.googleIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#145DA0',
  },

  titleWrapper: {
    marginTop: 30,
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    // alignSelf: 'center'
  },

  inputWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    // width: '70%',
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    // marginLeft: 10,
  },

  textInputWrapper: {
    paddingHorizontal: 20,
  },

  iconStyle: {
    padding: 10,
  },

  buttonWrapper: {
    borderRadius: 10,
    backgroundColor: '#478C5C',
    padding: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  createText: {
    color: 'white',
    fontSize: 18,
  },

  message: {
    color: 'white',
    fontSize: 19,
    marginTop: 20,
  },
  googleIcon: {
    marginTop: 15,
  },
});
