import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateMemoDto } from './dto/create-memo.dto'
import { UpdateMemoDto } from './dto/update-memo.dto'
import { Memo } from './entities/memo.entity'

@Injectable()
export class MemoService {
  constructor(
    @InjectRepository(Memo)
    private memoRepository: Repository<Memo>,
  ) {}

  async create(createMemoDto: CreateMemoDto): Promise<void> {
    const memo = this.memoRepository.create(createMemoDto)
    await this.memoRepository.save(memo)
  }

  findAll(): Promise<Memo[]> {
    return this.memoRepository.find()
  }

  findOne(id: number): Promise<Memo> {
    return this.memoRepository.findOneBy({ id })
  }

  async update(id: number, updateMemoDto: UpdateMemoDto): Promise<void> {
    await this.memoRepository.update(id, updateMemoDto)
  }

  async remove(id: number): Promise<void> {
    await this.memoRepository.delete(id)
  }
}
