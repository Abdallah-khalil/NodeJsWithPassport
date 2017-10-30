import { Module } from '@nestjs/common';
import { MainModule } from './main/main.module';
import { AuthModule } from './auth/auth.module';
@Module({
    modules: [MainModule, AuthModule],
})
export class ApplicationModule { }