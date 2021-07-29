/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
const news = [
    {
        title: "기사 1",
        date: "2021-07-23",
        views: "42",
    },
    { title: "기사 2", date: "2021-07-23", views: "42" },
    { title: "기사 3", date: "2021-07-23", views: "42" },
    { title: "기사 4", date: "2021-07-23", views: "42" },
];
export default () => <Presenter news={news} />;
