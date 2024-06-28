import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

function genQuote(){
  const quote = ['a','b','c','d','e']
  const ranInt = Math.floor(Math.random()*quote.length)
  return quote[ranInt]
}

function HomeScreen() {
  const newQuote = genQuote()
  return(
    <SafeAreaView style={styles.homeContainer}>
        <View style={styles.quoteContainer}>
            <Text style={styles.quote}>
                {newQuote}
            </Text>
        </View>
        <Image style={styles.image} source={require('./testingImage.png')}/>
        <View>
            <Text style={styles.expText}>
                Exp:
            </Text>
            <Progress.Bar 
                progress={progressValue} 
                width={310} 
                height={10}
                marginTop={10}/>
        </View>
        <View>
          <Text style={styles.expText}>
            Summary:
          </Text>
          <FlatList/>
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

  const [todos, setTodos] = React.useState([
    {id:1,task:'test1'},
    {id:2,task:'test2'},
    {id:3,task:'test3'},
    {id:4,task:'test4'},
  ])

  React.useEffect(() => {
    getTodosFromUserDevice()
  }, [])
  
  React.useEffect(() => {
    saveToUserDevice(todos)
  }, [todos])
  
  const saveToUserDevice = async todos => {
    try{
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch(e){
      console.log(e)
    }
  }
  
  const getTodosFromUserDevice = async() => {
    try{
      const todos = await AsyncStorage.getItem('todos')
      if(todos != null){
        setTodos(JSON.parse(todos))
      }
    } catch(e){
      console.log(e)
    }
  }

  const ListItem = ({todo}) => {
    return( 
      <View style={styles.listItem}>
        <View style={{flex:1}}>
          <Text style={{fontSize:15, color:'#000'}}>{todo?.task}</Text>
        </View>
        <TouchableOpacity
          style={styles.doneIcon}
          onPress={()=>finishTask(todo?.id)}>
            <Icon name='done' size={20} color={'#fff'}></Icon>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteIcon}
          onPress={()=>deleteTask(todo?.id)}>
            <Icon name='delete' size={20} color={'#fff'}></Icon>
        </TouchableOpacity>
      </View>
    )
  }
  
  const addTodo = () => {
    if(textInput == ""){
      Alert.alert("Invalid Task Name", "Please enter the task name")
    }
    else{
      const newTodo = {
        id:Math.random(),
        task:textInput,
      }
      setTodos([...todos,newTodo])
      setTextInput('')
    }   
  }

  const deleteTask = todoId => {
    const newTodos = todos.filter(item => item.id != todoId)
    setTodos(newTodos)
  }

  const deleteAllTasks = () => {
    setTodos([])
  }

  const finishTask = todoId =>{
    const newTodos = todos.filter(item => item.id != todoId)
    setTodos(newTodos)
    Alert.alert('Exp Increase', 'EXP + 10')
  }

  const [textInput, setTextInput] = React.useState('')

  return(
    <SafeAreaView style={{flex:1}}>
      <TouchableOpacity onPress={deleteAllTasks}>
        <View style={styles.deleteAllIconContainer}>
          <Icon name='delete' size={25} color='red'></Icon>
        </View>
      </TouchableOpacity>
      <View style={styles.taskContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding:20,paddingBottom:100}}
          data={todos} 
          renderItem={({item})=><ListItem todo={item}/>}/>
      </View>
      <View style={styles.addTaskContainer}>
        <View style={styles.addTaskBar}>
          <TextInput 
            placeholder='Add habit'
            value={textInput}
            onChangeText={(text)=>setTextInput(text)}/>
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.addButtonIconContainer}>
            <Icon name='add' color={COLORS.white} size={30}/>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();
const COLORS = {primary:'#1f145c', white:'#fff'}
var progressValue = 0

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
  addButtonIconContainer:{
    height:50,
    width:50,
    backgroundColor:'#00f',
    borderRadius:30,
    elevation:40,
    justifyContent:'center',
    alignItems:'center',
  },
  addTaskBar:{
    backgroundColor: COLORS.white,
    elevation:40,
    flex:1,
    height:50,
    marginVertical:20,
    marginRight:20,
    borderRadius:30,
    paddingHorizontal:20,
  },
  addTaskContainer:{
    position:'absolute',
    bottom:0,
    color: COLORS.white,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
  },
  deleteAllIconContainer:{
    padding:10,
    position:'absolute',
    right:0,
  },
  deleteIcon:{
    height:25,
    width:25,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:5,
    borderRadius:3,
  },
  doneIcon:{
    height:25,
    width:25,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:5,
    borderRadius:3,
  },
  homeContainer:{
    flex:1, 
    alignItems:'center',
    padding:10,
  },
  listItem:{
    padding:20,
    backgroundColor:'#fff',
    flexDirection:'row',
    elevation:10,
    borderRadius:10,
    marginVertical:10,
  },
  quoteContainer:{
    width:'90%',
    backgroundColor:'#fff',
    borderRadius:20,
    padding:10,
    alignItems:'center',
  },
  quote:{
    fontSize:15,
    fontWeight:'bold',
  },
  expText:{
    fontSize:20
  },
  taskContainer:{
    padding:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  }, 
  image:{
    height:220,
    width:270,
    margin:20,
  },
})