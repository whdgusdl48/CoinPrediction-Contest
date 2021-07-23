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
const Dot = styled.span`
  font-size: 15px;
  font-weight: 700;
  margin-right: 5px;
`;
const Caution = styled.ul`
  padding-top: 50px;
  & > li {
    padding: 10px;
    &:last-child {
      color: red;
    }
  }
`;
const Submit = styled.form`
  margin-top: 100px;
  & > h2 {
    font-size: 30px;
    font-weight: 600;
  }
  & > input {
    margin-top: 40px;
    padding: 5px;
    font-size: 15px;
    width: 90%;
    border: 1px solid;
  }
  & > div {
    display: flex;
    justify-content: center;
  }
`;
const FileButton = styled.button`
  background-color: #093687;
  font-size: 15px;
  padding: 5px 10px;
  color: white;
`;
const SubmitButton = styled.button`
  background-color: #093687;
  font-size: 15px;
  padding: 10px 50px;
  color: white;
  margin-top: 80px;
`;
export default () => (
  <Main>
    <MainContainer>
      <Container>
        <h1>제출</h1>
        <Caution>
          <li>
            <Dot>·</Dot>한 번 제출된 데이터는 수정할 수 없습니다.
          </li>
          <li>
            <Dot>·</Dot>제출시 신중하게 확인 후 제출해주시길 바랍니다.
          </li>
          <li>
            <Dot>·</Dot>제출은 팀당 한 번만 제출할 수 있습니다.
          </li>
          <li>
            <Dot>·</Dot>제출시 파일명 양식을 꼭 지켜주시길 바랍니다.
          </li>
          <li>
            <Dot>·</Dot>파일명 양식: 0일차_팀명.xlsx
          </li>
        </Caution>
        <Submit>
          <h2>7일차 결과 데이터 제출 </h2>
          <input type="text"></input>
          <span>
            <FileButton>파일첨부</FileButton>
          </span>
          <div>
            <SubmitButton>제출</SubmitButton>
          </div>
        </Submit>
      </Container>
    </MainContainer>
  </Main>
);
