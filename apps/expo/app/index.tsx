import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { Provider } from "react-redux";

import { store } from "../src/redux/store.redux";

const Index = () => {
  return (
    <Provider store={store}>
      <SafeAreaView className="bg-[#1F104A]">
        <Stack.Screen options={{ title: "Burj App" }} />
        <View className="h-full w-full p-4">
          <Text>Hello World</Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default Index;
