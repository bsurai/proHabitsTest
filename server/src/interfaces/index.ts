export { HomeState } from "../../../common/interfaces/states_interfaces";
import * as IS from "../../../common/interfaces/states_interfaces";

export interface ParamsCommitment {
    userName: string;
    userId: number;
    commitmentId: number;
    status?: number;
}

export interface TodaysChallenge {
    date: string;
    userId: number;
    challenge: IS.ChallengeState;
    motivation: IS.MotivationState;
}

export interface TodaysStatistic {
    yourGrowth: IS.YourGrowth;
    ourGrowth: IS.OurGrowth;
}
