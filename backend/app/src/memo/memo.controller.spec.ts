import { Test, TestingModule } from '@nestjs/testing'
import { MemoController } from './memo.controller'
import { MemoService } from './memo.service'

describe('MemoController', () => {
  let controller: MemoController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemoController],
      providers: [MemoService],
    }).compile()

    controller = module.get<MemoController>(MemoController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
