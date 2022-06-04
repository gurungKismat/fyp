import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';

const ViewDoctor = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#145DA0'} />
      <View style={styles.headerWrapper}>
        <View style={styles.backButton}>
          <Text style={{color: 'white', fontSize: 18}}>Back</Text>
        </View>
        <Fontisto
          name="person"
          size={35}
          color="black"
          style={styles.iconStyle}
        />
      </View>

      <TouchableOpacity style={styles.buttonViewPatient}>
        <Text style={{color: 'white', fontSize: 18}}>View Doctor</Text>
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <Text style={{color: 'white', fontSize: 18}}>Name : Harsh Kc</Text>
        <View
          style={{
            marginVertical: 10,
            borderBottomColor: 'white',
            borderBottomWidth: 2,
          }}
        />
        <Text style={{color: 'white', fontSize: 18}}>Address : Balkumari</Text>
        <View
          style={{
            marginVertical: 10,
            borderBottomColor: 'white',
            borderBottomWidth: 2,
          }}
        />
        <Text style={{color: 'white', fontSize: 18}}>
          Contact No : 12312324
        </Text>
        <View
          style={{
            marginVertical: 10,
            borderBottomColor: 'white',
            borderBottomWidth: 2,
          }}
        />
        <Text style={{color: 'white', fontSize: 18}}>
          Specialization : Bone
        </Text>
        <View
          style={{
            marginVertical: 10,
            borderBottomColor: 'white',
            borderBottomWidth: 2,
          }}
        />
        <Text style={{color: 'white', fontSize: 18}}>
          Appointment Date : 2nd July 2022
        </Text>
        <View
          style={{
            marginVertical: 10,
            borderBottomColor: 'white',
            borderBottomWidth: 2,
          }}
        />
        <Text style={{color: 'white', fontSize: 18}}>
          Appointment Time : 1 pm - 2pm
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },

  headerWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    backgroundColor: '#145DA0',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },

  buttonViewPatient: {
    marginTop: 100,
    backgroundColor: '#145DA0',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 25,
    maxWidth: 150,
  },

  bottomContainer: {
    marginTop: 50,
    backgroundColor: '#145DA0',
    borderRadius: 20,
    elevation: 10,
    padding: 15,
  },
});

export default ViewDoctor;
