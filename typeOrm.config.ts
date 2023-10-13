import { DataSource } from 'typeorm';

export default new DataSource ({
    type: 'sqlite',
    database: 'data/dev.sqlite',
    entities: ['dist/**/entities/*.entity.js'],
    migrations: ['dist/**/migrations/*.js'],
    logging: true,
});
