import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'todo_typeorm',
  port: 3344,
  host: '127.0.0.1',
  username: 'postgres',
  password: 'password',
  entities: ['dist/**/*.entity{ .ts,.js}'],
  synchronize: true,
};

export default config;
