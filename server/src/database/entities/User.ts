import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'
import { v4 as uuid } from 'uuid';

@Entity("users")
export default class User{
    @PrimaryGeneratedColumn()
    readonly id:string;

    @Column()
    email:string;
    
    @Column()
    name:string;

    @Column()
    password:string;

    @Column()
    profileUrl:string

    @Column()
    created_at:Date
    
    constructor() {;
        if (!this.id) {
          this.id = uuid();
        }
        if(!this.created_at){
            this.created_at = new Date()
        }
      }
}