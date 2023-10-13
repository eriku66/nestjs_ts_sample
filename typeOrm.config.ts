import { env } from 'process';
import { DataSource } from 'typeorm';

export default new DataSource ({
    type: 'sqlite',
    database: env.DATABASE_URL,
    entities: ['dist/**/entities/*.entity.js'],
    migrations: ['dist/**/migrations/*.js'],
    logging: true,
});
