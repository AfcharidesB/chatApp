import React, { Component } from 'react';
import { View,  TextInput, StyleSheet, Text  } from 'react-native';

const CustomInput = ({value, setValue, placeholder , secureTextEntry}) => {
    return (
        <View style={styles.container}>
           <TextInput style={styles.formulaires} 
           value={value}
           placeholder={placeholder} 
           onChange={setValue}
            secureTextEntry={secureTextEntry}
           >

           </TextInput>
 
        </View>
        
    );
};

const styles = StyleSheet.create({

    container : {
       width  : '100%',
        justifyContent : "center",
        alignItems : "center",
   
      },

    formulaires : {
      
      backgroundColor :"white",
      
      marginVertical : 20, 
      fontSize: 16,
      width: 350,
      borderRadius : 50,
      outlineColor: "white",
      padding  : 10,
      
     }
   
    
   
});

export default CustomInput
