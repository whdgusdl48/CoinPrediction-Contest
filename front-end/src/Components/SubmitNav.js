/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Navation = styled.ul`
    display: flex;
    align-items: center;
    color: #707070;

    & li:not(:last-child) {
        margin-right: 5px;
    }
    margin-bottom: 40px;
`;

const NavBtn = styled.li`
    font-weight: ${({ current }) => (current ? 700 : 400)};
    color: ${({ current }) => (current ? "#000" : "#707070")};
`;

export default withRouter(
    ({
        history: {
            location: { pathname },
        },
    }) => (
        <>
            <h1>제출</h1>
            <Navation>
                <NavBtn current={pathname === "/submit/form"}>
                    <Link to="/submit/form">제출</Link>
                </NavBtn>
                <NavBtn current={true}>│</NavBtn>
                <NavBtn current={pathname === "/submit/status"}>
                    <Link to="/submit/status">제출 현황</Link>
                </NavBtn>
            </Navation>
        </>
    )
);
