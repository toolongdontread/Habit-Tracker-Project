import * as React from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

export default function Home({navigation}){
    return(
        <SafeAreaView style={styles.homeContainer}>
            <View style={styles.quoteContainer}>
                <Text style={styles.quote}>
                    Quote from celebrity
                </Text>
            </View>
            <View style={styles.expContainer}>
                <Image source={require('rntest/assets/Untitled.png')}/>
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
})