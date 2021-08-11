/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import Content from "../../Components/Content";
import { Link } from "react-router-dom";

const Board = styled.div`
  & > div {
    display: flex;
    align-items: center;
    border-bottom: 1.5px solid #cacaca;
  }
  & > div > div {
    padding: 12px 10px;
  }
`;

const Head = styled.div`
  border-top: 1.5px solid #cacaca;
  background-color: #093687;
  font-weight: 500;
  color: #fff;

  & > div:first-child {
    text-align: center;
  }

  & > div:hover {
    text-decoration: none;
  }
`;

const Notice = styled.div`
  font-weight: 500;
`;

const DataFile = styled.div``;

const Title = styled.div`
  width: 100%;
  max-width: 790px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

const NoticeAlert = styled.span`
  color: #093687;
`;

const Date = styled.div`
  min-width: 150px;
  text-align: center;
  @media only screen and (max-width: 800px) {
    min-width: 100px;
  }
`;

const Views = styled.div`
  min-width: 100px;
  text-align: center;
  @media only screen and (max-width: 800px) {
    min-width: 60px;
  }
`;

export default ({ info, dataFile }) => (
  <Content>
    <h1>게시판</h1>
    <Board>
      <Head>
        <Title>제목</Title>
        <Date>등록일</Date>
        <Views>조회수</Views>
      </Head>
      {info.map((item, idx) => (
        <Notice key={idx}>
          <Title>
            <Link
              to={{
                pathname: "/notice/" + item.id,
                state: { isInfo: true },
              }}
            >
              <NoticeAlert>[공지] </NoticeAlert>
              {item.title}
            </Link>
          </Title>
          <Date>{item.date}</Date>
          <Views>{item.views}</Views>
        </Notice>
      ))}
      {dataFile.map((item, idx) => (
        <DataFile key={idx}>
          <Title>
            <Link
              to={{
                pathname: "/notice/" + item.id,
                state: { isInfo: false },
              }}
            >
              {item.title}
            </Link>
          </Title>
          <Date>{item.date}</Date>
          <Views>{item.views}</Views>
        </DataFile>
      ))}
    </Board>
  </Content>
);