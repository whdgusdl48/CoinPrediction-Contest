/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import Content from "../../Components/Content";

const Alert = styled.ul`
    padding-left: 20px;
    margin-bottom: 80px;

    & li {
        list-style-type: disc;
        color: #404040;
    }

    & li:not(:last-child) {
        margin-bottom: 8px;
    }
`;

const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1.5px solid #cfcfcf;
    border-right: 1.5px solid #cfcfcf;
    & > div {
        background-color: #093687;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        padding: 10px 20px;
        min-width: 80px;
    }

    & input {
        width: 100%;
        border: 0;
        outline: 0;
        padding: 10px 15px;
        font-size: 16px;
    }

    &:first-child input {
        border-top: 1.5px solid #cfcfcf;
    }

    & textarea {
        border: 0;
        outline: 0;
        resize: none;
        width: 100%;
        padding: 15px 15px;
        font-size: 16px;
        font-family: "Noto Sans KR", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
            "Helvetica Neue", sans-serif;
        min-height: 400px;
    }

    @media only screen and (max-width: 800px) {
        & > div {
            min-width: 50px;
            padding: 10px;
        }
    }
`;

const SubmitBtn = styled.button`
    margin-top: 30px;
    background-color: #093687;
    color: #fff;
    width: 150px;
    font-size: 16px;
    height: 40px;
`;

export default () => (
    <Content>
        <h1>문의</h1>
        <Alert>
            <li>
                문의에 대한 답변은 대회 신청시 작성하셨던 이메일로 발송됩니다.
            </li>
            <li>사정상 답변이 늦을 수 있는 점 양해부탁드립니다.</li>
        </Alert>
        <Form>
            <Row>
                <div>제목</div>
                <input type="text" />
            </Row>
            <Row>
                <div>날짜</div>
                <input type="text" />
            </Row>
            <Row>
                <div>내용</div>
                <textarea></textarea>
            </Row>
            <SubmitBtn>제출</SubmitBtn>
        </Form>
    </Content>
);
