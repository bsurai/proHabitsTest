import * as SI from "../../../common/interfaces/states_interfaces";
import * as AI from "../interfaces/actions_interfaces";

// ***************** HOME PAGE ******************** //
export interface HomeActionCollection {
    [index: string]: AI.ActionCreatorSync | AI.ActionCreatorAsync;
};

export interface PropsHome {
    home: SI.HomeState;
    actions: HomeActionCollection;
};

export interface PropsChallenge {
    challenge: SI.ChallengeState;
    date: string;
    update: () => void;
};

export interface PropsMotivation {
    motivation: SI.MotivationState;
};

export interface PropsYourGrowth {
    yourGrowth: SI.YourGrowth;
};

export interface PropsOurGrowth {
    ourGrowth: SI.OurGrowth;
};