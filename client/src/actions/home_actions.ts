import * as fetch from "isomorphic-fetch";
import * as Redux from "redux";
import * as ACTION_TYPES from "../constants/action_types";
import * as AI from "../interfaces/actions_interfaces";
import * as SI from "../../../common/interfaces/states_interfaces";
import { HOST, PORT_SERVER } from "../config";
import { isLoggedIn, logout, getUserNickname } from "../utils/AuthService";
import { getAccessToken } from "../utils/AuthService";

// type RequestCredentials = "omit" | "same-origin" | "include";
// const credentials: RequestCredentials = "same-origin"; // "include";

const fetchBegin: AI.ActionCreatorSync = () => {
    return { type: ACTION_TYPES.FETCH_HOMEPAGE_BEGIN };
};

const fetchSuccess: AI.ActionCreatorSync = (data: SI.HomeState) => {
    return {
        type: ACTION_TYPES.FETCH_HOMEPAGE_SUCCESS,
        home: data,
    };
};

const fetchError: AI.ActionCreatorSync = () => {
    return { type: ACTION_TYPES.FETCH_HOMEPAGE_ERROR };
};

const setDefaultState: AI.ActionCreatorSync = () => {
    return { type: ACTION_TYPES.SET_DEFAULT_STATE };
};

const sendReq = (url: string, dispatch: Redux.Dispatch<AI.HomeAction>, body = {}): Promise<void> | undefined => {
    if (!isLoggedIn()) {
        dispatch(setDefaultState());
        return;
    }

    let defaultOptions = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Cache": "no-cache",
            "Authorization": `Bearer ${getAccessToken()}`
        } // ,
        // credentials
    };

    let _body = Object.assign({}, body, { userName: getUserNickname() });
    let options = Object.assign(defaultOptions, { body: JSON.stringify(_body) });
    dispatch(fetchBegin());
    console.log(options);
    console.log(url);
    return fetch(url, options)
        .then(response => {

            if (response.status === 401) {
                logout();
                dispatch(setDefaultState());
                return;
            } else if (response.status >= 400) {
                dispatch(fetchError());
                return;
            }
            return response.json();
        })
        .then(json => {
            if (!json) { return; };
            dispatch(fetchSuccess(json));
        })
        .catch(error => {
            dispatch(fetchError());
        });
};

const fetchHomePage: AI.ActionCreatorAsync = ({ userId, commitmentId }: AI.ParamActionHome) => {
    return (dispatch) => {
        let body = { userId, commitmentId };
        return sendReq(`${HOST}:${PORT_SERVER}/user/home`, dispatch, body);
    };
};

const updateHomePage: AI.ActionCreatorAsync = ({ userId, commitmentId, status }: AI.ParamActionHome) => {
    return (dispatch) => {
        let body = { userId, commitmentId, status };
        return sendReq(`${HOST}:${PORT_SERVER}/user/commit`, dispatch, body);
    };
};

export default {
    fetchHomePage,
    updateHomePage,
    setDefaultState,
};