import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  declare id: number

  @Column()
  declare firstName: string

  @Column()
  declare lastName: string

  @Column()
  declare email: string
}
