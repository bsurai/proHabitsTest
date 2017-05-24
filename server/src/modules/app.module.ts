import { Module } from '@nestjs/common';
import { PagesModule } from './pages.module';
import { CommitmentModule } from './commitment.module';

@Module({
    controllers: [],
    modules: [PagesModule, CommitmentModule],
})
export class ApplicationModule { }