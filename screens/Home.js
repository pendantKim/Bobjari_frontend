import React from "react";
import styled from "styled-components";
import { View, Text, ScrollView } from "react-native";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import constants from "../constants";

export default () => {
    return (
        <ScrollView>
            <Container>
                <SearchBar />

                <Title>현재 인기 몰이 직업인</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Container>
        </ScrollView>
    );
};

const Container = styled.View`
    margin-top: ${constants.height / 10}
    flex: 1;
    align-items: center;
`;

const Title = styled.Text`
    align-items: center;
    font-size: 20px;
`;
