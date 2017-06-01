import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { CommitmentService } from './commitment.service';
import * as IS from '../../../common/interfaces/states_interfaces';

@Component()
export class HomePageService {
    constructor(private commitmentService: CommitmentService) { }

    async getHomePage(params): Promise<IS.HomeState> {
        let data = await this.commitmentService.getAllData(params);
        return data;
    };
};