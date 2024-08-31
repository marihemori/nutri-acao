import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/modules/company.module';
import { AgentCompanyModule } from './company/modules/agent-company.module';
import { OrganizationModule } from './organization/modules/organization.module';
import * as dotenv from 'dotenv';
import { AgentOrganizationModule } from './organization/modules/agent-organization.module';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
