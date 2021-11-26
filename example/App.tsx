import React from "react";
import { SafeAreaView } from "react-native";

import ToggleButton from "./lib/ToggleButton";

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#161918",
      }}
    >
      <ToggleButton
        primaryText="On"
        secondaryText="Off"
        onPress={(isToggled: boolean) => {
          console.log(isToggled);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
