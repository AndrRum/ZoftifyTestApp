import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FONTS } from "./src/globalTheme/fonts";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.label}>Hi</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    fontFamily: FONTS.regular,
    fontSize: 48
  },
})

export default App;
