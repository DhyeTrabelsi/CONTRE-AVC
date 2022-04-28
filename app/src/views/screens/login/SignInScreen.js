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

export default function SignInScreen ({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      <View style={styles.smallCircle}>
      </View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
                <Image  style={styles.image} source={require('../../../assests/logoappblanc.png')}/> 
            </View>
            <View style={styles.inputBox}>
            
              <TextInput
                style={styles.input}
                keyboardType='email-address'
                textContentType='emailAddress'
                placeholder="Nom d'utilisateur"
              />
            </View>
            <View style={styles.inputBox}>
              
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                textContentType='password'
                placeholder='Mot de passe'
              />
            </View>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('SearchScreen1')} >
                  <Text style={styles.loginButtonText}>Connexion</Text>
                </TouchableOpacity>
              <View >
                  <TouchableOpacity>
                   <Text style={styles.text}><Text style={styles.blod}>Pas encore de compte ?</Text>  vous êtes intéressé, contacter rapidement notre service administratif <Text style={styles.blod}>DHCsys</Text> </Text>
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
    backgroundColor : '#ffffff',
  },
 
  smallCircle: {
    width : Dimensions.get('window').height * 0.4,
    height : Dimensions.get('window').height * 0.4,
    backgroundColor: '#a8aeb8',
    borderRadius: 2000,
    position: 'absolute',
    bottom : Dimensions.get('window').width * -0.6,
    right : Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width : '100%',
    top : '25%',
  },
  authBox: {
    width : '90%',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom  : 30,
   
  },
  logoBox: {
    width : 100,
    height : 100,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top : -60,
    marginBottom : -50,
   
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop : 10,
  },
  image: {
    width : '100%',
    height : '100%',
  
    resizeMode: 'stretch',

  },
  
  inputBox: {
    marginTop : 30,
  },
  text: {
    fontSize : 17,
    letterSpacing :2,
    textAlign : 'center',
    bottom : -50, 

  },
  blod: {
    fontWeight: 'bold'

  },
  input: {
    width : '100%',
    height : 45,
    backgroundColor: '#DDDDDA',
    borderRadius: 10,
    paddingHorizontal: 10,
    opacity:0.5,
    borderWidth : 0.5,
    borderColor:'#001110'
  },
  loginButton: {
    backgroundColor: '#495d7d',
    marginTop : 50,
    paddingVertical: 10,
    borderRadius: 40,
    marginHorizontal:70
  },
  loginButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

});
