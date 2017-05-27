import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { CommitmentService } from './commitment.service';
import * as IS from '../../../common/interfaces/states_interfaces';

@Component()
export class HomePageService {
    constructor(private commitmentService: CommitmentService) { }

    async getHomePage(): Promise<IS.HomeState> {
        let todaysChallenge = await this.commitmentService.getTodaysChallenge();
        let todaysStatistic = await this.commitmentService.getTodaysStatistic();
        return Object.assign({}, todaysChallenge, todaysStatistic);
    }
};