import { DataSource } from "typeorm"

// TODO: should be changed to process.env

// export const connectionSource = new DataSource({
//   type: 'postgres',
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   username: process.env.DB_USER_NAME,
//   password: process.env.DB_USER_PASSWORD,
//   database: process.env.DB_NAME,
//   synchronize: true,
//   logging: true,
//   entities: ['dist/apps/backend/api/src/**/*.entity.js'],
//   migrations: ['dist/apps/backend/api/src/migrations/*.js'],
//   subscribers: ['src/subscriber/**/*{.ts,.js}'],
// });

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'COMPANY_DB',
  synchronize: true,
  logging: true,
  entities: ['dist/apps/backend/api/src/**/*.entity.js'],
  migrations: ['dist/apps/backend/api/src/migrations/*.js'],
});
