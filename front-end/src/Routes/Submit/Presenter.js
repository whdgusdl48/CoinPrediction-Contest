/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
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
  height: 100%;
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
const Dot = styled.span`
  font-size: 15px;
  font-weight: 700;
  margin-right: 5px;
`;
const Caution = styled.ul`
  padding-top: 50px;
  & > li {
    padding: 10px;
    &:last-child {
      color: red;
    }
  }
`;
const Submit = styled.form`
  margin-top: 100px;
  & > h2 {
    font-size: 30px;
    font-weight: 600;
  }
  & > div {
    & > input {
      margin-top: 40px;
      padding: 5px;
      font-size: 15px;
      width: 90%;
      border: 1px solid;
    }
    & > div {
      display: flex;
      justify-content: center;
    }
    @media only screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > input {
        margin-bottom: 10px;
      }
    }
  }
`;
const FileButton = styled.button`
  background-color: #093687;
  font-size: 15px;
  padding: 5px 10px;
  color: white;
`;
const SubmitButton = styled.button`
  background-color: #093687;
  font-size: 15px;
  padding: 10px 50px;
  color: white;
  margin-top: 80px;
`;

const OnSubmitButton = styled.button`
  margin: 20px 0;
  padding: 0 10px;
  font-size: 20px;
  height: 20px;
  color: ${(props) => (props.onSubmit === true ? "black" : "#a0a0a0")};
`;
const Line = styled.span`
  height: 10px;
  border-right: 2px solid;
`;
const Box = styled.div`
  margin: 70px 50px 30px 40px;
  border: 2px solid #a0a0a0;
  border-radius: 10px;
  & > div {
    padding: 15px 80px;
    border-bottom: 1px solid #a0a0a0; //회색;
    text-align: center;
  }
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export default ({ data }) => {
  let [onSubmit, setOnSubmit] = useState(true);
  return (
    <Main>
      <MainContainer>
        <Container>
          <h1>제출</h1>
          <OnSubmitButton
            onSubmit={onSubmit}
            onClick={() => {
              setOnSubmit(true);
            }}
          >
            제출
          </OnSubmitButton>
          <Line />
          <OnSubmitButton
            onSubmit={!onSubmit}
            onClick={() => {
              setOnSubmit(false);
            }}
          >
            제출 현황
          </OnSubmitButton>

          {onSubmit === true ? (
            <SubmitPage setOnSubmit={setOnSubmit} />
          ) : (
            <SubmitStatusPage data={data} />
          )}
        </Container>
      </MainContainer>
    </Main>
  );
};
function SubmitPage() {
  return (
    <>
      <Caution>
        <li>
          <Dot>·</Dot>한 번 제출된 데이터는 수정할 수 없습니다.
        </li>
        <li>
          <Dot>·</Dot>제출시 신중하게 확인 후 제출해주시길 바랍니다.
        </li>
        <li>
          <Dot>·</Dot>제출은 팀당 한 번만 제출할 수 있습니다.
        </li>
        <li>
          <Dot>·</Dot>제출시 파일명 양식을 꼭 지켜주시길 바랍니다.
        </li>
        <li>
          <Dot>·</Dot>파일명 양식: 0일차_팀명.xlsx
        </li>
      </Caution>
      <Submit>
        <h2>7일차 결과 데이터 제출 </h2>
        <div>
          <input type="text"></input>
          <span>
            <FileButton>파일첨부</FileButton>
          </span>
          <div>
            <SubmitButton>제출</SubmitButton>
          </div>
        </div>
      </Submit>
    </>
  );
}

function SubmitStatusPage(props) {
  return (
    <Contents>
      {props.data.map((e, idx) => {
        return (
          <Box>
            <div>{idx + 1}일차</div>
            <div>
              <Link>
                <div style={{ color: "#a0a0a0", borderBottom: "1px solid" }}>
                  download
                </div>
              </Link>
            </div>
          </Box>
        );
      })}
    </Contents>
  );
}
