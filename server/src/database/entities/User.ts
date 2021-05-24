import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'
import { v4 as uuid } from 'uuid';

@Entity("users")
export default class User{
    @PrimaryGeneratedColumn()
     id:string;

    @Column()
    email:string;
    
    @Column()
    name:string;

    @Column()
    password:string;
}