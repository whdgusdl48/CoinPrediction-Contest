/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import homeImg from "../../img/main.png";
import kakaoImg from "../../img/kakaotalk.png";
import cnuLogo from "../../img/cnu_logo.png";
import cnuComLogo from "../../img/cnu_com_logo.JPG";
import adminLogo from "../../img/admin_logo.png";
import growLogo from "../../img/grow_logo.jpg";
import probrainLogo from "../../img/probrain_logo.jpg";

const Main = styled.div`
    background-color: #f9fafc;
`;

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const MainImg = styled.img`
    width: 100%;
    max-width: 1600px;
    height: 450px;
    object-fit: cover;
    object-position: center;

    @media only screen and (max-width: 800px) {
        height: 400px;
    }
`;

const MainIntro = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Intro = styled.h1`
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 15px;
    @media only screen and (max-width: 800px) {
        font-size: 26px;
    }
`;

const SubIntro = styled.h3`
    font-size: 16px;
    color: #595959;
    @media only screen and (max-width: 800px) {
        font-size: 14px;
    }
`;

const Participation = styled.div`
    display: flex;
    margin: 40px 0;
    /* justify-content: space-between;
    width: 200px; */

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > p:first-child {
            color: #093687;
            font-size: 32px;
            font-weight: 500;
            margin-bottom: 10px;
        }

        & > p:last-child {
            color: #6580af;
            font-size: 18px;
            font-weight: 500;
        }
    }

    & > div:first-child {
        margin-right: 40px;
    }
`;

const MainBtnBox = styled.div`
    & button {
        background-color: #0062df;
        width: 120px;
        height: 40px;
        color: #fff;
        font-size: 15px;
        font-weight: 500;
    }

    & a:first-child {
        margin-right: 20px;
    }

    & a:last-child button {
        background-color: #093687;
    }
`;

const DataContainer = styled.div`
    width: 100%;
    background-color: #0062df;
    padding: 60px 0;

    & > .inner {
        display: flex;

        & > div {
            background-color: #fff;
            width: 100%;
            box-shadow: 0px 5px 15px -5px #000;
            padding: 40px;

            & > h3 {
                color: #093687;
                font-size: 19px;
                font-weight: 600;
                margin-bottom: 10px;
            }
        }
    }

    @media only screen and (max-width: 800px) {
        & > .inner {
            flex-direction: column;
            align-items: center;

            & > div {
                max-width: 500px;
                padding: 30px 20px;

                & > h3 {
                    font-size: 16px;
                }
            }
        }
    }
`;

const NoticeBox = styled.div`
    margin-right: 60px;
    width: 100%;
    & > ul:not(:last-child) {
        border-bottom: 1px solid #a0a0a0;
        padding-bottom: 20px;
    }

    & > ul {
        padding-top: 20px;
        width: 100%;

        & > li {
            color: #595959;
            width: 100%;
            font-size: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            word-wrap: break-word;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            line-height: 1.5;
        }

        & > li:hover {
            font-weight: 600;
        }

        & > li:not(:last-child) {
            margin-bottom: 5px;
        }
    }

    @media only screen and (max-width: 800px) {
        margin-right: 0;
        margin-bottom: 60px;

        & > ul > li {
            @media only screen and (max-width: 800px) {
                font-size: 13px;
            }
        }
    }
`;

const DataBox = styled.div``;

const Dot = styled.span`
    font-size: 15px;
    font-weight: 700;
    margin-right: 5px;
`;

const CoinTable = styled.div`
    & > div {
        display: flex;

        & > div {
            width: 100%;
            padding: 10px 0;
            border-bottom: 1px solid #a0a0a0;
            margin-top: 13px;
            white-space: nowrap;

            @media only screen and (max-width: 800px) {
                font-size: 14px;
            }
        }

        /* & > div:not(:first-child) {
            text-align: right;
            color: #d60000;
            font-weight: 500;
        } */
    }
`;

const CoinData = styled.div`
    &:not(:first-child) {
        text-align: right;
        font-weight: 500;
        color: ${() => (current) => current === true ? "#d60000" : "#0062df"};
    }
`;

const EmptyContainer = styled.div`
    background-color: #fff;
    height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;

    & > h1 {
        font-size: 26px;
        font-weight: 600;
    }
`;

const KakaoBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9e300;
    padding: 30px 0;
`;

const OpenKakaoBtn = styled.div`
    display: flex;
    align-items: center;

    font-size: 20px;
    font-weight: 600;
    border: 2px solid #000;
    border-radius: 10px;
    padding: 10px 20px;
    transition: background-color 0.1s;

    & > img {
        width: 30px;
        margin-right: 15px;
        margin-top: 3px;
    }

    &:hover {
        background-color: #f9bf00;
    }

    @media only screen and (max-width: 800px) {
        font-size: 15px;
        & > img {
            width: 25px;
            margin-right: 10px;
            margin-top: 3px;
        }
    }
`;

const LogoContainer = styled.div`
    background-color: #ffffff;
    padding: 20px 0;

    & > .inner {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        & > img {
            width: 180px;
            margin: 10px;

            @media only screen and (max-width: 800px) {
                width: 120px;
            }
        }
    }
`;

const MAX_NOTICE = 4;
const MAX_FILE = 2;

export default ({ notice, file, coinData, maxCoinData }) => {
    // console.log(coinData);
    return (
        <Main>
            <MainContainer>
                <MainImg src={homeImg} />
                <MainIntro>
                    <Intro>코인 데이터 분석 대회</Intro>
                    <SubIntro>
                        코인 데이터를 분석하고 결과를 예측하세요.
                    </SubIntro>
                    <Participation>
                        <div>
                            <p>16</p>
                            <p>Teams</p>
                        </div>
                        <div>
                            <p>42</p>
                            <p>Members</p>
                        </div>
                    </Participation>
                    <MainBtnBox>
                        <Link to="/coin">
                            <button>데이터 보기</button>
                        </Link>
                        <Link to="login">
                            <button>로그인</button>
                        </Link>
                    </MainBtnBox>
                </MainIntro>
            </MainContainer>
            <DataContainer>
                <div className="inner">
                    <NoticeBox>
                        <h3>공지사항</h3>
                        <ul>
                            {file.map(({ title, link }, idx) => {
                                if (idx < MAX_FILE) {
                                    return (
                                        <li key={idx}>
                                            <Link to={link}>
                                                <Dot>·</Dot>
                                                {title}
                                            </Link>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                        <ul>
                            {notice.map(({ title, link }, idx) => {
                                if (idx < MAX_NOTICE) {
                                    return (
                                        <li key={idx}>
                                            <Link to={link}>
                                                <Dot>·</Dot>
                                                {title}
                                            </Link>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </NoticeBox>
                    <DataBox>
                        <h3>코인시세</h3>
                        <CoinTable>
                            {coinData.length !== maxCoinData
                                ? ""
                                : coinData.map((coin, idx) => {
                                      const name = coin["korean_name"];
                                      const rate =
                                          coin["signed_change_rate"].toFixed(3);

                                      const price = String(coin["trade_price"]);
                                      let textPrice = "";

                                      for (let i = 1; i <= price.length; i++) {
                                          textPrice =
                                              price[price.length - i] +
                                              textPrice;
                                          if (
                                              i % 3 === 0 &&
                                              i !== price.length
                                          ) {
                                              textPrice = "," + textPrice;
                                          }
                                      }

                                      return (
                                          <div key={idx}>
                                              <CoinData>{name}</CoinData>
                                              <CoinData
                                                  current={Math.sign(rate) >= 0}
                                              >
                                                  {textPrice} KRW
                                              </CoinData>
                                              <CoinData
                                                  current={Math.sign(rate) >= 0}
                                              >
                                                  {rate}%
                                              </CoinData>
                                          </div>
                                      );
                                  })}
                        </CoinTable>
                    </DataBox>
                </div>
            </DataContainer>
            <EmptyContainer>
                <h1>Contents</h1>
            </EmptyContainer>
            <KakaoBanner>
                <a href="" target="_blank">
                    <OpenKakaoBtn>
                        <img src={kakaoImg} alt="카카오 아이콘" />
                        <span>카카오톡 오픈채팅 참여하기</span>
                    </OpenKakaoBtn>
                </a>
            </KakaoBanner>
            <LogoContainer>
                <div className="inner">
                    <img src={cnuLogo} alt="충남대 로고" />
                    <img src={cnuComLogo} alt="충남대 컴퓨터공학과 로고" />
                    <img src={adminLogo} alt="어드민 로고" />
                    <img src={growLogo} alt="그로우 로고" />
                    <img src={probrainLogo} alt="프로브레인 로고" />
                </div>
            </LogoContainer>
        </Main>
    );
};
