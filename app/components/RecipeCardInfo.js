import React from "react";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, View } from "react-native";
import { SIZES, COLORS, FONTS } from "../config/theme";
import { Ionicons } from "@expo/vector-icons";

const RecipeCardInfo = ({ recipeItem }) => {
  return (
    <BlurView tint="dark" style={styles.recipeCardContainer}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              width: "70%",
              color: COLORS.white,
              ...FONTS.h2,
            }}
          >
            {recipeItem.name}
          </Text>
          <Ionicons
            name={recipeItem.isBookmark ? "bookmark" : "bookmark-outline"}
            size={24}
            color={COLORS.darkGreen}
          />
        </View>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          {recipeItem.duration} | {recipeItem.serving} Serving
        </Text>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  recipeCardContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
});

export default RecipeCardInfo;
