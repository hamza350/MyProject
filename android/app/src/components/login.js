import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View,TextInput,Button, Alert } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios'; 
import LinearGradient from 'react-native-linear-gradient'



export default function LogIn({navigation}) {
  const { handleSubmit, control, errors } = useForm(); //initilizing the react-hook-form methods
  
  //handler for submit of the forms
  const onSubmit = (data) => {
    axios.post("http://18.191.94.214/api/v1/auth/sign_in",
    {
      email: "",
      password: "",
    },
    {
      headers:{
        "Content-Type": "application/json"
    }
    }).
    then((response) => {
      debugger;
      console.log(response.status)
      if(response.status == 200){
        Alert.alert("","Successfully Log In")
      }
    })
    .catch((error) => {
      console.log(error)
    })
  };


  return (
    <LinearGradient
      colors={['#FF3CAC', '#784BA0', '#2B86C5']}
      style={styles.linearGradient}
    >
      <View style={styles.container}> 
        <Text style={styles.loginTextHeading}>LOG IN</Text>  
        <Controller
          name="email"
          defaultValue=""
          control={control}
          render={({ onChange, value }) => ( 
            <TextInput
              style={styles.inputStyle}
              placeholder="Email"
              type="email"
              onChangeText={(text) => onChange(text)}
            />
          )}
        />
        <Controller
          name="password"
          defaultValue=""
          control={control}
          render={({ onChange, value }) => (   
            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              maxLength={15}
              type="password"
              secureTextEntry={true}
              onChangeText={(text) => onChange(text)}
            />
          )}
        />    
        <Button
          color="#3740FE"
          title="LogIn"
          onPress={handleSubmit(onSubmit)}
        />
        <Text 
          style={styles.loginText}
          onPress={ () => navigation.navigate('ForgetPassword') }>
          Forget Password ?
        </Text>                          
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 450,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    width: '80%',
    borderRadius: 20,
    marginRight: 20,
    elevation: 15,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  loginTextHeading: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 25,
    fontWeight: 'bold'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});