import "react-native-reanimated"
import React from "react";
import { NativeBaseProvider } from "native-base";

import Routes from "~/Routes";

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
