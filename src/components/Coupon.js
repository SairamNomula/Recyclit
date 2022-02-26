import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'

const {width,height}=Dimensions.get('window');

const Coupon = ({
    icon,title,desc
}) => (
    <View style={styles.container}>
       <View style={styles.wrapper}>
        <View style={styles.left_circle}></View>
        <View style={styles.content}>
            <Image source={icon} style={{width:45,height:53}}/>
            <View style={{marginLeft:16}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </View>
        <View style={styles.right_circle}></View>
       </View> 
    </View>
);

const styles=StyleSheet.create({
    container:{
        height:100,
        marginLeft:20,
        marginRight:20,
        marginTop:15,
        backgroundColor:'#4cb050',
        borderRadius:6,
        justifyContent:'center'
    },
    wrapper:{
        marginLeft:-30,
        marginRight:-30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        alignContent:'center'
    },
    left_circle:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:'#f5f5f7'
    },
    right_circle:{
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:'#f5f5f7'
    },
    content:{
        flexDirection:'row'
    },
    title:{
        color:'#ffffff',
        fontFamily:'Inter-BoldItalic',
        fontSize:20
    },
    desc:{
        color:'#ffffff',
        fontFamily:'Inter-BoldItalic',
        fontSize:12
    },
})

export default Coupon;
