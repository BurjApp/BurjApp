import "../src/i18n/i18n";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { Provider } from "react-redux";

import { store } from "../src/redux/store.redux";

const Index = () => {
  const { t } = useTranslation();

  return (
    <Provider store={store}>
      <SafeAreaView className="bg-[#a790e5]">
        <Stack.Screen options={{ title: t("name")! }} />
        <View className="h-full w-full p-4">
          <Text>{t("app.title")}</Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default Index;
