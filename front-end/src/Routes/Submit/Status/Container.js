/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";

const data = [
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    null,
    null,
    null,
];
export default () => <Presenter data={data} />;
