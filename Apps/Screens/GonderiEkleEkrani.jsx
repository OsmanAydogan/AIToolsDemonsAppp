import { View, Text } from 'react-native'
import React, { useEffect, useState  } from 'react'
import {getDocs, getFirestore, collection } from "firebase/firestore";
import { app } from '../../firebaseConfig';
import { Formik } from 'formik';




export default function GonderiEkleEkrani() {
 
    const db = getFirestore(app);
    const [categoryList, setCategoryList]=useState([]);
    useEffect(()=>{
        getCategoryList();
    },[])

    const getCategoryList=async()=>{
        const querySnapShot=await getDocs(collection(db,'Kategori'));

        querySnapShot.forEach((doc)=>{
            console.log("Docs:",doc.data());
            setCategoryList = (categoryList => [...categoryList,doc.data])
        })
    }
  return (
    <View className = "p-10">
      <Formik>


      </Formik>
    </View>
  )
}

