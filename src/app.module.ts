import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/modules/company.module';
import { AgentCompanyModule } from './company/modules/agent-company.module';
import { OrganizationModule } from './organization/modules/organization.module';
import * as dotenv from 'dotenv';
import { AgentOrganizationModule } from './organization/modules/agent-organization.module';
import { MainFoodModule } from './organization/modules/main-food.module';
import { ConfigModule } from '@nestjs/config';

dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      // url: process.env.DATABASE_URL,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CompanyModule,
    AgentCompanyModule,
    OrganizationModule,
    AgentOrganizationModule,
    MainFoodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
