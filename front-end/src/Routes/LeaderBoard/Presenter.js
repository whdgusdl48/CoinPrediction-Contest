/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import Content from "../../Components/Content";
import { Link } from "react-router-dom";

const Board = styled.div`
    & > div {
        display: flex;
        align-items: center;
    }
    & > div > div {
        padding: 12px 10px;
    }
`;

const Head = styled.div`
    background-color: #093687;
    font-weight: 500;
    color: #fff;

    & div {
        text-align: center;
    }
`;

const Row = styled.div`
    font-weight: 500;

    &:nth-child(odd) {
        background-color: #e9eef3;
    }
`;

const Rank = styled.div`
    min-width: 120px;
    text-align: center;
    margin-right: 50px;
    @media only screen and (max-width: 800px) {
        min-width: 80px;
        margin-right: 0px;
    }
`;

const TeamName = styled.div`
    width: 100%;
`;

const Score = styled.div`
    min-width: 120px;
    text-align: center;
    @media only screen and (max-width: 800px) {
        min-width: 80px;
    }
`;

export default ({ score }) => (
    <Content>
        <h1>리더보드</h1>
        <Board>
            <Head>
                <Rank>순위</Rank>
                <TeamName>팀명</TeamName>
                <Score>점수</Score>
            </Head>
            {score
                .sort((a, b) => b.score - a.score)
                .map((item, idx) => (
                    <Row key={idx}>
                        <Rank>{idx + 1}</Rank>
                        <TeamName>{item.name}</TeamName>
                        <Score>{item.score}</Score>
                    </Row>
                ))}
        </Board>
    </Content>
);
