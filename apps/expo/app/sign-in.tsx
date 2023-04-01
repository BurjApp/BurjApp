import React from "react";
import { Text, View } from "react-native";
import { Stack } from "expo-router";

const SignIn = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Sign In" }} />

      <Text className="bg-black w-60 h-80">Sign In</Text>

    </View>
  );
};

export default SignIn;
