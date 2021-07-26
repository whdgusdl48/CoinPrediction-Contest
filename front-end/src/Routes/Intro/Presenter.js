/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Content from "../../Components/Content";
import styled from "styled-components";

const Intro = styled.div`
    & h2 {
        color: #093687;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
    }

    & section:not(:last-child) {
        margin-bottom: 40px;
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
                <h2>내용</h2>
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
                <h2>평가기준</h2>
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
                <h2>수상</h2>
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
        </Intro>
    </Content>
);
