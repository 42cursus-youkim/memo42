import { Module } from '@nestjs/common'
import { MemoService } from './memo.service'
import { MemoController } from './memo.controller'
import { Memo } from './entities/memo.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Memo])],
  providers: [MemoService],
  controllers: [MemoController],
})
export class MemoModule {}
