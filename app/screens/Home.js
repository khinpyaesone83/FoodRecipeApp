import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import data from "../config/data";
import { COLORS, FONTS, SIZES } from "./../config/theme";
import { Ionicons } from "@expo/vector-icons";
import CategoryCard from "./../components/CategoryCard";
import TrendingCard from "../components/TrendingCard";

const Home = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          alignItems: "center",
          height: 80,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Text style={{ color: COLORS.darkLime, ...FONTS.h2 }}>
            Hello Louis,
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3, marginTop: 3 }}>
            What you want to cook today?
          </Text>
        </View>
        <TouchableOpacity onPress={() => console.log("profile")}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGray,
          height: 50,
          marginHorizontal: SIZES.padding,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 10,
          paddingHorizontal: SIZES.radius,
        }}
      >
        <Ionicons name="search" size={24} color={COLORS.gray} />
        <TextInput
          style={{
            marginLeft: 10,
            ...FONTS.body3,
          }}
          placeholder="Search Recipes"
        />
      </View>
    );
  };

  const renderSeeRecipe = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.radius,
          backgroundColor: COLORS.lightGray,
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.radius,
          borderRadius: 10,
        }}
      >
        <Image
          source={require("../../assets/images/recipe.png")}
          style={{
            height: 80,
            width: 80,
          }}
        />
        <View
          style={{
            paddingVertical: SIZES.radius,
            marginLeft: 10,
            width: "60%",
          }}
        >
          <Text>You have 12 recipes that you haven't tried yet</Text>
          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
            onPress={() => console.log("see recipe")}
          >
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: "underline",
                ...FONTS.h4,
              }}
            >
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTrendingSection = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            fontWeight: "bold",
            ...FONTS.h2,
          }}
        >
          Trending Recipe
        </Text>
        <FlatList
          data={data.trendingRecipes}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <TrendingCard
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : 0,
                }}
                recipeItem={item}
                onPress={() => navigation.navigate("Recipe", { recipe: item })}
              />
            );
          }}
        />
      </View>
    );
  };

  const renderCategoryHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "space-between",
          marginHorizontal: SIZES.padding,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            flex: 1,
            fontWeight: "bold",
            ...FONTS.h2,
          }}
        >
          Categories
        </Text>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          View All
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <FlatList
        data={data.categories}
        keyExtractor={(item) => item.id.toString()}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}
            {/* SearchBar */}
            {renderSearchBar()}
            {/* See Recipe Card */}
            {renderSeeRecipe()}
            {/* Trending Section */}
            {renderTrendingSection()}
            {/* Category Header */}
            {renderCategoryHeader()}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <CategoryCard
              categoryItem={item}
              onPress={() => navigation.navigate("Recipe", { recipe: item })}
            />
          );
        }}
        ListFooterComponent={<View></View>}
      />
    </SafeAreaView>
  );
};

export default Home;
