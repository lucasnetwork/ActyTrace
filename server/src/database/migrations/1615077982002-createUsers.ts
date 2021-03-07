import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1615077982002 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"users",
            columns:[
                {
                    name:"id",
                    type:"int",
                    isPrimary:true
                },
                {
                    name:"email",
                    type:"varchar"
                },
                {
                    name:"password",
                    type:"varchar",
                },
                {
                    name:"profileUrl",
                    type:"varchar"
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                  }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
