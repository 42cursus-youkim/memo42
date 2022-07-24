import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateMemoDto {
  @IsString()
  @ApiProperty({ description: '메모 내용' })
  readonly content: string
}
