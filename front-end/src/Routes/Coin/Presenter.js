/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Main = styled.div`
    padding: 40px 0;
`;

export default () => (
    <Main>
        <div className="inner">코인데이터</div>
    </Main>
);