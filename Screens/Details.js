import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image,ScrollView} from 'react-native';
import { useRoute } from "@react-navigation/native"
import { Rating } from "react-native-ratings"
export default function Details() {
const {name,price,image,detail} = useRoute().params;
  return (
    <ScrollView style={styles.container}>
        <Image 
            style={{height:190}}
            source={{uri:image}}
        />
        <View style={styles.title}>
            <Text style={styles.title}>{name}</Text>
            <Text>price:{price}</Text>
            <Rating showRating imageSize={30}/>
        </View>
        <View style={{margin:8}}>
            <Text>introduction</Text>
            <Text>{detail}</Text>
        </View>
        <button
            title="add to favorit"
            color="#777777"
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
     
    },
    title:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:18,
        marginTop:8
    }
});
