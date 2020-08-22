import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View
      style={{
        backgroundColor: "#C1EA37",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          marginRight: 25,
          marginTop: 25,
        }}
      >
        <TouchableOpacity onPress={() => setCounter(0)}>
          <MaterialCommunityIcons name="restart" size={36} color="black" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 3,
          justifyContent: "flex-end",
          paddingBottom: 55,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 100, color: "#263200" }}> {counter} </Text>
        <Text style={{ fontSize: 25, color: "#263200" }}>Counter</Text>
      </View>

      <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#263200",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRightColor: "#C1EA37",
              borderWidth: 1,
            }}
            onPress={() => setCounter(counter - 1)}
          >
            <Text style={{ color: "#C1EA37", fontSize: 40 }}>-</Text>
            <Text style={{ color: "#C1EA37", fontSize: 20 }}>-1</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#263200",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setCounter(counter + 1)}
          >
            <Text style={{ color: "#C1EA37", fontSize: 40 }}>+</Text>
            <Text style={{ color: "#C1EA37", fontSize: 20 }}>+1</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
