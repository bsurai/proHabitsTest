import { HomeState } from "../../../common/interfaces/states_interfaces";
import { HomeAction } from "../interfaces/actions_interfaces";
import * as ACTION_TYPES from "../constants/action_types";

const defaultHomeState: HomeState = {
    date: "--/--",
    userId: 0,
    challenge: {
        id: 0,
        title: "___________",
        text: "___________",
        status: 0
    },
    motivation: {
        author: "________ ________",
        text: "____________________"
    },
    yourGrowth: {
        daysCompeted: 0,
        streak: 0
    },
    ourGrowth: {
        icomitsToday: 0,
        dailyChallengesCompleted: 0,
        prohabitCowokers: 0,
        peopleFiveDateStreak: 0,
        peopleFinishedThisProhabit: 0
    }
};

export default (prevState: HomeState = defaultHomeState, action: HomeAction): HomeState => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_HOMEPAGE_BEGIN:
            return Object.assign({}, prevState, {isFetching: true});
        case ACTION_TYPES.FETCH_HOMEPAGE_SUCCESS:
            return Object.assign({}, prevState, action.home, {isFetching: false});
        case ACTION_TYPES.FETCH_HOMEPAGE_ERROR:
            return Object.assign({}, prevState, {isFetching: false});
        default:
            return prevState;
    }
};