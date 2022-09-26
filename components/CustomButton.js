import React, { Component } from 'react';
import {  Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ( ) => {
    return (
            <Pressable style={styles.container} >
                <Text style={styles.btntext}>Se Connecter</Text>

                <Text style={styles.btntext2}>Mot de passe oublié ?</Text>
                <Text style={styles.btnGoogle}>Se Connecter avec google</Text>
                <Text style={styles.btnFb}>Se Connecter avec facebook</Text>
                <Text style={styles.btn2}>Créez un compte</Text>
            </Pressable>

    ) 


}

const styles = StyleSheet.create({
    container: {
       backgroundColor : "#1DA1F2",
       height: 40,
       borderRadius: 50,
       width: 200,
       alignItems: "center",
       padding  : 10,
    },

    btntext : {
        color : "white",
        fontWeight : 800,
      
        
      },
      btntext2 : {
        marginVertical: 40,
      },
      btnGoogle : {
        color : "#DD4D44",
        backgroundColor : "#FAE9EA",
        height: 40,
        borderRadius: 50,
        width: 200,
        padding  : 10,
        fontWeight : 600
      },
      btnFb : {
        marginVertical: 30  ,
        color : "#4567A9",
        backgroundColor : "#E7EAF4",
        height: 40,
        borderRadius: 50,
        width: 200,
        padding  : 10,
        fontWeight : 600
      },
      
})

export default  CustomButton 

 