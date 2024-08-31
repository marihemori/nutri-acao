import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MainFood } from '../entities/main-food.entity';
import { Organization } from '../entities/organization.entity';
import { Repository } from 'typeorm';
import { CreateMainFoodDto } from '../dto/food/create-main-food.dto';
import { UpdateMainFoodDto } from '../dto/food/update-main-food.dto';

@Injectable()
export class MainFoodService {
  constructor(
    @InjectRepository(MainFood)
    private readonly mainFoodRepository: Repository<MainFood>,
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
  ) {}

  // Listar todos os alimentos da organização
  async findAllByOrganizationId(organizationId: string): Promise<MainFood[]> {
    return this.mainFoodRepository.find({
      where: { organization: { id: organizationId } },
      relations: ['organization'],
    });
  }

  // Encontrar um alimento da organização por ID
  async findById(id: string): Promise<MainFood | null> {
    const mainFood = this.mainFoodRepository.findOne({
      where: { id },
      relations: ['organization'],
    });

    if (!mainFood) {
      throw new Error(`Alimento não encontrado!`);
    }

    return mainFood;
  }

  // Criar um alimento da organização
  async createMainFood(
    organizationId: string,
    createMainFoodDto: CreateMainFoodDto,
  ): Promise<MainFood> {
    const organization = await this.organizationRepository.findOne({
      where: { id: organizationId },
      relations: ['mainFoods'],
    });

    if (!organization) {
      throw new NotFoundException(`Organização não encontrada!`);
    }

    const mainFood = new MainFood();
    mainFood.name = createMainFoodDto.name;
    mainFood.type = createMainFoodDto.type;
    mainFood.organization = organization;

    return this.mainFoodRepository.save(mainFood);
  }

  // Atualizar um alimento da organização
  async updateMainFood(
    organizationId: string,
    id: string,
    updateMainFoodDto: UpdateMainFoodDto,
  ): Promise<MainFood> {
    const organization = await this.organizationRepository.findOne({
      where: { id: organizationId },
      relations: ['mainFoods'],
    });

    if (!organization) {
      throw new NotFoundException(`Organização não encontrada!`);
    }

    const mainFood = await this.mainFoodRepository.findOne({
      where: { id },
      relations: ['organization'],
    });

    if (!mainFood) {
      throw new NotFoundException(`Alimento não encontrado!`);
    }

    mainFood.name = updateMainFoodDto.name;

    return this.mainFoodRepository.save(mainFood);
  }

  // Deletar um alimento da organização
  async deleteMainFood(organizationId: string, id: string): Promise<void> {
    const organization = await this.organizationRepository.findOne({
      where: { id: organizationId },
      relations: ['mainFoods'],
    });

    if (!organization) {
      throw new NotFoundException(`Organização não encontrada!`);
    }

    const mainFood = await this.mainFoodRepository.findOne({
      where: { id },
      relations: ['organization'],
    });

    if (!mainFood) {
      throw new NotFoundException(`Alimento não encontrado!`);
    }

    organization.mainFoods = organization.mainFoods.filter(
      (mainFood) => mainFood.id !== id,
    );

    await this.organizationRepository.save(organization);
  }
}
