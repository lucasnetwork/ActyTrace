import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subjects')
export default class Subject {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}
