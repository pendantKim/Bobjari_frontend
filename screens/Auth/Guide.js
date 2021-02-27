import React from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
import styled from "styled-components";
import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9DD6EB",
    },
    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97CAE5",
    },
    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#92BBD9",
    },
    text: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
    },
});

export default () => {
    return (
        <Container>
            <Swiper>
                <SwipeScreen>
                    <Title>환영합니다.</Title>
                    <Content>
                        밥자리에서 여러 직종의 현직자들을 만나보세요.
                    </Content>
                </SwipeScreen>
                <SwipeScreen>
                    <Content>
                        관심있는 분야의 전문가를 직접 인터뷰하세요.
                    </Content>
                </SwipeScreen>
                <SwipeScreen>
                    <Content>
                        밥 한끼로 연결되는 직업 네트워크 , 밥자리가 열어갑니다.
                    </Content>
                </SwipeScreen>
            </Swiper>
            <Button title="로그인"></Button>
        </Container>
    );
};

const SwipeScreen = styled.View`
    flex: 1;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: gray;
`;

const Content = styled.Text`
    font-size: 16px;
    color: black;
`;

const Container = styled.View`
    flex: 1;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const Illuste = styled.Image``;
