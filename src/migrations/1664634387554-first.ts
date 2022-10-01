import {MigrationInterface, QueryRunner} from "typeorm";

export class first1664634387554 implements MigrationInterface {
    name = 'first1664634387554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tag\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`blog\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NULL, \`content\` longtext NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`categoryId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`blog_tags_tag\` (\`blogId\` int NOT NULL, \`tagId\` int NOT NULL, INDEX \`IDX_9572d27777384d535f77ed780d\` (\`blogId\`), INDEX \`IDX_066934a149d9efba507443ce88\` (\`tagId\`), PRIMARY KEY (\`blogId\`, \`tagId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`blog\` ADD CONSTRAINT \`FK_2585c11fedee21900a332b554a6\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`blog_tags_tag\` ADD CONSTRAINT \`FK_9572d27777384d535f77ed780d0\` FOREIGN KEY (\`blogId\`) REFERENCES \`blog\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`blog_tags_tag\` ADD CONSTRAINT \`FK_066934a149d9efba507443ce889\` FOREIGN KEY (\`tagId\`) REFERENCES \`tag\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`blog_tags_tag\` DROP FOREIGN KEY \`FK_066934a149d9efba507443ce889\``);
        await queryRunner.query(`ALTER TABLE \`blog_tags_tag\` DROP FOREIGN KEY \`FK_9572d27777384d535f77ed780d0\``);
        await queryRunner.query(`ALTER TABLE \`blog\` DROP FOREIGN KEY \`FK_2585c11fedee21900a332b554a6\``);
        await queryRunner.query(`DROP INDEX \`IDX_066934a149d9efba507443ce88\` ON \`blog_tags_tag\``);
        await queryRunner.query(`DROP INDEX \`IDX_9572d27777384d535f77ed780d\` ON \`blog_tags_tag\``);
        await queryRunner.query(`DROP TABLE \`blog_tags_tag\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`blog\``);
        await queryRunner.query(`DROP TABLE \`tag\``);
        await queryRunner.query(`DROP TABLE \`category\``);
    }

}
