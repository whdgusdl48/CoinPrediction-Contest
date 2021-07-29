/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Logo = styled.div`
    font-size: 70px;
    font-family: "Arimo", sans-serif;
    font-weight: 700;
    font-style: italic;
    color: #093687;
    margin-bottom: 30px;

    @media only screen and (max-width: 800px) {
        font-size: 50px;
    }
`;

const TextField = styled.input`
    margin-bottom: 10px;
    border: 1px solid lightgray;
    font-size: 15px;
    padding: 10px 15px;
    width: 100%;
    height: 50px;
    outline: 0;

    &:focus {
        border: 1.5px solid #0062df;
    }

    @media only screen and (max-width: 800px) {
        height: 45px;
    }
`;

const LoginButton = styled.button`
    background-color: #093687;
    font-size: 15px;
    padding: 12px 50px;
    color: white;
    justify-content: center;
    font-size: 18px;
    margin-top: 10px;
    width: 100%;

    @media only screen and (max-width: 800px) {
        font-size: 15px;
    }
`;

const Alert = styled.p`
    color: red;
    margin: 10px 2px;
    font-size: 15px;
`;

const LoginWrap = styled.div`
    min-height: calc(100vh - 190px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
`;

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 350px;
    padding-bottom: 70px;
`;

export default () => (
    // <Main>
    //     <MainContainer>
    //         <Logo>Logo</Logo>
    //         <TextField placeholder={"아이디"}></TextField>
    //         <br></br>
    //         <TextField type={"password"} placeholder={"비밀번호"}></TextField>
    //         <Alert>아이디 혹은 비밀번호가 일치하지 않습니다.</Alert>
    //         <LoginButton>로그인</LoginButton>
    //     </MainContainer>
    // </Main>
    <LoginWrap>
        <LoginBox>
            <Logo>Logo</Logo>
            <TextField placeholder={"아이디"}></TextField>
            <TextField type={"password"} placeholder={"비밀번호"}></TextField>
            <LoginButton>로그인</LoginButton>
        </LoginBox>
    </LoginWrap>
);
