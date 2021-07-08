/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as MenuBtnImg } from "../img/menu_button.svg";

const navList = [
    { path: "/intro", name: "소개" },
    { path: "/coin", name: "코인데이터" },
    { path: "/leaderboard", name: "리더보드" },
    { path: "/submit", name: "제출" },
    { path: "/board", name: "게시판" },
    { path: "/question", name: "문의" },
];

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: ${({ isRoot }) =>
        isRoot ? "rgba(255,255,255, 1)" : "#093687"};
    color: ${({ isRoot }) => (isRoot ? "#000" : "#FFF")};
    box-shadow: 0 0 10px -5px #303030;
    z-index: 1000;
    /* -webkit-backdrop-filter: blur(10px); */
    /* backdrop-filter: blur(7px); */

    @media only screen and (max-width: 800px) {
        height: 50px;
        background-color: #093687;
        color: #fff;
    }
`;

const FlexBox = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 800px) {
        justify-content: space-between;
    }
`;

const Logo = styled.div`
    font-size: 42px;
    font-family: "Arimo", sans-serif;
    font-weight: 700;
    font-style: italic;
    color: ${({ isRoot }) => (isRoot ? "#093687" : "#FFF")};

    @media only screen and (max-width: 800px) {
        font-size: 30px;
        color: #fff;
    }
`;

const Gnb = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media only screen and (max-width: 800px) {
        position: absolute;
        top: 50px;
        left: 0;
        flex-direction: column;
        justify-content: initial;
        align-items: initial;
        max-height: ${({ isOn }) => (isOn ? "290px" : "0")};
        overflow: hidden;
        background-color: #fff;
        border: ${({ isOn }) => (isOn ? "1.5px" : "0")} solid #bcc8e0;
        border-left: none;
        border-right: none;
        transition: max-height ${({ isBtn }) => (isBtn ? "0.3s" : "0s")}
            ease-in-out;
    }
`;

const NavGroup = styled.ul`
    display: flex;
    align-items: center;
    margin: 0 30px;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        align-items: initial;
        margin: 0;
    }
`;

const NavLink = styled.li`
    margin-left: 30px;
    font-weight: 500;
    color: ${({ isRoot, isCurrent, isNav }) => {
        if (isRoot) {
            return "#000";
        } else {
            return isCurrent || !isNav ? "#FFF" : "#677FAF";
        }
    }};

    &:hover {
        color: ${({ isRoot }) => (isRoot ? "#093687" : "#FFF")};
    }

    @media only screen and (max-width: 800px) {
        margin: 0;
        color: ${({ isCurrent }) => (isCurrent ? "#fff" : "#000")};
        background-color: ${({ isCurrent }) =>
            isCurrent ? "#093687" : "#fff"};
        border-bottom: 1.5px solid #bcc8e0;
        width: 100%;

        &:hover {
            color: #fff;
            background-color: #093687;
        }
        & > a {
            display: block;
            width: 100%;
            padding: 12px 20px;
        }
    }
`;

const LoginBox = styled.ul`
    display: flex;
    align-items: center;

    & > li:nth-child(2) {
        margin-left: 30px;
    }
`;

const BlackScreen = styled.div`
    display: ${({ isOn }) => (isOn ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background-color: #000;
    opacity: 0.6;

    @media only screen and (max-width: 800px) {
        display: none;
    }
`;

export default withRouter(
    ({
        history: {
            location: { pathname },
        },
    }) => {
        const isRoot = pathname === "/";

        const useHome = () => {
            const [menuOn, setMenuOn] = useState({
                isOn: false,
                isBtn: false,
            });

            const handleMenuBtn = (value) => {
                setMenuOn(value);
            };

            return {
                menuOn,
                handleMenuBtn,
            };
        };

        const {
            menuOn: { isOn, isBtn },
            handleMenuBtn,
        } = useHome();
        return (
            <>
                <Header isRoot={isRoot}>
                    <FlexBox className="inner">
                        <div className="mobileShow"></div>
                        <Logo isRoot={isRoot}>
                            <Link to="/">Logo</Link>
                        </Logo>
                        <Gnb isOn={isOn} isBtn={isBtn}>
                            <NavGroup>
                                {navList.map(({ path, name }, idx) => (
                                    <NavLink
                                        isRoot={isRoot}
                                        isCurrent={pathname === path}
                                        isNav={true}
                                        key={idx}
                                    >
                                        <Link
                                            to={path}
                                            onClick={() => {
                                                handleMenuBtn({
                                                    isOn: false,
                                                    isBtn: false,
                                                });
                                            }}
                                        >
                                            {name}
                                        </Link>
                                    </NavLink>
                                ))}
                            </NavGroup>
                            <LoginBox>
                                <NavLink
                                    isRoot={isRoot}
                                    isCurrent={pathname === "/login"}
                                    isNav={false}
                                >
                                    <Link
                                        to="/login"
                                        onClick={() => {
                                            handleMenuBtn({
                                                isOn: false,
                                                isBtn: false,
                                            });
                                        }}
                                    >
                                        로그인
                                    </Link>
                                </NavLink>
                            </LoginBox>
                        </Gnb>
                        <button
                            className="mobileShow"
                            onClick={() => {
                                handleMenuBtn({ isOn: !isOn, isBtn: true });
                            }}
                        >
                            <MenuBtnImg />
                        </button>
                    </FlexBox>
                </Header>
                <BlackScreen
                    isOn={isOn}
                    onClick={() => {
                        handleMenuBtn({ isOn: !isOn, isBtn: true });
                    }}
                />
            </>
        );
    }
);
