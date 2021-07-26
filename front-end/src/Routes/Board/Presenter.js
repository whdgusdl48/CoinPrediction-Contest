/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = styled.div`
  padding: 30px 100px;
  background-color: #e9ebf0; //회색
  min-height: 1000px;
  @media only screen and (max-width: 800px) {
    padding: 20px 20px;
  }
`;

const MainContainer = styled.div`
  background-color: white;
  min-height: 1000px;
  padding: 50px 100px;
  @media only screen and (max-width: 800px) {
    padding: 40px 20px;
  }
`;

const Container = styled.div`
  & > h1 {
    padding: 30px 0;
    font-size: 30px;
    font-weight: 600;
    border-bottom: 2px solid #a0a0a0;
    @media only screen and (max-width: 800px) {
      padding-bottom: 30px;
    }
  }
`;
const Table = styled.table`
  border: 1px solid #333;
  width: 100%;
  margin-top: 30px;

  & > thead {
    background-color: #e9ebf0;
    color: black;
    & > tr {
      & > th {
        padding: 20px;
        font-weight: 500;
      }
    }
    @media only screen and (max-width: 800px) {
      display: none;
    }
  }
  & > tbody {
    & > tr {
      border: 1px solid #333;
      & > td {
        padding: 10px 20px;
        &:first-child {
          display: box;
          max-width: 220px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        &:not(:first-child) {
          text-align: center;
        }
        @media only screen and (max-width: 800px) {
          padding: 10px 15px;
          font-size: 15px;
        }
      }
    }
  }
`;
const NoticeText = styled.span`
  color: #093687;
  font-weight: 400;
  padding-right: 5px;
`;
export default ({ info, dataFile }) => (
  <Main>
    <MainContainer>
      <Container>
        <h1>게시판</h1>
        <Table>
          <thead>
            <tr>
              <th>제목</th>
              <th>등록일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {info.map(({ title, date, views }, idx) => {
              return (
                <PrintContents
                  title={title}
                  date={date}
                  views={views}
                  idx={idx}
                  info={true}
                />
              );
            })}
            {dataFile.map(({ title, date, views }, idx) => {
              return (
                <PrintContents
                  title={title}
                  date={date}
                  views={views}
                  idx={idx}
                  info={false}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </MainContainer>
  </Main>
);

function PrintContents(props) {
  return (
    <tr key={props.idx}>
      <td>
        <Link>
          {props.info === true ? <NoticeText>[공지]</NoticeText> : null}
          {props.title}
        </Link>
      </td>
      <td>{props.date}</td>
      <td>{props.views}</td>
    </tr>
  );
}
