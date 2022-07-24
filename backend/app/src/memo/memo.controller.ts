import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { MemoService } from './memo.service'
import { CreateMemoDto } from './dto/create-memo.dto'
import { UpdateMemoDto } from './dto/update-memo.dto'
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'

@Controller('memo')
export class MemoController {
  constructor(private readonly memoService: MemoService) {}

  @Post()
  @ApiOperation({ summary: '새로운 메모를 추가한다' })
  @ApiCreatedResponse({ description: '성공적으로 추가됨' })
  @ApiUnauthorizedResponse({ description: '유저 인증 필요' })
  async create(@Body() createMemoDto: CreateMemoDto) {
    await this.memoService.create(createMemoDto)
  }

  @Get()
  @ApiOperation({ summary: '모든 메모를 가져온다' })
  @ApiOkResponse({ description: '성공적으로 가져옴' })
  @ApiUnauthorizedResponse({ description: '유저 인증 필요' })
  findAll() {
    return this.memoService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: '메모 하나를 가져온다' })
  @ApiOkResponse({ description: '성공적으로 가져옴' })
  @ApiUnauthorizedResponse({ description: '유저 인증 필요' })
  findOne(@Param('id') id: number) {
    return this.memoService.findOne(+id)
  }

  @Patch(':id')
  @ApiOperation({ summary: '메모를 수정한다' })
  @ApiOkResponse({ description: '수정 성공' })
  @ApiNotFoundResponse({ description: 'id에 해당하는 메모를 찾을 수 없음' })
  @ApiUnauthorizedResponse({ description: '유저 인증 필요' })
  update(@Param('id') id: number, @Body() updateMemoDto: UpdateMemoDto) {
    return this.memoService.update(+id, updateMemoDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: '메모를 삭제한다' })
  @ApiOkResponse({ description: '삭제 성공' })
  @ApiNotFoundResponse({ description: 'id에 해당하는 메모를 찾을 수 없음' })
  @ApiUnauthorizedResponse({ description: '유저 인증 필요' })
  remove(@Param('id') id: number) {
    return this.memoService.remove(+id)
  }
}
