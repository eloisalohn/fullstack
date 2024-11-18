import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Link, useRouter } from 'expo-router'; 

const Register = () => {
  const [name, setName] = useState("");
  const [bday, setBday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter(); // Adicione esta linha

  const handleRegister = async () => {
    if (!name || !bday || !email || !password || !confirmPassword) {
      return alert("Todos os campos devem ser preenchidos");
    }

    const formData = { nome:name, dataNascimento:bday, email:email, senha:password }; 
    try {
      const res = await fetch("http://localhost:8000/autenticacao/registro", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      switch (res.status) {
        case 201:
          alert("Usuário criado");
          router.push('/Home');
          break;
        case 406:
          alert("Preencha todos os campos");
          break;
        case 418:
          alert("Email já cadastrado");
          break;
        default:
          alert("Erro ao se conectar com servidor");
          break;
      }
    } catch (error) {
      alert("Erro ao se conectar com o servidor");
    }
  };

  const autoBirthdayFormater = (text) => {
  
    const formattedText = text.replace(/[^0-9]/g, '').slice(0, 8); 
    const day = formattedText.slice(0, 2);
    const month = formattedText.slice(2, 4);
    const year = formattedText.slice(4, 8);
  
    if (month && year) {
      return `${day}/${month}/${year}`; 
    }
    return formattedText; 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SPOTFAKE</Text>
      <Text style={styles.subtitle}>Digite seus dados</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#808080"
        value={name}
        onChangeText={(text) => setName(text)}
        autoCapitalize="words"
      />
      <TextInput
  style={styles.input}
  placeholder="Data de nascimento"
  placeholderTextColor="#808080"
  value={bday}
  onChangeText={(text) => setBday(autoBirthdayFormater(text))} 
  inputMode="numeric"
/>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#808080"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        inputMode="email"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#808080"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        placeholderTextColor="#808080"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton}> 
          <Link href="../" style={styles.register}><Text>VOLTAR</Text></Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#326F9D",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#D4D4D4",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333333",
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "#A9DAFF",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    
  },
  registerButton: {
    backgroundColor: "#A9DAFF",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    
  },
  buttonText: {
    color: "BLACK",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  register:{
    fontWeight: "bold"
  }
});

export default Register;