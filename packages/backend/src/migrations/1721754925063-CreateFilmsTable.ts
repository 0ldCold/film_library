import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFilmsTable1721754925063 implements MigrationInterface {
  name = 'CreateFilmsTable1721754925063';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Films" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_af55714d8132de3e40d655f6821" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Films"`);
  }
}
