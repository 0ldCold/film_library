import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Films' })
export class FilmsEntity {
  @PrimaryGeneratedColumn()
  declare id: number;

  @Column()
  declare name: string;
}
