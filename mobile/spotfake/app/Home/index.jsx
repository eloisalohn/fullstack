import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image,Link, TouchableOpacity  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const goToPerfil = () => {
  navigation.navigate('perfil'); 
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      <TouchableOpacity onPress={goToPerfil}>
          <Ionicons name="person-circle-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TextInput style={styles.searchBar} placeholder="Pesquisar..." placeholderTextColor="#AFAFAF" />
        <Ionicons name="home-outline" size={20} color="#FFFFFF" />
        <Ionicons name="menu-outline" size={20} color="#FFFFFF" />
        <Ionicons name="settings-outline" size={20} color="#FFFFFF" />
      </View>

      {/* Seção "Você pode gostar" */}
      <Text style={styles.sectionTitle}>Você pode gostar:</Text>
      <View style={styles.grid}>
        {[
          'https://images.suamusica.com.br/sGH5czZ61-JfxRmLTQxGU_jMlPw=/news/1bf780bffb31492d44f73e2c2fcb82fc.png',
          'https://images.suamusica.com.br/hfFypEr9x7Ibxzv2EDrYavzY09Y=/news/133b5313ded80b97388f7b2281f53075.png',
          'https://marketplace.canva.com/EAD0UGapjwc/1/0/1600w/canva-preto-e-branco-m%C3%BAsica-capa-de-cd-OI4SYzjyFPg.jpg',
          'https://marketplace.canva.com/EAFA_OZc1Xc/2/0/1600w/canva-capa-de-cd-de-rap-gostel-com-foto-rBMvpC1j2tw.jpg',
          'https://marketplace.canva.com/EAF2jOnW-sI/1/0/1600w/canva-capa-de-%C3%A1lbum-de-m%C3%BAsica-rom%C3%A2ntica-amor-estilo-tipogr%C3%A1fico-web-3.0-em-verde-neon%2C-rosa-e-azul-qgdikHIuIVk.jpg',
          'https://marketplace.canva.com/EAF2S17mqkc/1/0/1600w/canva-capa-de-cd-%C3%A1lbum-de-m%C3%BAsica-eletr%C3%B4nica-gen%C3%A9rica-minimalista-tipogr%C3%A1fica-preto-branco-laranja-UM6Zp9VxsFQ.jpg',
        ].map((imageUri, index) => (
          <Image key={index} style={styles.squareCard} source={{ uri: imageUri }} />
        ))}
      </View>

      {/* Seção "Artistas populares" */}
      <Text style={styles.sectionTitle}>Artistas populares:</Text>
      <View style={styles.grid}>
        {[
          'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1vscg0-default.jpg',
          'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO4bQI7e-default.jpg',
          'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO38DV4Y-default.jpg',
        ].map((imageUri, index) => (
          <Image key={index} style={styles.circleCard} source={{ uri: imageUri }} />
        ))}
      </View>

      {/* Seção "Favoritos" */}
      <Text style={styles.sectionTitle}>Favoritos:</Text>
      <View style={styles.verticalList}>
        {[
          'https://via.placeholder.com/300x100',
          'https://via.placeholder.com/300x100',
          'https://via.placeholder.com/300x100',
        ].map((imageUri, index) => (
          <Image key={index} style={styles.rectangleCard} source={{ uri: imageUri }} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#326F9D',
    padding: 15,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  searchBar: {
    flex: 1,
    height: 35,
    backgroundColor: '#CEE8FA',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    color: '#FFFFFF',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  squareCard: {
    width: '28%',
    aspectRatio: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  circleCard: {
    width: '28%',
    aspectRatio: 1,
    borderRadius: 50,
    marginBottom: 10,
  },
  verticalList: {
    flexDirection: 'column',
  },
  rectangleCard: {
    width: '100%',
    height: 40,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default HomeScreen;

