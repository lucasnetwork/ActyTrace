import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export default class Rating{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    firstNote:number;

    @Column()
    secondNote:number;

    @Column()
    thirdNote:number;

    @Column()
    finalNote:number
    
    @Column()
    status:string;


}