import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MainFoodService } from '../services/main-food.service';
import { MainFood } from '../entities/main-food.entity';
import { CreateMainFoodDto } from '../dto/food/create-main-food.dto';
import { UpdateMainFoodDto } from '../dto/food/update-main-food.dto';

@Controller('organization/:organizationId/main-food')
export class MainFoodController {
  constructor(private readonly mainFoodService: MainFoodService) {}

  // Listar todos os alimentos da organização
  @Get()
  async findAllByOrganizationId(
    @Param('organizationId') organizationId: string,
  ): Promise<MainFood[]> {
    console.log('Organization ID: ', organizationId);
    return this.mainFoodService.findAllByOrganizationId(organizationId);
  }

  // Encontrar um alimento da organização por ID
  @Get('/:id')
  async findById(@Param('id') id: string): Promise<MainFood> {
    const mainFood = await this.mainFoodService.findById(id);
    console.log(mainFood);
    return mainFood;
  }

  // Criar um alimento da organização
  @Post('/create')
  async createMainFood(
    @Param('organizationId') organizationId: string,
    @Body() createMainFoodDto: CreateMainFoodDto,
  ): Promise<MainFood> {
    return this.mainFoodService.createMainFood(
      organizationId,
      createMainFoodDto,
    );
  }

  // Atualizar um alimento da organização
  @Put('/:id')
  async updateMainFood(
    @Param('organizationId') organizationId: string,
    @Param('id') id: string,
    @Body() updateMainFoodDto: UpdateMainFoodDto,
  ): Promise<MainFood> {
    return this.mainFoodService.updateMainFood(
      organizationId,
      id,
      updateMainFoodDto,
    );
  }

  // Deletar um alimento da organização
  @Delete('/:id')
  async deleteMainFood(
    @Param('organizationId') organizationId: string,
    @Param('id') id: string,
  ): Promise<void> {
    return this.mainFoodService.deleteMainFood(organizationId, id);
  }
}
