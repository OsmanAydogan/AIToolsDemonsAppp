import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const yapayZekaAraclari = [
  { id: '1', adi: 'Araç 1', resim: 'https://via.placeholder.com/150', kategori: 'Kategori 1' },
  { id: '2', adi: 'Araç 2', resim: 'https://via.placeholder.com/150', kategori: 'Kategori 2' },
];

const yeniAraclar = [
  { id: '3', adi: 'Yeni Araç 1', resim: 'https://via.placeholder.com/150' },
  { id: '4', adi: 'Yeni Araç 2', resim: 'https://via.placeholder.com/150' },
];

const HomeEkrani = () => {
  const navigation = useNavigation();
  const [filtre, setFiltre] = useState('');

  const filteredAraclar = yapayZekaAraclari.filter((arac) =>
    arac.adi.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.aramaCubugu}
        placeholder="Araçları ara..."
        value={filtre}
        onChangeText={setFiltre}
      />

      <Text style={styles.kategoriBaslik}>Kategoriler</Text>
      <FlatList
        data={filteredAraclar}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('AracDetay', { arac: item })}
            style={styles.aracKutu}
          >
            <Image source={{ uri: item.resim }} style={styles.aracResim} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.aracListesi}
      />

      <Text style={styles.kategoriBaslik}>Yeni Çıkan Yapay Zeka Araçları</Text>
      <FlatList
        data={yeniAraclar}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('AracDetay', { arac: item })}
            style={styles.aracKutu}
          >
            <Image source={{ uri: item.resim }} style={styles.aracResim} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.aracListesi}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  aramaCubugu: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  kategoriBaslik: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aracListesi: {
    paddingVertical: 10,
  },
  aracKutu: {
    alignItems: 'center',
    marginRight: 10,
  },
  aracResim: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

export default HomeEkrani;
