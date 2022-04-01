import React from "react";
import { Image, View, Text } from "react-native";
import { COLORS, FONTS } from "../config/theme";

const IngredientItem = ({ recipeItem }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 30,
        marginVertical: 5,
      }}
    >
      {/* Icon */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.lightGray,
          borderRadius: 5,
          height: 50,
          width: 50,
        }}
      >
        <Image source={recipeItem.icon} style={{ height: 40, width: 40 }} />
      </View>
      {/* Description */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          {recipeItem.description}
        </Text>
      </View>
      {/* Quantity */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          {recipeItem.quantity}
        </Text>
      </View>
    </View>
  );
};

export default IngredientItem;
