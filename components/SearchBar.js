import React from "react";
import { TextInput } from "react-native";
import constants from "../constants";

const SearchBar = () => (
    <TextInput
        style={{
            width: constants.width - 50,
            height: constants.height / 15,
            marginBottom: constants.height / 15,
            backgroundColor: "white",
            borderRadius: 10,
            textAlign: "center",
            borderRightWidth: 5,
            borderBottomWidth: 5,
        }}
        placeholder={"어떤 직업을 찾으시나요?"}
    />
);

export default SearchBar;
