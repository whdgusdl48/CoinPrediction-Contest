/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import Content from "../../../Components/Content";
import SubmitNav from "../../../Components/SubmitNav";

const Template = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
`;

const Day = styled.div`
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 10px -7px #707070;

    & div:first-child {
        width: 100%;
        text-align: center;
        background-color: #093687;
        color: #fff;
        padding: 10px 0;
    }

    & div:last-child {
        border: 1.5px solid #e7e7e7;
        border-top: 0;
        height: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;

        & span {
            color: #e60000;
        }

        & a {
            text-decoration: underline;
        }
    }
`;

export default ({ data }) => (
    <Content>
        <SubmitNav />
        <Template>
            {data.map((item, idx) => {
                if (item !== null) {
                    return (
                        <Day>
                            <div>{idx + 1}일차</div>
                            <div>
                                {item ? (
                                    <a href="">download</a>
                                ) : (
                                    <span className="material-icons-outlined">
                                        clear
                                    </span>
                                )}
                            </div>
                        </Day>
                    );
                }
            })}
        </Template>
    </Content>
);
