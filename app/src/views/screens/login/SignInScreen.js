import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,StyleSheet,Dimensions,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements';
export default function SignInScreen ({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
                <Image  style={styles.image} source={require('../../../assests/logo.png')}/> 
            </View>
            <Text style={styles.loginTitleText}>Login</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType='email-address'
                textContentType='emailAddress'
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                textContentType='password'
              />
            </View>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Med')} >
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
              <View >
                  <TouchableOpacity style={{flexDirection: "row",flexWrap: "wrap",marginTop : 20 , justifyContent: 'space-between',marginLeft : 60,marginRight : 60}}>
                    <Icon name='google' type='font-awesome' color='#781E7C' />
                
                    <Icon name='facebook' type='font-awesome' color='#781E7C' />
                  
                    <Icon name='linkedin' type='font-awesome' color='#781E7C'     onPress={() => console.log('hello')}/>
                  </TouchableOpacity>
              </View>
           </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bigCircle: {
    width : Dimensions.get('window').height * 0.7,
    height : Dimensions.get('window').height * 0.7,
    backgroundColor: '#ddddda',
    borderRadius: 1000,
    position: 'absolute',
    right : Dimensions.get('window').width * 0.25,
    top : -50,
  },
  smallCircle: {
    width : Dimensions.get('window').height * 0.4,
    height : Dimensions.get('window').height * 0.4,
    backgroundColor: '#ddddda',
    borderRadius: 1000,
    position: 'absolute',
    bottom : Dimensions.get('window').width * -0.2,
    right : Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width : '100%',
    top : '22%',
  },
  authBox: {
    width : '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom  : 30,
    shadowColor: '#000',
    shadowOffset: {
      width : 0,
      height : 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width : 100,
    height : 100,
    backgroundColor: '#94b0b7',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top : -50,
    marginBottom : -50,
    shadowColor: '#000',
    shadowOffset: {
      width : 0,
      height : 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop : 10,
  },
  image: {
    width : 70,
    height : 35,
    resizeMode: 'stretch',

  },
  hr: {
    width : '100%',
    height : 0.5,
    backgroundColor: '#444',
    marginTop : 6,
  },
  inputBox: {
    marginTop : 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom : 6,
  },
  input: {
    width : '100%',
    height : 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#c2cbc5',
    marginTop : 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop : 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop : 12,
    fontSize: 16,
  },
});
