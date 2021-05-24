import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity("subjects")
export default class Subject{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
    
    @Column()
    description:string;

}