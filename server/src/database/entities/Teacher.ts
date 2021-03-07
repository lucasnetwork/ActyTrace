import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export default class Teacher{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    userId:number;
    
    @Column()
    coursersId:number;
}