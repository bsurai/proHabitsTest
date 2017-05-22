import * as SI from "./states_interfaces";

// ***************** HOME PAGE ******************** //
export interface PropsHome {
    home: SI.HomeState;
};

export interface PropsChallenge {
    challenge: SI.ChallengeState;
    date: string;
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