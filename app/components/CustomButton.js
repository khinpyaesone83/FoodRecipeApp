import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "./../config/theme";

const CustomButton = ({ label, onPress, colors, buttonStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        style={{
          height: 60,
          marginTop: SIZES.base,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: SIZES.padding,
          ...buttonStyle,
        }}
      >
        <Text style={{ color: COLORS.white, textAlign: "center", ...FONTS.h3 }}>
          {label}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
