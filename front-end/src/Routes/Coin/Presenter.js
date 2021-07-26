/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Main = styled.div`
  padding: 30px 100px;
  background-color: #e9ebf0; //회색
  min-height: 1000px;
  @media only screen and (max-width: 800px) {
    padding: 20px 20px;
  }
`;

const MainContainer = styled.div`
  background-color: white;
  min-height: 1000px;
  padding: 50px 100px;
  @media only screen and (max-width: 800px) {
    padding: 40px 20px;
  }
`;

const Container = styled.div`
  & > h1 {
    padding: 30px 0;
    font-size: 30px;
    font-weight: 600;
    border-bottom: 2px solid #a0a0a0;
    @media only screen and (max-width: 800px) {
      padding-bottom: 30px;
    }
  }
`;
export default () => (
  <Main>
    <MainContainer>
      <Container>
        <h1>코인데이터</h1>
      </Container>
    </MainContainer>
  </Main>
);
