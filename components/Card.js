import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import constants from "../constants";

export default () => {
    return (
        <Container>
            <Text>테스트용 프로필 카드</Text>
        </Container>
    );
};

const Container = styled.View`
    width: ${constants.width / 1.1}px;
    height: ${constants.height / 5}px;
    border-radius: 10px;
    border-right-width: 3px;
    border-bottom-width: 3px;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;
