import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import ToggleButton from "react-native-toggle-button";

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#161918",
      }}
    >
      <StatusBar barStyle="light-content" />
      <View style={{ marginTop: 64 }}>
        <ToggleButton
          primaryText="On"
          secondaryText="Off"
          onPress={(isToggled: boolean) => {
            console.log(isToggled);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
