import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MemoModule } from './memo/memo.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [MemoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
