import * as React from "react";
import { Platform, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Search from "../screens/Search";
import MyProfile from "../screens/MyProfile";
import Chat from "../screens/Chat";
import pointColor from "../constants";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName = Platform.OS === "ios" ? "ios-" : "md-";

                        if (route.name === "홈") {
                            iconName += "home";
                        } else if (route.name === "검색") {
                            iconName += "search";
                        } else if (route.name === "채팅") {
                            iconName += "chatbubbles";
                        } else if (route.name === "내 프로필") {
                            iconName += "person";
                        }

                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={iconName}
                                size={20}
                                color={focused ? `${pointColor}` : "grey"}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    showLabel: false,
                    style: {
                        backgroundColor: "white",
                    },
                }}
            >
                <Tab.Screen name="홈" component={Home} />
                <Tab.Screen name="검색" component={Search} />
                <Tab.Screen name="채팅" component={Chat} />
                <Tab.Screen name="내 프로필" component={MyProfile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
