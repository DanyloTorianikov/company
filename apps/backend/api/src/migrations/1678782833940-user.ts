import { MigrationInterface, QueryRunner } from "typeorm"

// add init user
// username: admin
// email: admin@company.com
// password: root

export class user1678782833940 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
        INSERT INTO users (username, email, password)
        VAlUES ('admin', 'admin@company.com', '$2a$10$Fcb.49GBjbpaUIDdlsMmNeGDNQ7SpNehcRFZ20uJtiQ4awovi19/e')
        `)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
        DELETE FROM users WHERE username = 'admin'
        `)
	}
}
