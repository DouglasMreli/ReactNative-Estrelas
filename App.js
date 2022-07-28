import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

import Home from "./src/telas/Home";

export default function App() {
  return( <SafeAreaView style={estilos.tela}>
        <Home />
  </SafeAreaView>)
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  }
})