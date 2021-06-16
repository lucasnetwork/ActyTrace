import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Subject from './Subject';
import User from './User';

@Entity('classes')
export default class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'teacher' })
  teacher: User;

  @OneToOne(() => Subject)
  @JoinColumn({ name: 'subject' })
  subject: Subject;
}
