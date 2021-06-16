import { query } from 'express';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createClasses1621900261038 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'classes',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'teacher',
            type: 'integer',
          },
          {
            name: 'subject',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['teacher'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
          },
          {
            columnNames: ['subject'],
            referencedColumnNames: ['id'],
            referencedTableName: 'subjects',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('classes');
  }
}
