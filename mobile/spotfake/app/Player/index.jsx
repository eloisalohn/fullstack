import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PlayerScreen = () => {
  return (
    <View style={styles.container}>
    
      <View style={styles.topBar}>
        <TouchableOpacity>
          <View style={styles.profileIcon} />
        </TouchableOpacity>
        <TextInput style={styles.searchBar} placeholder="Pesquisar..." placeholderTextColor="#999" />
        <TouchableOpacity>
          <View style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.icon} />
        </TouchableOpacity>   
        <TouchableOpacity>
          <View style={styles.icon} />
        </TouchableOpacity>
      </View>

     
      <View style={styles.mainArea}>
        <View style={styles.mediaBox} />
        <Text style={styles.songName}>Nome da música</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressCircle} />
          <View style={styles.progressBar} />
        </View>
      </View>

     
      <View style={styles.controls}>
        <TouchableOpacity>
          <Text style={[styles.controlText, styles.simpleButton]}>◀</Text>
        </TouchableOpacity>

       
        <TouchableOpacity>
          <View style={styles.playButton}>
            <Text style={[styles.controlText, styles.middleTriangle]}>▶</Text>
          </View>
        </TouchableOpacity>

        
        <TouchableOpacity>
          <Text style={[styles.controlText, styles.simpleButton]}>▶</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#326F9D', 
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  profileIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    height: 40,
    backgroundColor: '#CEE8FA', 
    borderRadius: 20,
    paddingHorizontal: 15,
    color: '#fff',
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 3,
  },
  mainArea: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  mediaBox: {
    width: '80%', 
    height: 200,
    backgroundColor: '#CEE8FA', 
    borderRadius: 15,
    marginBottom: 20,
  },
  songName: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%', 
    marginTop: 10,
  },
  progressCircle: {
    width: 10,
    height: 10,
    backgroundColor: '#FFF', 
    borderRadius: 5,
    marginRight: 5,
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '80%',
    marginBottom: 20,
  },
  playButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF', 
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  simpleButton: {
    fontSize: 22, 
    backgroundColor: 'transparent', 
    color: '#FFF', 
  },
  middleTriangle: {
    color: '#326F9D', 
  },
  controlText: {
    fontSize: 22,
    color: '#FFF', 
  },
});

export default PlayerScreen;
