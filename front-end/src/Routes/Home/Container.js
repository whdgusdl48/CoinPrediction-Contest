/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
import React, { useState, useEffect } from "react";
import { getCoinData } from "../../api";
import axios from "axios";

const notice = [
    {
        title: "공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항",
        link: "/board",
    },
    {
        title: "공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항",
        link: "/board",
    },
    {
        title: "공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항",
        link: "/board",
    },
    {
        title: "공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항",
        link: "/board",
    },
    {
        title: "공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항",
        link: "/board",
    },
    {
        title: "공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항공지사항",
        link: "/board",
    },
];

const file = [
    {
        title: "2021-07-06 데이터 파일.xlsx",
        link: "/board",
    },
    {
        title: "2021-07-05 데이터 파일.xlsx",
        link: "/board",
    },
    {
        title: "2021-07-04 데이터 파일.xlsx",
        link: "/board",
    },
];

const marketSelection = {
    "KRW-BTC": "비트코인",
    "KRW-ETH": "이더리움",
    "KRW-DOGE": "도지코인",
    "KRW-XRP": "리플",
};

const coinList = {};

export default () => {
    const useCoinData = () => {
        const [coinData, setCoinData] = useState({});

        const getData = async () => {
            try {
                await getCoinData(marketSelection, setCoinData);
            } catch (e) {
                console.log("실패");
            }
        };

        useEffect(() => {
            getData();
        }, []);

        return {
            coinData,
        };
    };

    const { coinData } = useCoinData();

    if (coinData.code) {
        coinList[coinData.code] = coinData;
    }

    return (
        <Presenter
            notice={notice}
            file={file}
            coinData={Object.values(coinList)}
            maxCoinData={Object.values(marketSelection).length}
        />
    );
};
