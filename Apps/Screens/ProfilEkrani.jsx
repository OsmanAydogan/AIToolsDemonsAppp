import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProfilEkrani = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kullanıcı Bilgileri</Text>
        <View style={styles.userInfo}>
          <Image source={require('./../../assets/images/bg.jpg')} style={styles.profilePicture} />
          <View>
            <Text style={styles.userName}>Osman Aydoğan</Text>
            <Text style={styles.userEmail}>aydoganosman@example.com</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Düzenle</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favori Araçlar</Text>
        <Text style={styles.emptyMessage}>Henüz favori araç eklenmemiş.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Geçmiş</Text>
        <Text style={styles.emptyMessage}>Henüz geçmiş kayıtlarınız bulunmamaktadır.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profil Ayarları</Text>
        <Text style={styles.emptyMessage}>Profil ayarları burada görüntülenecek.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Topluluk Katkıları</Text>
        <Text style={styles.emptyMessage}>Topluluk katkıları burada görüntülenecek.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Araç Değerlendirmeleri ve Yorumlar</Text>
        <Text style={styles.emptyMessage}>Araç değerlendirmeleri ve yorumları burada görüntülenecek.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hesap Yönetimi</Text>
        <Text style={styles.emptyMessage}>Hesap yönetimi seçenekleri burada görüntülenecek.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Destek ve Geri Bildirim</Text>
        <Text style={styles.emptyMessage}>Destek ve geri bildirim seçenekleri burada görüntülenecek.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#888',
  },
  editButton: {
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyMessage: {
    color: '#888',
  },
});

export default ProfilEkrani;
