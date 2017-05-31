import * as Redux from "redux";
import * as SI from "../../../common/interfaces/states_interfaces";

export interface HomeAction extends Redux.Action {
    type: string;
    home?: SI.HomeState;
};

export type ActionCreatorSync = (params?: {}) => HomeAction;

export type ActionCreatorAsync = () => (dispatch: Redux.Dispatch<HomeAction>) => Promise<void>;