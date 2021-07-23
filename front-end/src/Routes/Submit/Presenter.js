/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Main = styled.div`
  padding: 30px 100px;
  background-color: #e9ebf0;
  height: 1000px;
`;

const MainContainer = styled.div`
  background-color: white;
  height: 100%;
`;

const Container = styled.div`
  margin: 0 100px;
  & > h1 {
    padding: 100px 0 30px 0;
    font-size: 30px;
    font-weight: 600;
    border-bottom: 2px solid #a0a0a0;
  }
`;
export default () => (
  <Main>
    <MainContainer>
      <Container>
        <h1>제출</h1>
      </Container>
    </MainContainer>
  </Main>
);
