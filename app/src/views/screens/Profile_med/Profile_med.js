import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import COLORS from './colors';

import Icon from 'react-native-vector-icons/Ionicons';
import items from './items';
const {height} = Dimensions.get('window');
const Categories = [
  {name: 'PROFILE', icon: 'home-outline'},
  {name: 'PATIENTS', icon: 'list-circle'},
  {name: 'ALERTES', icon: 'notifications'},
 /* {name: '00000', icon: 'list-circle'},*/
];

const Card = ({categorie, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Details_med', categorie)}>
      <View style={style.cardContainer}>
        {/* Render the card image */}
        <View style={style.cardImageContainer}>
          <Image
            source={categorie.image}
            style={{
              width : '100%',
              height : '100%',
              resizeMode: 'contain',
            }}
          />
        </View>

        {/* Render all the card details here */}
        <View style={style.cardDetailsContainer}>
          {/* Name and gender icon */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontWeight: 'bold', color: COLORS.dark, fontSize: 20}}>
              {categorie?.name}
            </Text>
            <Icon name="gender-male" size={22} color={COLORS.grey} />
          </View>

          {/* Render the age and type */}
          <Text style={{fontSize: 12, marginTop : 5, color: COLORS.dark}}>
            {categorie?.type}
          </Text>
          <Text style={{fontSize: 10, marginTop : 5, color: COLORS.grey}}>
            {categorie?.age}
          </Text>

          {/* Render distance and the icon */}
          <View style={{marginTop : 5, flexDirection: 'row'}}>
            <Icon name="map-marker" color={COLORS.primary} size={18} />
            <Text style={{fontSize: 12, color: COLORS.grey, marginLeft : 5}}>
              Distance:7.8km
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Profile_med = ({navigation}) => {
  const [selectedCategoryIndex, setSeletedCategoryIndex] = React.useState(0);
  const [filteredcategories, setFilteredcategories] = React.useState([]);

  const flitercategorie = index => {
    const currentcategories = Categories.filter(
      item => item?.categorie?.toUpperCase() == Categories[index].name,
    )[0]?.Categories;
    setFilteredcategories(currentcategories);
  };

  React.useEffect(() => {
    flitercategorie(0);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, color: COLORS.white}}>
      <View style={style.header}>
        <Icon name="menu-outline" size={28} onPress={navigation.toggleDrawer} />
        <Text style={{color: COLORS.primary, fontWeight: 'bold', fontSize: 16}}>
          Médecine Name
        </Text>
        
      </View>
      <View>
        <View style={style.mainContainer}>
          {/* Render the search inputs and icons */}
          <View style={style.searchInputContainer}>
            <Icon name="search" size={24} color={COLORS.grey} />
            <TextInput
              placeholderTextColor={COLORS.grey}
              placeholder="Search patient"
              style={{flex: 1}}
            />
            <Icon name="arrow-down-circle" size={24} color={COLORS.grey} />
          </View>

          {/* Render all the categories */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop : 20,
            }}>
            {Categories.map((item, index) => (
              <View key={'categorie' + index} style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    setSeletedCategoryIndex(index);
                    flitercategorie(index);
                  }}
                  style={[
                    style.categoryBtn,
                    {
                      backgroundColor:
                        selectedCategoryIndex == index
                          ? COLORS.primary
                          : COLORS.white,
                    },
                  ]}>
                  <Icon
                    name={item.icon}
                    size={30}
                    color={
                      selectedCategoryIndex == index
                        ? COLORS.white
                        : COLORS.primary
                    }
                  />
                </TouchableOpacity>
                <Text style={style.categoryBtnName}>{item.name}</Text>
              </View>
            ))}
          </View>

          {/* Render the cards with flatlist */}
          <View style={{marginTop : 20}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filteredcategories}
              renderItem={({item}) => (
                <Card categorie={item} navigation={navigation} />
              )}
            />
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop : 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    minHeight : height,
  },
  searchInputContainer: {
    height : 50,
    width :'100%',
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryBtn: {
    height : 50,
    width : 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  categoryBtnName: {
    color: COLORS.dark,
    fontSize: 10,
    marginTop : 5,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom : 20,
  },
  cardDetailsContainer: {
    height : 120,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height : 150,
    width : 140,
    backgroundColor: COLORS.background,
    borderRadius: 20,
  },
});
export default Profile_med;