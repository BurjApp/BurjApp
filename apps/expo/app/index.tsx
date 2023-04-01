import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
import { Provider } from "react-redux";

import { store } from "../src/redux/store.redux";

const Index = () => {
  return (
    <Provider store={store}>
      <SafeAreaView className="bg-[#b59ef1]">
        <Stack.Screen options={{ title: "Clean App" }} />
        <View className="h-full w-full p-4">
          <Link href="/sign-in">Sign In</Link>
          {/* <Text>Hello World!</Text> */}
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default Index;
