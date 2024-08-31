import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from '../entities/organization.entity';
import { OrganizationController } from '../controllers/organization.controller';
import { OrganizationService } from '../services/organization.service';
import { OrganizationRepository } from '../repository/organization.repository';
import { ReceivedFood } from '../entities/received-food.entity';
import { ReceivedFoodRepository } from '../repository/received-food.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Organization, ReceivedFood])],
  providers: [
    OrganizationService,
    OrganizationRepository,
    ReceivedFoodRepository,
  ],
  controllers: [OrganizationController],
  exports: [
    OrganizationRepository,
    OrganizationService,
    ReceivedFoodRepository,
  ],
})
export class OrganizationModule {}
