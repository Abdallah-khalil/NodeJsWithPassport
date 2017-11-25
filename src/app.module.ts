import { Module } from '@nestjs/common';
import { MainModule } from './main/main.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
@Module({
    modules: [MainModule, AuthModule, UserModule],
    components: []
})
export class ApplicationModule { }