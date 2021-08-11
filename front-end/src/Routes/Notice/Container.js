/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
export const info = [
  {
    title: "공지사항 입니다.공지사항 입니다.공지사항 입니다.",
    date: "2021-07-23",
    views: "42",
    id: 0,
  },
  { title: "공지사항 입니다1.", date: "2021-07-23", views: "42", id: 1 },
  { title: "공지사항 입니다2.", date: "2021-07-23", views: "42", id: 2 },
  { title: "공지사항 입니다3.", date: "2021-07-23", views: "42", id: 3 },
];
export const dataFile = [
  { title: "데이터 파일0", date: "2021-07-23", views: "24", id: 4 },
  { title: "데이터 파일1", date: "2021-07-23", views: "24", id: 5 },
  { title: "데이터 파일2", date: "2021-07-23", views: "24", id: 6 },
  { title: "데이터 파일3", date: "2021-07-23", views: "24", id: 7 },
];
export default () => <Presenter info={info} dataFile={dataFile} />;
