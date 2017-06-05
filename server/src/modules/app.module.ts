import { Module } from "@nestjs/common";
import { UserModule } from "./user.module";

@Module({
    controllers: [],
    modules: [UserModule],
})
export class ApplicationModule { }