/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import styled from "styled-components";
import Content from "../../Components/Content";
import { Link, useParams, useLocation } from "react-router-dom";
import { info, dataFile } from "./Container";
const Board = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 30px;
`;

const Title = styled.div`
  font-size: 25px;
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
const AttachmentBox = styled.div`
  display: flex;
  flex: 1;
  border-top: 1px solid #dadada;
  border-bottom: 1px solid #dadada;
  margin: 80px 0;
  & > div {
    padding: 20px 40px;
    border-right: 1px solid #dadada;
    background-color: #efefef;
  }
`;
const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const isInfo = location.state.isInfo;
  return (
    <Content>
      <h1>기사</h1>
      <Board>
        <Title>
          {isInfo === true
            ? "[공지] " + info[id].title
            : dataFile[id - 4].title}
        </Title>
        <SubTextBox>
          <SubText>
            등록일: {isInfo === true ? info[id].date : dataFile[id - 4].date}
          </SubText>
          <SubText>
            조회수: {isInfo === true ? info[id].views : dataFile[id - 4].views}
          </SubText>
        </SubTextBox>
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
          <AttachmentBox>
            <div>첨부</div>
          </AttachmentBox>
        </ContentBox>
      </Board>
    </Content>
  );
};

export default Detail;
