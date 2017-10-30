import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
@Module({
    controllers: [AuthController],
    components: []
})
export class AuthModule {

}