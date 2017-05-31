import * as isofetch from "isomorphic-fetch";
// import * as Redux from "redux";
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

const fetchHomePage: AI.ActionCreatorAsync = () => {
    return (dispatch) => {
        let options = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Cache": "no-cache"
            } // ,
            // credentials
        };

        dispatch(fetchBegin());
        return isofetch(`${HOST}:${PORT_SERVER}/pages/home`, options)
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
};

export default {
    fetchHomePage,
    // fetchBegin,
    // fetchSuccess,
    // fetchError
};