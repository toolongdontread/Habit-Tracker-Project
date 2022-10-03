import * as React from 'react';
import { NavigationContainer, tabBarOptions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from './screens/Home';
import Task from './screens/Task';
import Habits from './screens/Habits';

// Screen names
const homeName = 'Home';
const taskName = 'Task';
const habitsName = 'Habits';

const Tab = createBottomTabNavigator();


export default function MainContainer(){
    
    return(

        <NavigationContainer>
            <Tab.Navigator
                initalRouteName={homeName}
                screenOptions={({route})=> ({
                    tabBarIcon:({focused, color, size})=> {

                        let iconName;
                        let rn = route.name;
                        // navigation bar images
                        if(rn == homeName){
                            iconName = focused ? 'home' : 'home-outline'
                        }
                        else if(rn == habitsName){
                            iconName = focused ? 'heart' : 'heart-outline'
                        }
                        else if(rn == taskName){
                            iconName = focused ? 'list' : 'list-outline'
                        }
                        
                        return <Ionicons name={iconName} size={size} color={color}/>
                    }
                })}

                // change the navigation bar styles here
                tabBarOptions={{
                    activeTintColor:'pink',
                    inactiveTintColor:'grey',
                    labelStyle:{paddingBottom:10, fontSize:10},
                    style:{padding:10, height:70}
                }}>

                <Tab.Screen name={homeName} component={Home}/>
                <Tab.Screen name={habitsName} component={Habits}/>
                <Tab.Screen name={taskName} component={Task}/>
                
            </Tab.Navigator>
        </NavigationContainer>

    );
}