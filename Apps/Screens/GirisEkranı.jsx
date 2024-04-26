import { View, ImageBackground, Text, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function GirisEkranı() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, setActive } =
          await startOAuthFlow();
   
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);
    
  return (
    
    <View className="flex-1 ">
      <StatusBar hidden={true} />
      <ImageBackground 
        source={require('./../../assets/images/bg.jpg')} 
        className="flex-1 w-full h-full object-cover "
        

      >
        <View className="flex-1 justify-center items-center">
          <Text className="text-red-700 font-bold text-4xl absolute  top-12">Haydi Keşfe</Text>
          <Text className="text-red-700 font-bold text-6xl  absolute mb-4 top-24 ">Başlayalım!</Text>
          <Text className="text-white text-center px-5 text-[17px]">
            Yapay zeka dünyasının en güncel araçlarını keşfedin! İnovatif çözümlerle geleceği bugünden deneyimleyin.
          </Text>

        </View>
       

        <Text className=" text-white text-center bottom-9 font-bold">Zaten bir hesabım var?</Text>

   

      </ImageBackground>
      <TouchableOpacity onPress={onPress} className="absolute bottom-16 w-full px-20 py-4 bg-blue-500 rounded-t-2xl rounded-b-2xl ">
  <Text className="text-white text-center text-[15px] font-bold">Kayıt Ol</Text>
</TouchableOpacity>
    

    </View>
    
  );
}
