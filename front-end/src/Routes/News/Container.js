/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
export const news = [
  {
    title:
      "-올림픽- 여자배구 4위·마라톤 심종섭 49위…태극전사, 도쿄 여정 마무리.",
    subTitle: "금메달 6개, 은메달 4개, 동메달 10개 수확하고 대회 마감",
    date: "2021-07-23",
    views: "42",
    id: 0,
  },
  {
    title: "기사 1",
    date: "2021-07-23",
    views: "42",
    id: 1,
  },
  { title: "기사 2", date: "2021-07-23", views: "42", id: 2 },
  { title: "기사 3", date: "2021-07-23", views: "42", id: 3 },
  { title: "기사 4", date: "2021-07-23", views: "42", id: 4 },
];
export default () => <Presenter news={news} />;
