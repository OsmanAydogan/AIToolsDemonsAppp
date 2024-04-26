import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import GirisEkranı from './Apps/Screens/GirisEkranı';
import TabNavigation from './Apps/Navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_bGVnaWJsZS1waXJhbmhhLTQ3LmNsZXJrLmFjY291bnRzLmRldiQ'>
      
    <View className="flex-1  bg-white-50">
      <StatusBar style="auto" />


      <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
        

       {/* <SignedIn>

      <NavigationContainer>

      <TabNavigation/>

      </NavigationContainer>

        </SignedIn>
        <SignedOut>
      <GirisEkranı/>
        </SignedOut>  */}

    </View>
    </ClerkProvider>
  );
}

