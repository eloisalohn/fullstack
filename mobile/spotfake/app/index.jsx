import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Link, useRouter } from 'expo-router'; 

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    const formData = { email: email, senha: password };
  
    try {
      const res = await fetch("http://localhost:8000/autenticacao/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(formData),
      });

      switch (res.status) {
        case 200:
          const data = await res.json();
          alert(data.msg); 
          router.push('/Home');
          break;
        case 404:
          alert('Este usuário não está cadastrado.');
          break;
        case 403:
          alert('Senha incorreta.');
          break;
        case 406:
          alert('Todos os campos devem ser preenchidos.');
          break;
        default:
          alert('Erro inesperado. Tente novamente mais tarde.');
      }
    } catch (error) {
      alert('Erro ao se conectar com o servidor.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <View style={styles.loginBox}>
          <Text style={styles.title}>SPOTFAKE</Text>
          <Text style={styles.subtitle}>Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#999"
          />

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueci a senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href="../registro" style={styles.register}>
              <Text>Não possui uma conta? Cadastre-se</Text>
            </Link>
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
    alignSelf: 'center',
  },
  loginBox: {
    width: '100%',
    backgroundColor: '#326F9D',
    borderRadius: 20,
    padding: 20,
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
    alignSelf: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  register: {
    color: '#fff',
    fontSize: 12,
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
});

export default LoginScreen;
