import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {getDocs, getFirestore, collection } from "firebase/firestore";
import { app } from '../../firebaseConfig';




export default function GonderiEkleEkrani() {

    const db = getFirestore(app);
    useEffect(()=>{
        getCategoryList();
    },[])

    const getCategoryList=async()=>{
        const querySnapShot=await getDocs(collection(db,'Kategori'));

        querySnapShot.forEach((doc)=>{
            console.log("Docs:",doc.data());
        })
    }
  return (
    <View>
      <Text>GonderiEkleEkrani</Text>
    </View>
  )
}

