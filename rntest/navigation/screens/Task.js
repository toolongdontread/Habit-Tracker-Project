import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


export default function Task({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <View style={styles.tasks}>
                    <BouncyCheckbox 
                        text='Task'
                        
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    },
});