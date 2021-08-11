/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import Content from "../../../Components/Content";
import SubmitNav from "../../../Components/SubmitNav";

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

    & li:last-child {
        color: #d60000;
    }
`;

const SubmitBox = styled.div`
    & h2 {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 30px;
        width: 100%;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SubmitRow = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    & div {
        height: 40px;
        width: 100%;
        border: 1.5px solid #cacaca;
        display: flex;
        align-items: center;
        padding: 0 15px;
        color: #707070;
        cursor: default;
    }

    & input {
        display: none;
    }

    & label {
        display: flex;
        height: 40px;
        width: 100px;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        background-color: #093687;
        cursor: pointer;
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

export default () => {
    const handleChange = (e) => {
        const path = e.target.value.split("\\");
        document.querySelector(".fileName").innerText = path[path.length - 1];
    };
    return (
        <Content>
            <SubmitNav />
            <Alert>
                <li>한 번 제출된 데이터는 수정할 수 없습니다.</li>
                <li>제출시 신중하게 확인 후 제출해주시길 바랍니다</li>
                <li>제출은 팀당 한 번만 제출할 수 있습니다.</li>
                <li>제출시 파일명 양식을 꼭 지켜주시길 바랍니다.</li>
                <li>파일명 양식 : 0일차_팀명.xlsx</li>
            </Alert>
            <SubmitBox>
                <h2>7일차 결과 데이터 제출</h2>
                <SubmitRow>
                    <div className="fileName">파일명</div>
                    <input id="file" type="file" onChange={handleChange} />
                    <label htmlFor="file">파일 첨부</label>
                </SubmitRow>
                <SubmitBtn>제출</SubmitBtn>
            </SubmitBox>
        </Content>
    );
};
