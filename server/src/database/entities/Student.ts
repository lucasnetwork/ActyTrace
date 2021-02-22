import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export default class Student{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userId:number;

    @Column()
    idBoletim:number;
    
    @Column()
    coursersId:number;
}