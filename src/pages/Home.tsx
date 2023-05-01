import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  Keyboard,
} from "react-native";
import { Categories } from "../components/Categories";
import { Coffees } from "../components/Coffees";

export default function Home() {
  function DismissKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView className="bg-[#F8F7FA] h-screen">
      <View className="mt-[35px] mx-[35px] justify-between items-center flex flex-row">
        <Image
          source={require("../assets/profile.jpeg")}
          className="w-[60px] h-[60px] rounded-full"
        />
        <View className="flex flex-row">
          <Image
            source={require("../assets/map.png")}
            className="w-5 h-5 mr-[1px]"
          />
          <Text className="font-bold text-xs">Curitiba, Brazil</Text>
        </View>
        <Image source={require("../assets/notification.png")} />
      </View>
      <Text className="text-xl mt-[11px] font-bold ml-6">
        Good Morning, Felipe
      </Text>
      <View className="w-[303px] h-[50px] bg-[#F8F7FA] border-[1px] border-[#CBCBD4] mt-8 ml-9 rounded-[100px] flex flex-row items-center justify-between p-[13px]">
        <View className="flex flex-row">
          <Image source={require("../assets/search.png")} className="mr-2" />
          <TextInput
            placeholder="Search Coffee..."
            placeholderTextColor="#CBCBD4"
            keyboardType="default"
          />
        </View>
        <Image source={require("../assets/settings.png")} />
      </View>
      <Text className="text-xl mt-8 font-bold ml-9">Categories</Text>
      <View className="flex w-full flex-row mx-9">
        <View className="mt-6 flex flex-row items-center w-[99px] h-[30px] rounded-3xl bg-[#846046] p-[7px]">
          <Image
            source={require("../assets/cappuccino.png")}
            className="w-4 h-4"
          />
          <Text className="text-white text-xs font-bold">Cappuccino</Text>
        </View>
        <Categories
          image={require("../assets/ColdBrew.png")}
          title="Cold Brew"
        />
        <Categories
          image={require("../assets/Expresso.png")}
          title="Expresso"
        />
      </View>
      <View className="flex flex-row">
        <Coffees
          image={require("../assets/CappuccinoImage.png")}
          score="4.9"
          name="Cappuccino"
          description="With Chocolate"
          price="50 k"
        />
        <Coffees
          image={require("../assets/CappuccinoTwo.png")}
          score="4.7"
          name="Cappuccino"
          description="With Low Fat Milk"
          price="45 k"
        />
      </View>
    </SafeAreaView>
  );
}
