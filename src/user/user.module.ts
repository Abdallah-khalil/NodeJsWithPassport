import { Module } from '@nestjs/common';

import { DBConfigModule } from '../dbConfig/dbConfig.module';
@Module({
    modules: [DBConfigModule],
    components: [],
    controllers: []
})
export class UserModule {

}