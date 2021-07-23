/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = styled.div`
  padding: 30px 100px;
  background-color: #e9ebf0;
  height: 1000px;
`;

const MainContainer = styled.div`
  background-color: white;
  height: 100%;
`;

const Container = styled.div`
  margin: 0 100px;
  & > h1 {
    padding: 100px 0 30px 0;
    font-size: 30px;
    font-weight: 600;
    border-bottom: 2px solid #a0a0a0;
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
      & > th:first-child {
        width: 700px;
      }
    }
  }
  & > tbody {
    & > tr {
      border: 1px solid #333;
      & > td {
        padding: 10px 20px;
        &:not(:first-child) {
          text-align: center;
        }
      }
    }
  }
`;
const NoticeText = styled.span`
  color: blue;
  font-weight: 400;
  padding-right: 5px;
`;
export default () => (
  <Main>
    <MainContainer>
      <Container>
        <h1>게시판</h1>
        <Table>
          <thead>
            <tr>
              <th colspan="1">제목</th>
              <th colspan="1">등록일</th>
              <th colspan="1">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link>
                  <NoticeText>[공지]</NoticeText>
                  공지사항 입니다
                </Link>
              </td>
              <td>2021-07-23</td>
              <td>42</td>
            </tr>
            <tr>
              <td>
                <Link>
                  <NoticeText>[공지]</NoticeText>
                  공지사항 입니다
                </Link>
              </td>
              <td>2021-07-23</td>
              <td>42</td>
            </tr>
            <tr>
              <td>
                <Link>
                  <NoticeText>[공지]</NoticeText>
                  공지사항 입니다
                </Link>
              </td>
              <td>2021-07-23</td>
              <td>42</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </MainContainer>
  </Main>
);
