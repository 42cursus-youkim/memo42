import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateMemoDto {
  @IsString()
  @ApiProperty({ description: '메모 제목' })
  readonly title: string

  @IsString()
  @ApiProperty({ description: '메모 내용' })
  readonly content: string
}
