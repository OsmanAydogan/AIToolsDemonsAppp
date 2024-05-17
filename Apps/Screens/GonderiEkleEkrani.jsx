import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getDocs, getFirestore, collection } from "firebase/firestore";
import { app } from '../../firebaseConfig';
import { Formik } from 'formik';

export default function GonderiEkleEkrani() {
  const db = getFirestore(app);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    const querySnapShot = await getDocs(collection(db, 'Kategori'));
    const categories = [];
    querySnapShot.forEach((doc) => {
      console.log("Docs:", doc.data());
      categories.push(doc.data());
    });
    setCategoryList(categories);
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: '', category: '', title: '', description: '', img: '' }}
        onSubmit={(value) => console.log(value)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='Başlık'
              value={values.title}
              onChangeText={handleChange('title')}
            />
           <Button onPress={handleSubmit} 
           
           
           title="submit" 
           
           
           />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
 
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal:17,
    fontSize:17
  },
});
