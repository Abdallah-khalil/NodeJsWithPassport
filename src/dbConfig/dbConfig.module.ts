import { Module } from '@nestjs/common';

import { DBConfigProviders } from './dbConfig.providers';

@Module({
    components: [...DBConfigProviders],
    exports: [...DBConfigProviders]
})
export class DBConfigModule {

}