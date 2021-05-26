import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createClassesToStudents1622071704627 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"classesToStudents",
            columns:[
                {
                    name:"id",
                    type:"int",
                    isPrimary:true,
                },
                {
                    name:"idClass",
                    type:"int"
                },
                {
                    name:"idUser",
                    type:"int"
                }
            ],
            foreignKeys:[
                {
                    columnNames:["idClass"],
                    referencedColumnNames:["id"],
                    referencedTableName:"classes"
                },
                {
                    columnNames:["idUser"],
                    referencedColumnNames:["id"],
                    referencedTableName:"users"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("classesToStudents")
    }

}
