import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "./../config/theme";

const TabIcon = ({ focused, icon }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 70,
        width: 60,
      }}
    >
      <Ionicons
        name={icon}
        size={25}
        color={focused ? COLORS.darkLime : COLORS.gray}
      />
      {focused && (
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: COLORS.darkGreen,
          }}
        />
      )}
    </View>
  );
};

export default TabIcon;
