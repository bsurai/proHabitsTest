export interface AppState {
    home: HomeState;
    journal?: {};
}

// **************  HOME PAGE  *************** //

export interface HomeState {
    date: string;
    challenge: ChallengeState;
    motivation: MotivationState;
    yourGrowth: YourGrowth;
    ourGrowth: OurGrowth;
    isFetching?: boolean;
    userId: number;
}

export interface ChallengeState {
    id: number;
    title: string;
    text: string;
    status: number;
}

export interface MotivationState {
    text: string;
    author: string;
}

export interface YourGrowth {
    daysCompeted: number;
    streak: number;
}

export interface OurGrowth {
    icomitsToday: number;
    dailyChallengesCompleted: number;
    prohabitCowokers: number;
    peopleFiveDateStreak: number;
    peopleFinishedThisProhabit: number;
}
