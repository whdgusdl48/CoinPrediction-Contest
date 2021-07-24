/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e9ebf0;
  height: 1000px;
  padding-top: 150px;
`;
const MainContainer = styled.div`
  text-align: center;
`;
const Logo = styled.div`
  font-size: 70px;
  font-family: "Arimo", sans-serif;
  font-weight: 700;
  font-style: italic;
  color: #093687;
  margin-bottom: 30px;
  @media only screen and (max-width: 800px) {
    font-size: 36px;
  }
`;
const TextField = styled.input`
  margin-top: 20px;
  border: 1px solid lightgray;
  font-size: 15px;
  padding: 10px;
  width: 350px;
  height: 50px;
`;
const LoginButton = styled.button`
  background-color: #093687;
  font-size: 15px;
  padding: 10px 50px;
  color: white;
  margin-top: 50px;
  justify-content: center;
`;
const Alert = styled.p`
  color: red;
  margin: 10px 2px;
  font-size: 15px;
`;
export default () => (
  <Main>
    <MainContainer>
      <Logo>Logo</Logo>
      <TextField placeholder={"아이디"}></TextField>
      <br></br>
      <TextField type={"password"} placeholder={"비밀번호"}></TextField>
      <Alert>아이디 혹은 비밀번호가 일치하지 않습니다.</Alert>
      <LoginButton>로그인</LoginButton>
    </MainContainer>
  </Main>
);
