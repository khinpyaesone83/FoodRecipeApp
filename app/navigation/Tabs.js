import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./../screens/Home";
import { COLORS } from "../config/theme";
import TabIcon from "../components/TabIcon";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: "absolute",
          // bottom: 0,
          // left: 0,
          // right: 0,
          // elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: "transparent",
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="home" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="search" />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="bookmark" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="settings" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
