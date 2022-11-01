import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen() {
  return(
    <SafeAreaView style={styles.homeContainer}>
        <View style={styles.quoteContainer}>
            <Text style={styles.quote}>
                Quote from celebrity
            </Text>
        </View>
        <View style={styles.expContainer}>
        <Image style={styles.image} source={require('./testingImage.png')}/>
            <Text style={styles.expText}>
                Exp:
            </Text>
            <Progress.Bar 
                progress={0.1} 
                width={350} 
                height={10}/>
        </View>
        <View style={styles.sumContainer}>
            <Text style={styles.expText}>
                Summary:
            </Text>
        </View>
    </SafeAreaView>
);
}

function HabitScreen() {
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>
            Habits
        </Text>
    </View>
);
}

function TaskScreen() {
  return(
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
          <View style={styles.tasks}>
            <BouncyCheckbox 
              text='Task1'
            />
          </View>
          <View style={styles.tasks}>
            <BouncyCheckbox 
              text='Task2'
            />
          </View>
          <View style={styles.tasks}>
            <BouncyCheckbox 
              text='Task3'
            />
          </View>
        </View>
    </View>
);
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route})=> ({
          tabBarIcon:({focused, color, size})=> {

              let iconName;
              // navigation bar images
              if(route.name == 'Home'){
                  iconName = focused ? 'home' : 'home-outline'
              }
              else if(route.name == 'Habit'){
                  iconName = focused ? 'heart' : 'heart-outline'
              }
              else if(route.name == 'Task'){
                  iconName = focused ? 'list' : 'list-outline'
              }
              
              return <Ionicons name={iconName} size={size} color={color}/>
          }
        })}>
        <Tab.Screen name="Home" component={HomeScreen}/> 
        <Tab.Screen name="Habit" component={HabitScreen}/>
        <Tab.Screen name="Task" component={TaskScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeContainer:{
      flex:1, 
      alignItems:'center',
      padding:10
  },
  quoteContainer:{
      width:'90%',
      backgroundColor:'#fff',
      borderRadius:15,
      padding:10,
      alignItems:'center',
  },
  quote:{
      fontSize:15,
      fontWeight:'bold',
  },
  expContainer:{
      position:'absolute',
      bottom:100,
      left:20,
  },
  expText:{
      fontSize:20
  },
  sumContainer:{
      position:'absolute',
      bottom:50,
  },
  container:{
    flex:1,
  },
  taskWrapper:{
    paddingTop:10,
    paddingHorizontal:10,
  },
  tasks:{
    backgroundColor:'#fff',
    padding:20,
    borderRadius:20,
    marginVertical:5
  },
  image:{
    height:320,
    width:370,
  },
})