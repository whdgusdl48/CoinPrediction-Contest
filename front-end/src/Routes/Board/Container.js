/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
const info = [
    {
        title: "공지사항 입니다.공지사항 입니다.공지사항 입니다.",
        date: "2021-07-23",
        views: "42",
    },
    { title: "공지사항 입니다.", date: "2021-07-23", views: "42" },
    { title: "공지사항 입니다.", date: "2021-07-23", views: "42" },
    { title: "공지사항 입니다.", date: "2021-07-23", views: "42" },
];
const dataFile = [
    { title: "데이터 파일", date: "2021-07-23", views: "24" },
    { title: "데이터 파일", date: "2021-07-23", views: "24" },
    { title: "데이터 파일", date: "2021-07-23", views: "24" },
    { title: "데이터 파일", date: "2021-07-23", views: "24" },
];
export default () => <Presenter info={info} dataFile={dataFile} />;
