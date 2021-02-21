import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import MyProfile from "../screens/Tabs/MyProfile";
import WishList from "../screens/Tabs/WishList";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "홈") {
                            iconName = focused ? "ios-home" : "ios-home";
                        } else if (route.name === "검색") {
                            iconName = focused ? "ios-search" : "ios-search";
                        } else if (route.name === "위시리스트") {
                            iconName = focused ? "ios-heart" : "ios-heart";
                        } else if (route.name === "내 프로필") {
                            iconName = focused ? "ios-person" : "ios-person";
                        }

                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: "coral",
                    inactiveTintColor: "gray",
                }}
            >
                <Tab.Screen name="홈" component={Home} />
                <Tab.Screen name="검색" component={Search} />
                <Tab.Screen name="위시리스트" component={WishList} />
                <Tab.Screen name="내 프로필" component={MyProfile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
