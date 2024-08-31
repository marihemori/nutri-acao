import { Injectable } from '@nestjs/common';
import { IReceivedFoodRepository } from '../interfaces/received-food.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ReceivedFood } from '../entities/received-food.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReceivedFoodRepository implements IReceivedFoodRepository {
  constructor(
    @InjectRepository(ReceivedFood)
    private readonly receivedFoodRepository: Repository<ReceivedFood>,
  ) {}

  // Encontrar todos os alimentos recebidos
  async findAll(): Promise<ReceivedFood[]> {
    return this.receivedFoodRepository.find();
  }

  // Encontrar um alimento recebido por ID
  async findOneById(id: string): Promise<ReceivedFood> {
    return this.receivedFoodRepository.findOneBy({ id });
  }

  // Criar um alimento recebido
  async createReceivedFood(receivedFood: ReceivedFood): Promise<ReceivedFood> {
    return this.receivedFoodRepository.save(receivedFood);
  }

  // Atualizar um alimento recebido
  async updateReceivedFood(
    id: string,
    receivedFood: Partial<ReceivedFood>,
  ): Promise<ReceivedFood | null> {
    await this.receivedFoodRepository.update(id, receivedFood);
    return this.findOneById(id);
  }

  // Deletar um alimento recebido
  async deleteReceivedFood(id: string): Promise<void> {
    await this.receivedFoodRepository.delete(id);
  }
}
