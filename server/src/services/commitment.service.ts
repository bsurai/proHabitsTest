import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import * as PGP from 'pg-promise';
import * as IDBQ from '../interfaces/commitments';
import { queryTodaysChallenge } from '../pg_queries/commitments';
import * as IS from '../../../common/interfaces/states_interfaces';

const pgp = PGP();
const db = pgp('postgres://postgres:1@localhost/proHabitsTest');

interface ParamsCommitment {
    userId: number;
    commitmentId: number;
    status?: number;
};

@Component()
export class CommitmentService {

    private db: PGP.IDatabase<any>;

    private todaysStatistic: { yourGrowth: IS.YourGrowth; ourGrowth: IS.OurGrowth } = {
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

    constructor() { }

    async getTodaysChallenge({ userId, commitmentId }): Promise<{ date: string, userId: number, challenge: IS.ChallengeState; motivation: IS.MotivationState }> {
        console.log("userId="+userId);
        let queryResult: IDBQ.QueryTodaysChallenge[] = await db.query(queryTodaysChallenge, {
            user_id: userId
        });
        return {
            date: "12/21",
            userId,
            challenge: {
                id: queryResult[0] && queryResult[0].commitment_id,
                title: "Family Traditions",
                text: queryResult[0] && queryResult[0].description,
                status: queryResult[0] && queryResult[0].status
            },
            motivation: {
                author: queryResult[0] && queryResult[0].author,
                text: queryResult[0] && queryResult[0].quote
            }
        };
    };

    async getTodaysStatistic({ userId, commitmentId }) {
        let data = await this.todaysStatistic;
        return data;
    };

    async updateCommitment({ userId, commitmentId, status }: ParamsCommitment): Promise<IS.HomeState> {
        let data = await this.getAllData({ userId, commitmentId});
        return data;
    };

    async getAllData(params): Promise<IS.HomeState> {
        let todaysChallenge = await this.getTodaysChallenge(params);
        let todaysStatistic = await this.getTodaysStatistic(params);
        return Object.assign({}, todaysChallenge, todaysStatistic);
    }
};