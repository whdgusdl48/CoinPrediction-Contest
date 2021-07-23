/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Main = styled.div`
  padding: 30px 100px;
  background-color: #e9ebf0;
`;

const MainContainer = styled.div`
  background-color: white;
  height: 100%;
  padding: 100px 0;
`;

const Container = styled.div`
  margin: 0 100px;
  & > h1 {
    padding-bottom: 30px;
    font-size: 30px;
    font-weight: 600;
    border-bottom: 2px solid #a0a0a0;
  }
`;
const Contents = styled.div`
  & > h2 {
    color: #093687;
    font-size: 25px;
    padding: 60px 0px 10px 0;
  }
  & > p {
    padding: 10px 0;
  }
`;
export default () => (
  <Main>
    <MainContainer>
      <Container>
        <h1>BitCoin Prediction</h1>
        <Contents>
          <h2>개요</h2>
          <p>주최 : 충남대학교 컴퓨터융합학부, 동아리 ADMIN, PROBRAIN, GROW</p>
          <p>주관 : SW중심대학사업단</p>
          <p>일시 : 2020. 12 . 14(월) ~ 2020. 12. 23(수)</p>
          <p>행사명 : 2020 Coin Kingdom</p>
          <p>장소 : 공대 5호관, 컴퓨터 융합학부</p>
          <p>참여대상 : 충남대학교 재학생</p>

          <h2>목적</h2>
          <p>주최 : 충남대학교 컴퓨터융합학부, 동아리 ADMIN, PROBRAIN, GROW</p>
          <p>주관 : SW중심대학사업단</p>
          <p>일시 : 2020. 12 . 14(월) ~ 2020. 12. 23(수)</p>
          <p>행사명 : 2020 Coin Kingdom</p>
          <p>장소 : 공대 5호관, 컴퓨터 융합학부</p>
          <p>참여대상 : 충남대학교 재학생</p>

          <h2>내용</h2>
          <p>주최 : 충남대학교 컴퓨터융합학부, 동아리 ADMIN, PROBRAIN, GROW</p>
          <p>주관 : SW중심대학사업단</p>
          <p>일시 : 2020. 12 . 14(월) ~ 2020. 12. 23(수)</p>
          <p>행사명 : 2020 Coin Kingdom</p>
          <p>장소 : 공대 5호관, 컴퓨터 융합학부</p>
          <p>참여대상 : 충남대학교 재학생</p>

          <h2>평가기준</h2>
          <p>주최 : 충남대학교 컴퓨터융합학부, 동아리 ADMIN, PROBRAIN, GROW</p>
          <p>주관 : SW중심대학사업단</p>
          <p>일시 : 2020. 12 . 14(월) ~ 2020. 12. 23(수)</p>
          <p>행사명 : 2020 Coin Kingdom</p>
          <p>장소 : 공대 5호관, 컴퓨터 융합학부</p>
          <p>참여대상 : 충남대학교 재학생</p>

          <h2>수상</h2>
          <p>주최 : 충남대학교 컴퓨터융합학부, 동아리 ADMIN, PROBRAIN, GROW</p>
          <p>주관 : SW중심대학사업단</p>
          <p>일시 : 2020. 12 . 14(월) ~ 2020. 12. 23(수)</p>
          <p>행사명 : 2020 Coin Kingdom</p>
          <p>장소 : 공대 5호관, 컴퓨터 융합학부</p>
          <p>참여대상 : 충남대학교 재학생</p>
        </Contents>
      </Container>
    </MainContainer>
  </Main>
);
