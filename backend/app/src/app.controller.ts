import { Controller, Get } from '@nestjs/common'
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger'
import { AppService } from './app.service'

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: '안녕하세요 문구 반환' })
  @ApiCreatedResponse({ description: '성공적으로 반환함' })
  getHello(): string {
    return this.appService.getHello()
  }
}
