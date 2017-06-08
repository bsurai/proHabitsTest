import { Component } from "@nestjs/common";
import { HttpException } from "@nestjs/core";
import * as IS from "../interfaces";
import * as PGP from "pg-promise";
import * as OSM from "../interfaces/osm";
import { selectTodaysChallenge, insertTodaysChallenge, updateTodaysChallenge } from "../pg_queries/commitments";

const pgp = PGP();
const db = pgp("postgres://postgres:1@localhost/proHabitsTest");

@Component()
export class UserService {

    private todaysStatistic: IS.TodaysStatistic = {
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

    async getHomePage(params: IS.ParamsCommitment): Promise<IS.HomeState> {
        let data = await this.getAllData(params);
        return data;
    }

    async getTodaysChallenge(params: IS.ParamsCommitment): Promise<IS.TodaysChallenge> {
        let queryResult: OSM.SelectCommits[] = await db.query(selectTodaysChallenge, {
            user_name: params.userName
        });
        if (queryResult[0] && !queryResult[0].is_todays) {
            await db.query(insertTodaysChallenge, {
                user_id: queryResult[0].user_id,
                commitment_id: queryResult[0].commitment_id,
                duration_days: queryResult[0].duration_days
            });
        }

        return {
            date: "12/21",
            userId: queryResult[0] && queryResult[0].user_id,
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

    async getTodaysStatistic({ userId, commitmentId }: IS.ParamsCommitment) {
        let data = await this.todaysStatistic;
        return data;
    }

    async updateCommitment(params: IS.ParamsCommitment): Promise<IS.HomeState> {
        await db.query(updateTodaysChallenge, {
            user_id: params.userId,
            commitment_id: params.commitmentId,
            status: params.status
        });
        let data = await this.getAllData(params);
        return data;
    }

    async getAllData(params: IS.ParamsCommitment): Promise<IS.HomeState> {
        let todaysChallenge = await this.getTodaysChallenge(params);
        let todaysStatistic = await this.getTodaysStatistic(params);
        return Object.assign({}, todaysChallenge, todaysStatistic);
    }
}