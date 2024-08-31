import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainFood } from '../entities/main-food.entity';
import { Organization } from '../entities/organization.entity';
import { MainFoodService } from '../services/main-food.service';
import { MainFoodRepository } from '../repository/main-food.repository';
import { MainFoodController } from '../controllers/main-food.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MainFood, Organization])],
  controllers: [MainFoodController],
  providers: [MainFoodService, MainFoodRepository],
  exports: [],
})
export class MainFoodModule {}
