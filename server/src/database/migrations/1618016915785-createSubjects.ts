import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createSubjects1618016915785 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"subjects",
            columns:[
                {
                    name:"id",
                    type:"uuid",
                    isPrimary:true,
                },
                {
                    name:"nameUser",
                    type:"varchar",
                },
                {
                    name:"description",
                    type:"varchar"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("subjects")
    }

}
