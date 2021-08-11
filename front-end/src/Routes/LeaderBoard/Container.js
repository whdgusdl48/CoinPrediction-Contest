/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
const data = [
    {
        name: "팀 신희강",
        score: 1200,
    },
    {
        name: "팀 서성덕",
        score: 1500,
    },
    {
        name: "팀 전지원",
        score: 2000,
    },
    {
        name: "팀 이재용",
        score: 1600,
    },
    {
        name: "팀 김서경",
        score: 1800,
    },
    {
        name: "팀 백종현",
        score: 2100,
    },
    {
        name: "팀 배성현",
        score: 1700,
    },
    {
        name: "팀 정계영",
        score: 2000,
    },
    {
        name: "팀 박기덕",
        score: 1400,
    },
];
export default () => <Presenter score={data} />;
