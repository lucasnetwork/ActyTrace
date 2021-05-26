import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createClasses1621900261038 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"classes",
            columns:[{
                name:"id",
                type:"int",
                isPrimary:true,
                generationStrategy:"increment"
            },{
                name:"name",
                type:"varchar",
            },{
                name:"idTeacher",
                type:"int",
            },{
                name:"idSubject",
                type:"int"
                
            }],
            foreignKeys:[
                {
                    columnNames:["idTeacher"],
                    referencedColumnNames:["id"],
                    referencedTableName:"users",
                },
                {
                    columnNames:["idSubject"],
                    referencedColumnNames:["id"],
                    referencedTableName:"subjects",
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("classes")
    }


}
