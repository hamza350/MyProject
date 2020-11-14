import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View,TextInput,Button } from 'react-native';
import { useForm, Controller } from "react-hook-form";

export default function ForgetPassword() {
  const { handleSubmit, control } = useForm();
  
  return (
    <View style={styles.container}> 
      <Text style={styles.loginTextHeading}>Forget Password</Text>  
      <Controller
        name="name"
        defaultValue=""
        control={control}
        render={({ onChange, value }) => ( 
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            onChangeText={(text) => onChange(text)}
          />
        )}
      />
      <Button
        color="#3740FE"
        title="Send Email"
      />
      {/* <Text 
        style={styles.loginText}
        onPress={() => navigation.navigate('ForgetPassword')}>
        Forget Password ?
      </Text>                           */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
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