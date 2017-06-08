import * as Redux from "redux";
import * as SI from "../../../common/interfaces/states_interfaces";

export interface HomeAction extends Redux.Action {
    type: string;
    home?: SI.HomeState;
};

export interface ParamActionHome {
    userId?: number; 
    status?: number;
    commitmentId?: number;
};

export type ActionCreatorSync = (params?: ParamActionHome) => HomeAction;


export type ActionCreatorAsync = (param?: ParamActionHome) => (dispatch: Redux.Dispatch<HomeAction>) => Promise<void>|undefined;