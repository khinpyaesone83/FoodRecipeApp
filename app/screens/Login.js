import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StatusBar, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { COLORS, FONTS, SIZES } from "./../config/theme";

const Login = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? "65%" : "60%",
        }}
      >
        <ImageBackground
          source={require("../../assets/images/login-background.png")}
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                width: "90%",
                color: COLORS.white,
                ...FONTS.largeTitle,
                lineHeight: 45,
              }}
            >
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const renderDetail = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Description */}
        <Text
          style={{
            marginTop: SIZES.radius,
            width: "70%",
            color: COLORS.gray,
            ...FONTS.body3,
          }}
        >
          Discover more than 1200 food recipes in you hands and cooking it
          easily!
        </Text>

        {/* Buttons */}
        <CustomButton
          label="Login"
          onPress={() => navigation.navigate("Home")}
          colors={[COLORS.darkGreen, COLORS.darkLime]}
        />
        <CustomButton
          label="Sign Up"
          onPress={() => navigation.navigate("Home")}
          colors={[COLORS.black, COLORS.black]}
          buttonStyle={{
            borderWidth: 1,
            borderColor: COLORS.darkLime,
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.black,
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" />

      {/* Header */}
      {renderHeader()}

      {/* Detail */}
      {renderDetail()}
    </View>
  );
};

export default Login;
