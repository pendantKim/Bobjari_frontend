import React, { useState, useEffect } from "react";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { StyleSheet, Text, View } from "react-native";

import TabNavigation from "./navigation/TabNavigation";

export default function App() {
    const [loaded, setLoaded] = useState(false);
    const preLoad = async () => {
        try {
            setLoaded(true);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        preLoad();
    }, []);

    return loaded ? <TabNavigation /> : <AppLoading />;
}
