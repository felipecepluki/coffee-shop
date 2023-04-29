import React from "react";
import { View, Image, Text } from "react-native";

export default function Home() {
  return (
    <View>
      <View className="mt-[35px] mx-[35px] justify-between items-center flex flex-row">
        <Image
          source={{
            uri: "https://github.com/felipecepluki.png",
          }}
          className="w-15 h-15"
        />
        <View className="flex flex-row">
          <Image
            source={require("../assets/carbon_location-filled.png")}
            className="w-5 h-5 mr-[1px]"
          />
          <Text className="font-bold text-xs">Curitiba, Brazil</Text>
        </View>
        <Image source={require("../assets/Notification.png")} />
      </View>
      <Text className="text-xl mt-[11px] font-bold ml-6">
        Good Morning, Felipe
      </Text>
      <View className="w-[303px] h-[50px] bg-[#F8F7FA] mt-8 ml-6 rounded-[100px] flex flex-row items-center">
        <Text className="text-[#CBCBD4] text-sm">Search Coffee</Text>
      </View>
      <Text className="text-xl mt-8 font-bold ml-6">Categories</Text>
    </View>
  );
}
