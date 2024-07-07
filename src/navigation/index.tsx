import React, {  } from "react";
import { FontAwesome5, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RealTracking from "../screens/realTracking";
import BodyActivityData from "../screens/bodyActivityData";
import LeaderBoard from "../screens/learderBoard";
import { colors } from "../theme";



const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.gray[100],
        tabBarInactiveTintColor: colors.primary[10],
        tabBarStyle: {
          backgroundColor: colors.primary.offset_night,
        },
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={RealTracking}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <Ionicons
              name={focused ? "location" : "location"}
              size={20}
              color={focused ? colors.primary[10] : colors.primary[10]}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Body Activity"
        component={BodyActivityData}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <FontAwesome5
              name={focused ? "running" : "running"}
              size={20}
              color={focused ? colors.primary[10] : colors.primary[10]}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Leaderboard"
        component={LeaderBoard}
        options={{
          tabBarIcon: ({ focused }: any) => (
            <FontAwesome5
            name={focused ? "clipboard-list" : "clipboard-list"}
              size={20}
              color={focused ? colors.primary[10] : colors.primary[10]}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
};


const BaseStack = createNativeStackNavigator();
const BaseNavigator = () => {

  return (
    <BaseStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BaseStack.Screen
        component={BottomTabNavigator}
        name="BaseNavigator"
        options={{
          headerShown: false,
        }}
      />
    </BaseStack.Navigator>
  );
};

export default BaseNavigator;
