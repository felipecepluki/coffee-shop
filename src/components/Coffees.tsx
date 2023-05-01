import { Image, Text, View } from "react-native";

export function Coffees({ image, score, name, description, price }: any) {
  return (
    <View className="w-[143px] mt-2 ml-9 h-[165px] rounded-[15px] flex items-center">
      <View className="flex w-[129px] h-[99px] items-center justify-center pt-[7px]">
        <Image source={image} className="w-full h-full rounded-[15px]" />
        <View className="absolute z-50 right-0 top-2 w-[33px] h-4 bg-[#846046] rounded-2xl">
          <View className="w-full h-full flex flex-row items-center justify-around">
            <Image source={require("../assets/Star.png")} />
            <Text className="text-white text-[10px] font-thin">{score}</Text>
          </View>
        </View>
      </View>
      <View className="w-[129px] flex flex-col left-0">
        <Text className="text-black text-base">{name}</Text>
        <Text className="text-black text-[6px]">{description}</Text>
        <Text className="text-black text-xs font-bold mt-[3px]">{price}</Text>
        <View className="absolute right-2 bg-[#846046] rounded-full w-[30px] h-[30px] bottom-[10px]">
          <View className="w-full h-full flex items-center justify-center">
            <Image source={require("../assets/Plus.png")} />
          </View>
        </View>
      </View>
    </View>
  );
}
