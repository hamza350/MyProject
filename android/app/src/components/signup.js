import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View,TextInput,Button, Alert } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios'; 
import LinearGradient from 'react-native-linear-gradient'

export default function SignUp({navigation}) {
  const { handleSubmit, control, errors } = useForm(); //initilizing the react-hook-form methods
  
  //getting data after submit
  const onSubmit = (data) => {
    let username= data.username
    let name = data.name
    let email= data.email
    let password= data.password

    axios.post("http://18.191.94.214/api/v1/auth",
      {
        username: username,
        name: name,
        email: email,
        password: password,
        confirm_success_url: ""
      },
      {
        headers:{
          "X-XSRF-TOKEN": "xsacascasc123123dsdxasxa",
          "Content-Type": "application/json"
      }
      }).
      then((response) => {
        debugger;
        console.log(response)
        if(response.status == 200){
          Alert.alert("","Successfully Sign Up")
          navigation.navigate('LogIn');
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
        <Text style={styles.loginTextHeading}>SIGN UP</Text>  
        <Controller
          name="name"
          defaultValue=""
          control={control}
          rules={{
            required: { value: true, message: 'name is required' }
          }}
          render={({ onChange, value }) => { 
          return <View>
              <TextInput
                style={styles.inputStyle}
                placeholder="Name"
                onChangeText={(text) => onChange(text)}
              />
              { errors?.name?.message &&
              <Text style={{color: 'red'}}>{errors?.name?.message}</Text>}
            </View>
          }}
        /> 
        {/* <Text>{errors.message}</Text> */}
        <Controller
          name="username"
          defaultValue=""
          control={control}
          rules={{
            required: { value: true, message: 'username is required' }
          }}
          render={({ onChange, value }) => { 
            return <View>
              <TextInput
                style={styles.inputStyle}
                placeholder="UserName"
                onChangeText={(text) => onChange(text)}
              />
              { errors?.username?.message &&
              <Text style={{color: 'red'}}>{errors?.username?.message}</Text>}
            </View>
          }}
        /> 
        <Controller
          name="email"
          defaultValue=""
          control={control}
          rules={{
            required: { value: true, message: 'Email is required' }
          }}
          render={({ onChange, value }) => { 
            return <View>
              <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                onChangeText={(text) => onChange(text)}
              />
              { errors?.email?.message &&
              <Text style={{color: 'red'}}>{errors?.email?.message}</Text>}
            </View>
          }}
        /> 
        <Controller
          name="password"
          defaultValue=""
          control={control}
          rules={{
            required: { value: true, message: 'password is required' }
          }}
          render={({ onChange, value }) => { 
            return <View>
              <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                onChangeText={(text) => onChange(text)}
              />
              { errors?.password?.message &&
              <Text style={{color: 'red'}}>{errors?.password?.message}</Text>}
            </View>
          }}
        />
        <Controller
          name="password_confirmation"
          defaultValue=""
          control={control}
          rules={{
            required: { value: true, message: 'confirmation is required' }
          }}
          render={({ onChange, value }) => { 
            return <View>
              <TextInput
                style={styles.inputStyle}
                placeholder="PasswordConfirmation"
                onChangeText={(text) => onChange(text)}
              />
              { errors?.password_confirmation?.message &&
              <Text style={{color: 'red'}}>{errors?.password_confirmation?.message}</Text>}
            </View>
          }}
        />        
        <Button
          color="#3740FE"
          title="Signup"
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
        />

        <Text 
          style={styles.loginText} onPress={() => navigation.navigate('LogIn') }>
          Already Registered? Click here to login
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
    justifyContent: "flex-start",
    padding: 35,
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
  },
  button: {
    marginTop: 5
  }
});