import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createClassesToStudents1622071704627
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'classes_to_student',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'idClass',
            type: 'integer',
          },
          {
            name: 'idUser',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['idClass'],
            referencedColumnNames: ['id'],
            referencedTableName: 'classes',
          },
          {
            columnNames: ['idUser'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('classesToStudents');
  }
}
