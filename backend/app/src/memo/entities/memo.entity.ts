import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Memo {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  content: string
}
