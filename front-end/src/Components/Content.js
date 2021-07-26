/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";

const Main = styled.div`
    padding: 40px 0px;

    @media only screen and (max-width: 800px) {
        padding: 0;
        & > .inner {
            padding: 0;
        }
    }
`;

const Content = styled.div`
    background-color: #fff;
    padding: 80px 60px;
    box-shadow: 0 2px 10px -5px #707070;

    & > h1 {
        font-size: 26px;
        font-weight: 600;
        padding-bottom: 10px;
        border-bottom: 1.5px solid #d0d0d0;
        margin-bottom: 40px;
    }

    @media only screen and (max-width: 800px) {
        padding: 60px 20px;
    }
`;

export default ({ children }) => (
    <Main>
        <div className="inner">
            <Content>{children}</Content>
        </div>
    </Main>
);
