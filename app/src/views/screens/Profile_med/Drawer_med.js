import React from 'react';
import {
  createDrawerNavigator,
  useDrawerProgress,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus,
} from '@react-navigation/drawer';
import {View, Image, Text, StatusBar} from 'react-native';
import  Animated ,{interpolate,useSharedValue} from 'react-native-reanimated';
import Profile_med from './Profile_med';
import COLORS from './colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Alerte from './Alerte';

const Drawer = createDrawerNavigator();

const DrawerScreenContainer = ({children}) => {
  const isDrawerOpen = useDrawerStatus();

  return (
    <Animated.View
      style={{
        flex: 1,
      
        backgroundColor: COLORS.white,
        overflow: 'hidden',
      }}>
      <StatusBar
        backgroundColor={isDrawerOpen == 'open' ? COLORS.primary : COLORS.white}
        barStyle="dark-content"
      />
      {children}
    </Animated.View>
  );
};

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView
      style={{
        paddingVertical: 30,
      }}>
      <View
        style={{
          marginLeft : 20,
          marginVertical: 40,
        }}>
      <Image
          source={require('../../../assests/logo.png')}
          style={{height : 70, width : 70, borderRadius: 20}}
        />
        <Text
          style={{
            color: COLORS.white,
            fontWeight: 'bold',
            fontSize: 13,
            marginTop : 10,
          }}>
          JANE GARY
        </Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
const Drawer_med = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          width : '65%',
          backgroundColor: COLORS.primary,
        },
        overlayColor: null,
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.secondary,
        drawerItemStyle: {backgroundColor: null},
        sceneContainerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
   
     <Drawer.Screen
        name="PROFILE"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="home-outline" size={25} style={{marginRight : -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <Profile_med {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="PATIENTS"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="list-circle" size={25} style={{marginRight : -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <Profile_med {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="ALERTES"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="notifications" size={25} style={{marginRight : -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <Alerte {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
    
  );
};

export default Drawer_med;