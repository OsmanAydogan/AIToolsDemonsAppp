import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, FlatList } from 'react-native';

const yapayZekaAraclari = [
];

const KesfetEkrani = () => {
  const [filtre, setFiltre] = useState('');
  const [filtrelenmisAraclar, setFiltrelenmisAraclar] = useState(yapayZekaAraclari);

  useEffect(() => {
    if (filtre) {
      const sonuclar = yapayZekaAraclari.filter((arac) =>
        arac.adi.toLowerCase().includes(filtre.toLowerCase())
      );
      setFiltrelenmisAraclar(sonuclar);
    } else {
      setFiltrelenmisAraclar(yapayZekaAraclari);
    }
  }, [filtre]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.aramaCubugu}
        placeholder="Araçları ara..."
        value={filtre}
        onChangeText={setFiltre}
      />
      <FlatList
        data={filtrelenmisAraclar}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.aracKutu}>
            <TextInput
              style={styles.aracAdi}
              value={item.adi}
              editable={false}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  aramaCubugu: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  aracKutu: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  aracAdi: {
    fontWeight: 'bold',
  },
});

export default KesfetEkrani;