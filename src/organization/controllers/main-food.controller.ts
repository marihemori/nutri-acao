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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Alimentos de maior preferência')
@Controller('organization/:organizationId/main-food')
export class MainFoodController {
  constructor(private readonly mainFoodService: MainFoodService) {}

  @ApiOperation({
    summary: 'Lista todos os alimentos que a organização prefere',
  })
  @ApiResponse({
    status: 200,
    type: MainFood,
    description: 'Lista de alimentos',
  })
  @ApiResponse({ status: 404, description: 'Organização não encontrada!' })
  @Get()
  async findAllByOrganizationId(
    @Param('organizationId') organizationId: string,
  ): Promise<MainFood[]> {
    console.log('Organization ID: ', organizationId);
    return this.mainFoodService.findAllByOrganizationId(organizationId);
  }

  @ApiOperation({
    summary: 'Encontra um alimento preferido da organização por ID',
  })
  @ApiResponse({
    status: 200,
    type: MainFood,
    description: 'Alimento encontrado',
    isArray: false,
  })
  @ApiResponse({ status: 404, description: 'Alimento não encontrado!' })
  // Encontrar um alimento da organização por ID
  @Get('/:id')
  async findById(@Param('id') id: string): Promise<MainFood> {
    const mainFood = await this.mainFoodService.findById(id);
    console.log(mainFood);
    return mainFood;
  }

  @ApiOperation({ summary: 'Cria alimento preferido da organização' })
  @ApiResponse({
    status: 201,
    type: MainFood,
    description: 'Alimento criado',
    isArray: false,
  })
  @ApiResponse({ status: 404, description: 'Organização não encontrada!' })
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

  @ApiOperation({ summary: 'Atualiza alimento preferido da organização' })
  @ApiResponse({
    status: 200,
    type: MainFood,
    description: 'Alimento atualizado',
    isArray: false,
  })
  @ApiResponse({ status: 404, description: 'Alimento não encontrado!' })
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

  @ApiOperation({ summary: 'Deleta alimento preferido da organização' })
  @ApiResponse({
    status: 200,
    type: MainFood,
    description: 'Alimento deletado',
    isArray: false,
  })
  @ApiResponse({ status: 404, description: 'Alimento não encontrado!' })
  // Deletar um alimento da organização
  @Delete('/:id')
  async deleteMainFood(
    @Param('organizationId') organizationId: string,
    @Param('id') id: string,
  ): Promise<void> {
    return this.mainFoodService.deleteMainFood(organizationId, id);
  }
}
