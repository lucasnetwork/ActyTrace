import { Entity, JoinColumn, ManyToMany, PrimaryColumn, } from "typeorm";
import Class from "./Class";
import User from "./User";

@Entity("classes_to_student")

export default class ClassToStudent{
    @PrimaryColumn()
    id:number;
    @ManyToMany(() => Class,Class => Class.id,{primary:true,})
    idClass:number;

    @ManyToMany(() => User, user => user.id,{primary:true})
    @JoinColumn()
    idUser:User;
}