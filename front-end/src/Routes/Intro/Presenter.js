/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Content from "../../Components/Content";
import styled from "styled-components";
import icon1 from "../../img/icon_1.png";
import icon2 from "../../img/icon_2.png";
import icon3 from "../../img/icon_3.png";
import icon4 from "../../img/icon_4.png";
import icon5 from "../../img/icon_5.png";

const Intro = styled.div`
    & h2 {
        color: #093687;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
    }

    & section:not(:last-child) {
        margin-bottom: 60px;
    }

    @media only screen and (max-width: 800px) {
        & h2 {
            font-size: 18px;
        }
    }
`;

const IconGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    @media only screen and (max-width: 690px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const IconRow = styled.div`
    display: flex;
    align-items: center;

    & img {
        width: 70px;
        margin-right: 20px;
    }
`;

const Red = styled.span`
    color: #d60000;
`;

const AwardBox = styled.div`
    display: flex;

    & > div:first-child {
        margin-right: 60px;
    }

    & h4 {
        font-weight: 600;
        margin-bottom: 10px;
    }
`;

export default () => (
    <Content>
        <h1>BitCoin Prediction</h1>
        <Intro>
            <section>
                <h2>개요</h2>
                <p>
                    주최 : 충남대학교 컴퓨터융합학부, 동아리 ADMIN, PROBRAIN,
                    GROW <br />
                    주관 : SW중심대학사업단 <br />
                    일시 : 2020. 12 . 14(월) ~ 2020. 12. 23(수) <br />
                    행사명 : 2020 Coin Kingdom <br />
                    장소 : 공대 5호관, 컴퓨터 융합학부 <br />
                    참여대상 : 충남대학교 재학생 <br />
                </p>
            </section>

            <section>
                <h2>목적</h2>
                <IconGrid>
                    <IconRow>
                        <img src={icon1} alt="머신러닝 아이콘" />
                        <p>
                            최근 컴퓨터 기술 트렌드인 Machine Learning에 대한
                            지식을 배울 수 있습니다.
                        </p>
                    </IconRow>
                    <IconRow>
                        <img src={icon2} alt="데이터 분석 아이콘" />
                        <p>
                            데이터 분석 및 전처리 방식, 예측을 통하여 데이터의
                            중요성을 배웁니다.
                        </p>
                    </IconRow>
                    <IconRow>
                        <img src={icon4} alt="협력 아이콘" />
                        <p>
                            팀원들과 대회 진행을 통해 팀워크를 향상하고 발표
                            경험을 쌓을 수 있습니다.
                        </p>
                    </IconRow>
                    <IconRow>
                        <img src={icon5} alt="금융 아이콘" />
                        <p>
                            가상화폐에 대한 금융자산의 이해를 도울 수 있습니다.
                        </p>
                    </IconRow>
                    <IconRow>
                        <img src={icon3} alt="비트코인 아이콘" />
                        <p>
                            최근 사회적 이슈인 가상화폐 데이터를 통하여
                            실질적으로 머신러닝에 대한 적용방식에 대해 배웁니다.
                        </p>
                    </IconRow>
                </IconGrid>
            </section>

            <section>
                <h2>내용</h2>
                <p>
                    현재 20,30대의 사회적 유행인 가상화폐(비트코인)이 성행하고
                    있음에 따라 작년 데이터 수집 및 분석과 융합하여 대회를
                    진행합니다.
                    <br />
                    기존의 해커톤 방식을 유지하며 긴 기간의 형태로 대회를
                    진행합니다.
                    <br />
                    대회 진행하기 전 데이터수집, 데이터 탐색적 분석, 데이터
                    전처리, 데이터 예측에 대한 강의를 통해 참가자들이 보다 쉽게
                    대회에 참가할 수 있게 합니다.
                    <br />
                    대회 진행 시 예측 문제, 분류 문제 등 다양한 카테고리 선택을
                    통하여 자신 있는 분야에 대해 직접 참가할 수 있도록 대회를
                    분리합니다.
                    <br />
                    <Red>
                        대회 진행은 Zoom, 카카오톡 오픈채팅방을 통해서
                        진행합니다.
                    </Red>
                    <br />
                    <br />
                    현재 사회적 거리두기, COVID-19 바이러스 상황을 고려하여 대면
                    방식이 아닌 비대면 방식으로 대회를 진행합니다.
                    <br />
                    그러므로, 각 참여팀의{" "}
                    <Red>팀장분들께선 반드시 팀장 대화방에 참여</Red>해야 하며{" "}
                    <Red>모든 팀원들은 대회 오픈 채팅방을 참가</Red>해야합니다.
                    <br />
                </p>
            </section>

            <section>
                <h2>평가기준</h2>
                <p>
                    평가 방식 : 참가 팀 투표 (40%) + 평가위원 심사 점수 (60%)
                    <br />
                    평가 위원 : 이영석 교수님 및 사업단 교수님들 (변경 가능성)
                    <br />
                    <br />
                    고학년 대회 : 보고서, 결과물을 바탕으로 심사를 진행하며,
                    프로그램 구동, 팀원 평가, 데이터 창의성 등 다양한 부분을
                    고려해 심사하여 시상.
                    <br />
                    저학년 대회 : 3개 부분(데이터의 창의성, 데이터의 정확성,
                    데이터 양)을 심사하여 시상.
                </p>
            </section>

            <section>
                <h2>수상</h2>
                <AwardBox>
                    <div>
                        <h4>고학년 대회</h4>
                        <p>
                            1등: 200,000원
                            <br /> 2등: 150,000원
                            <br /> 3등: 100,000원
                        </p>
                    </div>
                    <div>
                        <h4>저학년 대회</h4>
                        <p>
                            1등: 150,000원
                            <br /> 2등: 100,000원
                        </p>
                    </div>
                </AwardBox>
            </section>
        </Intro>
    </Content>
);
