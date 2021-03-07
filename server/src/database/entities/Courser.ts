import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export default class Courser{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    subjectId:number;

    @Column()
    studentId:number

}