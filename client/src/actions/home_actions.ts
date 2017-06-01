import * as fetch from "isomorphic-fetch";
import * as Redux from "redux";
import * as ACTION_TYPES from "../constants/action_types";
import * as AI from "../interfaces/actions_interfaces";
import * as SI from "../../../common/interfaces/states_interfaces";
import { HOST, PORT_SERVER } from "../config";

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

const sendRequest = (url: string, dispatch: Redux.Dispatch<AI.HomeAction>, opt = {}): Promise<void> => {
    let defaultOptions = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Cache": "no-cache"
        } // ,
        // credentials
    };

    let options = Object.assign(defaultOptions, opt);
    dispatch(fetchBegin());
    console.log(options);
    console.log(url);
    return fetch(url, options)
        .then(response => {
            if (response.status >= 400) {
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
        let options = { body: JSON.stringify(body) };
        return sendRequest(`${HOST}:${PORT_SERVER}/pages/home`, dispatch, options);
    };
};

const updateHomePage: AI.ActionCreatorAsync = ({ userId, commitmentId, status }: AI.ParamActionHome) => {
    return (dispatch) => {
        let body = { userId, commitmentId, status };
        let options = { body: JSON.stringify(body) };
        return sendRequest(`${HOST}:${PORT_SERVER}/commitment/update`, dispatch, options);
    };
};

export default {
    fetchHomePage,
    updateHomePage,
    // fetchBegin,
    // fetchSuccess,
    // fetchError
};