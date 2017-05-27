import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import * as PGP from 'pg-promise';
import * as IDBQ from '../interfaces/commitments';
import { queryTodaysChallenge } from '../pg_queries/commitments';
import * as IS from '../../../common/interfaces/states_interfaces';

const pgp = PGP();
const db = pgp('postgres://postgres:1@localhost/proHabitsTest');

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

    async getTodaysChallenge(user_id: number = 1): Promise<{ date: string, challenge: IS.ChallengeState; motivation: IS.MotivationState }> {
        let queryResult: IDBQ.QueryTodaysChallenge[] = await db.query(queryTodaysChallenge, {
            user_id
        });
        return {
            date: "12/21",
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
    }

    async getTodaysStatistic() {
        let data = await this.todaysStatistic;
        return data;
    }
};