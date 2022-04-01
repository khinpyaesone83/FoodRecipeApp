import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { FONTS, SIZES } from "../config/theme";
import { COLORS } from "./../config/theme";

const CategoryCard = ({ categoryItem, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray,
        marginHorizontal: SIZES.padding,
      }}
      onPress={onPress}
    >
      {/* Image */}
      <Image
        source={categoryItem.image}
        style={{
          width: 100,
          height: 100,
          borderRadius: SIZES.radius,
        }}
      />
      {/* Detail */}

      <View
        style={{
          width: "65%",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h2 }}>{categoryItem.name}</Text>
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
          {categoryItem.duration} | {categoryItem.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
