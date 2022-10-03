import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home({navigation}){
    return(
        <View style={styles.homeContainer}>
            <View style={styles.quoteContainer}>
                <Text style={styles.quote}>
                    Quote from celebrity
                </Text>
            </View>
        </View>
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
    }
})