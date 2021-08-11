/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import styled from "styled-components";
import Content from "../../Components/Content";
import { Link, useParams } from "react-router-dom";
import { news } from "./Container";
const Board = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 30px;
`;

const Title = styled.div`
  font-size: 40px;
  @media only screen and (max-width: 800px) {
    font-size: 30px;
  }
`;
const SubTextBox = styled.div`
  display: flex;
  margin: 25px 0;
  padding-bottom: 30px;
  border-bottom: 1px solid #dadada;
`;
const SubText = styled.div`
  color: gray;
  font-size: 15px;
  &:last-child {
    margin-left: auto;
  }
  @media only screen and (max-width: 800px) {
    font-size: 10px;
  }
`;

const SubTitleBox = styled.div`
  border-left: 4px solid;
  padding-left: 15px;
  margin: 30px 70px;
  @media only screen and (max-width: 800px) {
    margin: 10px;
  }
`;
const SubTitle = styled.div`
  font-size: 22px;
  @media only screen and (max-width: 800px) {
    font-size: 18px;
  }
`;
const ContentBox = styled.div`
  font-size: 22px;
  font-weight: 300;
  margin: 40px 70px;
  letter-spacing: 1px;
  line-height: 25px;
  @media only screen and (max-width: 800px) {
    font-size: 18px;
    margin: 30px 10px;
  }
`;
const Detail = () => {
  const { id } = useParams();
  return (
    <Content>
      <h1>기사</h1>
      <Board>
        <Title>{news[id].title}</Title>
        <SubTextBox>
          <SubText>등록일: {news[id].date}</SubText>
          <SubText>조회수: {news[id].views}</SubText>
        </SubTextBox>
        <SubTitleBox>
          <SubTitle>{news[id].subTitle}</SubTitle>
        </SubTitleBox>
        <ContentBox>
          <p>
            도쿄=연합뉴스) 특별취재단 = 45년 만의 메달에 도전했던 여자배구가
            아쉽게 시상대에 서지 못하면서 태극 전사들의 도쿄 여정도 마무리됐다.
            스테파노 라바리니 감독이 지휘하는 한국 여자배구 대표팀은 8일 오전
            일본 도쿄 아리아케 아레나에서 열린 2020 도쿄올림픽 3·4위전에서
            세르비아에 세트 스코어 0-3(18-25 15-25 15-25)으로 졌다. 이로써
            우리나라는 2012 런던 대회 때와 같은 4위로 대회를 마감했다. 1976년
            몬트리올 대회에서 한국 구기 종목 사상 첫 메달(동메달)을 수확했던
            여자배구는 45년 만이자 역대 두 번째 메달의 꿈을 꿨으나 끝내 이루지
            못했다. 도쿄=연합뉴스) 특별취재단 = 45년 만의 메달에 도전했던
            여자배구가 아쉽게 시상대에 서지 못하면서 태극 전사들의 도쿄 여정도
            마무리됐다.
          </p>
          <p>
            스테파노 라바리니 감독이 지휘하는 한국 여자배구 대표팀은 8일 오전
            일본 도쿄 아리아케 아레나에서 열린 2020 도쿄올림픽 3·4위전에서
            세르비아에 세트 스코어 0-3(18-25 15-25 15-25)으로 졌다. 이로써
            우리나라는 2012 런던 대회 때와 같은 4위로 대회를 마감했다. 1976년
            몬트리올 대회에서 한국 구기 종목 사상 첫 메달(동메달)을 수확했던
            여자배구는 45년 만이자 역대 두 번째 메달의 꿈을 꿨으나 끝내 이루지
            못했다.
          </p>
        </ContentBox>
      </Board>
    </Content>
  );
};

export default Detail;
