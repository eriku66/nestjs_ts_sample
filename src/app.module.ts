import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AppModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/dev.sqlite',
      logging: true,
      entities: ['dist/**/entities/**/*.entity.js'],
      migrations: ['dist/**/migrations/**/*.js'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
