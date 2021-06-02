import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity("users")
export default class User{
    @PrimaryGeneratedColumn('uuid')
     id:number;

    @Column()
    email:string;
    
    @Column()
    name:string;

    @Column()
    password:string;

    @Column()
    type:string
}