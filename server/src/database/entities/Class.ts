import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Subject from "./Subject";
import User from "./User";

@Entity("classes")

export default class Class{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name:string;

    @OneToOne(() => User, user => user.id)
    @JoinColumn()
    idTeacher:User;
    
    @OneToOne(() => Subject,subject => subject.id)
    @JoinColumn()
    idSubject:Subject
}