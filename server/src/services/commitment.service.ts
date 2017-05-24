import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';

@Component()
export class CommitmentService {
    private todaysChallenge = {
        date: "12/21",
        challenge: {
            id: 1,
            title: "Family Traditions",
            text: "Think of a new tradition to start in the office that celebrates a win for the team. Next, get some coworkers advice and thoughts on the idea. Consider implementing the tradition after the next success.",
            status: 0
        },
        motivation: {
            author: "WINSTON CHURCHILL",
            text: "Without tradition, art is a flock of sheep without a shepherd. Without innovation, it is a corpse."
        }
    };

    private todaysStatistic = {
        yourGrowth: {
            daysCompeted: 12,
            streak: 9
        },
        ourGrowth: {
            icomitsToday: 24,
            dailyChallengesCompleted: 1000,
            prohabitCowokers: 200,
            peopleFiveDateStreak: 20,
            peopleFinishedThisProhabit: 200
        }
    };

    async getTodaysChallenge() {
        let data = await this.todaysChallenge;
        return data;
    }

    async getTodaysStatistic() {
        let data = await this.todaysStatistic;
        return data;
    }
};