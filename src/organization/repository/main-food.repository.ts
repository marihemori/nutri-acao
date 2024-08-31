import { Injectable, NotFoundException } from '@nestjs/common';
import { IMainFoodRepository } from '../interfaces/main-food.repository.interface';
import { MainFood } from '../entities/main-food.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MainFoodRepository implements IMainFoodRepository {
  constructor(
    @InjectRepository(MainFood)
    private readonly mainFoodRepository: Repository<MainFood>,
  ) {}

  // Listar todos os alimentos da organização
  async findAllByOrganizationId(organizationId: string): Promise<MainFood[]> {
    return this.mainFoodRepository.find({
      where: { organization: { id: organizationId } },
      relations: ['organization'],
    });
  }

  // Encontrar um alimento de uma organização por ID
  async findById(id: string): Promise<MainFood | null> {
    const mainFood = this.mainFoodRepository.findOne({
      where: { id },
      relations: ['organization'],
    });

    if (!mainFood) {
      throw new NotFoundException(`Alimento não encontrado!`);
    }

    return mainFood;
  }

  // Criar um alimento da organização
  async createMainFood(mainFood: MainFood): Promise<MainFood> {
    return this.mainFoodRepository.save(mainFood);
  }

  // Atualizar um alimento da organização
  async updateMainFood(
    id: string,
    mainFood: Partial<MainFood>,
  ): Promise<MainFood> {
    await this.mainFoodRepository.update(id, mainFood);
    return this.findById(id);
  }

  // Deletar um alimento da organização
  async deleteMainFood(id: string): Promise<void> {
    const result = await this.mainFoodRepository.delete(id);
    if (result.affected === 0) {
      throw new Error(`Alimento não encontrado!`);
    }
  }
}
