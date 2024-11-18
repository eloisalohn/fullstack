import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Link } from 'expo-router'; 

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('Login com:', username, password);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
       
        <View style={styles.loginBox}>
          <Text style={styles.title}>TESTE HOME</Text>
          <TouchableOpacity >
          <Link href="/perfil" style={styles.register}> <Text >PERFIL</Text></Link>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEE8FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '50%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: '#fff',
    marginBottom: 20, 
    alignSelf: 'center'
    
  },
  loginBox: {
    width: '100%',
    backgroundColor: '#326F9D', 
    borderRadius: 20,
    padding: 20, 
    alignItems: '',
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,  
    backgroundColor: '#D4D4D4',  
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  forgotPassword: {
    color: '#fff',
    fontSize: 12,  
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  button: {
    width: '60%',  
    height: 40,    
    backgroundColor: '#D4D4D4',  
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#000',
    fontSize: 16, 
  },
  register: {
    color: '#fff',
    fontSize: 12,  
    textDecorationLine: 'underline',
    alignSelf: 'center'
  },
});

export default LoginScreen;