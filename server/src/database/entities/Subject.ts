import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export default class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    startHour:string;

    @Column()
    endHour:string;

}