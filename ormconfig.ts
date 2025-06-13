import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
    username: process.env.POSTGRES_USER || 'admin',
    password: process.env.POSTGRES_PASSWORD || '',
    database: process.env.POSTGRES_DB || 'schedule',
    synchronize: true,
    // logging: false,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    // subscribers: [],
}