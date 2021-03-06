import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProductsImages1616300054266 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'products_images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: 'path',
                    type: 'varchar',
                }, 
                {
                    name: 'product_id',
                    type: 'integer',
                },
            ],
            foreignKeys: [
                {
                    name: 'ImageProduct',
                    columnNames: ['product_id'],
                    referencedTableName: 'category_clothes',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products_images');
    }
}
