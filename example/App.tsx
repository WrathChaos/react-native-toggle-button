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
      <ToggleButton onPress={() => {}} />
    </SafeAreaView>
  );
};

export default App;
