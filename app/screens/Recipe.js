import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import IngredientItem from "../components/IngredientItem";
import { COLORS, FONTS, SIZES } from "../config/theme";
import { BlurView } from "expo-blur";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Viewers from "../components/Viewers";

const Recipe = ({ navigation, route }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let { recipe } = route.params;
    setSelectedRecipe(recipe);
  }, []);

  const renderRecipeCardHeader = () => {
    return (
      <View
        style={{
          marginTop: -1000,
          paddingTop: 1000,
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Animated.Image
          source={selectedRecipe?.image}
          resizeMode="contain"
          style={{
            height: 350,
            width: "200%",
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-350, 0, 350],
                  outputRange: [-350 / 2, 0, 350 * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-350, 0, 350],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />
        {/* Recipe Creator Card */}
        <Animated.View
          style={{
            position: "absolute",
            bottom: 10,
            left: 30,
            right: 30,
            height: 80,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 170, 250],
                  outputRange: [0, 0, 100],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        >
          <BlurView
            tint="dark"
            style={{
              flex: 1,
              borderRadius: SIZES.radius,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/* Profile Image */}
              <View style={{ marginLeft: 20 }}>
                <Image
                  source={selectedRecipe?.author?.profilePic}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                  }}
                />
              </View>

              {/* Label */}
              <View style={{ flex: 1, marginHorizontal: 20 }}>
                <Text
                  style={{
                    color: COLORS.lightGray2,
                    ...FONTS.body4,
                  }}
                >
                  Recipe by:
                </Text>
                <Text
                  style={{
                    color: COLORS.white2,
                    ...FONTS.h3,
                  }}
                >
                  {selectedRecipe?.author?.name}
                </Text>
              </View>
              {/* Button */}
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: COLORS.lightGreen1,
                }}
                onPress={() => console.log("view profile")}
              >
                <AntDesign
                  name="arrowright"
                  size={22}
                  color={COLORS.lightGreen1}
                />
              </TouchableOpacity>
            </View>
          </BlurView>
        </Animated.View>
      </View>
    );
  };

  const renderHeaderBar = () => {
    return (
      <View
        style={{
          position: "absolute",
          top: 10,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: SIZES.padding,
          paddingBottom: 10,
        }}
      >
        {/* BackBottom */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 35,
            width: 35,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            backgroundColor: COLORS.transparentBlack5,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../assets/icons/back.png")}
            style={{
              width: 15,
              height: 15,
              tintColor: COLORS.lightGreen,
            }}
          />
        </TouchableOpacity>

        {/* Bookmark */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 35,
            width: 35,
          }}
        >
          <Ionicons
            name={selectedRecipe?.isBookmark ? "bookmark" : "bookmark-outline"}
            size={30}
            color={COLORS.darkGreen}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderRecipeInfo = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 130,
          width: SIZES.width,
          paddingHorizontal: 30,
          paddingVertical: 20,
          alignItems: "center",
        }}
      >
        {/* Recipe */}
        <View
          style={{
            flex: 1.5,
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h2 }}>{selectedRecipe?.name} </Text>
          <Text
            style={{
              marginTop: 5,
              color: COLORS.lightGray2,
              ...FONTS.body4,
            }}
          >
            {selectedRecipe?.duration} | {selectedRecipe?.serving} Serving
          </Text>
        </View>
        {/* Viewer */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Viewers viewersList={selectedRecipe?.viewers} />
        </View>
      </View>
    );
  };

  return (
    <View>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderRecipeCardHeader()}
            {/* Info */}
            {renderRecipeInfo()}
            {/* Ingredient Title */}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => {
          return <IngredientItem recipeItem={item} />;
        }}
      />
      {renderHeaderBar()}
    </View>
  );
};

export default Recipe;
