import { Image, Text, View } from "react-native";

export function Categories({ image, title }: any) {
  return (
    <View className="mt-6 ml-9 flex flex-row items-center w-[99px] h-[30px] rounded-3xl p-[7px]">
      <Image source={image} className="w-4 h-4" />
      <Text className="text-[#3A3A3A] text-xs font-bold">{title}</Text>
    </View>
  );
}
