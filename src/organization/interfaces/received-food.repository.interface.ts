import { ReceivedFood } from '../entities/received-food.entity';

export interface IReceivedFoodRepository {
  findAll(): Promise<ReceivedFood[]>;
  findOneById(id: string): Promise<ReceivedFood>;
  createReceivedFood(receivedFood: ReceivedFood): Promise<ReceivedFood>;
  updateReceivedFood(
    id: string,
    receivedFood: Partial<ReceivedFood>,
  ): Promise<ReceivedFood>;
  deleteReceivedFood(id: string): Promise<void>;
}
